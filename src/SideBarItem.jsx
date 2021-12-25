import React from "react";
import { Typography } from "@mui/material";

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
      <Typography variant={"h6"} className="element-title">
        {data.component.text}
      </Typography>
    </div>
  );
};
export default SideBarItem;
