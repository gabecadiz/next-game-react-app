import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'

class AccordionCard extends Component{
    render(){
        return(
            <div className="next-game-card">
            {/* User should be able to remove saved game */}
            <button class="bttn bttn primary">Remove</button>
            <br></br>
                  <p><strong>Sport:</strong> {this.props.locationData.sport}</p>
                  <p><strong>Starting Time:</strong> {this.props.locationData.time}</p>
                  <p><strong>Date:</strong> {this.props.locationData.date}</p>
                  <p><strong>How Many Other Players:</strong> {this.props.locationData.other_players}</p>
                  <img className="next-game-image" src={this.props.locationData.image} alt="Example Park" />
          <p><strong>Location:</strong></p>
          <GoogleMapComponent location={this.props.locationData.location}/>
          </div>
        )
    }
}

export default AccordionCard
