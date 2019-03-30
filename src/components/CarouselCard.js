import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'

class CarouselCard extends Component{
    render(){
        return(
            <div className="next-game-card">
                  <p>Sport</p>
                  <p>When</p>
                  <p>Where</p>
                  <p>Number of People</p>
                  <img className="next-game-image" src="http://www.tourismfredericton.ca/sites/default/files/styles/full_node/public/images/directory/odell_park_1_0.jpg?itok=QAYzoWTG" alt="Example Park" />
          <GoogleMapComponent currentLocation={this.props.currentLocation}/>
          </div>
        )
    }
}

export default CarouselCard;
