import React, { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import useGeolocation from "../hooks/useGeolocation";
import { markers } from "../data/mock-markers";

function TomTomMap() {
  const API_KEY = process.env.REACT_APP_TOMTOM_API_KEY;
  const mapElement = useRef();
  const [lat, lon] = useGeolocation();
  const [loaded, setLoaded] = useState(false);
  const mapZoom = 11;
  // eslint-disable-next-line
  const [map, setMap] = useState({});

  if (loaded) {
    addMarker("#0fd6fe", lon, lat);
    markers.forEach((marker) =>
      addMarker(marker.color, marker.lon, marker.lat)
    );
  }

  useEffect(() => {
    let map = tt.map({
      key: API_KEY,
      container: mapElement.current,
      center: [lon, lat],
      zoom: mapZoom,
      language: "en-GB",
    });

    setMap(() => {
      setLoaded(true);
      return map;
    });
    return () => map.remove();
    // eslint-disable-next-line
  }, []);

  function addMarker(_color, _lon, _lat) {
    const marker = new tt.Marker({
      color: _color,
      width: "40",
      height: "40",
    })
      .setLngLat([_lon, _lat])
      .addTo(map);

    const popup = new tt.Popup({
      top: [0, 0],
      bottom: [0, -50],
      left: [25, -25],
      right: [-25, -35],
    }).setHTML("Current location");
    marker.setPopup(popup);
  }

  return (
    lat && <div ref={mapElement} className="mapDiv" onLoad={addMarker}></div>
  );
}

export default TomTomMap;
