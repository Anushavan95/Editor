import React from "react";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/builderSlice";

export default function ImageUploadConfigs({ content, selectedComponentData }) {
  const dispatch = useDispatch();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.addEventListener("load", () => {
        dispatch(setImage({ id: content, value: reader.result }));
      });
    }
  };
  return (
    <div>
      <input type="file" name="myImage" onChange={onImageChange} />
    </div>
  );
}
