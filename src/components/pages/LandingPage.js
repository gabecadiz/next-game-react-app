import React, {Component} from 'react'
import posed, { PoseGroup } from 'react-pose';
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
              <h1 key="land">Find <i>Your</i></h1>
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
      </div>
    )
  }
}

export default LandingPage