import React from "react";
import { Select, MenuItem, Grid, FormControl, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSize } from "../../../redux/builderSlice";

export default function SelectSizeImage({ selectedComponentData, content }) {
  const dispatch = useDispatch();
  let width = "";
  selectedComponentData.settings.map((item) => {
    switch (Object.keys(item)[0]) {
      case "sizeWidth":
        return (width = Object.values(item));
      default:
        return null;
    }
  });

  const handleImageChange = (event) => {
    dispatch(setSize({ id: content, value: event.target.value }));
  };
  return (
    <Grid className="grid-container-image-size">
      <p id="demo-simple-select-label">Width</p>
      <Box sx={{ minWidth: 120 }} className={"image-size-box"}>
        <FormControl>
          <Select
            value={width}
            onChange={handleImageChange}
            displayEmpty
            // inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"150"}>150px</MenuItem>
            <MenuItem value={"100"}>100px</MenuItem>
            <MenuItem value={"200"}>200px</MenuItem>
            <MenuItem value={"600"}>600px</MenuItem>
            <MenuItem value={"400"}>400px</MenuItem>
            <MenuItem value={"1000"}>1000px</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}
