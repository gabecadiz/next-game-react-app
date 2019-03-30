import React, { Component } from 'react';
import AccordionCard from './AccordionCard'

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import '../fancy-example.css';

class ExampleAccordion extends Component{
  render(){
    return(
      <Accordion>

        {this.props.locationsData.map( locationData => 
          <AccordionItem>
            <AccordionItemTitle>
              <p>{locationData.name}</p><p>{locationData.time}</p>
            </AccordionItemTitle>
            <AccordionItemBody>
              <AccordionCard locationData={locationData}/>
            </AccordionItemBody>
          </AccordionItem>
        )}
      </Accordion>
    )
  }
}





export default ExampleAccordion