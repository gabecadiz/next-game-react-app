import React, { Component } from 'react';
import Select from 'react-select';


class Profile extends Component{
  state={
    distance: 20,
    sports: null
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      distance: e.target.value
    })
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
       <form onSubmit={this.handleSubmit}>

        <Select
          onChange={this.changeSport}
          isMulti
          name="colors"
          options= {sportOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />      
        <div className="distance-container">
          <input type="range" min="0" max="40" defaultValue={this.state.distance} step="1" className="distance-slider" id="distanceSlider" onChange={this.handleChange}/>
        </div>
        
        <h3>{this.state.distance} KM </h3>

        <button type="submit" className="btn btn-primary">Submit</button>

       </form>

      </div>
    )
  }
}

export default Profile