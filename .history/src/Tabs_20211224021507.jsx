import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RichTextEditor from "react-rte";
<<<<<<< HEAD
import {
  selectAddedImages,
  selectTab,
  selectTextEditorValue,
  setEditorTextValue,
  setTab,
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
    console.log(valueText.toString("html"), 'val');
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
            text: `${obj3}  <img src=${imag[0].data_url} />`,
          },
        }),
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

=======

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
>>>>>>> 0063af70a35dbf1701b25b8b543748cfb7a158c9
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Components" value="1" />
<<<<<<< HEAD
            <Tab label="Styles" value={"2"} />
=======
            <Tab label="Styles" value="2" />
>>>>>>> 0063af70a35dbf1701b25b8b543748cfb7a158c9
          </TabList>
        </Box>
        <TabPanel value="1" className="components-tab">
          {props.children}
        </TabPanel>
        <TabPanel value="2">
          <RichTextEditor value={valueText} onChange={onChange} />
<<<<<<< HEAD
        <BasicSelect />
          <Button style={{marginTop: "150px"}} variant="contained" onClick={handleSave}>
            handlesave
          </Button>
=======
>>>>>>> 0063af70a35dbf1701b25b8b543748cfb7a158c9
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Tabs;
