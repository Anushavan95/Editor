import React from "react";

function Heading({
  tagEntry,
  handleClick,
  componentData,
  styles,
  parentStyles
}) {
  console.log(parentStyles, "parentStyles");
  return (
    <div style={parentStyles}>
      <div
        style={styles}
        id={componentData.id}
        onClick={() => handleClick(componentData.id)}
        contentEditable={true}
        dangerouslySetInnerHTML={{
          __html: tagEntry
        }}
      />
    </div>
  );
}

export default Heading;
