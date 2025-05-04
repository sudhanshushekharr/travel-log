

// Using Mapbox
import  React, { useState, useEffect } from 'react';
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { listLogEntries } from './api';
const App=()=> {
  useEffect(() => {
    const fetchLogEntries = async () => {
      try {
        await listLogEntries();
      } catch (error) {
        console.error("Error fetching log entries:", error);
      }
    };
  
    fetchLogEntries();
  }, []);
  return (
    <Map
      // https://visgl.github.io/react-map-gl/docs/get-started/mapbox-tokens
      mapboxAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
      initialViewState={{
        longitude: 78.9629,
        latitude: 20.5937,
        zoom: 3
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default App;