import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinkIcon from "../../../images/link.svg";
import {
  setPaddingBottom,
  setPaddingLeft,
  setPaddingRight,
  setPaddingTop
} from "../../../redux/builderSlice";
import { ReactComponent as HeadingSvg } from "../../../images/svg/heading.svg";

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
    if (change === true) {
      dispatch(setPaddingRight({ id: content, value: event.target.value }));
      dispatch(setPaddingBottom({ id: content, value: event.target.value }));
      dispatch(setPaddingLeft({ id: content, value: event.target.value }));
    }
  };
  const handleRightChange = (event) => {
    dispatch(setPaddingRight({ id: content, value: event.target.value }));
    if (change === true) {
      dispatch(setPaddingTop({ id: content, value: event.target.value }));
      dispatch(setPaddingBottom({ id: content, value: event.target.value }));
      dispatch(setPaddingLeft({ id: content, value: event.target.value }));
    }
  };
  const handleBottomChange = (event) => {
    dispatch(setPaddingBottom({ id: content, value: event.target.value }));
    if (change === true) {
      dispatch(setPaddingTop({ id: content, value: event.target.value }));
      dispatch(setPaddingRight({ id: content, value: event.target.value }));
      dispatch(setPaddingLeft({ id: content, value: event.target.value }));
    }
  };
  const handleLeftChange = (event) => {
    dispatch(setPaddingLeft({ id: content, value: event.target.value }));
    if (change === true) {
      dispatch(setPaddingRight({ id: content, value: event.target.value }));
      dispatch(setPaddingBottom({ id: content, value: event.target.value }));
      dispatch(setPaddingLeft({ id: content, value: event.target.value }));
    }
  };

  return (
    <div className="margin-component">
      <Box>
        <b className="title-margin">Padding</b>
        <Button
          onClick={allChanges}
          className={`margin-all ${change ? "contained" : "outlined"}`}
          // variant={change ? "contained" : "outlined"}
          startIcon={<img src={LinkIcon} alt="Link" className="link-icon" />}
        />
      </Box>
      <Box className="margin-styles">
        <Box>
          <Typography variant="span">Left</Typography>
          <TextField
            id="filled-number"
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
            value={top}
            type="number"
            onChange={handleTopChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
          />
          <HeadingSvg
            style={{
              margin: "5px auto",
              borderRadius: "5px",
              background: " #EBF0F5 "
            }}
          />
          <Typography variant="span">Bottom</Typography>
          <TextField
            id="filled-number"
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
