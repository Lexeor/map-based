import React from "react";

function TopPanel() {
  return (
    <div className="control-panel top">
      <div className="panel top">
        <div className="panel-controls">
          <button className="month-selector-btn">June, 27</button>
          <button className="month-selector-btn">August, 18</button>
        </div>
      </div>
      <div className="circle">
        <img src="/images/user-placeholder.png" alt="user" />
      </div>
    </div>
  );
}

export default TopPanel;
