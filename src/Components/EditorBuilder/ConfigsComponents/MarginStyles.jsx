import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LinkIcon from "../../../images/LinkIcon";
import {
  setMarginBottom,
  setMarginLeft,
  setMarginRight,
  setMarginTop
} from "../../../redux/builderSlice";

import { ReactComponent as HeadingSvg } from "../../../images/svg/heading.svg";

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
    if (top <= 500) {
      dispatch(setMarginTop({ id: content, value: event.target.value }));
    }
    if (change === true) {
      dispatch(setMarginRight({ id: content, value: event.target.value }));
      dispatch(setMarginBottom({ id: content, value: event.target.value }));
      dispatch(setMarginLeft({ id: content, value: event.target.value }));
    }
  };
  const handleRightChange = (event) => {
    if (right <= 500) {
      dispatch(setMarginRight({ id: content, value: event.target.value }));
    }
    if (change === true) {
      dispatch(setMarginTop({ id: content, value: event.target.value }));
      dispatch(setMarginBottom({ id: content, value: event.target.value }));
      dispatch(setMarginLeft({ id: content, value: event.target.value }));
    }
  };
  const handleBottomChange = (event) => {
    if (bottom <= 500) {
      dispatch(setMarginBottom({ id: content, value: event.target.value }));
    }
    if (change === true) {
      dispatch(setMarginTop({ id: content, value: event.target.value }));
      dispatch(setMarginRight({ id: content, value: event.target.value }));
      dispatch(setMarginLeft({ id: content, value: event.target.value }));
    }
  };
  const handleLeftChange = (event) => {
    if (left <= 500) {
      dispatch(setMarginLeft({ id: content, value: event.target.value }));
    }
    if (change === true) {
      dispatch(setMarginTop({ id: content, value: event.target.value }));
      dispatch(setMarginRight({ id: content, value: event.target.value }));
      dispatch(setMarginBottom({ id: content, value: event.target.value }));
    }
  };
  return (
    <div className="margin-component">
      <Box>
        <b className="title-margin">Margin</b>
        <Button
          onClick={allChanges}
          className={`margin-all ${change ? "contained" : "outlined"}`}
          startIcon={<LinkIcon change={change} />}
        />
      </Box>

      <Box className="margin-styles">
        <Box>
          <Typography variant="span">Left</Typography>
          <TextField
            id="filled-number"
            className="emmets"
            type="number"
            value={left}
            onChange={handleLeftChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
          />
        </Box>
        <Box>
          <Typography variant="span">Top</Typography>
          <TextField
            id="filled-number"
            className="emmets"
            value={top}
            type="number"
            onChange={handleTopChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
          />
          <div className="heading-logo">
            <HeadingSvg />
          </div>
          <Typography variant="span">Bottom</Typography>
          <TextField
            id="filled-number"
            className="emmets"
            value={bottom}
            type="number"
            onChange={handleBottomChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
          />
        </Box>
        <Box>
          <Typography variant="span">Right</Typography>
          <TextField
            id="filled-number"
            className="emmets"
            value={right}
            type="number"
            onChange={handleRightChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
          />
        </Box>
      </Box>
    </div>
  );
}
