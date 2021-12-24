import React from "react";
import ReactDOM from "react-dom";
import Example from "./example";
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
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DndProvider backend={Backend}>
          <Grid>
            <Box sx={{ display: "flex" }}>
              <Box className="sideBar">
                <Tabs>
                  {Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (
                    <SideBarItem key={sideBarItem.id} data={sideBarItem} />
                  ))}
                </Tabs>
              </Box>
              <div className="parent">
                <Header />
                <Main />
              </div>
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
