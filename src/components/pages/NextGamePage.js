import React, { Component } from 'react';
import ControlledCarousel from '../ControlledCarousel'

class NextGames extends Component{
  

  render(){
    
    return(
     <div>
      <ControlledCarousel locationsData={this.props.locationsData}/>
     </div>
    )
  }

}
export default NextGames;