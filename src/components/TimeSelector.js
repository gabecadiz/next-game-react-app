import React, { Component } from 'react';
import TimePicker from 'react-times';
import '../time-picker.css'


class TimeSelector extends Component{
    
    saveTime = (options) => {
        this.props.onTimeChange(options, this.props.day)
    }


    render(){

    
    return(
        <TimePicker onTimeChange={this.saveTime} theme="dark" time={this.props.selectedTime} />
    )
  }

}

export default TimeSelector