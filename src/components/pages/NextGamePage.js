import React, { Component } from 'react';
// import SimpleSlider from "../SimpleSlider";

import Slider from "react-slick";
import NextGameCard from "../NextGameCard";
import NextGameReferenceCard from "../NextGameReferenceCard";



class NextGames extends Component{
  state = {
    data: [],
    loaded: false,
    nav1: null,
    nav2: null
  };


  componentDidMount(){
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });

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

  updateStateData = (addedCardData) => {
    let filterData = this.state.data.filter(cardData => cardData !== addedCardData)

    this.setState({
      data: filterData
    }) 
  }

  
  render(){
    
    return(
      
     <div>
        {this.state.loaded ?  
          <div>
          <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          >
          {this.state.data.map ( (locationData, index) =>
            <div key={index} >
            <NextGameReferenceCard key={locationData.gameId} locationData={locationData}/>
            </div>
          )}
          </Slider>
          <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}>
          {this.state.data.map ( (locationData, index) =>
            <div key={index} >
            <NextGameCard key={locationData.gameId} locationData={locationData} userId={this.props.userId} updateStateData={this.updateStateData}/>
            </div>
          )}
          </Slider>
        </div>

        : 
          <p> Loading </p>
        }
      </div>
    )
  }

}
export default NextGames;