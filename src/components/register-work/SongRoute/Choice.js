import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class Choice extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h2>Are you registering a new song or composition?</h2>
          <TextField
            hintText="Song or Composition"
            floatingLabelText="Song or composition"
            onChange={handleChange("Type")}
            defaultValue={values.Type}
          />
          <br />
          <TextField
            hintText="Title of work"
            floatingLabelText="Title of work"
            onChange={handleChange("Title")}
            defaultValue={values.Title}
          />
          <br />
          <TextField
            hintText="Description of work"
            floatingLabelText="Description of work"
            onChange={handleChange("Description")}
            defaultValue={values.Description}
          />
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Choice;
