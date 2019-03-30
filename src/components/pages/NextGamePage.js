import React, { Component } from 'react';
import ControlledCarousel from '../ControlledCarousel'

class NextGames extends Component{
  

  render(){
    
    return(
     <div>
       <ControlledCarousel currentLocation={this.props.currentLocation}/>
     </div>
    )
  }

}
export default NextGames;