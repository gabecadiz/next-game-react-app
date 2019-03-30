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
      console.log(this.props)
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={null}
        >

        {this.props.locationsData.map( locationData => 
          <Carousel.Item>
            <CarouselCard locationData={locationData}/>
          </Carousel.Item>
        )}

        
        </Carousel>
      );
    }
  }

  export default ControlledCarousel