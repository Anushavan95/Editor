import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RichTextEditor from "react-rte";

function Tabs(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
