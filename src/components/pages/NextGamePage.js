import React, { Component } from 'react';
import NextGameCard from '../NextGameCard'
import { Card, CardWrapper } from 'react-swipeable-cards';



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

  updateStateData = (addedCardData) => {
    let filterData = this.state.data.filter(cardData => cardData !== addedCardData)

    this.setState({
      data: filterData
    }) 
  }

  
  render(){
    
    return(
     <div>
       <CardWrapper>
      {this.state.data.map ( (locationData, index) =>
        <Card key={index}>
        <NextGameCard key={locationData.gameId} locationData={locationData} updateStateData={this.updateStateData} userId={this.props.userId}/>
        </Card>
      )}
      </CardWrapper>
      </div>
    )
  }

}
export default NextGames;