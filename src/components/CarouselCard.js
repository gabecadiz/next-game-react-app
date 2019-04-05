import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'

class CarouselCard extends Component{
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
		}



    render(){
        return(
            <div className="next-game-card">
                  {this.props.locationData.type === "active" ? 
                  <button type="button" className="btn btn-primary" onClick={this.handleActiveAdd}>Active Add </button> :
                  <button type="button" className="btn btn-primary" onClick={this.handleNewAdd}>New Add</button>
                  }
                  <p><strong>Sport: </strong>{this.props.locationData.sport}</p>
                  <p><strong>Date: </strong>{this.props.locationData.date}</p>
                  <p><strong>Time: </strong>{this.props.locationData.time}</p>
                  <p><strong>Facility: </strong>{this.props.locationData.facility}</p>
                  <p><strong>Number of People:</strong> {this.props.locationData.other_players === 0 ? 0: this.props.locationData.other_players.length}</p>
                  <p><strong>Distance: </strong>{this.props.locationData.dist}</p>
                  <img className="next-game-image" src={this.props.locationData.image} alt="Example Park" />
          <GoogleMapComponent location={this.props.locationData.location}/>
          </div>
        )
    }
}

export default CarouselCard;
