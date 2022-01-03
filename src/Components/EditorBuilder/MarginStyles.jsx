import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMarginBottom,
  selectMarginLeft,
  selectMarginRight,
  selectMarginTop,
  setMarginBottom,
  setMarginLeft,
  setMarginRight,
  setMarginTop
} from "../../redux/mySlice";

export default function MarginStyles() {
  const dispatch = useDispatch();
  const top = useSelector(selectMarginTop);
  const right = useSelector(selectMarginRight);
  const bottom = useSelector(selectMarginBottom);
  const left = useSelector(selectMarginLeft);

  const handleTopChange = (event) => {
    dispatch(setMarginTop(event.target.value));
    console.log(top);
  };
  const handleRightChange = (event) => {
    dispatch(setMarginRight(event.target.value));
    console.log(right);
  };
  const handleBottomChange = (event) => {
    dispatch(setMarginBottom(event.target.value));
    console.log(bottom);
  };
  const handleLeftChange = (event) => {
    dispatch(setMarginLeft(event.target.value));
  };

  return (
    <div className="margin-component">
      <span className="title-margin">Margin</span>
      <Box className="margin-styles">
        <TextField
          id="filled-number"
          // label="Top"
          type="number"
          value={top}
          onChange={handleTopChange}
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          // label="Right"
          value={right}
          type="number"
          onChange={handleRightChange}
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          // label="Bottom"
          value={bottom}
          type="number"
          onChange={handleBottomChange}
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          // label="Left"
          value={left}
          type="number"
          onChange={handleLeftChange}
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />
      </Box>
    </div>
  );
}
