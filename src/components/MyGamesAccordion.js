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
  render(){
    return(
      <Accordion>

        {this.props.savedGames.map( locationData => 
          <AccordionItem key={locationData.id}>
            <AccordionItemTitle>
              <p><strong>{locationData.facility}</strong></p>
              <p>{locationData.time} - {locationData.date}</p>
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