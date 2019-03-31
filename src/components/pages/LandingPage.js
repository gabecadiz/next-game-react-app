import React, {Component} from 'react'
import { Link } from "react-router-dom"


class LandingPage extends Component{
  render(){
    return(
      <div>
        <h1>Hello Welcome to Next Game</h1>
        <Link to="/signup"> <button type="button" className="btn btn-primary">Sign up</button></Link>  |
        <Link to="/login"> <button type="button" className="btn btn-success">Log In</button> </Link>
      </div>
    )
  }
}

export default LandingPage