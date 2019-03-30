import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'

class AccordionCard extends Component{
    render(){
        return(
            <div className="next-game-card">
                  <p>{this.props.locationData.sport}</p>
                  <p>{this.props.locationData.time}</p>
                  <p>{this.props.locationData.name}</p>
                  <p>Number of People TO BE IMPLEMENTED</p>
                  <img className="next-game-image" src="http://www.tourismfredericton.ca/sites/default/files/styles/full_node/public/images/directory/odell_park_1_0.jpg?itok=QAYzoWTG" alt="Example Park" />
          <GoogleMapComponent location={this.props.locationData.location}/>
          </div>
        )
    }
}

export default AccordionCard
