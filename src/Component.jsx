import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { COMPONENT } from "./constants";
import ContentEditableText from "./ContentEditable";
import ImageUploadingApp from "./ImageUploading";

import {
  selectMarginBottom,
  selectMarginLeft,
  selectMarginObj,
  selectMarginRight,
  selectMarginTop,
  selectPaddingBottom,
  selectPaddingLeft,
  selectPaddingRight,
  selectPaddingTop,
  selectTag,
  setTab
} from "./redux/mySlice";
const style = {
  border: "1px dashed black",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move"
};
const Component = ({ data, components, path }) => {
  const margin = useSelector(selectMarginObj);
  const top = useSelector(selectMarginTop);
  const right = useSelector(selectMarginRight);
  const bottom = useSelector(selectMarginBottom);
  const left = useSelector(selectMarginLeft);

  const Ptop = useSelector(selectPaddingTop);
  const Pright = useSelector(selectPaddingRight);
  const Pbottom = useSelector(selectPaddingBottom);
  const Pleft = useSelector(selectPaddingLeft);
  console.log(margin, "margin");

  const dispatch = useDispatch();
  const tag = useSelector(selectTag);
  console.log(tag);
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);
  const meginto = {
    margin: `${top}px  ${right}px ${bottom}px ${left}px`,
    padding: `${Ptop}px  ${Pright}px ${Pbottom}px ${Pleft}px`
  };

  // const padd = {
  //
  // };
  const component = components[data.id];
  console.log(components, "componentds");
  let tagEntry = `<${tag}>Your Heading</${tag}>`;
  if (component.content == "ImageUpload") {
    return <ImageUploadingApp />;
  }
  if (component.content == "Editor") {
    return <ContentEditableText />;
  }
  if (component.content == "Heading") {
    return (
      <div
        style={meginto}
        contentEditable={true}
        dangerouslySetInnerHTML={{
          __html: tagEntry
        }}
      />
    );
  }

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="component draggable"
    >
      <div>{data.id}</div>
      <div
        contentEditable={true}
        dangerouslySetInnerHTML={{ __html: component.content }}
      ></div>
    </div>
  );
};
export default Component;
