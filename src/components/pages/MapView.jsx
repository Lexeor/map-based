import React from "react";

import UniPanel from "../UniPanel/UniPanel";
import TomTomMap from "../TomTomMap";

function MapView() {
  return (
    <main>
      {/* <TomTomMap /> */}
      <UniPanel
        side="left"
        position="top"
        circleComponent={
          <div className="circle">
            <img src="/images/user-placeholder.png" alt="user" />
          </div>
        }
      >
        <div className="tag">12.05.23</div>
        <div className="tag">12.06.23</div>
      </UniPanel>
      <UniPanel
        side="right"
        position="bottom"
        circleComponent={
          <button className="search">
            <i className="ri-search-line"></i>
          </button>
        }
      >
        <div className="tag">#campaign</div>
        <div className="tag">#tourism</div>
        <div className="tag">#tourism</div>
      </UniPanel>
    </main>
  );
}

export default MapView;
