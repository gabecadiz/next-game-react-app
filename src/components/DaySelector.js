import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class DaySelector extends Component{


    render(){

    
    return(
        <div className="ck-button day-button">
        <label><input type="checkbox" value={this.props.value} checked={this.props.checked} defaultChecked={this.props.defaultChecked} onChange={this.props.onChange}/><span className='day'>{ this.props.checked ? <FontAwesomeIcon icon="check-circle"/> : <FontAwesomeIcon icon="times-circle"/>} {this.props.day} </span>
        </label>
        </div>
    )
  }

}

export default DaySelector