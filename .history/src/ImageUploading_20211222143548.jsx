import React from "react";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { addIMages, selectAddedImages } from "./redux/mySlice";

function ImageUploadingApp() {
  const maxNumber = 69;
  const dispatch = useDispatch();
  const imagesList = useSelector(selectAddedImages);
  const onChange = (imageList, addUpdateIndex) => {
    dispatch(addIMages(imageList));
  };

  return (
    <ImageUploading
      multiple
      value={imagesList}
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
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            style={isDragging ? { color: "red" } : undefined}
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop here
          </button>
          &nbsp;
          <button onClick={onImageRemoveAll}>Remove all images</button>
          {imagesList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image["data_url"]} alt="" width="100" />
              <div className="image-item__btn-wrapper">
                <button onClick={() => onImageUpdate(index)}>Update</button>
                <button onClick={() => onImageRemove(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
}

export default ImageUploadingApp;
