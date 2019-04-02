import React, { Component } from 'react';
// import ExampleAccordion from '../ExampleAccordion'
import axios from 'axios'


class MyGames extends Component{
  componentDidMount(){
    console.log("hello")
    axios.get('http://localhost:3000/api/users/1/games',{
      user: 1 
    })
    .then(function (response){
      console.log(response)
    })
  }

  render(){
    
    return(
      <div>
        <h1>hello</h1>
     </div>
    )
  }

}
export default MyGames;