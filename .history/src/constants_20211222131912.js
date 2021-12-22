import React from "react";
import shortid from "shortid";
// import TextFieldsIcon from "@mui/icons-material/TextFields";
// import Heading from "./images/header-icon.png";
// import { selectCount } from "./redux/mySlice";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <TextFieldsIcon className="text-icon icon" />,
      content: "<h3>Select Your Title</h3>"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <TextSnippetIcon className="edit-icon icon" />,
      content: "<h2>element</h2>"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <AddPhotoAlternateIcon className="image-upload icon" />,
      content: "ImageUpload"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "phone",
      content: "Some phone"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "image",
      content: "Some image"
    }
  }
];
