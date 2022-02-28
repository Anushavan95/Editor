import { InputLabel, TextField, Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setColor } from "../../../redux/builderSlice";

export default function ColorChange({ selectedComponentData, content }) {
  const dispatch = useDispatch();
  let color = "";
  selectedComponentData.settings.map((item) => {
    switch (Object.keys(item)[0]) {
      case "color":
        return (color = Object.values(item));
      default:
        return null;
    }
  });
  const handleColorChange = (event) => {
    dispatch(setColor({ id: content, value: event.target.value }));
  };
  return (
    <Box className="color-changer">
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
    </Box>
  );
}
