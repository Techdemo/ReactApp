import React, { Component } from "react";
import Choice from "./SongRoute/Choice";
import Details from "./SongRoute/details";
import PerformerListItem from "./SongRoute/Performer";

export class Register extends Component {
  state = {
    step: 1,
    Type: "",
    Title: "",
    Description: "",
    open: false,
    performerArray: [],
    performerName: []
    // Met index kun je ook met elkaar linken.
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Proceed to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // open Fab icon dialog
  handleClickOpen = () => {
    const { open } = this.state;
    this.setState({ open: true });
  };

  // closes fab dialog
  handleClose = () => {
    this.setState({ open: false });
  };

  //students = [student:{name: "marcel"}, student:{name:"Laurens"}]
  handleCreatePerformer = () => {
    //--- herschrijven als een loop, dus per card ----//
    const performerItem = {
      name: "",
      role: "",
      share: 0
    };
    // onderstaande regel verwijderen
    const performers = this.state.performerArray;

    performers.push(performerItem);
    //---- eind loopje ---- //

    // performerarray vervangen door de state array whatever dat mag heten
    // performers.concat(performers);
    this.setState({ open: false });
  };

  handleChangePush = input => e => {
    let perfArr = { ...this.state.performerArray };
    console.log(perfArr);
    this.setState({ [input]: e.target.value });
    // perfArr.name = input;
    // this.setState({ name: [input] });
    // console.log(...perfArr);
    // const performer = this.state.performerArray.performerItem.name;
    // performer.push({ [input]: e.target.value });
    // array.find op index. Zodat je weet welke performerItem er wordt aangepast.
  };

  // handleChangePush = input => e => {
  //   let perfArr = {...this.state.performerArray};
  //
  //
  //   this.setState({
  //     [e.target.name]: { ...perfArr, name: { [input]: e.target.name } }
  //   });
  // };

  render() {
    const { step } = this.state;
    const {
      Type,
      Title,
      Description,
      open,
      performerArray,
      performerName,
      performerItem
    } = this.state;
    const values = {
      Type,
      Title,
      Description,
      open,
      performerArray,
      performerName,
      performerItem
    };

    switch (step) {
      case 1:
        return (
          <Choice
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Details
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            handleClickOpen={this.handleClickOpen}
            handleClose={this.handleClose}
            handleCreatePerformer={this.handleCreatePerformer}
            handleChangePush={this.handleChangePush}
          />
        );
      case 3:
        return <h1>Case 3</h1>;
      case 4:
        return <h1>Details</h1>;
      case 5:
        return <h1>Confirm</h1>;
    }
  }
}

export default Register;
