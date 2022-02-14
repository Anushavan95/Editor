import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinkIcon from "../../images/link.png";
import {
  setPaddingBottom,
  setPaddingLeft,
  setPaddingRight,
  setPaddingTop
} from "../../redux/builderSlice";

export default function PaddingStyles({ content, selectedComponentData }) {
  const [change, setChange] = useState(false);

  const dispatch = useDispatch();
  let top = 0;
  let right = 0;
  let bottom = 0;
  let left = 0;
  const allChanges = () => {
    setChange(!change);
  };
  selectedComponentData.settings.map((item) => {
    switch (Object.keys(item)[0]) {
      case "paddingTop":
        return (top = Object.values(item));
      case "paddingRight":
        return (right = Object.values(item));
      case "paddingBottom":
        return (bottom = Object.values(item));
      case "paddingLeft":
        return (left = Object.values(item));
      default:
        return null;
    }
  });
  const handleTopChange = (event) => {
    dispatch(setPaddingTop({ id: content, value: event.target.value }));
  };
  const handleRightChange = (event) => {
    dispatch(setPaddingRight({ id: content, value: event.target.value }));
  };
  const handleBottomChange = (event) => {
    dispatch(setPaddingBottom({ id: content, value: event.target.value }));
  };
  const handleLeftChange = (event) => {
    dispatch(setPaddingLeft({ id: content, value: event.target.value }));
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
