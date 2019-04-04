import React, { Component } from 'react';
import Select from 'react-select';

class SportSelector extends Component{
  render(){

    const sports = [{value: 'basketball', label: 'Basketball'}, {value: 'volleyball', label: 'Volleyball'}]

    const sportOptions = [
      { value: 'basketball', label: 'Basketball' },
      { value: 'volleyball', label: 'Volleyball'  },
      { value: 'soccer', label: 'Soccer' },
      { value: 'ultimate-frisbee', label: 'Ultimate Frisbee' },
      { value: 'tennis', label: 'Tennis' },
    ]
    return(
        <Select
          onChange={this.props.changeSport}
          defaultValue={sports}
          isMulti
          name="colors"
          options= {sportOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
    )
  }

}

export default SportSelector