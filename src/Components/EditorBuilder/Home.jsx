import React, {useCallback, useState, memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import shortid from "shortid";
import {
  selectHeading,
  selectInitialLayout,
  setSelectedContent,
  setContent,
  setTab, setSetTrees
} from "../../redux/builderSlice";
import {COLUMN, COMPONENT, SIDEBAR_ITEM} from "./Config/constants";
import {
  handleMoveSidebarComponentIntoParent,
  handleMoveToDifferentParent,
  handleMoveWithinParent,
  handleRemoveItemFromLayout
} from "./Config/helpers";
import initialData from "./Config/initial-data";
import DropZone from "./Layout/DropZone";
import Row from "./Layout/Row";

const Container = memo(() => {
  // const initialLayout = initialData.layout;
  /// const link = useSelector(selectHyperLink)
  const heading = useSelector(selectHeading);

  // console.log(link, "link");
  const initialLayout = useSelector(selectInitialLayout);
  // console.log(initialLayout, 'initialLayout')
  const dispatch = useDispatch();
  const initialComponents = initialData.components;
  const [layout, setLayout] = useState(initialLayout);

  // console.log("out=>", layout);
  const [components, setComponents] = useState(initialComponents);
  const handleDropToTrashBin = useCallback(
    (dropZone, item) => {
      const splitItemPath = item.path.split("-");
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
    },
    [layout]
  );
  let generateId = null;

  const handleDrop = useCallback(
    (dropZone, item) => {
      const splitDropZonePath = dropZone.path.split("-");
      const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");
      generateId = shortid.generate();
      let component = null;

      dispatch(setSelectedContent(generateId));
      dispatch(setTab("2"));

      switch (item.component.content) {
        case "Heading":
          component = {};
          component.id = generateId;

          dispatch(
            setContent({
              content: item.component.content,
              generateId: generateId,
              tag: "h3"
            })
          );
          break;
        case "Editor":
          component = {};
          component.id = generateId;

          dispatch(
            setContent({
              content: item.component.content,
              generateId: generateId,
              tag: "h3"
            })
          );

          break;
        case "ImageUpload":
          component = {};
          component.id = generateId;

          dispatch(
            setContent({
              content: item.component.content,
              generateId: generateId,
              tag: "h3"
            })
          );
        default:
          break;
      }

      const newItem = {id: item.id, type: item.type};
      if (item.type === COLUMN) {
        newItem.children = item.children;
      }

      if (item.type === SIDEBAR_ITEM) {
        // 1. Move sidebar item into page

        const newComponent = {
          id: shortid.generate(),
          // id: newId,
          ...item.component
        };
        const newItem = {
          id: newComponent.id,
          type: COMPONENT,
          component
        };

        setComponents({
          ...components,
          [newComponent.id]: newComponent
        });
        setLayout(
          handleMoveSidebarComponentIntoParent(
            layout,
            splitDropZonePath,
            newItem
          )
        );
        return;
      }

      // move down here since sidebar items dont have path
      const splitItemPath = item.path.split("-");
      const pathToItem = splitItemPath.slice(0, -1).join("-");
      // 2. Pure move (no create)
      if (splitItemPath.length === splitDropZonePath.length) {
        // 2.a. move within parent
        if (pathToItem === pathToDropZone) {
          setLayout(
            handleMoveWithinParent(layout, splitDropZonePath, splitItemPath)
          );
          return;
        }

        // 2.b. OR move different parent
        // TODO FIX columns. item includes children
        setLayout(
          handleMoveToDifferentParent(
            layout,
            splitDropZonePath,
            splitItemPath,
            newItem
          )
        );
        return;
      }

      // 3. Move + Create
      setLayout(
        handleMoveToDifferentParent(
          layout,
          splitDropZonePath,
          splitItemPath,
          newItem,
          generateId
        )
      );
    },
    [layout, components]
  );

  const setTree = [];
  const renderRow = (row, currentPath, generateId, index, setTree) => {
    setTree[index].push(index)

    return (
      <Row
        generateId={generateId}
        key={currentPath}
        rowIndex={index}
        data={row}
        setTree={setTree}
        handleDrop={handleDrop}
        components={components}
        path={currentPath}
        layout={layout}
      />
    );
  };

  return (
    <div className="body " style={{width: "100%", marginLeft: " 325px"}}>
      <div className="pageContainer ">
        <div className="page">
          {layout.map((row, index) => {
            setTree[index] = []
            // console.log(setTree)
            // dispatch(setSetTrees(setTree))
            const currentPath = `${index}`;
            return (
              <React.Fragment key={index}>
                <DropZone
                  data={{
                    path: currentPath,
                    id: generateId,
                    childrenCount: layout.length
                  }}
                  onDrop={handleDrop}
                  path={currentPath}
                />
                {renderRow(row, currentPath, generateId, index, setTree)}
              </React.Fragment>
            );
          })}
          <DropZone
            data={{
              path: `${layout.length}`,
              childrenCount: layout.length
            }}
            onDrop={handleDrop}
            isLast
          />
        </div>
      </div>
    </div>
  );
});
export default Container;
