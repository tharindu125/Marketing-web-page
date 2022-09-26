import React, { Component } from 'react';
import './Home.css';
import bgimg from '../images/imd.jpg';

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className='reg'>
            <div className='col-1'>
                <h3>NAWA Advertising & Marketing</h3>
                <h1>Join With Us</h1>
                <h2>Experience our<br/> services</h2>
                <p>Join us today to get a different convenient service,<br/> first month completely free.</p>

            </div>

            <div className='col-2'>
              <img src={bgimg} alt=""/>   
            </div>
        </div>
    </section>
    );
  }
}
