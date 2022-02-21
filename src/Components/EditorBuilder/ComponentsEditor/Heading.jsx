import React from "react";

function Heading({tagEntry, handleClick, componentData, styles}) {
    return (
        <>
            {/*{"id" + componentData.id}*/}
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
