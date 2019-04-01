import React, { Component } from 'react';
import SportSelector from '../SportSelector'
import DateScheduler from '../DateScheduler'
import DistanceSlider from '../DistanceSlider'
import axios from 'axios'

class SignUpPage extends Component{
  state={
      avatar: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
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

  changeSport = (e) => {
    this.setState({
      sports: e.map(e => e.value)
    })
  }

  changeAvatar = (e) => {
    this.setState({
      avatar: e.target.value
    })
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  changePasswordConfirmation = (e) => {
    this.setState({
      passwordConfirmation: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)

    axios.post('http://localhost:3000/signup', {
      image: this.state.avatar,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation 
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          { !this.state.loadedLocation ? <p>LOADING CURRENT LOCATION...</p> : <p> CURRENT LOCATION LOADED </p>}
        <label>
        <p>Enter the link to your avatar:</p>
          <input type="text" onChange={this.changeAvatar} value={this.state.avatar} name="avatar-link" ref="avatar-link" className="form-control" />
        </label>
        <br></br>
        <label>
          <p>Enter your username:</p>
          <input type="text" onChange={this.changeUsername} value={this.state.username} ref="username" className="form-control" />
        </label>
        <br></br>
        <label>
          <p>Enter your email:</p>
          <input type="email" onChange={this.changeEmail} value={this.state.email} name="email" ref="email" className="form-control" />
        </label>
        <br></br>
        <label>
        <p>Enter a password:</p>
          <input type="password" onChange={this.changePassword} value={this.state.password} name="password" ref="password" className="form-control" />
        </label>
        <br></br>
        <label>
          <p>Confirm your password:</p>
          <input type="password" name="passwordConfirmation" onChange={this.changePasswordConfirmation} value={this.state.passwordConfirmation} ref="passwordConfirmation" className="form-control" />
        </label>
        <br></br>
        <h1>Preferences</h1>
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
        <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUpPage
