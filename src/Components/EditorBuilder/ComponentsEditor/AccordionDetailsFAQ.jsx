import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccordionList,
  setTitleAccordion,
  addAccordionList,
  selectAccordionTitle,
  deleteAccordionList
} from "../../../redux/builderSlice";
import {
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";

import { ExpandMore, Delete } from "@mui/icons-material";
import JoditEditor from "jodit-react";

export default function AccordionDetailsFAQ({
  content,
  selectedComponentData
}) {
  const dispatch = useDispatch();
  const listAccordion = useSelector(selectAccordionList);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // console.log(list, "list");
  // useSelector(selectAccord)
  let titleAccordion = "";
  console.log(titleAccordion, "titleAccordion");

  let accordionDescription = "";
  const config = {
    readonly: false
  };
  const editor = null;
  // const [listAccordion, setList] = useState([
  //   { listAccordion: listAccordion, accordionDescription: accordionDescription }
  // ]);

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

  const addItem = () => {
    let newItem = {
      titleAccordion: "",
      accordionDescription: ""
    };

    dispatch(addAccordionList(newItem));
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion</Typography>
        </AccordionSummary>
        {listAccordion.map((item) => {
          return (
            <Box>
              <AccordionDetails>
                <Box className="accordion-item">
                  <Accordion className="accord-list">
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Item 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box>
                        Title Description
                        <TextField
                          value={title}
                          onChange={handleTitleChange}
                          placeholder={"Answer"}
                        />
                      </Box>
                      <JoditEditor
                        ref={editor}
                        // value={textEditorValue}
                        config={config}
                        toolbarAdaptive={false}
                        tabIndex={1} // tabIndex of textarea
                        // onBlur={richEditorValue}
                        // onChange={(newContent) => {
                        //   // console.log(newContent, "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                        // }}
                      />
                    </AccordionDetails>
                  </Accordion>

                  <Button
                    onClick={() => dispatch(deleteAccordionList(index))}
                    variant="outlined"
                    className="delete-accord"
                    startIcon={<Delete />}
                  ></Button>
                </Box>
              </AccordionDetails>
            </Box>
          );
        })}
        <Box className="add-accord">
          <Button className="btn-acord-added" onClick={addItem}>
            + Add Item
          </Button>
        </Box>
      </Accordion>
    </div>
  );
}
