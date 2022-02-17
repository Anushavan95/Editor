import React from "react";

import {
  InputLabel,
  FormControl,
  Box,
  Select,
  MenuItem,
  FormHelperText
} from "@mui/material";

export default function AlignMent() {
  return (
    <Box>
      <FormControl className="horizontal-align">
        <InputLabel id="demo-simple-select-helper-label">
          Horizontal Alignment
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormHelperText className="text-helper">
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
      <FormHelperText className="text-helper">Without label</FormHelperText>
    </Box>
  );
}
