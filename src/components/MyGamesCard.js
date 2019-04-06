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
				<div className="next-game-card">
				{/* User should be able to remove saved game */}
				<button className="btn btn primary" onClick={this.handleDeleteGame}>Remove</button>
				<br></br>
					<p><strong>Sport:</strong> {this.props.locationData.sport}</p>
					<p><strong>Starting Time:</strong> {this.props.locationData.time}</p>
					<p><strong>Date:</strong> {this.props.locationData.date}</p>
					<p><strong>How Many Other Players:</strong> {this.props.locationData.other_players}</p>
					<img className="next-game-image" src={this.props.locationData.image} alt="Example Park" />
			<p><strong>Location: </strong>{this.props.locationData.facility}</p>
			<GoogleMapComponent location={this.props.locationData.location}/>
			</div>
			)
    }
}

export default MyGamesCard
