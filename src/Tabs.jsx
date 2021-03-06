import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AlignMent from "./AlignMent";
import ColorChange from "./Components/EditorBuilder/ConfigsComponents/ColorChange";
import HyperSettings from "./Components/EditorBuilder/ComponentsEditor/HyperSettings";
import MarginStyles from "./Components/EditorBuilder/ConfigsComponents/MarginStyles";
import PaddingStyles from "./Components/EditorBuilder/ConfigsComponents/PaddingStyles";
import {
  selectAddedImages,
  selectedContent,
  selectTab,
  selectChildren,
  setEditorTextValue,
  setTab,
  data,
  postInitialData
} from "./redux/builderSlice";
import SelectFontFamily from "./Components/EditorBuilder/ConfigsComponents/SelectFontFamily";
import BasicSelect from "./Components/EditorBuilder/ConfigsComponents/TagSelect";
import ContentEditableText from "./Components/EditorBuilder/ComponentsEditor/ContentEditable";
import RichEditor from "./Components/EditorBuilder/ComponentsEditor/RichEditor";
import { ReactComponent as EditorS } from "./images/svg/Editor.svg";
import ImageUploadConfigs from "./Components/EditorBuilder/ComponentsEditor/ImageUpload/ImageUploadConfigs";
import SelectSizeImage from "./Components/EditorBuilder/ConfigsComponents/SelectSizeImage";
import MargPaddComponents from "./Components/EditorBuilder/ConfigsComponents/MargPaddComponents";
import AccordionFAQ from "./Components/EditorBuilder/ComponentsEditor/AccordionFAQ";
import AccordionDetailsFAQ from "./Components/EditorBuilder/ComponentsEditor/AccordionDetailsFAQ";

function Tabs(props) {
  const value = useSelector(selectTab);

  const dispatch = useDispatch();
  const selComponent = useSelector(selectChildren);
  const data2 = useSelector(data);
  const content = useSelector(selectedContent);

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
  };

  const onChange = (valueText) => {
    dispatch(setEditorTextValue(valueText));
  };

  function handlerClick() {
    dispatch(postInitialData(data2.setTree, data2.children));
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }} className="lalal">
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="tab-box"
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tab-box-builder"
          >
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
        <TabPanel value={"1"} className="components-tab">
          {props.children}
        </TabPanel>
        <TabPanel value={"2"} className="components-edited-tab">
          {(function (onChange) {
            let contentType = false;
            let selectedComponentData = handleData(content);
            if (selectedComponentData) {
              contentType = selectedComponentData.content;
            }
            switch (contentType) {
              case "Editor":
                return (
                  <>
                    <RichEditor
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />

                    <EditorS />
                    <MargPaddComponents
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                  </>
                );
              case "Heading":
                return (
                  <section className="component-entered">
                    <BasicSelect
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                    <MargPaddComponents
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                    <SelectFontFamily
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                    <ColorChange
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                    <AlignMent
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                  </section>
                );
              case "HyperLink":
                return <HyperSettings />;
              case "Accordion":
                return (
                  <AccordionDetailsFAQ
                    content={content}
                    selectedComponentData={selectedComponentData}
                  />
                );
              case "ImageUpload":
                return (
                  <section className="component-entered">
                    <ImageUploadConfigs
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                    <SelectSizeImage
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                    <AlignMent
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                    <MargPaddComponents
                      content={content}
                      selectedComponentData={selectedComponentData}
                    />
                  </section>
                );
              default:
                return "";
            }
          })(onChange)}
        </TabPanel>
        <Button
          style={{ width: "96%", marginTop: 20, marginLeft: "2%" }}
          onClick={handlerClick}
          variant="contained"
        >
          Save
        </Button>
      </TabContext>
    </Box>
  );
}

export default Tabs;
