import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Fab from "material-ui/FloatingActionButton";
import AddIcon from "material-ui/svg-icons/content/add";
import Dialog from "material-ui/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import PerformerListItem from './Performer'
import LabelListItem from './Label'; 
import RaisedButton from "material-ui/RaisedButton";



export class Details extends Component {
  state = {
    open: false,
    PerformerArray: [],
    LabelArray: []
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // Handle dialog open
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleCreatePerformer = () => {
    const performer = this.state.PerformerArray;
    performer.push(<PerformerListItem handleChange={this.handleChange} />);
    this.setState({ PerformerArray: performer, open: false });
  };

  handleCreateLabel = () => {
    const label = this.state.LabelArray;
    label.push(<LabelListItem />);
    this.setState({ LabelArray: label, open: false });
  };

  render() {
    const {
      values,
      handleChange,
      handleClickOpen,
      handleClickClose,
      handlePerformerAdd
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h2>Performers</h2>
          <p>here you can add performers</p>
          {this.state.PerformerArray.map((performer, index) => {
            return <PerformerListItem key={index}>{performer}</PerformerListItem>;
          })}
          <h2>Labels and Publishers</h2>
          {this.state.LabelArray.map((label, index) => {
            return <LabelListItem key={index}>{label}</LabelListItem>;
          })}
          <Fab className="Fab" onClick={this.handleClickOpen}>   
            <AddIcon />
          </Fab>
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle>{"What would you like to add?"} </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You can choose between adding a performer, a record label or a
                publisher.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleCreatePerformer.bind(this)}
                color="primary"
              >
                Performer
              </Button>
              <Button onClick={this.handleCreateLabel} color="primary">
                Record label
              </Button>
              <Button onClick={this.handleClose} color="primary">
                publisher
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
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

export default Details;
