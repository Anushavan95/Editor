import React from "react";
import ReactDOM from "react-dom";
import Example from "./example";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import "./styles.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Header from "./Componenets/ZegeTheme/Header/Header";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <DndProvider backend={Backend}>
          <Example />
        </DndProvider>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
