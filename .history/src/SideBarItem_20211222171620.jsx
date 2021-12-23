import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data }) => {
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  return (
    <div>
      <div className="sideBarItem" ref={drag} style={{ opacity }}>
        {data.component.type}
      </div>
    </div>
  );
};
export default SideBarItem;
