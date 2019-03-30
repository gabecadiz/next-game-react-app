import React, { Component } from 'react';
import ExampleAccordion from '../ExampleAccordion'


class MyGames extends Component{
  

  render(){
    
    return(
      <div>
        <ExampleAccordion locationsData={this.props.locationsData}/>
     </div>
    )
  }

}
export default MyGames;