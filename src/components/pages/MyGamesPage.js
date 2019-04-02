import React, { Component } from 'react';
import ExampleAccordion from '../ExampleAccordion'
import axios from 'axios'


class MyGames extends Component{

  state = {
    data: [],
    loaded: false
  };


  componentDidMount(){
    console.log("hello")
    axios.get('http://localhost:3000/api/users/1/games',{
      user: 1 
    })
    .then((response) => {
      this.setState({
        data: response.data,
        loaded: true
      })
      console.log(response.data)
      console.log(this.state)
    })
  }

  render(){
    
    return(
        <div>
          {/* <p>hi</p> */}
         { !this.state.loaded ? <p> LOADING</p> : <ExampleAccordion savedGames = {this.state.data}/> }
        </div>
    )
  }
  

}
export default MyGames;