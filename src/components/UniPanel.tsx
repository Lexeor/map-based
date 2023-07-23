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
    <div className={`control-panel ${position} ${side}`}>
      <div className={`panel ${position} ${side}`}>
        <div className={`panel-body ${position} ${side}`}>{children}</div>
      </div>
      <div className={`circle ${side}`}>{circleComponent}</div>
    </div>
  );
}

export default UniPanel;
