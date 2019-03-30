import React, { Component } from 'react';
import GoogleMapComponent from '../GoogleMapComponent.js'


class NextGamePage extends Component{

  render(){
    
    return(
      <React.Fragment>
        <GoogleMapComponent currentLocation={this.props.currentLocation}/>
        <GoogleMapComponent currentLocation={this.props.currentLocation}/>
        <GoogleMapComponent currentLocation={this.props.currentLocation}/>
      </React.Fragment>
    )
  }
}

export default NextGamePage