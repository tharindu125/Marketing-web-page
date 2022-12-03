import React, { Component } from 'react';
import './Home.css';
import bgimg from '../images/imd.jpg';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';




export default class Home extends Component {
  
  render() {
    return (
      
        <div className='reg'>
            <div className='col1'>

                <span>NAWA Advertising & Marketing</span>
                <marquee direction="right" behavior="alternate">Join With Us</marquee>

                
                <h2>Experience our services</h2>
                <p>Join us today to get a different convenient service,<br/>first month completely free.</p>
                
                <button>
                  <a href='./Login'>Login</a>
                </button>
                
                
            </div>

            <div className='col-2'>
              <img src={bgimg} alt=""/>   
            </div>
        </div>
    
    );
  }
}
