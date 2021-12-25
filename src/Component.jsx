import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { COMPONENT } from "./constants";
import ContentEditableText from "./ContentEditable";
import ImageUploadingApp from "./ImageUploading";

import { selectTag, setTab } from "./redux/mySlice";
const style = {
  border: "1px dashed black",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move"
};
const Component = ({ data, components, path }) => {
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

  const component = components[data.id];
  let tagEntry = `<${tag}>lalal</${tag}>`;

  if (component.content == "ImageUpload") {
    return <ImageUploadingApp />;
  }
  if (component.content == "Editor") {
    return <ContentEditableText />;
  }
  if (component.content == "Heading") {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: tagEntry
        }}
      ></div>
    );
  }

  console.log(component.content, "component.content");
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
