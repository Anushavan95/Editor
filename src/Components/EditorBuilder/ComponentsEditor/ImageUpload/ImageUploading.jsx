import React from "react";
import { useSelector } from "react-redux";
import {
  selectChecked,
  selectLinkValue,
  selectSize
} from "../../../../redux/builderSlice";

export default function ImageUploadingApp({ image, styles }) {
  const linkValue = useSelector(selectLinkValue);
  const checked = useSelector(selectChecked);
  const sizeImage = useSelector(selectSize);
  const imageStyles = {
    width: sizeImage == "" ? "100%" : sizeImage
  };
  return (
    <div>
      {linkValue !== "" ? (
        <a href={linkValue} target={checked ? "_blank" : ""}>
          <img src={image} alt="Image_Upload" style={imageStyles} />
        </a>
      ) : (
        <React.Fragment>
          <img
            src={image}
            alt="Image_Upload"
            className="image-upload"
            style={styles}
          />
        </React.Fragment>
      )}
    </div>
  );
}
