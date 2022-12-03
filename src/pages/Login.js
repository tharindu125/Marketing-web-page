import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import './Signup.css';



export default class Signin extends Component {

  constructor(props){
    super(props)

    
    this.onChangeEmailAd = this.onChangeEmailAd.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onUserSubmit = this.onUserSubmit.bind(this);

    this.state = {
      emailAd : '',
    }
  }

  onChangeEmailAd(e){
    this.setState({emailAd : e.target.value})
  }

  onChangePassword(e){
    this.setState({password: e.target.value})
  }


  onUserSubmit(e){
    e.preventDefault();

    const RegisterObject = {
      email : this.state.emailAd,
      password : this.state.password,
    };
    
    console.log(RegisterObject);
    axios
      .post('http://localhost:4000/register/signin', RegisterObject)
      .then(res => console.log(res.data));
      

    this.setState({emailAd:'',password:''});
  }

  render() {
    return (
      <div>
        
            <div className="Auth-form-container">
                <div className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign-Up</h3>
                </div>
                <div className="text-center">
                Not registered yet?{" "}
                <a href="/Signup">Sign-Up</a>
                
                </div>
                
                <Form className="form-group-mt">

                  <Form.Group className='formSign' controlId='emailAd' >
                    <Form.Label>Email Address :</Form.Label>
                    <Form.Control type = "email" placeholder='e-mail' value={this.state.emailAd} onChange={this.onChangeEmailAd}/>
                  </Form.Group>

                  <Form.Group className='formSign' controlId='password' >
                    <Form.Label>password :</Form.Label>
                    <Form.Control  type = "password" placeholder='Password' value={this.state.password} onChange={this.onChangePassword}/>
                  </Form.Group>

              

                  <div className="btn">
                      
                          <Button type="submit" block="block" onClick={this.onUserSubmit}>
                          Sign-Up
                          </Button>
                      
                  </div>                  
               </Form>
            </div>
          </div>
        </div>

    )
  }
}

