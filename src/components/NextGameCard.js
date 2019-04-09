import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'
import '../NextGamePage.css'

class NextGameCard extends Component{
    handleNewAdd = (e) => {
			e.preventDefault()
			console.log(this.props)
			fetch(`http://localhost:3000/api/users/${this.props.userId}/games`,{
				mode: 'cors', 
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify({
					type: this.props.locationData.type,
					date: this.props.locationData.date,
					start_time: this.props.locationData.time,
					facility_id: this.props.locationData.facilityId,
					sport_id: this.props.locationData.sportId
				}),
				headers:{
					'Content-Type': 'application/json'
				}	
			})
			this.props.updateStateData(this.props.locationData)
		}
		
		handleActiveAdd = (e) => {
			e.preventDefault()
			// console.log(this.props.locationData.gameId)
			fetch(`http://localhost:3000/api/users/${this.props.userId}/games`,{
				mode: 'cors', 
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify({
					type: this.props.locationData.type,
					game_id: this.props.locationData.gameId
				}),
				headers:{
					'Content-Type': 'application/json'
				}	
			})
			this.props.updateStateData(this.props.locationData)
		}

		backgroundImage = () => {
			let sport = this.props.locationData.sport
			switch(sport){
			case 'Basketball':
			return "next-game-bball-bg";
			case 'Soccer':
			return "next-game-soccer-bg";
			case 'Volleyball':
			return "next-game-volleyball-bg";
			case 'Ultimate-frisbee':
			return "next-game-frisbee-bg";
			case 'Tennis':
			return "next-game-tennis-bg";
			default:
			console.log('no sports');
		}
	}
	
	
	render(){
		const classes = `next-game-card ${this.backgroundImage()}`
        return(
            <div className={classes}>

								<div className="next-game-info">
                <p className="next-game-sport">{this.props.locationData.sport}</p>
                <p className="next-game-facility">At {this.props.locationData.facility}</p>
								<p className="next-game-date">{this.props.locationData.date.substring(0, this.props.locationData.date.length - 5)} at {this.props.locationData.time}</p>
                <p className="next-game-distance">{Math.round( this.props.locationData.dist * 10 ) / 10} km away</p>
              	<p className="next-game-players">{this.props.locationData.other_players.length === 0 ? "Be the first one there!" : this.props.locationData.other_players.length + " other players are currently joining."}</p>
              	{this.props.locationData.type === "active" ? 
                	<button type="button" className="btn next-game-add" onClick={this.handleActiveAdd}>Save This Game</button> :
                  <button type="button" className="btn next-game-add" onClick={this.handleNewAdd}>Save This Game</button>
								}
							</div>
							<div className="next-game-map">
          		<GoogleMapComponent location={this.props.locationData.location}/>
							</div>
          </div>
        )
    }
}

export default NextGameCard;
