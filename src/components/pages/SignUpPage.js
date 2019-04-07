import React, { Component } from 'react';
import SportSelector from '../SportSelector'
import Alert from 'react-bootstrap/Alert';


class SignUpPage extends Component{
  state={
      avatar: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      sports: [],
      currentLocation: {lat: null, lng: null},
      loadedLocation: false,
      sportsEmpty: true,
      incompleteForm: false
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

  formChecker = () => {
    if (!this.state.sportsEmpty && this.state.username && this.state.email && this.state.password && this.state.passwordConfirmation){
      return true
    } else {
      return false
    }
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
    }, () => {
      this.isSportEmpty()
    })
  }

  isSportEmpty = () => {
    if(this.state.sports.length >= 1){
      this.setState({
        sportsEmpty: false
      })
    } else{
      this.setState({
        sportsEmpty: true
      })
    }
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

    if (this.formChecker()) {
      fetch('http://localhost:3000/signup',{
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({
          user:{
            image: this.state.avatar,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.passwordConfirmation,
          },
          sports: this.state.sports
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(r => {
        if(r.status === 201){
          r.json().then( data => {
            this.props.handleLoginStatus(data.id)
            this.props.history.push("/nextgames");
          })
        } else{
          alert("Invalid Signup")
          this.props.history.push("/signup")
        }
      })

    } else {
      this.setState({
        incompleteForm: true
      })
    }
  }

  render(){
    return(
      <div>
        { this.state.incompleteForm ?
          <Alert variant="info">  Please fill out the form completely! </Alert>
        :
          <span></span>
        }
        <form onSubmit={this.handleSubmit}>

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
        <SportSelector changeSport={this.changeSport} sportsPicked={this.state.sports}/>
        <br></br>

          <button type="submit" className="btn btn-primary">Sign Up</button>

        </form>
      </div>
    )
  }
}

export default SignUpPage
