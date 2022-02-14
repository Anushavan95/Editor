import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { COMPONENT } from "./Components/EditorBuilder/Config/constants";
import ContentEditableText from "./Components/EditorBuilder/ComponentsEditor/ContentEditable";
import ImageUploadingApp from "./Components/EditorBuilder/ComponentsEditor/ImageUploading";

import { selectChildren, setSelectedContent } from "./redux/builderSlice";
import HyperLink from "./Components/EditorBuilder/ComponentsEditor/HyperLink";
import Heading from "./Components/EditorBuilder/ComponentsEditor/Heading";

const style = {
  border: "1px dashed black",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move"
};

const Component = ({ data, componentData, components, path, layout }) => {
  const dispatch = useDispatch();

  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  console.log(componentData, "componentData121212");
  const handleClick = (id) => {
    console.log(id);
    //  console.log(e.target.id,'idididid')
    dispatch(setSelectedContent(id));
    // console.log(e.target)
  };
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  // const styles = {
  //   margin    : `${top}px  ${right}px ${bottom}px ${left}px`,
  //   padding   : `${P_top}px  ${P_right}px ${P_bottom}px ${P_left}px`,
  //   fontFamily: font,
  //   color     : color,
  // }

  // Object.values(children)

  const component = components[data.id];
  let a = componentData.settings.map((item) => {
    return item;
  });

  const styleMargin = {
    // mTop: `${a[0].marginTop}px`,
    // mRight: `${a[1]}px`,
    // mBottom: `${a[2]}px`,
    // mLeft: `${a[3]}px`
  };
  console.log(styleMargin, "styleMargin");

  /// console.log(selectedComponentData,'selectedComponentData')
  if (componentData) {
    switch (componentData.content) {
      case "ImageUpload":
        return <ImageUploadingApp />;
      case "Editor":
        return <ContentEditableText />;
      case "Heading":
        let tagEntry = `<${componentData.tag}>Your Heading</${componentData.tag}>`;
        return (
          <Heading
            styleMargin={styleMargin}
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

  // return (
  //     <div
  //         ref={ref}
  //         style={{...style, opacity}}
  //         className="component draggable"
  //     >
  //         <div>{/*{data.id}*/}</div>
  //         <div
  //             contentEditable={true}
  //             dangerouslySetInnerHTML={{__html: component.content}}
  //         />
  //     </div>
  // )
};
export default Component;
