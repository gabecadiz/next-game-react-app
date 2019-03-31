import React, { Component } from 'react';

class LoginPage extends Component {
  state={
    password:"",
    email:""
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
        <p>Enter your email:</p>
        <input type="email" onChange={this.changeEmail} value={this.state.email} name="email" ref="email" className="form-control" />
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