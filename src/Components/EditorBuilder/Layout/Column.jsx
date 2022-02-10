import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import Component from "../../../Component";
import { COLUMN } from "../Config/constants";
import DropZone from "./DropZone";

const style = {};
const Column = ({ data, components, handleDrop, path, layout, id }) => {
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

  const opacity = isDragging ? 0 : 1;
  drag(ref);
  const renderComponent = (component, currentPath) => {
    return (
      <Component
        id={id}
        key={component.id}
        data={component}
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
