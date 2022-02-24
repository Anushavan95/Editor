import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox
} from "@mui/material";
import {
  selectLink,
  selectLinkValue,
  setImage,
  setLinkValue,
  selectChecked,
  setChecked,
  setSelectLink,
  selectSize,
  setSize
} from "../../../redux/builderSlice";
import SettingsIcon from "../../../images/svg/settings-link.svg";

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
        <Box>
          <Typography variant="p">Link</Typography>
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
                type="text"
                placeholder="https://your-link.com"
                value={linkValue}
                onChange={linkChangeValue}
              />
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <img
                    src={SettingsIcon}
                    alt={"SettingsIcon"}
                    className="settingsIcon"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <label>
                    <Checkbox
                      checked={checked}
                      onChange={handleChangeCheckbox}
                      inputProps={{ "aria-label": "controlled" }}
                    ></Checkbox>
                    Open New Window
                  </label>
                </AccordionDetails>
              </Accordion>
            </>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
