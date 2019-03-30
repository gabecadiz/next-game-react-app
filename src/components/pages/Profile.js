import React, { Component } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";


class Profile extends Component{
  state={
    distance: 20,
    sports: null,
    startDate: new Date(),
    endDate: new Date(),
    currentLocation: { lat: 43.64434, lng: -79.401984 }
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      distance: e.target.value
    })
  }

  changeStartDate = (date) => {
    this.setState({
      startDate: date
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
  }

  changeSport = (e) => {
    // this.setState({ sports: e.target.value })
    this.setState({
      sports: e.map(e => e.value)
    })
  }


  render(props){
    const sportOptions = [
      { value: 'basketball', label: 'Basketball' },
      { value: 'baseball', label: 'Baseball'  },
      { value: 'soccer', label: 'Soccer' },
      { value: 'ultimate-frisbee', label: 'Ultimate Frisbee' },
      { value: 'tennis', label: 'Tennis' },
    ]

    return(
      <div>
        <h2>MAKE SURE TO CLICK BUTTON FOR NEXT PAGES TO LOAD</h2>
        <h1>User image</h1>
        <h4>Username</h4>
        <br></br>
        <h1>Preferences</h1>
       <form onSubmit={this.handleSubmit}>
        <h6>Select your sport</h6>
        <Select
          onChange={this.changeSport}
          isMulti
          name="colors"
          options= {sportOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <br></br>
        <h6>When?</h6>
        <DatePicker
        name="startDate"
        selected={this.state.startDate}
        onChange={this.changeStartDate}
        minDate={new Date()}
        maxDate={addDays(new Date(), 7)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
        />
        <DatePicker
        name="endDate"
        selected={this.state.endDate}
        onChange={this.changeEndDate}
        minDate={this.state.endDate}
        maxDate={addDays(new Date(), 7)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
        />
        <br></br>
        <br></br>
        <h6>How far?</h6>
        <p>Use my current location</p>
        <input
        checked={this.props.checked}
        type='checkbox'
        name='current-location'
        {...this.props} />
        <br></br>
        <div className="distance-container">
          <input type="range" min="0" max="40" defaultValue={this.state.distance} step="1" className="distance-slider" id="distanceSlider" onChange={this.handleChange}/>
        </div>
        
        <h5>Within {this.state.distance} KM </h5>
        <br></br>
        <br></br>
        <button type="submit" className="btn btn-primary">Find My Next Game</button>

       </form>

      </div>
    )
  }
}

export default Profile