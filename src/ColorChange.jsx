import { InputLabel, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColor, setColor } from "./redux/mySlice";

export default function ColorChange() {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();
  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value));
  };
  return (
    <>
      <InputLabel for="filled-hidden-label-normal">Change Color</InputLabel>
      <TextField
        onChange={handleColorChange}
        type={"color"}
        value={color}
        hiddenLabel
        id="filled-hidden-label-normal"
        InputLabelProps={{
          className: "test-label"
        }}
        defaultValue="Normal"
        variant="filled"
      />
    </>
  );
}
