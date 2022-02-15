import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import { Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { SIDEBAR_ITEMS } from "./Components/EditorBuilder/Config/constants";
import Home from "./Components/EditorBuilder/Home";
import "./Components/zegaTheme.css";
import Header from "./Components/ZegaTheme/Header/Header";
import Main from "./Components/ZegaTheme/Main/Main";
import SideBarItem from "./SideBarItem";
import "./styles.css";
import Tabs from "./Tabs";

export default function App() {
  const [expanded, setExpanded] = useState("panel1");
  const [widthe, setWidthe] = useState("unset");
  const [values, setValues] = useState({
    weight: "390px"
  });
  const [active, setActive] = useState("unset");
  const handleChanges = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setWidthe(`${event.target.value}px`);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  let changeWidtheClick = (e) => {
    if (e == "mobile") {
      setWidthe("390px");
    } else if (e == "tablet") {
      setWidthe("820px");
    } else {
      setWidthe("unset");
    }
  };

  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Grid>
          <Box sx={{ display: "flex" }}>
            <div className="header-part-viwes-fms">
              <div className="icons-button-fms">
                <span
                  onClick={(e) => changeWidtheClick("mobile")}
                  className={
                    widthe == "390px" ? "active-icon" : "not-active-icon"
                  }
                >
                  <SmartphoneIcon />
                </span>
                <span
                  onClick={(e) => changeWidtheClick("tablet")}
                  className={
                    widthe == "820px" ? "active-icon" : "not-active-icon"
                  }
                >
                  <TabletMacIcon />
                </span>
                <span
                  onClick={(e) => changeWidtheClick("desktop")}
                  className={
                    widthe == "unset" ? "active-icon" : "not-active-icon"
                  }
                >
                  <DesktopWindowsIcon />
                </span>
              </div>
              <span className="header-width-control">
                <span>W</span>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.weight}
                  type="number"
                  onChange={handleChanges("weight")}
                  aria-describedby="outlined-weight-helper-text"
                />
              </span>
            </div>
            <Box className="sideBar">
              <Typography variant="h4" className="editor-title">
                Editor
              </Typography>

              <Tabs>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  className="panel-1"
                >
                  <div className="paneli-border-fms">
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography
                        variant="h4"
                        className="title-component-sidebar"
                      >
                        Text
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Typography>
                      <Box className="elements-parent-box">
                        {Object.values(SIDEBAR_ITEMS.slice(0, 3)).map(
                          (sideBarItem, index) => (
                            <SideBarItem
                              key={sideBarItem.id}
                              data={sideBarItem}
                            />
                          )
                        )}
                      </Box>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  className="panel-2"
                >
                  <div className="paneli-border-fms">
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography
                        variant="h4"
                        className="title-component-sidebar"
                      >
                        Image/ImageLink
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Box className="elements-parent-box">
                      {Object.values(SIDEBAR_ITEMS.slice(3, 6)).map(
                        (sideBarItem, index) => (
                          <SideBarItem
                            key={sideBarItem.id}
                            data={sideBarItem}
                          />
                        )
                      )}
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  className="panel-2"
                >
                  <div className="paneli-border-fms">
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography
                        variant="h4"
                        className="title-component-sidebar"
                      >
                        Image/ImageLink
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Box className="elements-parent-box">
                      {Object.values(SIDEBAR_ITEMS.slice(3, 6)).map(
                        (sideBarItem, index) => (
                          <SideBarItem
                            key={sideBarItem.id}
                            data={sideBarItem}
                          />
                        )
                      )}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Tabs>
            </Box>

            <Box className="parent">
              <div
                style={{
                  width: widthe,
                  margin: "40px auto 0 auto"
                }}
              >
                <Header />
                <Main />
              </div>
            </Box>
          </Box>
        </Grid>
        <div className="MuiBox-root css-k008qs builder-part-fms">
          <div className="sideBar MuiBox-root css-0" />
          <div className="parent MuiBox-root css-0 ">
            <div
              className="site__body"
              style={{
                width: widthe,
                margin: "0px auto 0 auto"
              }}
            >
              <Home />
            </div>
          </div>
        </div>
      </DndProvider>
    </div>
  );
}
