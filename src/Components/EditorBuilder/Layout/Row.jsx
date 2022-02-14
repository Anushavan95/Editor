import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "../Config/constants";
import DropZone from "./DropZone";
import Column from "./Column";
import {
  selectedContent,
  selectTag,
  setSelectedContent
} from "../../../redux/builderSlice";
import { useSelector } from "react-redux";

const style = {};
const Row = (
  { data, components, handleDrop, path, layout, generateId },
  props
) => {
  const selectId = useSelector(selectedContent);
  // console.log(props, 'rowid ')
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ROW,
      id: selectId,
      children: data.children,
      path,
      generateId
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const componentData = useSelector(selectTag);
  const getData = (id) => {
    let selectedComponentData = componentData.map((item) => {
      ///   console.log(data.component.id,Object.values(item)[0].id,'data.component.id')
      if (Object.values(item)[0].id === id) {
        return Object.values(item)[0];
      }
    });
    selectedComponentData = selectedComponentData[0];
    return selectedComponentData;
  };
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  const renderColumn = (column, currentPath) => {
    // console.log(column.id)
    // let componentData = getData(column.id)
    // console.log(componentData)
    return (
      <Column
        key={column.id}
        data={column}
        components={components}
        handleDrop={handleDrop}
        path={currentPath}
        layout={layout}
      />
    );
  };

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="base draggable row-editor"
    >
      {selectId} alala
      <div id={data.id} className="columns">
        {data.children.map((column, index) => {
          console.log(column, "col");
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={column.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length
                }}
                onDrop={handleDrop}
                className="horizontalDrag"
              />
              {renderColumn(column, currentPath)}
            </React.Fragment>
          );
        })}
        <DropZone
          data={{
            path: `${path}-${data.children.length}`,
            childrenCount: data.children.length
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
          isLast
        />
      </div>
    </div>
  );
};
export default Row;
