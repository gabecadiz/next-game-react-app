import React, { Component } from 'react';
import SportSelector from '../SportSelector'
import DateScheduler from '../DateScheduler'
import DistanceSlider from '../DistanceSlider'


class PreferencesPage extends Component{
  state={
    distance: 20,
    sports: null,
    startDate: new Date(),
    endDate: new Date(),
    currentLocation: {lat: null, lng: null},
    loadedLocation: false
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        currentLocation: {
          lat: parseFloat(location.coords.latitude.toFixed(8)), lng: parseFloat(location.coords.longitude.toFixed(8))
        },
        loadedLocation: true
      })
    })
    }

  handleChange = (e) => {
    this.setState({
      distance: parseInt(e.target.value)
    })
  }

  changeStartDate = (date) => {
    this.setState({
      startDate: date,
      endDate: date
    });
  }

  changeEndDate = (date) => {
    this.setState({
      endDate: date
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPreferences(this.state)
    console.log(this.state)
  }

  changeSport = (e) => {
    this.setState({
      sports: e.map(e => e.value)
    })
  }


  render(props){

    return(
      <div>
        { !this.state.loadedLocation ? <p>LOADING CURRENT LOCATION...</p> : <p> CURRENT LOCATION LOADED </p>}
        <h2>MAKE SURE TO CLICK BUTTON FOR NEXT PAGES TO LOAD</h2>
        <h1>User image</h1>
        <h4>Username</h4>
        <br></br>
        <h1>Preferences</h1>
       <form onSubmit={this.handleSubmit}>
        <h6>Select your sport</h6>
        <SportSelector changeSport={this.changeSport}/>
        <br></br>
        <h6>When?</h6>
        <DateScheduler 
          startDate={this.state.startDate} 
          changeDate={this.changeStartDate}
          minDate={new Date()}
        />
        <DateScheduler 
          startDate={this.state.endDate}
          changeDate={this.changeEndDate}
          minDate={this.state.startDate}
        />

        <br></br>
        <br></br>
        <h6>How far?</h6>

        <br></br>

        <DistanceSlider 
          distance={this.state.distance} 
          handleChange={this.handleChange}
        />
        <br></br>
        <button type="submit" className="btn btn-primary">Find My Next Game</button>

       </form>

      </div>
    )
  }
}

export default PreferencesPage