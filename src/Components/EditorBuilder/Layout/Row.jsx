import React, {memo, useRef} from "react";
import {useDrag} from "react-dnd";
import {ROW} from "../Config/constants";
import DropZone from "./DropZone";
import Column from "./Column";
import {
  selectedContent,
  selectChildren,
  setSelectedContent
} from "../../../redux/builderSlice";
import {useSelector} from "react-redux";

const style = {};
const Row = memo((
  {data, components, handleDrop, path, layout, generateId, rowIndex, setTree},
  props
) => {

  /// console.log(row,'rowrowrowrowrowrowrowrowrow')
  const selectId = useSelector(selectedContent);
  // console.log(props, 'rowid ')
  const ref = useRef(null);
  const [{isDragging}, drag] = useDrag({
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
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  const renderColumn = (column, currentPath, selectId, id, rowIndex, setTree) => {
    if (setTree[rowIndex]) {
      setTree[rowIndex][id] = [...setTree[rowIndex][id], id]
    }

    return (
      <Column
        key={currentPath}
        data={column}
        column={id}
        rowIndex={rowIndex}
        setTree={setTree}
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
      style={{...style, opacity}}
      className="base draggable row-editor"
    >
      <div id={data.id} className="columns">
        {data.children.map((column, id) => {
          if (setTree[rowIndex]) {
            console.log(setTree[rowIndex][id], "setTree[rowIndex][id]")
            console.log(setTree[rowIndex], "setTree[rowIndex]")
            setTree[rowIndex][id] = []
          }
          const currentPath = `${path}-${id}`;
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
              {renderColumn(column, currentPath, selectId, id, rowIndex, setTree)}
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
});
export default Row;
