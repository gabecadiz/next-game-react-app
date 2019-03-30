import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile"
import MapPage from "./components/pages/MapPage"


import './App.css';

class App extends Component {
  state = {
    distance: null,
    sports: null,
  }

addPreferences = (preferences) => {
  console.log(preferences)
  this.setState({
    distance: preferences.distance,
    sports: preferences.sports
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
          <Route path="/about" component={About}/>
          <Route path="/map" component={MapPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
