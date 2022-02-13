import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import Component from "../../../Component";
import { COLUMN } from "../Config/constants";
import DropZone from "./DropZone";
import { useSelector } from "react-redux";
import { selectTag, setSelectedContent } from "../../../redux/builderSlice";

const style = {};
const Column = ({ data, components, handleDrop, path, layout }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: COLUMN,
      id: data.id,
      children: data.children,
      path
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  const componentData = useSelector(selectTag);
  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const handleGetData = (component) => {
    return componentData.map((item) => {
      if (Object.values(item)[0].id === component.component.id) {
        ///  console.log(Object.values(item)[0])
        return Object.values(item)[0];
      }
    });
  };

  const renderComponent = (component, currentPath) => {
    let componentData = handleGetData(component);
    let filtered = componentData.filter(function (x) {
      return x !== undefined;
    });
    ///   console.log(filtered[0])
    return (
      <Component
        key={component.id}
        data={component}
        componentData={filtered[0]}
        components={components}
        path={currentPath}
        layout={layout}
      />
    );
  };

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="base draggable column"
    >
      {data.id}
      {data.children.map((component, index) => {
        const currentPath = `${path}-${index}`;
        return (
          <React.Fragment key={component.id}>
            <DropZone
              data={{
                path: currentPath,
                childrenCount: data.children.length
              }}
              onDrop={handleDrop}
            />
            {renderComponent(component, currentPath)}
          </React.Fragment>
        );
      })}
      <DropZone
        data={{
          path: `${path}-${data.children.length}`,
          childrenCount: data.children.length
        }}
        onDrop={handleDrop}
        isLast
      />
    </div>
  );
};
export default Column;

// let ComponentsArray = [
//   {
//     row: [{}]
//   },
//   {},
//   {}
// ];
