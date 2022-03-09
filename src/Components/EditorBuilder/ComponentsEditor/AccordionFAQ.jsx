import React from "react";
import { useDispatch } from "react-redux";
import { setAccordionFaqTitleValue } from "../../../redux/builderSlice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionFAQ({
  selectedComponentData,
  content,
  accordion
}) {
  console.log(selectedComponentData, "selectedComponentData");
  //   console.log(selectedComponentData, "content");
  //   //   const dispatch = useDispatch();
  //   //   const editor = null;

  const richEditorValue = (newContent) => {
    // (newContent) => setContent();
    dispatch(setAccordionFaqTitleValue({ id: content, value: newContent }));
  };
  const dispatch = useDispatch();

  const arr = [
    {
      text: "lalal",
      desc: `Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget`
    }
  ];
  console.log(accordion, "accord");
  return (
    <div onclick={richEditorValue}>
      {accordion.map((item) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.accordionTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.accordionDescription}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
