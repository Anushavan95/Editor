import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { useDispatch } from "react-redux";
import { setFontFamily } from "../../../redux/builderSlice";

export default function SelectFontFamily({ selectedComponentData, content }) {
  const dispatch = useDispatch();
  let font = "";
  selectedComponentData.settings.map((item) => {
    switch (Object.keys(item)[0]) {
      case "fontFamily":
        return (font = Object.values(item));
      default:
        return null;
    }
  });
  const handleChangeFont = (event) => {
    dispatch(setFontFamily({ id: content, value: event.target.value }));
  };
  return (
    <Box sx={{ minWidth: 120 }} className={"font-box-select"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Fonts</InputLabel>
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
