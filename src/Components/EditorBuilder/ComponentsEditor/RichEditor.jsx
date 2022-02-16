import React, { Component, PropTypes } from "react";
import RichTextEditor from "react-rte";

export default class RichEditor extends Component {
  state = {
    value: RichTextEditor.createEmptyValue(),
  };

  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString("html"));
    }
  };

  render() {
    console.log(this.state.value, "this.state.valuethis.state.value");
    return <RichTextEditor value={this.state.value} onChange={this.onChange} />;
  }
}

// import React, { useState, useRef } from "react";
// import JoditEditor from "jodit-react";

// const RichEditor = ({}) => {
//   const editor = useRef(null);
//   const [content, setContent] = useState("");

//   const config = {
//     readonly: false, // all options from https://xdsoft.net/jodit/doc/
//   };

//   return (
//     <JoditEditor
//       ref={editor}
//       value={content}
//       config={config}
//       tabIndex={1} // tabIndex of textarea
//       onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
//       onChange={(newContent) => {
//         console.log(newContent, "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//       }}
//     />
//   );
// };

// export default RichEditor;
