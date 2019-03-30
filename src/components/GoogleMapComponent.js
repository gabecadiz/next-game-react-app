import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"


class GoogleMapComponent extends Component{ 
render(){
    console.log(this.props);
    const MyMapComponent = compose(
      withProps({
        googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAp1KnuoMAfRa_XgUkNqaFswmL__SNCQMc&callback=initMap",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `20vh`, width: '60vw' }} />,
        mapElement: <div style={{ height: `20vh` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={this.props.currentLocation}
      >
        {props.isMarkerShown && <Marker position={this.props.currentLocation} />}
      </GoogleMap>
    )
    return(
      <React.Fragment>
        <MyMapComponent isMarkerShown />
      </React.Fragment>
    )
  }
}

export default GoogleMapComponent