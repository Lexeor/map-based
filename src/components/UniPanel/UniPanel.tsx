import "./uni-panel.css";

type UniPanelProps = {
  side: "left" | "right";
  position: "top" | "bottom";
  circleComponent: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
};

function UniPanel({
  side = "left",
  position = "top",
  circleComponent,
  children,
}: UniPanelProps) {
  return (
    <div className={`uni-wrapper ${position} ${side}`}>
      <div className={`uni-panel ${position} ${side}`}>
        <div className={`uni-panel__body ${position} ${side}`}>{children}</div>
      </div>
      <div className={`uni-circle ${side}`}>{circleComponent}</div>
    </div>
  );
}

export default UniPanel;
