import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile"
import NextGamePage from "./components/pages/NextGamePage"


import './App.css';

class App extends Component {
  state = {
    distance: null,
    sports: null,
    currentLocation: { lat: 43.64434, lng: -79.401984 }
  }

addPreferences = (preferences) => {
  console.log(preferences)
  this.setState({
    distance: preferences.distance,
    sports: preferences.sports,
    startDate: preferences.startDate,
    endDate: preferences.endDate,
    currentLocation: preferences.currentLocation
  })
}
  render() {
    return (
     <Router>
        <div className="App">
          <Header/>
          <Route exact path = "/" render={props => (
            <Profile addPreferences={this.addPreferences}/>
          )} />
          <Route path="/about" 
                 render={(props) => (<About {...props} currentLocation={this.state.currentLocation}/>)}
          />
          <Route path="/nextgames"
                 render={(props) => (<NextGamePage {...props} currentLocation={this.state.currentLocation}/>)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
