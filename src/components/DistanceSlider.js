import React, { Component } from 'react'

class DistanceSlider extends Component {
  render(){
    return(
      <React.Fragment>
     
      <div className="distance-container">
          <input type="range" min="0" max="40" defaultValue={this.props.distance} step="1" className="distance-slider" id="distanceSlider" onChange={this.props.handleChange}/>
          <h5>Within {this.props.distance} KM </h5>
      </div>
        
      </React.Fragment>
    )
  }
}

export default DistanceSlider