import React, { Component } from 'react';
import ControlledCarousel from '../ControlledCarousel'


class MyGames extends Component{
  

  render(){
    
    return(
      <div>
       <ControlledCarousel locationsData={this.props.locationsData}/>
     </div>
    )
  }

}
export default MyGames;