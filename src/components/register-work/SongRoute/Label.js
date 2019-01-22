import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class labelListItem extends React.Component {
  state = {

  }
  render (){
    return (
      <Paper className="performerCard">
      <TextField
      hintText="Insert name of Label"
      floatingLabelText="insert name of Label"
      />
  <select>
    <option value="">Base of Country</option>
    <option value="Holland">Holland</option>
    <option value="Germany">Germany</option>
    <option value="UnitedKingdom">United Kingdom</option>
    <option value="France">France</option>
  </select>
    <TextField 
    hintText="insert share in percentages"
    floatingLabelText="in what percentage do you share the composition"
    type="number"
    />
        <IconButton aria-label="delete"> 
        <DeleteIcon />
      </IconButton>
    </Paper>
    )
  }
}

export default labelListItem;