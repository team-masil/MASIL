import FilterBox from "../FilterBox/FilterBox";
import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import styles from "./Map.module.css";

const Map = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    ))
  );
  return (
    <>
      <div className={styles.mapContainer}>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-A8RLy_YLQHLZcI9OrkxRWAM0XB9l0Es&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ width: `80%`, height: `500px`, padding: `2rem` }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
        <FilterBox />
      </div>
    </>
  );
};

export default Map;
