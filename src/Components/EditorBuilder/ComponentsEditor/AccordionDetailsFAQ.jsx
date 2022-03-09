import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAccordionFaqTitleDescription,
  setAccordionFaqTitleValue
} from "../../../redux/builderSlice";

export default function AccordionDetailsFAQ({
  content,
  selectedComponentData
}) {
  const dispatch = useDispatch();
  let titleAccordion = "";
  let accordionDescription = "";
  selectedComponentData.accordionFaq.map((item) => {
    console.log(item, "accordion item");
    switch (Object.keys(item)[0]) {
      case "accordionTitle":
        return (titleAccordion = Object.values(item));
      case "accordionDescription":
        return (accordionDescription = Object.values(item));
      default:
        return null;
    }
  });

  const handleTitleChange = (event) => {
    dispatch(
      setAccordionFaqTitleValue({ id: content, value: event.target.value })
    );
  };
  const handleDescriptionChange = (event) => {
    dispatch(
      setAccordionFaqTitleDescription({
        id: content,
        value: event.target.value
      })
    );
  };
  console.log(accordionDescription, "accordionDescription");
  return (
    <div>
      <TextField
        value={titleAccordion}
        onChange={handleTitleChange}
        placeholder={"Answer"}
      />
      <TextField
        value={accordionDescription}
        onChange={handleDescriptionChange}
        placeholder={"Description"}
      />
    </div>
  );
}
