import React, { Component } from "react";
import Choice from "./SongRoute/Choice";
import Details from "./SongRoute/details";

export class Register extends Component {
  state = {
    step: 1,
    Type: "",
    Title: "",
    Description: ""
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

  render() {
    const { step } = this.state;
    const { Type, Title, Description } = this.state;
    const values = { Type, Title, Description };

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
            handleChange={this.handleChange}
            values={values}
            open={this.open}
          />
        );
      case 3:
        return <h1>Description</h1>;
      case 4:
        return <h1>Details</h1>;
      case 5:
        return <h1>Confirm</h1>;
    }
  }
}

export default Register;
