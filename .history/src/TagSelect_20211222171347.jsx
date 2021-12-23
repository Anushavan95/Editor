import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { selectTag, setTag } from "./redux/builderSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BasicSelect() {
  const dispatch = useDispatch();
  const tagName = useSelector(selectTag);
  const handleChange = (event) => {
    dispatch(setTag(event.target.value));
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tag Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tagName}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"h1"}>h1</MenuItem>
          <MenuItem value={"h2"}>h2</MenuItem>
          <MenuItem value={"h3"}>h3</MenuItem>
          <MenuItem value={"h4"}>h4</MenuItem>
          <MenuItem value={"h5"}>h5</MenuItem>
          <MenuItem value={"h6"}>h6</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
