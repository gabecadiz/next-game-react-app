import React, { Component } from 'react';
import SportSelector from '../SportSelector'
import TimeSelector from '../TimeSelector'
import DaySelector from '../DaySelector'


class PreferencesPage extends Component{
  state={
    // currentLocation: {lat: null, lng: null},
    // loadedLocation: false,
    selectedDays: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    sports: null
  };

  componentDidMount(){
    fetch(`http://localhost:3000/api/users/${this.props.userId}/preferences`,
    {
      mode: 'cors',
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        selectedDays: json.selectedDays,
        sports: json.sports
      })
      console.log(this.state)
    })
  };

    // navigator.geolocation.getCurrentPosition(location => {
    //   this.setState({
    //     currentLocation: {
    //       lat: parseFloat(location.coords.latitude.toFixed(8)), lng: parseFloat(location.coords.longitude.toFixed(8))
    //     },
    //     loadedLocation: true
    //   })
    // })
    // };

  changeSport = (e) => {
    console.log(e)
    this.setState({
      sports: e.map(e => e.value)
    })
  };

  selectDay = (e) => {
    let day = e.target.value;
    this.setState({selectedDays: { ...this.state.selectedDays, [day]: !this.state.selectedDays[day]}})
  }

  changeTimePref = (e) => {
    this.setState({
    selectedDays: { ...this.state.selectedDays, [`${e.target.id}`]: e.target.value}
    });
    console.log(this.state)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPreferences(this.state)
    fetch(`http://localhost:3000/api/users/${this.props.userId}/preferences`,{
      mode: 'cors',
      credentials: 'include',
      method: 'PUT',
      body: JSON.stringify({
        prefs:{
          sports: this.state.sports,
          selectedDays: this.state.selectedDays,
        }
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then( () => {
      this.props.history.push('/nextgames');
    });
  };


  render(){
    console.log(this.state)
    return(
      <div>
        <h1>User image</h1>
        <h4>Username</h4>
        <br></br>
        <h1>Preferences</h1>
       <form onSubmit={this.handleSubmit}>
        <h6>Select your sport</h6>
        <SportSelector changeSport={this.changeSport} sportsPicked={this.state.sports}/>
        <br></br>
        <h6>When?</h6>
        <div>
          <DaySelector value="monday" day="Monday" selected="Monday" checked={this.state.selectedDays.monday} defaultChecked={this.state.selectedDays.monday} onChange={this.selectDay} />
          <DaySelector value="tuesday" day="Tuesday" checked={this.state.selectedDays.tuesday} defaultChecked={this.state.selectedDays.tuesday} onChange={this.selectDay} />
          <DaySelector value="wednesday" day="Wednesday" checked={this.state.selectedDays.wednesday} defaultChecked={this.state.selectedDays.wednesday} onChange={this.selectDay} />
          <DaySelector value="thursday" day="Thursday" checked={this.state.selectedDays.thursday} defaultChecked={this.state.selectedDays.thursday} onChange={this.selectDay} />
          <DaySelector value="friday" day="Friday" checked={this.state.selectedDays.friday} defaultChecked={this.state.selectedDays.friday} onChange={this.selectDay} />
          <DaySelector value="saturday" day="Saturday" checked={this.state.selectedDays.saturday} defaultChecked={this.state.selectedDays.saturday} onChange={this.selectDay} />
          <DaySelector value="sunday" day="Sunday" checked={this.state.selectedDays.sunday} defaultChecked={this.state.selectedDays.sunday} onChange={this.selectDay} />
        </div>
        <span>
          <div>
            <p>Between:</p>
          </div>
          <br></br>
          {!this.state.selectedDays.monday ? <p></p> :
            <div>
              <h6>From</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.mondayStart} selectedTime={this.state.selectedDays.mondayStart} id="mondayStart" />
              <h6>To</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.mondayEnd} selectedTime={this.state.selectedDays.mondayEnd} id="mondayEnd" />
            </div>
          }
          {!this.state.selectedDays.tuesday ? <p></p> :
            <div>
              <h6>From</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.tuesdayStart} selectedTime={this.state.selectedDays.tuesdayStart} id="tuesdayStart" />
              <h6>To</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.tuesdayEnd} selectedTime={this.state.selectedDays.tuesdayEnd} id="tuesdayEnd" />
            </div>
          }
          {!this.state.selectedDays.wednesday ? <p></p> :
            <div>
              <h6>From</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.wednesdayStart} selectedTime={this.state.selectedDays.wednesdayStart} id="wednesdayStart" />
              <h6>To</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.wednesdayEnd} selectedTime={this.state.selectedDays.wednesdayEnd} id="wednesdayEnd" />
            </div>
          }
          {!this.state.selectedDays.thursday ? <p></p> :
            <div>
              <h6>From</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.thursdayStart} selectedTime={this.state.selectedDays.thursdayStart} id="thursdayStart" />
              <h6>To</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.thursdayEnd} selectedTime={this.state.selectedDays.thursdayEnd} id="thursdayEnd" />
            </div>
          }
          {!this.state.selectedDays.friday ? <p></p> :
            <div>
              <h6>From</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.fridayStart} selectedTime={this.state.selectedDays.fridayStart} id="fridayStart" />
              <h6>To</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.fridayEnd} selectedTime={this.state.selectedDays.fridayEnd} id="fridayEnd" />
            </div>
          }
          {!this.state.selectedDays.saturday ? <p></p> :
            <div>
              <h6>From</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.saturdayStart} selectedTime={this.state.selectedDays.saturdayStart} id="saturdayStart" />
              <h6>To</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.saturdayEnd} selectedTime={this.state.selectedDays.saturdayEnd} id="saturdayEnd" />
            </div>
          }
          {!this.state.selectedDays.sunday ? <p></p> :
            <div>
              <h6>From</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.sundayStart} selectedTime={this.state.selectedDays.sundayStart} id="sundayStart" />
              <h6>To</h6>
                <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.sundayEnd} selectedTime={this.state.selectedDays.sundayEnd} id="sundayEnd" />
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