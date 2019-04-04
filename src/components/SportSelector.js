import React, { Component } from 'react';
import Select from 'react-select';

class SportSelector extends Component{
  render(){

    
    
    let sports = null
    
    if (this.props.sportsPicked){
      sports = []
      this.props.sportsPicked.map( s => {
        sports.push({ value: s, label: s })
      })
      console.log("this is mapped sports: ",sports)
    }

    const sportOptions = [
      { value: 'Basketball', label: 'Basketball' },
      { value: 'Volleyball', label: 'Volleyball'  },
      { value: 'Soccer', label: 'Soccer' },
      { value: 'Ultimate-frisbee', label: 'Ultimate Frisbee' },
      { value: 'Tennis', label: 'Tennis' },
    ]
    return(
        <Select
          onChange={this.props.changeSport}
          value={sports}
          isMulti
          name="colors"
          options= {sportOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          id={Math.random()}
        />
    )
  }

}

export default SportSelector