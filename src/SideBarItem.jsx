import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data }) => {
  const [{ opacity, className }, drag] = useDrag({
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? "dragged" : 1,
      className: monitor.isDragging() ? "dragged" : ""
    })
  });
  return (
    <div className={`sideBarItem ${className}`} ref={drag} style={{ opacity }}>
      {data.component.type}
    </div>
  );
};
export default SideBarItem;
