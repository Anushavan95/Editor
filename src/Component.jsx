import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { COMPONENT } from "./Components/EditorBuilder/Config/constants";
import ContentEditableText from "./Components/EditorBuilder/ComponentsEditor/ContentEditable";
import ImageUploadingApp from "./Components/EditorBuilder/ComponentsEditor/ImageUploading";

import { setSelectedContent } from "./redux/builderSlice";
import HyperLink from "./Components/EditorBuilder/ComponentsEditor/HyperLink";
import Heading from "./Components/EditorBuilder/ComponentsEditor/Heading";

const Component = ({ data, componentData, components, path, layout }) => {
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
  console.log(image, "lalala");
  const styles = {
    margin: `${top}px  ${right}px ${bottom}px ${left}px`,
    padding: `${paddTop}px ${paddRight}px ${paddBottom}px ${paddLeft}px`,
    fontFamily: `${fontFamily}`,
    color: color
  };

  setTree[row][column][item] = componentData.id ;

  console.log(componentData)
  if (componentData) {
    switch (componentData.content) {
      case "ImageUpload":
        return <ImageUploadingApp image={image} />;
      case "Editor":
        return <ContentEditableText />;
      case "Heading":
        let tagEntry = `<${componentData.tag}>Your Heading</${componentData.tag}>`;
        return (
          <Heading
            styles={styles}
            tagEntry={tagEntry}
            componentData={componentData}
            handleClick={(event) => handleClick(componentData.id)}
          />
        );
      case "HyperLink":
        return <HyperLink layout={layout} />;
      default:
        break;
    }
  } else {
    return <></>;
  }

};
export default Component;
