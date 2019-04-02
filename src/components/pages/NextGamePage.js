import React, { Component } from 'react';
import ControlledCarousel from '../ControlledCarousel'
import axios from 'axios'

class NextGames extends Component{
  state = {
    data: [],
    loaded: false
  };


  componentDidMount(){
    console.log("hello")
    axios.get('http://localhost:3000/api/users/1/next_games',{
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
     { !this.state.loaded ? <p> LOADING</p> : <ControlledCarousel savedGames = {this.state.data}/> }
     </div>
    )
  }

}
export default NextGames;