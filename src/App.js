import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import MyGames from "./components/pages/MyGamesPage";
import PreferencesPage from "./components/pages/PreferencesPage"
import NextGamePage from "./components/pages/NextGamePage"
import SignUpPage from "./components/pages/SignUpPage"
import './App.css';


class App extends Component {
  state = {
    distance: null,
    sports: null,
    currentLocation: { lat: 43.64434, lng: -79.401984 }
  }

dummyLocations = () => {
  const currentTime = new Date()
  return (
    [
      {location: {lat: 43.6537, lng: -79.3930} , name: "Grange Park", sport: "Basketball", time: currentTime.toString()},
      {location: {lat: 43.6324, lng: -79.4095}, name: "Inukshuk Park", sport: "Baseball", time: currentTime.toString()},
      {location: {lat: 43.6700, lng: -79.3917}, name: "Village of Yorkville Park", sport: "Volleyball", time: currentTime.toString()} 
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
            <PreferencesPage addPreferences={this.addPreferences}/>
          )} />
          <Route path="/signup" component={SignUpPage} />
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
