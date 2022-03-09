import React from "react";
import InputLabel from "@mui/material/InputLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch } from "react-redux";
import { setTag } from "../../../redux/builderSlice";

export default function BasicSelect({ selectedComponentData, content }) {
  const dispatch = useDispatch();
  let tag = "";

  Object.keys(selectedComponentData).map((item) => {
    switch (Object.keys(item)[0]) {
      case "tag":
        return (tag = Object.values(item));
      default:
        return null;
    }
  });
  const handleChange = (event, newAlignment) => {
    dispatch(setTag({ id: content, value: newAlignment }));
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-label">Heading</InputLabel>
      <div className="select-tags">
        <ToggleButtonGroup
          color="primary"
          value={tag}
          exclusive
          className="select-tags-parent"
          onChange={handleChange}
        >
          <ToggleButton value="h1" className="select-tag-toggle">
            h1
          </ToggleButton>
          <ToggleButton className="select-tag-toggle" value={"h2"}>
            h2
          </ToggleButton>
          <ToggleButton className="select-tag-toggle" value={"h3"}>
            h3
          </ToggleButton>
          <ToggleButton className="select-tag-toggle" value={"h4"}>
            h4
          </ToggleButton>
          <ToggleButton className="select-tag-toggle" value={"h5"}>
            h5
          </ToggleButton>
          <ToggleButton className="select-tag-toggle" value={"h6"}>
            h6
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
