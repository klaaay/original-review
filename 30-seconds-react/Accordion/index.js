import React from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

const index = () => {
  return (
    <Accordion defaultIndex="1" onItemClick={console.log}>
      <AccordionItem label="A" index="1">
        Lorem ipsum
      </AccordionItem>
      <AccordionItem label="B" index="2">
        Dolor sit amet
      </AccordionItem>
    </Accordion>
  );
};

export default index;
