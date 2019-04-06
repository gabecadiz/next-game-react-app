import React, { Component } from 'react';

class NextGameReferenceCard extends Component{


    render(){
        return(
            <div>
                {/* <img src={this.props.locationData.image} alt="sports"/> */}
                <p>{this.props.locationData.sport}</p>
                <p>{this.props.locationData.date}</p>
                <p>{this.props.locationData.time}</p>
            </div>
        )
    }

}

export default NextGameReferenceCard