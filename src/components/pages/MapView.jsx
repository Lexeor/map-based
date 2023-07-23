import React from "react";

import UniPanel from "../UniPanel";
import TopPanel from "../TopPanel";
import TomTomMap from "../TomTomMap";

function MapView() {
  return (
    <main>
      {/* <TomTomMap /> */}
      <UniPanel side="left" position="top" />
      <UniPanel side="right" position="bottom" />
    </main>
  );
}

export default MapView;
