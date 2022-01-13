import React, { useState, useCallback } from "react";

import DropZone from "./Layout/DropZone";
import TrashDropZone from "../../TrashDropZone";
import Row from "./Layout/Row";
import initialData from "./Config/initial-data";
import {
  handleMoveWithinParent,
  handleMoveToDifferentParent,
  handleMoveSidebarComponentIntoParent,
  handleRemoveItemFromLayout
} from "./Config/helpers";

import Constants, { SIDEBAR_ITEM, COMPONENT, COLUMN } from "./Config/constants";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHyperLink,
  selectInitialLayout,
  setComponent,
  setHyperLink,
  setInitialLayout,
  setMergeStylesMargin,
  setTab
} from "../../redux/mySlice";

const Container = () => {
  // const initialLayout = initialData.layout;
  const link = useSelector(selectHyperLink);
  console.log(link, "link");
  const initialLayout = useSelector(selectInitialLayout);
  console.log(initialLayout, "initialLayout");
  const dispatch = useDispatch();
  const initialComponents = initialData.components;
  const [layout, setLayout] = useState(initialLayout);

  console.log("out=>", layout);
  const [components, setComponents] = useState(initialComponents);
  const handleDropToTrashBin = useCallback(
    (dropZone, item) => {
      const splitItemPath = item.path.split("-");
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
    },
    [layout]
  );

  const handleDrop = useCallback(
    (dropZone, item) => {
      console.log("dropZone", dropZone);
      console.log("item", item);
      const splitDropZonePath = dropZone.path.split("-");
      const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");

      dispatch(setComponent(item.component.content));
      dispatch(setTab("2"));
      dispatch(setHyperLink(shortid.generate()));
      let component = null;
      switch (item.component.content) {
        case "Heading":
          component = "heading";
          break;
        case "HyperLink":
          component = { ...link };
          break;
        default:
          break;
      }

      const newItem = { id: item.id, type: item.type };
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
          newItem
        )
      );
    },
    [layout, components]
  );
  const renderRow = (row, currentPath) => {
    return (
      <Row
        key={row.id}
        data={row}
        handleDrop={handleDrop}
        components={components}
        path={currentPath}
        layout={layout}
      />
    );
  };

  return (
    <div className="body" style={{ width: "75%", marginLeft: " 325px" }}>
      <div className="pageContainer">
        <div className="page">
          {layout.map((row, index) => {
            const currentPath = `${index}`;

            return (
              <React.Fragment key={row.id}>
                <DropZone
                  data={{
                    path: currentPath,
                    childrenCount: layout.length
                  }}
                  onDrop={handleDrop}
                  path={currentPath}
                />
                {renderRow(row, currentPath)}
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
};
export default Container;
