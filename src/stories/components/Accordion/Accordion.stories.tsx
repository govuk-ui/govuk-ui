import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "../../../components/Accordion";
import React from "react";
import AccordionItem from "../../../components/AccordionItem/AccordionItem";
import { Typography } from "../../..";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const primary: Story = {
  name: 'default',
  render: (args) => (
    <Accordion id={'example-accordion'}>
      <AccordionItem heading="Writing well for the web" expanded>
        <Typography>This is the content for Writing well for the web.</Typography>
      </AccordionItem>
      <AccordionItem heading="Writing well for specialists">
        <Typography>This is the content for Writing well for specialists.</Typography>
      </AccordionItem>
      <AccordionItem heading="Know your audience">
        <Typography>This is the content for Know your audience.</Typography>
      </AccordionItem>
      <AccordionItem heading="How people read">
        <Typography>This is the content for How people read.</Typography>
      </AccordionItem>
    </Accordion>
)
}

export {
  primary,
};
