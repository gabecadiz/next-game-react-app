import React, { Component } from 'react';
import SportSelector from '../SportSelector'
import TimeSelector from '../TimeSelector'
import DaySelector from '../DaySelector'


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

  changeTimePref = (e) => {
    this.setState({
    selectedDays: { ...this.state.selectedDays, [`${e.target.id}`]: e.target.value}
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
  console.log(e.target.value)
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
        <div>
        <DaySelector value="monday" day="Monday" defaultChecked={this.state.selectedDays.monday} onChange={this.checkChange} />
        <DaySelector value="tuesday" day="Tuesday" defaultChecked={this.state.selectedDays.tuesday} onChange={this.checkChange} />
        <DaySelector value="wednesday" day="Wednesday" defaultChecked={this.state.selectedDays.wednesday} onChange={this.checkChange} />
        <DaySelector value="thursday" day="Thursday" defaultChecked={this.state.selectedDays.thursday} onChange={this.checkChange} />
        <DaySelector value="friday" day="Friday" defaultChecked={this.state.selectedDays.friday} onChange={this.checkChange} />
        <DaySelector value="saturday" day="Saturday" defaultChecked={this.state.selectedDays.saturday} onChange={this.checkChange} />
        <DaySelector value="sunday" day="Sunday" defaultChecked={this.state.selectedDays.sunday} onChange={this.checkChange} />
        </div>
        <div>
          <p>Between:</p>
        </div>
        <span>
          <br></br>
          {!this.state.selectedDays.monday ? <p></p> : 
            <div>
              <h6>From</h6>
              <TimeSelector day="mondayStart" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.mondayStart} id="mondayStart" />
              <h6>To</h6>
              <TimeSelector day="mondayEnd" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.mondayEnd} id="mondayEnd" />
            </div>
          }
          {!this.state.selectedDays.tuesday ? <p></p> : 
            <div>
              <h6>From</h6>
              <TimeSelector day="tuesdayStart" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.tuesdayStart} id="tuesdayStart" />
              <h6>To</h6>
              <TimeSelector day="tuesdayEnd" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.tuesdayEnd} id="tuesdayEnd" />
            </div>
          }
          {!this.state.selectedDays.wednesday ? <p></p> : 
            <div>
              <h6>From</h6>
              <TimeSelector day="wednesdayStart" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.wednesdayStart} id="wednesdayStart" />
              <h6>To</h6>
              <TimeSelector day="wednesdayEnd" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.wednesdayEnd} id="wednesdayEnd" />
            </div>
          }
          {!this.state.selectedDays.thursday ? <p></p> : 
            <div>
              <h6>From</h6>
              <TimeSelector day="thursdayStart" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.thursdayStart} id="thursdayStart" />
              <h6>To</h6>
              <TimeSelector day="thursdayEnd" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.thursdayEnd} id="thursdayEnd" />
            </div>
          }
          {!this.state.selectedDays.friday ? <p></p> : 
            <div>
              <h6>From</h6>
              <TimeSelector day="fridayStart" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.fridayStart} id="fridayStart" />
              <h6>To</h6>
              <TimeSelector day="fridayEnd" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.fridayEnd} id="fridayEnd" />
            </div>
          }
          {!this.state.selectedDays.saturday ? <p></p> : 
            <div>
              <h6>From</h6>
              <TimeSelector day="saturdayStart" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.saturdayStart} id="saturdayStart" />
              <h6>To</h6>
              <TimeSelector day="saturdayEnd" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.saturdayEnd} id="saturdayEnd" />
            </div>
          }
          {!this.state.selectedDays.sunday ? <p></p> : 
            <div>
              <h6>From</h6>
              <TimeSelector day="sundayStart" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.sundayStart} id="sundayStart" />
              <h6>To</h6>
              <TimeSelector day="sundayEnd" onTimeChange={this.changeTimePref} selectedTime={this.state.selectedDays.sundayEnd} id="sundayEnd" />
            </div>
          }    
        </span>

        <br></br>
        <button type="submit" className="btn btn-primary">Find My Next Game</button>

       </form>

      </div>
    )
  }
}

export default PreferencesPage