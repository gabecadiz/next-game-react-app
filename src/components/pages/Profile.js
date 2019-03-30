import React, { Component } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Profile extends Component{
  state={
    distance: 20,
    sports: null,
    startDate: new Date()
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      // distance: e.target.value
    })
  }

  changeDate = (date) => {
    this.setState({
      startDate: date
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
    ]

    return(
      <div>
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
        selected={this.state.startDate}
        onChange={this.changeDate}
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