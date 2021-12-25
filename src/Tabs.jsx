import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RichTextEditor from "react-rte";
import {
  selectAddedImages,
  selectTab,
  selectTextEditorValue,
  setEditorTextValue,
  setTab
} from "./redux/mySlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import BasicSelect from "./TagSelect";

function Tabs(props) {
  const tab = useSelector(selectTab);
  const [value, setValue] = useState("1");
  const dispatch = useDispatch();
  const imag = useSelector(selectAddedImages);
  const valueText = useSelector(selectTextEditorValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // dispatch(setTab(tab));
  };

  // const [valueText, setValueText] = useState(RichTextEditor.createEmptyValue());

  const onChange = (valueText) => {
    dispatch(setEditorTextValue(valueText));
    console.log(valueText.toString("html"), "val");
  };

  const handleSave = () => {
    let obj3 = valueText.toString("html");
    imag.map((item) => {
      return console.log(item.data_url);
    });
    if (valueText.length !== 0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            component_id: 1,
            text: `${obj3}  <img src=${imag[0].data_url} />`
          }
        })
      };
      {
        /* */
      }
      fetch("https://test.zegashop.com/api/set", requestOptions).then(
        (response) => response.json()
      );
      console.log(valueText);
    } else {
      console.log("text null");
    }
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="tab-box"
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Elements" value="1" />
            <Tab label="Styles" value={"2"} />
          </TabList>
        </Box>
        <TabPanel value="1" className="components-tab">
          {props.children}
        </TabPanel>
        <TabPanel value="2">
          <RichTextEditor value={valueText} onChange={onChange} />
          <BasicSelect />
          <Button
            style={{ marginTop: "150px" }}
            variant="contained"
            onClick={handleSave}
          >
            handleSave
          </Button>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Tabs;
