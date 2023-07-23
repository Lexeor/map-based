type UniPanelProps = {
  side: "left" | "right";
  position: "top" | "bottom";
};

function UniPanel({ side = "left", position = "top" }: UniPanelProps) {
  return (
    <div className={`control-panel ${position} ${side}`}>
      <div className={`panel ${position} ${side}`}>
        <div className={`panel-body ${position} ${side}`}>
          <div className="tag">#campaign</div>
          <div className="tag">#tourism</div>
        </div>
      </div>
      <div className={`circle ${side}`}>
        <button className="search">
          <i className="ri-search-line"></i>
        </button>
      </div>
    </div>
  );
}

export default UniPanel;
