import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'

class CarouselCard extends Component{
    render(){
        return(
            <div className="next-game-card">
                  <p><strong>Sport: </strong>{this.props.locationData.sport}</p>
                  <p><strong>Date: </strong>{this.props.locationData.date}</p>
                  <p><strong>Time: </strong>{this.props.locationData.time}</p>
                  <p><strong>Facility: </strong>{this.props.locationData.facility}</p>
                  <p><strong>Number of People:</strong> {this.props.locationData.other_players === 0 ? 0: this.props.locationData.other_players.length}</p>
                  <img className="next-game-image" src={this.props.locationData.image} alt="Example Park" />
          <GoogleMapComponent location={this.props.locationData.location}/>
          </div>
        )
    }
}

export default CarouselCard;
