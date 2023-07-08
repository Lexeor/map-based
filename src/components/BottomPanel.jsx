import React from "react";

function BottomPanel() {
  return (
    <div className="control-panel bottom">
      <div className="panel bottom">
        <div className="panel-controls bottom">
          <div className="tag">#campain</div>
          <div className="tag">#tourism</div>
        </div>
      </div>
      <div className="circle">
        <button className="search">
          <i className="ri-search-line"></i>
        </button>
      </div>
    </div>
  );
}

export default BottomPanel;
