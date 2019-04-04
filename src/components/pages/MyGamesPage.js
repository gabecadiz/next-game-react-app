import React, { Component } from 'react';
import ExampleAccordion from '../ExampleAccordion'


class MyGames extends Component{

  state = {
    data: [],
    loaded: false
  };


  componentDidMount(){
    fetch(`http://localhost:3000/api/users/${this.props.userId}/games`, 
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
         { !this.state.loaded ? <p> LOADING</p> : <ExampleAccordion savedGames = {this.state.data}/> }
        </div>
    )
  }
  

}
export default MyGames;