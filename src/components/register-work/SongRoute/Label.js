import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "material-ui/svg-icons/content/add";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import Details from "./details";
import Button from "@material-ui/core/Button";

class Labelitem extends React.Component {
  render() {
    const {
      values,
      handleChange,
      handleClickOpen,
      handleClose,
      handlePerformerAdd,
      prevStep,
      nextStep,
      handleCreatePerformer,
      performerName,
      handleChangePush,
      handleConfirmCreator,
      handleNameChange
    } = this.props;

    // console.log(this.props);
    let valueProps = this.props.values.performerArray;
    console.log("props values", valueProps);
    return (
      <div className="Paper">
        <TextField
          onChange={handleChangePush(this.props.index, "name")}
          floatingLabelText="name of PRO"
          value={this.props.values.name}
        />
        <select>
          <option value="">Insert your role</option>
          <option value="arranger">Publisher</option>
          <option value="lyricist">Label</option>
          <option value="fiets">Distributeur</option>
        </select>
        <TextField
          hintText="insert your share in percentages"
          floatingLabelText="share of rights"
          type="number"
        />
      </div>
    );
  }
}

export default Labelitem;
