import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";

class DateScheduler extends Component {
  render(){
    return(
        <DatePicker
          name="startDate"
          selected={this.props.startDate}
          onChange={this.props.changeDate}
          minDate={this.props.minDate}
          maxDate={addDays(new Date(), 7)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
    )
  }
}

export default DateScheduler