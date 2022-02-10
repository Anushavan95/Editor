import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import { selectTag, setTag } from "./redux/mySlice";
import { useDispatch, useSelector } from "react-redux";

export default function BasicSelect() {
  const dispatch = useDispatch();
  const tagName = useSelector(selectTag);

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
