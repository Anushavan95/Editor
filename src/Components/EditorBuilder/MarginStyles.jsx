import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LinkIcon from "../../images/link.png";
import {
  setMarginBottom,
  setMarginLeft,
  setMarginRight,
  setMarginTop
} from "../../redux/builderSlice";

export default function MarginStyles({ content, selectedComponentData }) {
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
    console.log(Object.keys(item), "itemitemitem");
    switch (Object.keys(item)[0]) {
      case "marginTop":
        return (top = Object.values(item));
      case "marginRight":
        return (right = Object.values(item));
      case "marginLeft":
        return (left = Object.values(item));
      case "marginBottom":
        return (bottom = Object.values(item));
      default:
        return null;
    }
  });
  const handleTopChange = (event) => {
    dispatch(setMarginTop({ id: content, value: event.target.value }));
    if (change === true) {
      dispatch(setMarginRight({ id: content, value: event.target.value }));
      dispatch(setMarginBottom({ id: content, value: event.target.value }));
      dispatch(setMarginLeft({ id: content, value: event.target.value }));
    }
  };
  const handleRightChange = (event) => {
    dispatch(setMarginRight({ id: content, value: event.target.value }));
    if (change === true) {
      dispatch(setMarginTop({ id: content, value: event.target.value }));
      dispatch(setMarginBottom({ id: content, value: event.target.value }));
      dispatch(setMarginLeft({ id: content, value: event.target.value }));
    }
  };
  const handleBottomChange = (event) => {
    dispatch(setMarginBottom({ id: content, value: event.target.value }));
    if (change === true) {
      dispatch(setMarginTop({ id: content, value: event.target.value }));
      dispatch(setMarginRight({ id: content, value: event.target.value }));
      dispatch(setMarginLeft({ id: content, value: event.target.value }));
    }
  };
  const handleLeftChange = (event) => {
    dispatch(setMarginLeft({ id: content, value: event.target.value }));
    if (change === true) {
      dispatch(setMarginTop({ id: content, value: event.target.value }));
      dispatch(setMarginRight({ id: content, value: event.target.value }));
      dispatch(setMarginBottom({ id: content, value: event.target.value }));
    }
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
