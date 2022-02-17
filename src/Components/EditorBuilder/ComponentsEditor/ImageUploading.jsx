// import { Button } from "@mui/material";
// import React from "react";
// import ImageUploading from "react-images-uploading";
// import { useDispatch } from "react-redux";
// import { addImages } from "../../../redux/builderSlice";

// function ImageUploadingApp() {
//   const [images, setImages] = React.useState([]);
//   const maxNumber = 69;
//   const dispatch = useDispatch();
//   const onChange = (imageList, addUpdateIndex) => {
//     setImages(imageList);
//     dispatch(addImages(imageList));
//   };

//   return (
//     <ImageUploading
//       multiple
//       value={images}
//       onChange={onChange}
//       maxNumber={maxNumber}
//       dataURLKey="data_url"
//     >
//       {({ imageList, onImageUpload, onImageRemoveAll }) => (
//         <div className="upload__image-wrapper">
//           <Button
//             variant="contained"
//             // style={isDragging ? { color: "red" } : undefined}
//             onClick={onImageUpload}
//             // {...dragProps}
//           >
//             Click or Drop here
//           </Button>

//           {/* <Button variant="error" onClick={onImageRemoveAll}>
//             Remove all images
//           </Button> */}
//           {imageList.map((image, index) => (
//             <div key={index} className="image-item">
//               <img src={image["data_url"]} alt="" width="100" />
//               {/* <div className="image-item__btn-wrapper">
//                 <Button
//                   variant="contained"
//                   onClick={() => onImageUpdate(index)}
//                 >
//                   Update
//                 </Button>
//                 <Button variant="error" onClick={() => onImageRemove(index)}>
//                   Remove
//                 </Button>
//               </div> */}
//             </div>
//           ))}
//         </div>
//       )}
//     </ImageUploading>
//   );
// }

// export default ImageUploadingApp;

import React, { Component } from "react";

export default class ImageUploadingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}
