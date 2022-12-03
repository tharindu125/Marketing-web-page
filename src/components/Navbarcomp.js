import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import './Navbarcomp.css';
import { Route, 
  Routes, 
  BrowserRouter as Router, 
  Link 
} from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from "../pages/Login";


export default class Navbarcomp extends Component {
  render() {
    return (
    
      <div>
        <Router>
        <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand href="/">NAWA Advertising & Marketing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">          
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/Login"}>Log-In</Nav.Link>
              <Nav.Link href='./SignUp'>Sign-Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SignUp' element={<Signup/>}/>
            <Route path='/Login' element={<Login/>}/>
          </Routes>
        </div>
        </Router>
      </div>

    );
  }
}
