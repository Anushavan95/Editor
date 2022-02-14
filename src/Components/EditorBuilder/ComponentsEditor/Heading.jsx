import React from "react";

function Heading({ tagEntry, handleClick, componentData, styleMargin }) {
  return (
    <div
      style={{ margin: styleMargin.margin }}
      id={componentData.id}
      onClick={() => handleClick(componentData.id)}
      contentEditable={true}
      dangerouslySetInnerHTML={{
        __html: tagEntry
      }}
    />
  );
}

export default Heading;
