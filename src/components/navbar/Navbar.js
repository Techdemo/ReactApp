import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom'; 
import './Navbar.css'; 
import logo from '../../assets/Group.png';
import avatar from '../../assets/Oval.png';  


let navbar = () => {
    return (
        
        <div className="navbar">
         <img className="logo" src={logo} alt="logo"></img>
         <img className="avatar" src={avatar} alt="logo"></img>
         <h2>Paul Mccartney</h2>
            <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/register-work">Register Work</Link></li>
                  <li><Link to="/check-revenue">Check Revenue</Link></li>
                  <li><Link to="/my-songs">My Songs</Link></li>
              </ul>
            </nav>
            </div>
    )
}

export default navbar