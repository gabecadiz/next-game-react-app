import React, {Component} from 'react'
import { Link } from "react-router-dom"
import posed, { PoseGroup } from 'react-pose'
import '../styles/LandingPage.css'


const Logo = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 2500 }
    }
  },
  exit: {
    x: 500,
    opacity: 0,
    transition: { duration: 1000 }
  }
});

const NextGame = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const SignIn = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Blurb = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class LandingPage extends Component{

  state = { isVisible: false };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isVisible: true
      });
    }, 1000);
  }

  render(){

    const { isVisible } = this.state;

    return(
      <div className="landing-container">
        <PoseGroup>
          {isVisible && [
            <NextGame key="next-game-title" className="landing-title">
              <h1 key="land">Anytime. Anywhere.
              <br></br>
              Find <i>Your</i></h1>
            </NextGame>
          ]}
        </PoseGroup>
        <PoseGroup>
          {isVisible && [
              <Logo key="next-game-logo" className="landing-logo">
                <img src="https://github.com/amilford87/next-game-react-app/blob/master/src/assets/next-game-logo.png?raw=true" alt="" />
              </Logo>
          ]}
        </PoseGroup>
        <PoseGroup>
          {isVisible && [
              <SignIn key="next-game-buttons" className="landing-buttons">
              <div>
                <Link to="/signup"> <button type="button" className="btn btn-primary landing-signup">Sign up</button></Link>
                </div>
                <div>
                <Link to="/login"> <button type="button" className="btn btn-success landing-login">Log In</button> </Link>
                </div>
              </SignIn>
          ]}
        </PoseGroup>
      <PoseGroup>
        {isVisible && [
        <Blurb key="blurb">
      <div className="blurbOne">
      <div><p className="firstParagraph">Find your next pick up game!<br></br><br></br>
      Next Game will find you multiple games close by <br></br>and will also suggest good locations for you <br></br>to start your own game.
      <br></br><br></br>
      You'll always have a place to play with Next Game.</p>
        </div></div>
        </Blurb>
        ]}
        </PoseGroup>
      </div>
    )
  }
}

export default LandingPage