import React, { Component } from 'react';
import MyGamesCard from './MyGamesCard'

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import '../fancy-example.css';

class MyGamesAccordion extends Component{
  emoji = (playerSport) => {
          switch(playerSport){
            case 'Basketball':
            return "🏀";
            case 'Soccer':
            return "⚽";
            case 'Volleyball':
            return "🏐";
            case 'Ultimate-frisbee':
            return "🥏";
            case 'Tennis':
            return "🎾";
            default:
            console.log('no sports');
            }

    console.log(this.props.savedGames)
    }



  render(){
    return(
      <Accordion className='accordion'>

        {this.props.savedGames.map( locationData => 
          <AccordionItem key={locationData.id} className='accordion_item'>
            <AccordionItemTitle>
              <div className="saved-games-header-grid">
              <p className="saved-games-header-emoji">{this.emoji(locationData.sport)}</p>
              <p className="saved-games-header-facility"><strong>{locationData.facility}</strong></p>
              <p className="saved-games-header-date">{locationData.time} - {locationData.date.substring(0, locationData.date.length - 5)}</p>
              </div>
            </AccordionItemTitle>
            <AccordionItemBody>
              <MyGamesCard gameId={locationData.id} locationData={locationData} userId={this.props.userId} changeLoadedStatus={this.props.changeLoadedStatus}/>
            </AccordionItemBody>
          </AccordionItem>
        )}
      </Accordion>
    )
  }
}

export default MyGamesAccordion