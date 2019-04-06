import React from "react";
import Slider from "react-slick";
import NextGameCard from "./NextGameCard";
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1

    };

    return (
      <Slider {...settings}>
        {this.props.locationData.map ( (locationData) =>
        <div>
         <NextGameCard key={locationData.gameId} locationData={locationData} userId={this.props.userId} updateStateData={this.props.updateStateData}/>
         </div>
        )}
      </Slider>
    );
  }
}

export default SimpleSlider;