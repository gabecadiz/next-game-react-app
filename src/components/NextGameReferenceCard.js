import React, { Component } from 'react';
import '../NextGamePage.css'

class NextGameReferenceCard extends Component{

    backgroundImage = () => {
        let sport = this.props.locationData.sport
        switch(sport){
        case 'Basketball':
        return "basketball-bg";
        case 'Soccer':
        return "soccer-bg";
        case 'Volleyball':
        return "volleyball-bg";
        case 'Ultimate-frisbee':
        return "ultimate-frisbee-bg";
        case 'Tennis':
        return "tennis-bg";
        default:
        console.log('no sports');
        }
    }

    



    render(){
        return(
            <div className="next-game-header">
                <h3 className={this.backgroundImage()} id="next-game-reference-text">Game {this.props.game + 1}</h3>
            </div>
        )
    }

}

export default NextGameReferenceCard