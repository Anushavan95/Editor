import React from "react";
import PlaceHolderImage from "../../../images/placeholder.png";

export default function ImageUploadingApp({ image }) {
  // const srcImage = image.length > 0 ? image : PlaceHolderImage;
  const srcImage = image.length > 0 ? image : PlaceHolderImage;
  const imageStyles = {
    width: "100%"
  };
  return (
    <div>
      <div>
        <img src={srcImage} alt="Image_Upload" style={imageStyles} />
      </div>
    </div>
  );
}
