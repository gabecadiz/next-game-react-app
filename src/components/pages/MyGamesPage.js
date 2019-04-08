import React, { Component } from 'react';
import MyGamesAccordion from '../MyGamesAccordion'
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
        <div className="saved-game-page-container">
         { !this.state.loaded ? <p> LOADING</p> : <MyGamesAccordion savedGames={this.state.data} userId={this.props.userId} changeLoadedStatus={this.changeLoadedStatus}/> }
        </div>
    )
  }
  

}
export default MyGames;