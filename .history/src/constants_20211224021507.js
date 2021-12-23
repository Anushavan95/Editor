import React from "react";
import shortid from "shortid";
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
<<<<<<< HEAD
      content: "Heading"
=======
      content: "<h3>Select Your Title</h3>"
>>>>>>> 0063af70a35dbf1701b25b8b543748cfb7a158c9
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <TextSnippetIcon className="edit-icon icon" />,
<<<<<<< HEAD
      content: "Editor"
=======
      content: "<h2>element</h2>"
>>>>>>> 0063af70a35dbf1701b25b8b543748cfb7a158c9
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
