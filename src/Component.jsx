import React, { useRef, useMemo, memo } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { COMPONENT } from "./Components/EditorBuilder/Config/constants";
import ContentEditableText from "./Components/EditorBuilder/ComponentsEditor/ContentEditable";
import ImageUploadingApp from "./Components/EditorBuilder/ComponentsEditor/ImageUpload/ImageUploading";

import { setSelectedContent, setSetTrees } from "./redux/builderSlice";
import HyperLink from "./Components/EditorBuilder/ComponentsEditor/HyperLink";
import Heading from "./Components/EditorBuilder/ComponentsEditor/Heading";
// let lastIds;
const Component = memo(
  ({
    data,
    componentData,
    components,
    path,
    layout,
    key,
    index,
    rowIndex,
    item,
    column,
    setTree
  }) => {
    // console.log("path", path)
    const dispatch = useDispatch();

    const ref = useRef(null);
    const [{ isDragging }, drag] = useDrag({
      item: { type: COMPONENT, id: data.id, path },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    });

    const handleClick = (id) => {
      dispatch(setSelectedContent(id));
    };
    const opacity = isDragging ? 0 : 1;
    drag(ref);

    let top = 0;
    let right = 0;
    let bottom = 0;
    let left = 0;
    let paddTop = 0;
    let paddRight = 0;
    let paddBottom = 0;
    let paddLeft = 0;
    let fontFamily = "";
    let image = [];
    let color = "";
    let width = "";
    let align = "";
    const component = components[data.id];
    componentData.settings.map((item) => {
      Object.keys(item).forEach((key) => {
        if (key !== undefined) {
          switch (key) {
            case "marginTop":
              return (top = item.marginTop);
            case "marginRight":
              return (right = item.marginRight);
            case "marginBottom":
              return (bottom = item.marginBottom);
            case "marginLeft":
              return (left = item.marginLeft);
            case "paddingTop":
              return (paddTop = item.paddingTop);
            case "paddingRight":
              return (paddRight = item.paddingRight);
            case "paddingBottom":
              return (paddBottom = item.paddingBottom);
            case "paddingLeft":
              return (paddLeft = item.paddingLeft);
            case "fontFamily":
              return (fontFamily = item.fontFamily);
            case "color":
              return (color = item.color);
            case "width":
              return (width = item.width);
            case "text-align":
              return (align = item["text-align"]);
            default:
              return false;
          }
        }
      });
    });
    componentData.images.map((item) => {
      Object.keys(item).forEach((key) => {
        if (key !== undefined) {
          switch (key) {
            case "imageUpload":
              return (image = item.imageUpload);
          }
        }
      });
    });

    const parentStyles = {
      ["text-align"]: `${align}`
    };
    console.log(parentStyles, "parentStyles text");
    const styles = {
      margin: `${top}px  ${right}px ${bottom}px ${left}px`,
      padding: `${paddTop}px ${paddRight}px ${paddBottom}px ${paddLeft}px`,
      fontFamily: `${fontFamily}`,
      color: color,
      width: `${width}px`
    };
    setTree[rowIndex][column][item] = componentData.id;

    if (componentData) {
      switch (componentData.content) {
        case "ImageUpload":
          return (
            <ImageUploadingApp
              key={componentData.id}
              image={image}
              styles={styles}
              parentStyles={parentStyles}
            />
          );
        case "Editor":
          return <ContentEditableText />;
        case "Heading":
          let tagEntry = `<${componentData.tag}>Your Heading</${componentData.tag}>`;
          return (
            <Heading
              parentStyles={parentStyles}
              key={componentData.id}
              styles={styles}
              tagEntry={tagEntry}
              componentData={componentData}
              handleClick={(event) => handleClick(componentData.id)}
            />
          );
        case "HyperLink":
          return <HyperLink key={componentData.id} layout={layout} />;
        default:
          break;
      }
    } else {
      return <></>;
    }
  }
);

export default Component;
