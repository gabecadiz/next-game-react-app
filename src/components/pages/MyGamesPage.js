import React, { Component } from 'react';
import MyGamesAccordion from '../MyGamesAccordion'
import Spinner from 'react-bootstrap/Spinner';

import '../styles/MyGamesPage.css'


class MyGames extends Component{

  state = {
    data: [],
    loaded: false,
  };

  componentDidMount(){
    this.fetchGames()
  }

  changeLoadedStatus = () => {
    this.setState({
      loaded: false
    })
    this.fetchGames()
  }

  fetchGames = () => {
    navigator.geolocation.getCurrentPosition(location => {
      let lat = parseFloat(location.coords.latitude.toFixed(8))
      let lng = parseFloat(location.coords.longitude.toFixed(8))
      var url = new URL(`http://localhost:3000/api/users/${this.props.userId}/games`),
      params={lat: lat, lng: lng}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      fetch(url, 
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
    })
  }

  render(){
    
    return(
        <div className="saved-game-page-container">
         { !this.state.loaded ? <Spinner className ='loading-spinner' animation="border" /> : <MyGamesAccordion savedGames={this.state.data} userId={this.props.userId} changeLoadedStatus={this.changeLoadedStatus}/> }
        </div>
    )
  }
  

}
export default MyGames;