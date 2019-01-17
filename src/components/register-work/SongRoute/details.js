import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Fab from 'material-ui/FloatingActionButton'
import AddIcon from 'material-ui/svg-icons/content/add';

export class Details extends Component {
    continue = e => {
       e.preventDefault(); 
       this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props; 
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <h2>Performers</h2>
                <p>here you can add performers</p>
                <Fab>
                <AddIcon />
                </Fab>
            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}


export default Details