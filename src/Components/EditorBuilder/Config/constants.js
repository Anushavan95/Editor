import React from "react";
import shortid from "shortid";
import { ReactComponent as EditorS } from "../../../images/svg/Editor.svg";
import { ReactComponent as HeadingSvg } from "../../../images/svg/heading.svg";
import { ReactComponent as HyperLinkSvg } from "../../../images/svg/HyperLink.svg";
import { ReactComponent as ImageSvg } from "../../../images/svg/image.svg";
import { ReactComponent as ImagesLinkSvg } from "../../../images/svg/imagesLink.svg";
import { ReactComponent as AccordionFAQIcon } from "../../../images/svg/accordionFAQ.svg";

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";
export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <HeadingSvg className="text-icon icon" />,
      text: "Heading",
      content: "Heading"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <EditorS className="edit-icon icon" />,
      text: "Editor",
      content: "Editor"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <HyperLinkSvg className="edit-icon icon" />,
      text: "Hyperlink",
      // my: link,
      content: "HyperLink"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <AccordionFAQIcon className="edit-icon icon" />,
      text: "Accordion",
      content: "Accordion"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <ImageSvg className="edit-icon icon" />,

      // type: <AddPhotoAlternateOutlinedIcon className="image-upload icon" />,
      text: "Image",
      content: "ImageUpload"
    }
  },
  // {
  //   id: shortid.generate(),
  //   type: SIDEBAR_ITEM,
  //   component: {
  //     type: "phone",
  //     content: "Some phone"
  //   }
  // },

  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <ImagesLinkSvg className="edit-icon icon" />,
      text: "ImageLink",
      content: "ImageLink"
    }
  }
];
