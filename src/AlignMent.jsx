import React from "react";

import { InputLabel, FormControl, Box, Select, MenuItem } from "@mui/material";
import { setAlignMent } from "./redux/builderSlice";
import { useDispatch } from "react-redux";
export default function AlignMent({ content, selectedComponentData }) {
  const dispatch = useDispatch();
  let align = "";
  if(selectedComponentData){
    selectedComponentData.settings.map((item) => {
      switch (Object.keys(item)[0]) {
        case "align":
          return (align = Object.values(item));
        default:
          return null;
      }
    });
  }
  const handleAlignMentChange = (event) => {
    dispatch(setAlignMent({ id: content, value: event.target.value }));
  };
  return (
    <Box>
      <FormControl className="horizontal-align">
        <InputLabel id="demo-simple-select-helper-label">
          Horizontal Alignment
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="alignMent"
          onChange={handleAlignMentChange}
          type={"align"}
          value={align}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"left"}>Left</MenuItem>
          <MenuItem value={"center"}>Center</MenuItem>
          <MenuItem value={"right"}>Right</MenuItem>
        </Select>
      </FormControl>
      {/* <FormHelperText className="text-helper">
        With label + helper text
      </FormHelperText>
      <FormControl className="vertical-align">
        <InputLabel id="demo-simple-select-helper-label">
          Vertical Alignment
        </InputLabel>
        <Select displayEmpty inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormHelperText className="text-helper">Without label</FormHelperText> */}
    </Box>
  );
}
