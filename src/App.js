import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/layout/Header";
import MyGames from "./components/pages/MyGamesPage";
import PreferencesPage from "./components/pages/PreferencesPage"
import NextGamePage from "./components/pages/NextGamePage"
import SignUpPage from "./components/pages/SignUpPage"
import LoginPage from "./components/pages/LoginPage"
import LandingPage from "./components/pages/LandingPage"

import './App.css';


class App extends Component {
  state = {
    loggedIn: false,
    sports: null,
    currentLocation: { lat: 43.64434, lng: -79.401984 }
  }


handleLoginStatus = () => {
  this.setState({
    loggedIn: true
  })
}
handleLogoutStatus = () => {
  this.setState({
    loggedIn: false
  })
}

addPreferences = (preferences) => {
  this.setState({
    sports: preferences.sports,
    startDate: preferences.startDate,
    endDate: preferences.endDate,
    currentLocation: preferences.currentLocation,
  })
}
  render() {
    return (
     <Router>
        <div className="App">
          <Header handleLogoutStatus={this.handleLogoutStatus} loginStatus={this.state.loggedIn}/>
          <Route exact path = "/" render={props => (
            <LandingPage/>
          )} />
          <Route path="/signup" 
                render={(props) => (<SignUpPage {...props} handleLoginStatus={this.handleLoginStatus}/>)}
          />
          <Route path="/login" 
                render={(props) => (<LoginPage {...props} handleLoginStatus={this.handleLoginStatus}/>)}
          />
          <Route path ="/preferences" 
                 render={(props) => (this.state.loggedIn ? (<PreferencesPage {...props} addPreferences={this.addPreferences}/>) : (<Redirect to='/' />))}/>
          <Route path="/mygames" 
                 render={(props) => (this.state.loggedIn ? (<MyGames {...props} locationsData={this.state.locationsData}/>) : (<Redirect to='/' />))}
          />
          <Route path="/nextgames"
                 render={(props) => (this.state.loggedIn ? (<NextGamePage {...props} locationsData={this.state.locationsData}
          />) : (<Redirect to='/' />))}
          />
        </div>
      </Router>
    );
  }
}

export default App;
