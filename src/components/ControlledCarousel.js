import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import GoogleMapComponent from './GoogleMapComponent'
import CarouselCard from './CarouselCard'

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
              <CarouselCard currentLocation={this.props.currentLocation}/>
            
          </Carousel.Item>
          
          <Carousel.Item>
          <CarouselCard currentLocation={this.props.currentLocation}/>
  
           
          </Carousel.Item>
          
          <Carousel.Item>
          <CarouselCard currentLocation={this.props.currentLocation}/>
  
        
          </Carousel.Item>
        
        </Carousel>
      );
    }
  }

  export default ControlledCarousel