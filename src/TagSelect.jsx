import InputLabel from "@mui/material/InputLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChildren } from "./redux/builderSlice";

export default function BasicSelect() {
  const dispatch = useDispatch();
  const tagName = useSelector(selectChildren);

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-label">Heading</InputLabel>
      <div className="ss">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value={"h1"}>h1</ToggleButton>
          <ToggleButton value={"h2"}>h2</ToggleButton>
          <ToggleButton value={"h3"}>h3</ToggleButton>
          <ToggleButton value={"h4"}>h4</ToggleButton>
          <ToggleButton value={"h5"}>h5</ToggleButton>
          <ToggleButton value={"h6"}>h6</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
