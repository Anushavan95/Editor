import React from "react";
import shortid from "shortid";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
// import LinkIcon from "@mui/icons-material/Link";
import HyperLink from "../../../images/hyperLink.png";

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
      text: "Heading",
      content: "Heading"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <TextSnippetOutlinedIcon className="edit-icon icon" />,
      text: "Editor",
      content: "Editor"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <AddPhotoAlternateOutlinedIcon className="image-upload icon" />,
      text: "Image",
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
      type: <img src={HyperLink} alt="HyperLink" className="icon" />,
      text: "Hyperlink",
      // my: link,
      content: "HyperLink"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <ImageOutlinedIcon className="icon" />,
      text: "ImageLink",
      content: "ImageLink"
    }
  }
];
