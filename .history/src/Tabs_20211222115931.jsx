import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RichTextEditor from "react-rte";

function Tabs(props) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  };

  const [valueText, setValueText] = useState(RichTextEditor.createEmptyValue());
  onChange = (value) => {
    // this.setState({ value });
    // if (this.props.onChange) {
    //   // Send the changes up to the parent component as an HTML string.
    //   // This is here to demonstrate using `.toString()` but in a real app it
    //   // would be better to avoid generating a string on each change.
    //   this.props.onChange(value.toString("html"));
    // }
    setValue(valueText);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Components" value="1" />
            <Tab label="Styles" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className="components-tab">
          {props.children}
        </TabPanel>
        <TabPanel value="2">
          <RichTextEditor value={textValue} onChange={onChange} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Tabs;
