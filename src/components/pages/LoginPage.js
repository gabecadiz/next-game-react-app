import React, { Component } from 'react';

class LoginPage extends Component {
  state={
    password:"",
    username:""
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/login',{
      mode: 'cors', 
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers:{
        'Content-Type': 'application/json'
      }

    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
        <p>Enter your username test:</p>
        <input type="username" onChange={this.changeUsername} value={this.state.username} name="username" ref="username" className="form-control" />
      </label>
      <br></br>
      <label>
        <p>Enter your password:</p>
        <input type="password" onChange={this.changePassword} value={this.state.password} name="password" ref="password" className="form-control" />
      </label>
      <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    )
  }
}

export default LoginPage