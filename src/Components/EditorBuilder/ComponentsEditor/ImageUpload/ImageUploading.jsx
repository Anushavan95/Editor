import React from "react";
import { useSelector } from "react-redux";
import {
  selectChecked,
  selectLinkValue,
  selectSize
} from "../../../../redux/builderSlice";

export default function ImageUploadingApp({
  image,
  styles,
  parentStyles,
  componentData,
  handleClick
}) {
  const linkValue = useSelector(selectLinkValue);
  const checked = useSelector(selectChecked);
  const sizeImage = useSelector(selectSize);
  const imageStyles = {
    width: sizeImage == "" ? "100%" : sizeImage
  };
  console.log(componentData, "componentData image");
  return (
    <div style={parentStyles}>
      {linkValue !== "" ? (
        <a href={linkValue} target={checked ? "_blank" : ""}>
          <img
            src={image}
            alt="Image_Upload"
            style={imageStyles}
            // id={componentData.id}
          />
        </a>
      ) : (
        <React.Fragment>
          <img
            // id={componentData.id}
            src={image}
            // onClick={() => handleClick(componentData.id)}
            alt="Image_Upload"
            className="image-upload"
            style={styles}
          />
        </React.Fragment>
      )}
    </div>
  );
}
