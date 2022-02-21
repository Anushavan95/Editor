import React from "react";

function Heading({ tagEntry, handleClick, componentData, styles }) {
  return (
    <>
      <div
        style={styles}
        id={componentData.id}
        onClick={() => handleClick(componentData.id)}
        contentEditable={true}
        dangerouslySetInnerHTML={{
          __html: tagEntry
        }}
      />
    </>
  );
}

export default Heading;
