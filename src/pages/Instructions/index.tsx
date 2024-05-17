import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { Wrapper } from "@/components/Wrapper";

export const Instructions = () => {
  return (
    <Wrapper title="Təlimatlar">
      <>
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Sayta daxil olmaq və hüquqlar"
          >
            salam
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Yeni bildiriş yatarmaq">
            salam
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Elanlar">
            salam
          </AccordionItem>
        </Accordion>
      </>
    </Wrapper>
  );
};
