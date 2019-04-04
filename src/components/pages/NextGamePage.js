import React, { Component } from 'react';
import ControlledCarousel from '../ControlledCarousel'

class NextGames extends Component{
  state = {
    data: [],
    loaded: false
  };


  componentDidMount(){
    console.log(this.props.userId)

    navigator.geolocation.getCurrentPosition(location => {
      let lat = parseFloat(location.coords.latitude.toFixed(8))
      let lng = parseFloat(location.coords.longitude.toFixed(8))
      console.log(lat)
      console.log(lng)
      var url = new URL(`http://localhost:3000/api/users/${this.props.userId}/next_games`),
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
     <div>
     { !this.state.loaded ? <p> LOADING</p> : <ControlledCarousel savedGames = {this.state.data}/> }
     </div>
    )
  }

}
export default NextGames;