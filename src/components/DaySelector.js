import React, { Component } from 'react';


class DaySelector extends Component{


    render(){

    
    return(
        <span className="ck-button">
        <label><input type="checkbox" value={this.props.value} checked={this.props.checked} defaultChecked={this.props.defaultChecked} onChange={this.props.onChange}/><span>{this.props.day}</span>
        </label>
        </span>
    )
  }

}

export default DaySelector