import { Button } from "@mui/material";
import React from "react";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import { addIMages } from "../../../redux/mySlice";
function ImageUploadingApp() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const dispatch = useDispatch();
  const onChange = (imageList, addUpdateIndex) => {
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
    dispatch(addIMages(imageList));
  };
  console.log(images, "images");
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps
      }) => (
        <div className="upload__image-wrapper">
          <Button
            variant="contained"
            style={isDragging ? { color: "red" } : undefined}
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop here
          </Button>
          &nbsp;
          <Button variant="error" onClick={onImageRemoveAll}>
            Remove all images
          </Button>
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image["data_url"]} alt="" width="100" />
              {/* <div className="image-item__btn-wrapper">
                <Button
                  variant="contained"
                  onClick={() => onImageUpdate(index)}
                >
                  Update
                </Button>
                <Button variant="error" onClick={() => onImageRemove(index)}>
                  Remove
                </Button>
              </div> */}
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
}

export default ImageUploadingApp;
