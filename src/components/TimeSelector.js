import React, { Component } from 'react';
import TimePickerWrapper from 'react-times';
import '../time-picker.css'


class TimeSelector extends Component{
    
    saveTime = (options) => {
        this.props.onTimeChange(options, this.props.day);
    }


    render(){

    
    return(
        <TimePickerWrapper theme="classic" onTimeChange={this.saveTime} time={this.props.selectedTime} />
    )
  }

}

export default TimeSelector