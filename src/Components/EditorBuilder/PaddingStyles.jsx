import React from "react";
import { TextField, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPaddingBottom,
  selectPaddingLeft,
  selectPaddingRight,
  selectPaddingTop,
  setPaddingBottom,
  setPaddingLeft,
  setPaddingRight,
  setPaddingTop
} from "../../redux/mySlice";
export default function PaddingStyles() {
  const dispatch = useDispatch();
  const top = useSelector(selectPaddingTop);
  const right = useSelector(selectPaddingRight);
  const bottom = useSelector(selectPaddingBottom);
  const left = useSelector(selectPaddingLeft);

  const handleTopChange = (event) => {
    dispatch(setPaddingTop(event.target.value));
  };
  const handleRightChange = (event) => {
    dispatch(setPaddingRight(event.target.value));
  };
  const handleBottomChange = (event) => {
    dispatch(setPaddingBottom(event.target.value));
  };
  const handleLeftChange = (event) => {
    dispatch(setPaddingLeft(event.target.value));
  };

  return (
    <div className="margin-component">
      <span className="title-margin">Padding</span>
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
      <Box className="direction">
        <Typography variant="span">Top</Typography>
        <Typography variant="span">Right</Typography>
        <Typography variant="span">Bottom</Typography>
        <Typography variant="span">Left</Typography>
      </Box>
    </div>
  );
}
