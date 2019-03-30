import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import MyGames from "./components/pages/MyGamesPage";
import Profile from "./components/pages/Profile"
import NextGamePage from "./components/pages/NextGamePage"


import './App.css';

class App extends Component {
  state = {
    distance: null,
    sports: null,
    currentLocation: { lat: 43.64434, lng: -79.401984 }
  }

dummyLocations = () => {
  return (
    [
      {location: {lat: 43.6537, lng: -79.3930} , name: "Grange Park", sport: "Basketball", Time: new Date()},
      {location: {lat: 43.6324, lng: -79.4095}, name: "Inukshuk Park", sport: "Baseball", Time: new Date()},
      {location: {lat: 43.6700, lng: -79.3917}, name: "Village of Yorkville Park", sport: "Volleyball", Time: new Date()} 
    ]
  )
}

addPreferences = (preferences) => {
  this.setState({
    distance: preferences.distance,
    sports: preferences.sports,
    startDate: preferences.startDate,
    endDate: preferences.endDate,
    currentLocation: preferences.currentLocation,
    locationsData: this.dummyLocations()
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
          <Route path="/mygames" 
                 render={(props) => (<MyGames {...props} locationsData={this.state.locationsData}/>)}
          />
          <Route path="/nextgames"
                 render={(props) => (<NextGamePage {...props} locationsData={this.state.locationsData}
                  />)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
