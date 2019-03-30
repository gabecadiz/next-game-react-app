import React, { Component } from 'react';
import ControlledCarousel from '../ControlledCarousel'

class About extends Component{
  

  render(){
    
    return(
     <div>
       <ControlledCarousel currentLocation={this.props.currentLocation}/>
     </div>
    )
  }

}
export default About;