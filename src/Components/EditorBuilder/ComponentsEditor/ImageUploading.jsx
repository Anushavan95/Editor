import React from "react";
import { useSelector } from "react-redux";
import PlaceHolderImage from "../../../images/placeholder.png";
import { selectChecked, selectLinkValue } from "../../../redux/builderSlice";

export default function ImageUploadingApp({ image, styles }) {
  const linkValue = useSelector(selectLinkValue);
  const checked = useSelector(selectChecked);

  // const srcImage = image.length > 0 ? image : image;

  const imageStyles = {
    width: "100%"
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
