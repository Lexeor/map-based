import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [lat, setLat] = useState(40.3963904);
  const [lon, setLon] = useState(49.8925568);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    setLat(crd.latitude);
    setLon(crd.longitude);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
    // eslint-disable-next-line
  }, []);

  return [lat, lon];
}
