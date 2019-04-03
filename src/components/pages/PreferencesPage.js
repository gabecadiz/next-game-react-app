import React, { Component } from 'react';
import SportSelector from '../SportSelector'
import DateScheduler from '../DateScheduler'



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
    // selectedDays: [
    //   {monday: false},
    //   {tuesday: false},
    //   {wednesday: false},
    //   {thursday: false},
    //   {friday: false},
    //   {saturday: false},
    //   {sunday: false},
    // ],
    firstTime: new Date().toLocaleString(),
    secondTime: new Date().toLocaleString()
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

  changeStartDate = (date) => {
    this.setState({
      startDate: date,
      endDate: date
    });
  };

  changeEndDate = (date) => {
    this.setState({
      endDate: date
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPreferences(this.state)
    console.log(this.state)
  };

  changeSport = (e) => {
    this.setState({
      sports: e.map(e => e.value)
    })
};

checkChange = (e) => {
  console.log(e.target.value)
  let day = e.target.value;
  let i = e.target.id;
  this.setState({selectedDays: { ...this.state.selectedDays, [day]: !this.state.selectedDays[day]}})
}



  render(props){
console.log(this.state.selectedDays)
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
          <p>Between: </p>
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
        </span>

        <br></br>
        <button type="submit" className="btn btn-primary">Find My Next Game</button>

       </form>

      </div>
    )
  }
}

export default PreferencesPage