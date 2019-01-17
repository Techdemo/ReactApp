import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'; 
import Topbar from './components/Topbar/Topbar'; 
import Content from './components/Content/content';
import Background from './assets/backgroundImage.png'; 
import { CCSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  render() {

    const background = {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom'
    }; 

    return (
        <div 
          className="App"
          style={background}>
          <Topbar 
            className="TopBar" />
          <div 
            className="BodyContent">
          <Navbar 
            className="NavBar"
            />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
