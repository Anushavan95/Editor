import React, { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
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
import LinkIcon from "../../images/link.png";

export default function PaddingStyles() {
  const [change, setChange] = useState(false);

  const dispatch = useDispatch();
  const top = useSelector(selectPaddingTop);
  const right = useSelector(selectPaddingRight);
  const bottom = useSelector(selectPaddingBottom);
  const left = useSelector(selectPaddingLeft);

  const allChanges = () => {
    setChange(!change);
  };

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
        <Button
          onClick={allChanges}
          className={`margin-all ${change ? "contained" : "outlined"}`}
          // variant={change ? "contained" : "outlined"}
          startIcon={<img src={LinkIcon} alt="Link" className="link-icon" />}
        ></Button>
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
