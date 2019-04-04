import React, { Component } from 'react';
import ControlledCarousel from '../ControlledCarousel'

class NextGames extends Component{
  state = {
    data: [],
    loaded: false
  };


  componentDidMount(){
    console.log(this.props.userId)
    
    fetch(`http://localhost:3000/api/users/${this.props.userId}/next_games`, 
      {
        mode: 'cors', 
        credentials: 'include'
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          data: json,
          loaded:true
        })
      });
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