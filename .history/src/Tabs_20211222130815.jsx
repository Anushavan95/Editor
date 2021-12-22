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

  const [valueText, setValueText] = useState(RichTextEditor.createEmptyValue());

  // const handleSave = () => {
  //   let obj3 = JSON.parse(JSON.stringify(board));

  //   obj3[0].text = `<div><${tag}>${html}</${tag}></div>`;
  //   console.log(obj3, "3");
  //   if (board.length !== 0) {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ data: obj3 }),
  //     };
  //     fetch("https://test.zegashop.com/api/set", requestOptions).then(
  //       (response) => response.json()
  //     );
  //     console.log(board);
  //   } else {
  //     console.log("board null");
  //   }
  // };
  const onChange = (value) => {
    setValueText(valueText);
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
          <RichTextEditor value={valueText} onChange={onChange} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Tabs;
