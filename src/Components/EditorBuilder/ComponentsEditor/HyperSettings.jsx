import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";

export default function HyperSettings() {
  /// const hyperLink = useSelector(selectHyperLink)
  const dispatch = useDispatch();
  const handleHyperChange = (event) => {};

  return (
    <Box className="input-settings">
      <TextField
        className="link"
        label="HyperLink"
        id="outlined-size-small"
        value={""}
        onChange={handleHyperChange}
        size="small"
      />
      <TextField
        className="link"
        label="HyperLink Name"
        id="outlined-size-small"
        size="small"
      />
      <Button variant="contained">handleSubmit</Button>
    </Box>
  );
}
