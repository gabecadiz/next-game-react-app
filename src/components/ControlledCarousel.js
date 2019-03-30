import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import GoogleMapComponent from './GoogleMapComponent'

class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={null}
        >
          <Carousel.Item>
              <div className="next-game-card">
                  <p>Sport</p>
                  <p>When</p>
                  <p>Where</p>
                  <p>Number of People</p>
                  <img className="next-game-image" src="http://www.tourismfredericton.ca/sites/default/files/styles/full_node/public/images/directory/odell_park_1_0.jpg?itok=QAYzoWTG" alt="Example Park" />
          <GoogleMapComponent currentLocation={this.props.currentLocation}/>
          </div>
            
          </Carousel.Item>
          
          <Carousel.Item>
          <GoogleMapComponent currentLocation={this.props.currentLocation}/>
  
           
          </Carousel.Item>
          
          <Carousel.Item>
          <GoogleMapComponent currentLocation={this.props.currentLocation}/>
  
        
          </Carousel.Item>
        
        </Carousel>
      );
    }
  }

  export default ControlledCarousel