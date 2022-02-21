import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { COMPONENT } from "./Components/EditorBuilder/Config/constants";
import ContentEditableText from "./Components/EditorBuilder/ComponentsEditor/ContentEditable";
import ImageUploadingApp from "./Components/EditorBuilder/ComponentsEditor/ImageUploading";

import { setSelectedContent } from "./redux/builderSlice";
import HyperLink from "./Components/EditorBuilder/ComponentsEditor/HyperLink";
import Heading from "./Components/EditorBuilder/ComponentsEditor/Heading";
// let lastIds;
const Component = ({ data, componentData, components, path, layout, index, row, item, column ,setTree }) => {
  // console.log("path", path)
  const dispatch = useDispatch();
  // lastIds = path.split("-");
  //  lastIds.push(componentData.id)
  // console.log("lastIds ______________" , lastIds)

  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
///  console.log(componentData, "componentData121212");
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

  const styles = {
    margin: `${top}px  ${right}px ${bottom}px ${left}px`,
    padding: `${paddTop}px ${paddRight}px ${paddBottom}px ${paddLeft}px`,
    fontFamily: `${fontFamily}`,
    color: color
  };

 /// console.log(path,'pathpathpathpathpath')
  // const currentPath = `${path}-${row}`;
  // console.log(currentPath,'currentPath')
  //
  const newPath = path.split('-')
  // console.log(index,'index')
  // console.log(newPath,'newPath')
  // console.log(newPath[index -1])
// const setTree = [path[index]];
//
//
//   // console.log(filtered)
//   console.log(typeof setTree[index]);
//   //
//      if (typeof setTree[index] === 'number' ) {
//        setTree[index] = [component.component.index]
//      }   else {
//        console.log("minchev push",setTree[index])
//        setTree[index].push(component.component.index)
//      }

     // console.log(setTree[path[index]],'COLUMN')

  console.log(row,column,item )
  setTree[row][column][item] = componentData.id ;

  console.log(componentData)
  if (componentData) {
    switch (componentData.content) {
      case "ImageUpload":
        console.log("ImageUpload")

        return <ImageUploadingApp />;
      case "Editor":
        return <ContentEditableText />;
      case "Heading":

        // const currentPath = `${path}`;
        // const currentPath = `${path}-${index}`;

        // const dataPath = currentPath.split('-');
        // console.log(dataPath,'dataPathdataPathdataPathdataPath')
        let tagEntry = `<${componentData.tag}>Your Heading</${componentData.tag}>`;

        // lastIds.push(componentData.id)

          // lastIds = [...lastIds, componentData.id]

        // console.log("lastIds ______________" , lastIds)

        return (
            <>
              {index}
              <Heading
                  styles={styles}
                  tagEntry={tagEntry}
                  componentData={componentData}
                  handleClick={(event) => handleClick(componentData.id)}
              />

            </>
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
