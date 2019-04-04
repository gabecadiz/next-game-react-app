import React, { Component } from 'react';


class DaySelector extends Component{


    render(){

    
    return(
        <span className="ck-button" style={{ "backgroundColor": this.props.defaultChecked ? "rgb(18, 48, 185)" : "" }}>
        <label><input type="checkbox" value={this.props.value} defaultChecked={this.props.defaultChecked} onChange={this.props.onChange}/><span>{this.props.day}</span>
        </label>
        </span>
    )
  }

}

export default DaySelector