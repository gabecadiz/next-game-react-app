import React, { Component } from 'react';
import '../styles/LoginPage.css';

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
    .then(r => {
      if(r.status === 200){
        r.json().then( data => {
          this.props.handleLoginStatus(data.id)
          this.props.history.push("/nextgames");
        })
      } else{
        alert("Invalid Login")
        this.props.history.push("/login")
      }
    })
  }

  render(){
    return(
      <div className="login-window">
        <div className="login-container">
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <label className='login-input-label'>
                <p>Enter your username test:</p>
                <input type="username" onChange={this.changeUsername} value={this.state.username} name="username" ref="username" className="form-control" />
              </label>
              <br></br>
              <label className='login-input-label'>
                <p>Enter your password:</p>
                <input type="password" onChange={this.changePassword} value={this.state.password} name="password" ref="password" className="form-control" />
              </label>
              <div className="login-submit">
                <button type="submit" className="btn btn-primary btn-login">Log In</button>
              </div>
            </form>
          </div>
          <div className="login-image">
            <img src="https://images.unsplash.com/photo-1519684093736-61f49e250672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage