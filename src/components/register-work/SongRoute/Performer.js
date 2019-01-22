import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from "material-ui/svg-icons/content/add";
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import details from './details'; 

class PerformerListItem extends React.Component {
  state = {
    name: "",
    instrument: 'What was your role in this song?', 
    share: 0
  }
  handleChangeInstrument = instrument => event => {
    this.setState ({
      [instrument]: event.target.value
    })
  }; 
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  
  render (){
  
    return (
      <Paper className="performerCard">
        <TextField
        hintText="Insert name of performer"
        floatingLabelText="insert name of perfomer"
        onChange={this.handleChange("name")}
        />
        <select>
          <option value="">Insert your role</option>
          <option value="arranger">Arranger</option>
          <option value="lyricist">Lyricist</option>
          <option value="fiets">Composer</option>
          <option value="fiets">Instrumentalist</option>
        </select>
        <TextField 
          hintText="insert your share in percentages"
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

export default PerformerListItem;