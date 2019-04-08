import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'

class MyGamesCard extends Component{
	
    handleDeleteGame = (e) => {
			e.preventDefault()
			fetch(`http://localhost:3000/api/users/${this.props.userId}/games/${this.props.gameId}`,{
				mode: 'cors', 
				credentials: 'include',
				method: 'DELETE',
				body: JSON.stringify({
					game_id: this.props.gameId
				}),
				headers:{
					'Content-Type': 'application/json'
				}
			})
			.then( () => {
				this.props.changeLoadedStatus()
			})
		}
		


    render(){
			return(
				<div className="my-game-card">
				<button className="btn btn-primary saved-games-remove-button" onClick={this.handleDeleteGame}>Remove</button>
				<br></br>
					<p className="saved-games-players">With {this.props.locationData.other_players - 1} other players.</p>
					<div className="saved-games-map">
			{/* <GoogleMapComponent location={this.props.locationData.location}/> */}
			</div>
			</div>
			)
    }
}

export default MyGamesCard
