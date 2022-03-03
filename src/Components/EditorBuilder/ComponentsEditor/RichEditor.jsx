import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { setTextEditorValue } from "../../../redux/builderSlice";
import { useDispatch } from "react-redux";
const RichEditor = ({ selectedComponentData, content }) => {
  console.log(selectedComponentData, "selectedComponentData");
  const dispatch = useDispatch();
  const editor = null;
  let textEditorValue = "";
  Object.keys(selectedComponentData).map((item) => {
    switch (Object.keys(item)[0]) {
      case "textEditorValue":
        return (textEditorValue = Object.values(item));
      default:
        return null;
    }
  });
  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };
  const richEditorValue = (newContent) => {
    // (newContent) => setContent();
    dispatch(setTextEditorValue({ id: content, value: newContent }));
  };

  return (
    <JoditEditor
      ref={editor}
      value={textEditorValue}
      config={config}
      toolbarAdaptive={false}
      tabIndex={1} // tabIndex of textarea
      onBlur={richEditorValue}
      // onChange={(newContent) => {
      //   // console.log(newContent, "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      // }}
    />
  );
};

export default RichEditor;
