import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Fab from "material-ui/FloatingActionButton";
import AddIcon from "material-ui/svg-icons/content/add";
import Dialog from "material-ui/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import TextField from "material-ui/TextField";
import PerformerListItem from "./Performer";

export class Details extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

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
      handleChangePush,
      handleConfirmCreator,
      handleNameChange
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h2>Performers</h2>
          <p>
            add a performer or a label to: <b>{values.Title}</b>, with the
            description: <b>{values.Description}</b>
          </p>
          <Fab
            className="Fab"
            defaultValue={values.open}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Fab>
          <Dialog open={values.open}>
            <DialogTitle>{"What would you like to add?"} </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You can choose between adding a performer, a record label or a
                publisher.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleCreatePerformer}>
                Performer
              </Button>
              <Button color="primary">Record label</Button>
              <Button color="primary">publisher</Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>

          {values.performerArray.map((performerArray, index) => {
            return (
              <PerformerListItem
                key={index}
                index={index}
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={values}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                handleCreatePerformer={handleCreatePerformer}
                handleChangePush={handleChangePush}
                handleNameChange={handleNameChange}
              />
            );
          })}
          <RaisedButton
            label="Next Step"
            primary={true}
            // onClick={handleConfirmCreator}
            style={styles.button}
            onClick={nextStep}
          />
          <RaisedButton
            label="previous"
            primary={true}
            style={styles.button}
            onClick={prevStep}
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

export default Details;
