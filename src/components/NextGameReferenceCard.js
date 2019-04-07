import React, { Component } from 'react';
import '../NextGamePage.css'

class NextGameReferenceCard extends Component{

    backgroundImage = () => {
        let sport = this.props.locationData.sport
        switch(sport){
        case 'Basketball':
        return "basketball-bg";
        break;
        case 'Soccer':
        return "soccer-bg";
        break;
        case 'Volleyball':
        return "volleyball-big";
        break;
        case 'Ultimate Frisbee':
        return "ultimate-frisbee-bg";
        break;
        case 'Tennis':
        return "tennis-bg";
        break;
        default:
        console.log('no sports');
        }
    }

    



    render(){
        return(
            <div className="next-game-header">
                {/* <img src={this.props.locationData.image} alt="sports"/> */}
                <h3 className={this.backgroundImage()} id="next-game-reference-text">Game {this.props.game + 1}</h3>
            </div>
        )
    }

}

export default NextGameReferenceCard