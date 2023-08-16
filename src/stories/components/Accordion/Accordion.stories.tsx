import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Typography, Accordion, AccordionItem } from "../../..";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <Accordion id={"example-accordion"}>
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
  ),
};

const summary: Story = {
  name: "summary",
  render: (_args) => (
    <Accordion id={"example-summary-accordion"}>
      <AccordionItem
        heading="Understanding agile project management"
        summary="Introductions, methods, core features."
      >
        <Typography>Agile and government services: an introduction</Typography>
        <Typography>Agile methods: an introduction</Typography>
        <Typography>Core principles of agile</Typography>
      </AccordionItem>
      <AccordionItem
        heading="Working with agile methods"
        summary="Workspaces, tools and techniques, user stories, planning."
      >
        <Typography>Creating an agile working environment</Typography>
        <Typography>Agile tools and techniques</Typography>
        <Typography>Set up a team wall</Typography>
        <Typography>Writing user stories</Typography>
        <Typography>Planning in agile</Typography>
        <Typography>Deciding on priorities</Typography>
        <Typography>Developing a roadmap</Typography>
      </AccordionItem>
      <AccordionItem
        heading="Governing agile services"
        summary="Principles, measuring progress, spending money."
      >
        <Typography>Governance principles for agile service delivery</Typography>
        <Typography>Measuring and reporting progress</Typography>
        <Typography>
          Spend controls: check if you need approval to spend money on a service
        </Typography>
        <Typography>Spend controls: apply for approval to spend money on a service</Typography>
        <Typography>Spend controls: the new pipeline process</Typography>
        <Typography>Working across organisational boundaries</Typography>
      </AccordionItem>
      <AccordionItem
        heading="Phases of an agile project"
        summary="Discovery, alpha, beta, live and retirement."
      >
        <Typography>How the discovery phase works</Typography>
        <Typography>How the alpha phase works</Typography>
        <Typography>How the beta phase works</Typography>
        <Typography>How the live phase works</Typography>
        <Typography>Retiring your service</Typography>
      </AccordionItem>
    </Accordion>
  ),
};

export { primary, summary };
