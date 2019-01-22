import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class Details extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };    

  render() {
    const { values, handleChange } = this.props;
    return (
      <h2>Hallo</h2>
    );
  }
}

export default Details;
