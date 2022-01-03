import React from "react";
import ReactDOM from "react-dom";
import Example from "./Components/EditorBuilder/example";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import "./styles.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Header from "./Components/ZegaTheme/Header/Header";
import Main from "./Components/ZegaTheme/Main/Main";
import "./Components/zegaTheme.css";
import Tabs from "./Tabs";
import { SIDEBAR_ITEMS } from "./constants";
import SideBarItem from "./SideBarItem";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DndProvider backend={Backend}>
          <Grid>
            <Box sx={{ display: "flex" }}>
              <Box className="sideBar">
                <Typography variant="h4" className="editor-title">
                  Editor
                </Typography>
                <Tabs>
                  <Box className="elements-parent-box">
                    {Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (
                      <SideBarItem key={sideBarItem.id} data={sideBarItem} />
                    ))}
                  </Box>
                </Tabs>
              </Box>
              <Box className="parent">
                <Header />
                <Main />
              </Box>
            </Box>
          </Grid>
          <Example />
        </DndProvider>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
