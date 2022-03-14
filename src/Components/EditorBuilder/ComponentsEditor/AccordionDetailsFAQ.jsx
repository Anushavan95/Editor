import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccordionList,
  setTitleAccordion,
  addAccordionList,
  selectAccordionTitle
} from "../../../redux/builderSlice";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function AccordionDetailsFAQ({
  content,
  selectedComponentData
}) {
  const dispatch = useDispatch();
  const list = useSelector(selectAccordionList);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(list, "list");
  // useSelector(selectAccord)
  let titleAccordion = "";
  console.log(titleAccordion, "titleAccordion");

  let accordionDescription = "";
  // console.log(titleAccordion, "titleAccordion 1111111111");
  // selectedComponentData.accordionFaq.map((item) => {
  //   console.log(item, "accordion item");
  //   switch (Object.keys(item)[0]) {
  //     case "accordionTitle":
  //       return (titleAccordion = Object.values(item));
  //     case "accordionDescription":
  //       return (accordionDescription = Object.values(item));
  //     default:
  //       return null;
  //   }
  // });

  Object.keys(selectedComponentData).map((item) => {
    switch (Object.keys(item)[0]) {
      case "accordionTitle":
        return setTitle(Object.values(item));
      case "accordionDescription":
        return setDescription(Object.values(item));
      default:
        return null;
    }
  });

  const handleTitleChange = (event) => {
    dispatch(setTitleAccordion({ id: content, value: event.target.value }));
  };

  // const handleDescriptionChange = (event) => {
  //   dispatch(
  //     setAccordionFaqTitleDescription({
  //       id: content,
  //       value: event.target.value
  //     })
  //   );
  // };

  // const add = () => {
  //   dispatch(addAccordionList({ title: title }));
  // };
  console.log(title, "title");
  console.log(selectedComponentData, "selectedComponentData");

  return (
    <div>
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Item 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  value={title}
                  onChange={handleTitleChange}
                  placeholder={"Answer"}
                />
                <TextField
                  value={description}
                  // onChange={handleDescriptionChange}
                  placeholder={"Description"}
                />
                <button>Add Item</button>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </>
    </div>
  );
}
