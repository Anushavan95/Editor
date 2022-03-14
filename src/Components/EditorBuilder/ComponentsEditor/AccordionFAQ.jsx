import React from "react";
import { useDispatch } from "react-redux";
import { setAccordionFaqTitleValue } from "../../../redux/builderSlice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionFAQ({ componentData, content }) {
  // const richEditorValue = (newContent) => {
  //   dispatch(setAccordionFaqTitleValue({ id: content, value: newContent }));
  // };
  // const dispatch = useDispatch();

  // const arr = [
  //   {
  //     text: "lalal",
  //     desc: `Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget`
  //   }
  // ];
  // console.log(componentData, "accord");
  return (
    <div>
      {/* {componentData.accordionFaq.map((item) => { */}
      {/* return ( */}
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {/* <Typography>{item.accordionTitle}</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            {/* <Typography>{item.accordionDescription}</Typography> */}
          </AccordionDetails>
        </Accordion>
      </>
      {/* ); */}
      {/* })} */}
    </div>
  );
}
