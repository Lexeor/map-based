import React from "react";

import BottomPanel from "../BottomPanel";
import TopPanel from "../TopPanel";
import TomTomMap from "../TomTomMap";

function MapView() {
  return (
    <main>
      <TomTomMap />
      <TopPanel />
      <BottomPanel />
    </main>
  );
}

export default MapView;
