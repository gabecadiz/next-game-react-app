import React, { Component } from 'react';
import GoogleMapComponent from './GoogleMapComponent'

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



    render(){
        return(
            <div className="next-game-card">
						<header style={styles.cardHeader} >
							<SportIcon imgSrc={this.props.locationData.image} />
							<div style={styles.cardHeaderInfo}>
								<span><strong>Sport: </strong>{this.props.locationData.sport}</span>
								<span> <strong>Date: </strong>{this.props.locationData.date}</span>
								<span><strong>Time: </strong>{this.props.locationData.time}</span>
							</div>
						</header>
                  {this.props.locationData.type === "active" ? 
                  <button type="button" className="btn btn-primary" onClick={this.handleActiveAdd}>Active Add </button> :
                  <button type="button" className="btn btn-primary" onClick={this.handleNewAdd}>New Add</button>
                  }
                  
                  <p><strong>Facility: </strong>{this.props.locationData.facility}</p>
                  <p><strong>Number of People:</strong> {this.props.locationData.other_players === 0 ? 0: this.props.locationData.other_players.length}</p>
                  <p><strong>Distance: </strong>{this.props.locationData.dist}</p>

          <GoogleMapComponent location={this.props.locationData.location}/>
          </div>
        )
    }
}
const styles = {
	cardHeader: {
		display: 'flex',
		height: '150px',
		width: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: '4px 8px',
		color: '#fff',
		backgroundColor: '#7aa2e2'
	},
	cardHeaderInfo: {
		display: 'flex',
		flexDirection: 'column'
	}
}

const SportIcon = ({ imgSrc }) => (
	<img
		style={{
			width: '100px',
			height: '60px',
			border: `3px solid black`,
		}}
		src={imgSrc}
		alt="Sport Icon"
	/>
);

export default NextGameCard;
