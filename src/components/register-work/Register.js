import React, { Component } from "react";
import Choice from "./SongRoute/Choice";
import Details from "./SongRoute/details";
import PerformerListItem from "./SongRoute/Performer";
import Revenue from "../check-revenue/revenue";

export class Register extends Component {
  state = {
    step: 1,
    Type: "",
    Title: "",
    Description: "",
    open: false,
    performerArray: [],
    performerName: [],
    labelArray: []
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
  handleCreatePerformer = () => {
    const performerItem = {
      name: "",
      role: "",
      share: 0
    };
    const performers = this.state.performerArray;
    performers.push(performerItem);
    this.setState({ open: false });
  };

  handleCreateLabel = () => {
    const labelItem = {
      name: "",
      role: "",
      share: 0
    };
    const labels = this.state.labelArray;
    labels.push(labelItem);
    this.setState({ open: false });
  };

  handleChangePush = (index, target, value, input) => e => {
    let perfArr = this.state.performerArray;
    let artist = this.state.performerArray[index];
    console.log("value", value);
    console.log("e", e);
    console.log("target", target);
    console.log("artist", artist);

    // let artistname = artist[index][value];
    // console.log(artistname);

    // console.log("this.state.performerArray", this.state.performerArray);

    // this.state.performerArray[index][value] = "Gijs";

    // this.setState({ [index]: index, [value]: artist, [input]: e.target.value });
    // this.setState({
    //
    // })
    // handleChange = input => e => {
    //   this.setState({ [input]: e.target.value });
    // };
    // this.setState({
    //   [input]: this.state.performerArray[value]
    // });
    this.setState({ name: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      Type,
      Title,
      Description,
      open,
      performerArray,
      performerName,
      performerItem,
      labelArray
    } = this.state;
    const values = {
      Type,
      Title,
      Description,
      open,
      performerArray,
      performerName,
      performerItem,
      labelArray
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
            handleConfirmCreator={this.handleConfirmCreator}
            handleCreateLabel={this.handleCreateLabel}
          />
        );
      case 3:
        return <Revenue />;
      case 4:
        return <h1>Details</h1>;
      case 5:
        return <h1>Confirm</h1>;
    }
  }
}

export default Register;
