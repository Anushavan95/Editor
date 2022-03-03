import React from "react";
import MarginStyles from "./MarginStyles";
import PaddingStyles from "./PaddingStyles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function MargPaddComponents({ content, selectedComponentData }) {
  return (
    <Accordion className="emmets-summary">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Margin/Padding</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <MarginStyles
          content={content}
          selectedComponentData={selectedComponentData}
        />
        <PaddingStyles
          content={content}
          selectedComponentData={selectedComponentData}
        />
      </AccordionDetails>
    </Accordion>
  );
}
