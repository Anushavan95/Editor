import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

const SideBarItem = ({ data }) => {
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div className="sideBarItem" ref={drag} style={{ opacity }}>
        {data.component.type}
      </div>
      <button> click</button>
    </div>
  );
};
export default SideBarItem;
