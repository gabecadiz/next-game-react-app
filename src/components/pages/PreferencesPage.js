import React, { Component } from 'react';
import SportSelector from '../SportSelector'
import TimeSelector from '../TimeSelector'


class PreferencesPage extends Component{
  state={
    distance: 20,
    sports: null,
    currentLocation: {lat: null, lng: null},
    loadedLocation: false,
    selectedDays: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
  },
  };
  
  componentDidMount(){
    console.log(this.state)
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        currentLocation: {
          lat: parseFloat(location.coords.latitude.toFixed(8)), lng: parseFloat(location.coords.longitude.toFixed(8))
        },
        loadedLocation: true
      })
    })
    };

  handleChange = (e) => {
    this.setState({
      distance: parseInt(e.target.value)
    })
  };

  changefirstTime = (options, day) => {
    console.log(day)
    console.log(options)
    const {
      hour,
      minute,
    } = options;  
    this.setState({
      selectedDays: { ...this.state.selectedDays, [`${day}`]: hour + minute}
    });
    console.log(this.state)
  };

  changeEndDate = (date) => {
    this.setState({
      endDate: date
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPreferences(this.state)
  };

  changeSport = (e) => {
    this.setState({
      sports: e.map(e => e.value)
    })
};

checkChange = (e) => {
  let day = e.target.value;
  this.setState({selectedDays: { ...this.state.selectedDays, [day]: !this.state.selectedDays[day]}})
}


  render(props){
    console.log(this.state)
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
        <span className="ck-button">
        <label><input type="checkbox" value='monday' defaultChecked={this.state.selectedDays.monday} onChange={this.checkChange}/><span>Monday</span>
        </label>
        </span>
        <span className="ck-button">
        <label><input type="checkbox" value='tuesday' defaultChecked={this.state.selectedDays.tuesday} onChange={this.checkChange}/><span>Tuesday</span>
        </label>
        </span>
        <span className="ck-button">
        <label><input type="checkbox" value='wednesday' defaultChecked={this.state.selectedDays.wednesday} onChange={this.checkChange}/><span>Wednesday</span>
        </label>
        </span>
        <span className="ck-button">
        <label><input type="checkbox" value='thursday' defaultChecked={this.state.selectedDays.thursday} onChange={this.checkChange}/><span>Thursday</span>
        </label>
        </span>
        <span className="ck-button">
        <label><input type="checkbox" value='friday' defaultChecked={this.state.selectedDays.friday} onChange={this.checkChange}/><span>Friday</span>
        </label>
        </span>
        <span className="ck-button">
        <label><input type="checkbox" value='saturday' defaultChecked={this.state.selectedDays.saturday} onChange={this.checkChange}/><span>Saturday</span>
        </label>
        </span>
        <span className="ck-button">
        <label><input type="checkbox" value='sunday' defaultChecked={this.state.selectedDays.sunday} onChange={this.checkChange}/><span>Sunday</span>
        </label>
        </span>
        <span>
          <p>Between:</p>
          <br></br>
          <TimeSelector day="mondayStart" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.mondayStart} id="mondayStart" />
          <TimeSelector day="mondayEnd" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.mondayEnd} id="mondayEnd" />
          <TimeSelector day="tuesdayStart" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.tuesdayStart} id="tuesdayStart" />
          <TimeSelector day="tuesdayEnd" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.tuesdayEnd} id="tuesdayEnd" />
          <TimeSelector day="wednesdayStart" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.wednesdayStart} id="wednesdayStart" />
          <TimeSelector day="wednesdayEnd" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.wednesdayEnd} id="wednesdayEnd" />
          <TimeSelector day="thursdayStart" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.thursdayStart} id="thursdayStart" />
          <TimeSelector day="thursdayEnd" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.thursdayEnd} id="thursdayEnd" />
          <TimeSelector day="fridayStart" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.fridayStart} id="fridayStart" />
          <TimeSelector day="fridayEnd" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.fridayEnd} id="fridayEnd" />
          <TimeSelector day="saturdayStart" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.saturdayStart} id="saturdayStart" />
          <TimeSelector day="saturdayEnd" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.saturdayEnd} id="saturdayEnd" />
          <TimeSelector day="sundayStart" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.sundayStart} id="sundayStart" />
          <TimeSelector day="sundayEnd" onTimeChange={this.changefirstTime} selectedTime={this.state.selectedDays.sundayEnd} id="sundayEnd" />
        </span>

        <br></br>
        <button type="submit" className="btn btn-primary">Find My Next Game</button>

       </form>

      </div>
    )
  }
}

export default PreferencesPage