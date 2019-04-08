import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom"
import '../styles/Header.css'

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
    
        <header className='header-container header-style'>
         
         
          { this.props.loginStatus ?  <img className='next-game-logo' src='https://i.imgur.com/7gwnVAA.png' alt='next-game-logo'/> : <span></span> }
        
          { this.props.loginStatus ? 
          (  
            <div className='nav-container'>      
              <NavLink className='linkStyle' activeClassName='nav-link-active' to="/preferences">Preferences</NavLink> 
              <NavLink className='linkStyle' activeClassName='nav-link-active' to="/nextgames"> Next Games </NavLink> 
              <NavLink className='linkStyle' activeClassName='nav-link-active' to="/mygames"> My Games </NavLink> 
              <button type="button" onClick ={this.handleLogout}className="btn btn-danger logout-btn">Logout!</button>
            </div>
          ) 
            : 
          (        
          <div className='nav-container'>
            <NavLink className='linkStyle' activeClassName='nav-link-active' to="/signup"> Sign Up</NavLink> 
            <NavLink className='linkStyle' activeClassName='nav-link-active' to="/login"> Log In </NavLink>
          </div>
          )}

        </header>
    )
  }
}





export default withRouter(Header);