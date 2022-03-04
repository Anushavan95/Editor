import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChecked,
  selectLink,
  selectLinkValue,
  setChecked,
  setImage,
  setLinkValue,
  setSelectLink
} from "../../../../redux/builderSlice";
import "../../ConfigsComponents/index.css";

export default function ImageUploadConfigs({ content, selectedComponentData }) {
  const dispatch = useDispatch();
  const linkSelected = useSelector(selectLink);
  const linkValue = useSelector(selectLinkValue);

  const checked = useSelector(selectChecked);
  const handleChangeCheckbox = (event) => {
    dispatch(setChecked(event.target.checked));
  };

  const handleChange = (event) => {
    dispatch(setSelectLink(event.target.value));
  };

  const linkChangeValue = (event) => {
    dispatch(setLinkValue(event.target.value));
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.addEventListener("load", () => {
        dispatch(setImage({ id: content, value: reader.result }));
      });
    }
  };

  return (
    <Box>
      <span>Image</span>
      <label>
        <TextField
          type="file"
          name="upload-photo"
          className="FileUpload"
          onChange={onImageChange}
          id="drop_zone"
        />
        <Box
          style={{
            backgroundImage: `url(${selectedComponentData.images[0].imageUpload})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            height: "200px",
            width: "250px",
            position: "relative",
            top: "-44px",
            cursor: "pointer"
          }}
          className="dropZoneOverlay"
        ></Box>
      </label>
      <Box>
        <Box className="link-to-image-box">
          <Typography variant="p">Image Link here</Typography>
          <FormControl>
            <Select
              value={linkSelected}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"url"}>Custom URL</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          {linkSelected === "url" ? (
            <>
              <TextField
                className="form-control-image-url"
                type="text"
                placeholder="https://your-link.com"
                value={linkValue}
                onChange={linkChangeValue}
              />

              <label>
                <Checkbox
                  checked={checked}
                  onChange={handleChangeCheckbox}
                  inputProps={{ "aria-label": "controlled" }}
                ></Checkbox>
                Open New Window
              </label>
            </>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
