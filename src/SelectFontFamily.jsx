import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { selectFontFamily, setFontFamily } from "./redux/builderSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SelectFontFamily() {
  const font = useSelector(selectFontFamily);
  const dispatch = useDispatch();
  const handleChangeFont = (e) => {
    dispatch(setFontFamily(e.target.value));
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Font Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={font}
          label="Font"
          onChange={handleChangeFont}
        >
          <MenuItem value={"sans-serif"}>Sans-Serif</MenuItem>
          <MenuItem value={"Verdana"}>Verdana</MenuItem>
          <MenuItem value={"Cursive"}>Cursive</MenuItem>
          <MenuItem value={"Monospace"}>Monospace</MenuItem>
          <MenuItem value={"Courier"}>Courier</MenuItem>
          <MenuItem value={"Optima"}>Optima</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
