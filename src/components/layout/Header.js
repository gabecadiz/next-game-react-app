import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom"

class Header extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/logout',{
      mode: 'cors', 
      credentials: 'include',
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then( () => {
      this.props.handleLogoutStatus()
      this.props.history.push('/');
    })
  }

  render(){
    return (
      <header style={headerStyle}>
        <h1 style={headerText}>Next Game</h1>
        { this.props.loginStatus ? 
        (  
          <div>      
            <button type="button" onClick ={this.handleLogout}className="btn btn-danger">Logout!</button>
            <NavLink className='linkStyle' activeClassName='nav-link-active' to="/preferences">Preferences</NavLink> | 
            <NavLink className='linkStyle' activeClassName='nav-link-active' to="/nextgames"> Next Games </NavLink> |
            <NavLink className='linkStyle' activeClassName='nav-link-active' to="/mygames"> MyGames </NavLink> 
          </div>
        ) 
          : 
        (        
        <div>
          <NavLink className='linkStyle' activeClassName='nav-link-active' to="/signup"> Sign Up</NavLink> |
          <NavLink className='linkStyle' activeClassName='nav-link-active' to="/login"> Log In </NavLink>
        </div>
        )}

      </header>
    )
  }
}

const headerStyle ={
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '0.8rem',
  border: "2px solid #222",
  overflow: "hidden"
}

const headerText = {
  margin: "0 0 1rem 0"
}



export default withRouter(Header);