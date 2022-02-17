import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const RichEditor = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };
  console.log(config, "conf");
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      toolbarAdaptive={false}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)}
      onChange={(newContent) => {
        // console.log(newContent, "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      }}
    />
  );
};

export default RichEditor;
