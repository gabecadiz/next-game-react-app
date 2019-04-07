import React, { Component } from 'react';
import SportSelector from '../SportSelector'
import TimeSelector from '../TimeSelector'
import DaySelector from '../DaySelector'
import '../styles/PreferencesPage.css'
import Card from 'react-bootstrap/Card';


class PreferencesPage extends Component{
  state={

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
    return(
      <Card>
      <Card.Body>
      <div className='pref-page-container'>

       <form onSubmit={this.handleSubmit}>
        <div className='grid-container'>
          <h6 className='date-header'>Choose what days you are free!</h6>
          <h6 className='sport-header'>Select your sport</h6>
          <div className='sport-select'> 
            <SportSelector changeSport={this.changeSport} sportsPicked={this.state.sports}/>
          </div>
          <div className='day1'>
            <DaySelector value="monday" day="Monday" checked={this.state.selectedDays.monday} defaultChecked={this.state.selectedDays.monday} onChange={this.selectDay} />
          </div>
          <div className='day2'> 
            <DaySelector value="tuesday" day="Tuesday" checked={this.state.selectedDays.tuesday} defaultChecked={this.state.selectedDays.tuesday} onChange={this.selectDay} />
          </div>
          <div className='day3'>
            <DaySelector value="wednesday" day="Wednesday" checked={this.state.selectedDays.wednesday} defaultChecked={this.state.selectedDays.wednesday} onChange={this.selectDay} />
          </div>
          <div className='day4'>
            <DaySelector value="thursday" day="Thursday" checked={this.state.selectedDays.thursday} defaultChecked={this.state.selectedDays.thursday} onChange={this.selectDay} />
          </div>

          <div className='day5'>
            <DaySelector value="friday" day="Friday" checked={this.state.selectedDays.friday} defaultChecked={this.state.selectedDays.friday} onChange={this.selectDay} />
          </div>

          <div className='day6'>
            <DaySelector value="saturday" day="Saturday" checked={this.state.selectedDays.saturday} defaultChecked={this.state.selectedDays.saturday} onChange={this.selectDay} />
          </div>
          <div className='day7'>
            <DaySelector value="sunday" day="Sunday" checked={this.state.selectedDays.sunday} defaultChecked={this.state.selectedDays.sunday} onChange={this.selectDay} />
          </div>
        
          <div className='time1'>
            {!this.state.selectedDays.monday ? <p></p> :
              <div className='time-options'>
                <div className='from-time'>
                <h6>From</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.mondayStart} selectedTime={this.state.selectedDays.mondayStart} id="mondayStart" onMouseDown="this.size=10" onBlur="this.size=0" />
                </div>
                <div className='to-time'>
                <h6>To</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.mondayEnd} selectedTime={this.state.selectedDays.mondayEnd} id="mondayEnd" onMouseDown="this.size=10" onBlur="this.size=0" />
                </div>
              </div>
            }            
          </div>
          <div className='time2'>
            {!this.state.selectedDays.tuesday ? <p></p> :
              <div className='time-options'>
                <div className='from-time'>
                <h6>From</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.tuesdayStart} selectedTime={this.state.selectedDays.tuesdayStart} id="tuesdayStart" />
                </div>
                <div className='to-time'>
                <h6>To</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.tuesdayEnd} selectedTime={this.state.selectedDays.tuesdayEnd} id="tuesdayEnd" />
                </div>
              </div>
            }
          </div>
          <div className='time3'>
            {!this.state.selectedDays.wednesday ? <p></p> :
              <div className='time-options'>
                <div className='from-time'>
                <h6>From</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.wednesdayStart} selectedTime={this.state.selectedDays.wednesdayStart} id="wednesdayStart" />
                </div>
                <div className='to-time'>
                <h6>To</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.wednesdayEnd} selectedTime={this.state.selectedDays.wednesdayEnd} id="wednesdayEnd" />
                </div>
              </div>
            }
          </div>
          <div className ='time4'>
            {!this.state.selectedDays.thursday ? <p></p> :
              <div className='time-options'>
                <div className='from-time'>
                <h6>From</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.thursdayStart} selectedTime={this.state.selectedDays.thursdayStart} id="thursdayStart" />
                </div>
                <div className='to-time'>
                <h6>To</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.thursdayEnd} selectedTime={this.state.selectedDays.thursdayEnd} id="thursdayEnd" />
                </div>
              </div>
            }
          </div>
          <div className='time5'>
            {!this.state.selectedDays.friday ? <p></p> :
              <div className='time-options'>
                <div className='from-time'>
                <h6>From</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.fridayStart} selectedTime={this.state.selectedDays.fridayStart} id="fridayStart" />
                </div>
                <div className='to-time'>
                <h6>To</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.fridayEnd} selectedTime={this.state.selectedDays.fridayEnd} id="fridayEnd" />
                </div>
              </div>
            }
          </div>
          <div className='time6'>
            {!this.state.selectedDays.saturday ? <p></p> :
              <div className='time-options'>
                <div className='from-time'>
                <h6>From</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.saturdayStart} selectedTime={this.state.selectedDays.saturdayStart} id="saturdayStart" />
                </div>
                <div className='to-time'>
                <h6>To</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.saturdayEnd} selectedTime={this.state.selectedDays.saturdayEnd} id="saturdayEnd" />
                </div>
              </div>
            }
          </div>
          <div className='time7'>
            {!this.state.selectedDays.sunday ? <p></p> :
              <div className='time-options'>
                <div className='from-time'>
                <h6>From</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.sundayStart} selectedTime={this.state.selectedDays.sundayStart} id="sundayStart" />
                </div>
                <div className='to-time'>
                <h6>To</h6>
                  <TimeSelector onTimeChange={this.changeTimePref} value={this.state.selectedDays.sundayEnd} selectedTime={this.state.selectedDays.sundayEnd} id="sundayEnd" />
                </div>
              </div>
            }
          </div>
            <button type="submit" className="btn btn-primary next-game-btn">Find My Next Game</button>

        </div>

       </form>
      </div>
      </Card.Body>
      </Card>
    )
  }
}

export default PreferencesPage