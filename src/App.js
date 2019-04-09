import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/layout/Header";
import MyGames from "./components/pages/MyGamesPage";
import PreferencesPage from "./components/pages/PreferencesPage"
import NextGamePage from "./components/pages/NextGamePage"
import SignUpPage from "./components/pages/SignUpPage"
import LoginPage from "./components/pages/LoginPage"
import LandingPage from "./components/pages/LandingPage"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faKey, faEnvelope, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faUser, faKey, faEnvelope, faCheckCircle, faTimesCircle);



class App extends Component {
  state = {
    loggedIn: false,
    sports: null,
    currentLocation: { lat: null, lng: null },
    userId: null
  }

  handleLoginStatus = (idNum) => {
    this.setState({
      loggedIn: true,
      userId: idNum
    })
  }

  handleLogoutStatus = () => {
    this.setState({
      loggedIn: false,
      userId: null
    })
  }

addPreferences = (preferences) => {
  this.setState({
    sports: preferences.sports,
    currentLocation: preferences.currentLocation,
    selectedDays: preferences.selectedDays,
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
                render={(props) => (<LoginPage {...props} handleLoginStatus={this.handleLoginStatus} />)}
          />
          <Route path ="/preferences" 
                 render={(props) => (this.state.loggedIn ? (<PreferencesPage {...props} addPreferences={this.addPreferences} userId={this.state.userId}/>) : (<Redirect to='/' />))}/>
          <Route path="/mygames" 
                 render={(props) => (this.state.loggedIn ? (<MyGames {...props}  userId={this.state.userId}/>) : (<Redirect to='/' />))}
          />
          <Route path="/nextgames"
                 render={(props) => (this.state.loggedIn ? (<NextGamePage {...props} locationsData={this.state.locationsData} userId={this.state.userId}
          />) : (<Redirect to='/' />))}
          />
        </div>
      </Router>
    );
  }
}

export default App;
