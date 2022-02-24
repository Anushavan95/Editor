import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { useDispatch } from "react-redux";
import { setSize } from "../../../redux/builderSlice";

export default function SelectSizeImage({ selectedComponentData, content }) {
  const dispatch = useDispatch();
  let width = "";
  selectedComponentData.settings.map((item) => {
    switch (Object.keys(item)[0]) {
      case "sizeWidth":
        return (width = Object.values(item));
      default:
        return null;
    }
  });

  const handleImageChange = (event) => {
    dispatch(setSize({ id: content, value: event.target.value }));
  };
  return (
    <Box sx={{ minWidth: 120 }} className={"font-box-select"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Width</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={width}
          label="width"
          onChange={handleImageChange}
        >
          <MenuItem value={"150"}>Sans-Serif</MenuItem>
          <MenuItem value={"100"}>Verdana</MenuItem>
          <MenuItem value={"200"}>Cursive</MenuItem>
          <MenuItem value={"600"}>Monospace</MenuItem>
          <MenuItem value={"400"}>Courier</MenuItem>
          <MenuItem value={"1000"}>Optima</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
