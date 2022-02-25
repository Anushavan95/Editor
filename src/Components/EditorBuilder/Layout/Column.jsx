import React, {memo, useRef} from "react";
import {useDrag} from "react-dnd";
import Component from "../../../Component";
import {COLUMN} from "../Config/constants";
import DropZone from "./DropZone";
import {useSelector} from "react-redux";
import {
  selectChildren,
  setSelectedContent,
} from "../../../redux/builderSlice";

const style = {};
const Column = memo(({data, components, handleDrop, path, key, layout, column, rowIndex, setTree}) => {
  const ref = useRef(null);

  const [{isDragging}, drag] = useDrag({
    item: {
      type: COLUMN,
      id: data.id,
      children: data.children,
      path,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const componentData = useSelector(selectChildren);
  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const handleGetData = (component) => {
    return componentData.map((item) => {
      if (Object.values(item)[0].id === component.component.id) {
        return Object.values(item)[0];
      }
    });
  };


  const renderComponent = (component, currentPath, item) => {
    let componentData = handleGetData(component);
    let filtered = componentData.filter(function (x) {
      return x !== undefined;
    });


    return (
      <Component
        key={currentPath}
        data={component}
        column={column}
        rowIndex={rowIndex}
        item={item}
        componentData={filtered[0]}
        components={components}
        path={currentPath}
        layout={layout}
        setTree={setTree}
      />
    );
  };

  return (
    <div
      ref={ref}
      key={path}
      style={{...style, opacity}}
      className="base draggable column"
    >

      {data.children.map((component, item) => {
        // console.log("component",component)
        const currentPath = `${path}-${item}`;
        setTree[rowIndex][column][item] = []
        return (
          <>

            <React.Fragment key={component.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length,
                }}
                onDrop={handleDrop}
              />
              {renderComponent(component, currentPath, item)}
            </React.Fragment></>
        );
      })}
      <DropZone
        data={{
          path: `${path}-${data.children.length}`,
          childrenCount: data.children.length,
        }}
        onDrop={handleDrop}
        isLast
      />
    </div>
  );
});
export default Column;

// let ComponentsArray = [
//   {
//     row: [{}]
//   },
//   {},
//   {}
// ];
