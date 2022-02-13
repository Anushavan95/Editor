import InputLabel from "@mui/material/InputLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTag } from "./redux/builderSlice";

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
    // <Box sx={{ minWidth: 120 }}>
    //   <FormControl fullWidth>
    //     {/* <InputLabel id="demo-simple-select-label">Tag Select</InputLabel> */}
    //     <Box sx={{ "& button": { m: 1 } }}>
    //       <div></div>
    //       <div>
    //         <Button variant="outlined" size="small">
    //           h1
    //         </Button>
    //         <Button variant="outlined" size="medium">
    //           <MenuItem value={"h2"}>h2</MenuItem>
    //         </Button>
    //         <Button variant="outlined" size="large">
    //           <MenuItem value={"h3"}>h3</MenuItem>
    //         </Button>

    //         <Button variant="outlined" size="large">
    //           h4
    //         </Button>
    //         <Button variant="outlined" size="large">
    //           <MenuItem value={"h5"}>h5</MenuItem>
    //         </Button>
    //         <Button variant="outlined" size="large">
    //           <MenuItem value={"h6"}>h6</MenuItem>
    //         </Button>
    //       </div>
    //     </Box>
    //     );
  );
}
