import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"


class MapPage extends Component{
  render(){
    const MyMapComponent = compose(
      withProps({
        googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAp1KnuoMAfRa_XgUkNqaFswmL__SNCQMc&callback=initMap",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `90vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: 43.6532, lng: -79.3832 }} />}
      </GoogleMap>
    )
    return(
      <React.Fragment>
        <MyMapComponent isMarkerShown />
      </React.Fragment>
    )
  }
}

export default MapPage
