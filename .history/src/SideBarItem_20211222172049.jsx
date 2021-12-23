import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addIMages, postHtmlDataAsync } from "./redux/builderSlice";

const SideBarItem = ({ data }) => {
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  const addIMage = useSelector(addIMages);
  const dispatch = useDispatch();
  const myclick = () => {
    dispatch(postHtmlDataAsync(JSON.stringify({ data: addIMage })));
  };
  return (
    <div>
      <div className="sideBarItem" ref={drag} style={{ opacity }}>
        {data.component.type}
      </div>
      <button onClick={myclick}> click</button>
    </div>
  );
};
export default SideBarItem;
