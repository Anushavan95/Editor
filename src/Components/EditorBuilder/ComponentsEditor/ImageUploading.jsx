import React from "react";

export default function ImageUploadingApp({ image }) {
  return (
    <div>
      <div>
        <div>
          <img src={image} />
          <h1>Select Image</h1>
        </div>
      </div>
    </div>
  );
}
