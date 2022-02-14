import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AlignMent from "./AlignMent";
import ColorChange from "./ColorChange";
import HyperSettings from "./Components/EditorBuilder/ComponentsEditor/HyperSettings";
import MarginStyles from "./Components/EditorBuilder/MarginStyles";
import PaddingStyles from "./Components/EditorBuilder/PaddingStyles";
import {
  selectAddedImages,
  selectedContent,
  selectTab,
  selectTag,
  setEditorTextValue,
  setTab
} from "./redux/builderSlice";
import SelectFontFamily from "./SelectFontFamily";
import BasicSelect from "./TagSelect";

function Tabs(props) {
  const value = useSelector(selectTab);

  const dispatch = useDispatch();
  const imag = useSelector(selectAddedImages);
  //const valueText = useSelector(selectTextEditorValue)
  const selComponent = useSelector(selectTag);
  const content = useSelector(selectedContent);
  console.log(content, "content");
  const handleData = (id) => {
    let selectedComponentData = selComponent.map((item) => {
      if (Object.values(item)[0].id === id) {
        return Object.values(item)[0];
      }
    });
    let filtered = selectedComponentData.filter(function (x) {
      return x !== undefined;
    });

    return filtered[0];
  };

  const handleChange = (event, newValue) => {
    dispatch(setTab(newValue));
    // console.log(newValue, 'val')
  };
  ////console.log(props,'propsprops')
  ////console.log(selectedComponentData,'value')
  const onChange = (valueText) => {
    dispatch(setEditorTextValue(valueText));
  };
  ///console.log(content,'1111111111111111')
  // const handleSave = () => {
  //   let obj3 = valueText.toString('html')
  //   // console.log(obj3, "333");
  //   if (valueText.length !== 0) {
  //     const requestOptions = {
  //       method : 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body   : JSON.stringify({
  //         data: {
  //           component_id: 1,
  //           text        : `${obj3}`,
  //         },
  //       }),
  //     }
  //
  //     fetch('https://test.zegashop.com/api/set', requestOptions).then(
  //       (response) => response.json(),
  //     )
  //     // console.log(valueText);
  //   } else {
  //     console.log('text null')
  //   }
  // }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="tab-box"
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label={<span className="tabs-text-fms">Elements</span>}
              value="1"
              className="tab-label"
            />
            <Tab
              label={<span className="tabs-text-fms">Styles</span>}
              value="2"
              className="tab-label"
            />
          </TabList>
        </Box>
        <TabPanel value="1" className="components-tab">
          {props.children}
        </TabPanel>
        <TabPanel value="2">
          {(function (onChange) {
            let contentType = false;
            let selectedComponentData = handleData(content);
            console.log(selectedComponentData, "selectedComponentData");
            if (selectedComponentData) {
              contentType = selectedComponentData.content;
            }
            switch (contentType) {
              case "Editor":

              case "Heading":
                return (
                  <>
                    <BasicSelect />
                    <MarginStyles
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                    <PaddingStyles />
                    <SelectFontFamily />
                    <ColorChange />
                    <AlignMent />
                  </>
                );
              case "HyperLink":
                return <HyperSettings />;
              case "button":
                return (
                  <Button style={{ marginTop: "150px" }} variant="contained">
                    handleSave
                  </Button>
                );
              default:
                return null;
            }
          })(onChange)}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Tabs;
