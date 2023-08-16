import type {Meta, StoryObj} from "@storybook/react";
import React from "react";

import {Typography} from "../../..";

const meta: Meta = {
  title: "Typography",
  component: Typography,
};

export default meta;
type ContainerStory = StoryObj<typeof Typography>;

const headings: ContainerStory = {
  name: "headings",
  render: (_args) => (
    <>
      <Typography component="h1" variant="l">govuk-heading-l</Typography>
      <Typography component="h2" variant="m">govuk-heading-m</Typography>
      <Typography component="h3" variant="s">govuk-heading-s</Typography>
    </>
  ),
};

const headingsLongFormContent: ContainerStory = {
  name: "headings long form content",
  render: (_args) => (
    <>
      <Typography component="h1" variant="xl">govuk-heading-xl</Typography>
      <Typography component="h2" variant="l">govuk-heading-l</Typography>
      <Typography component="h3" variant="m">govuk-heading-m</Typography>
      <Typography component="h3" variant="s">govuk-heading-s</Typography>
    </>
  ),
};

const headingsWithCaptions: ContainerStory = {
  name: "headings with captions",
  render: (_args) => (
    <>
      <Typography variant="caption" captionSize="xl">govuk-caption-xl</Typography>
      <Typography component="h1" variant="xl">govuk-heading-xl</Typography>
      <Typography variant="caption" captionSize="l">govuk-caption-l</Typography>
      <Typography component="h2" variant="l">govuk-heading-l</Typography>
      <Typography variant="caption" captionSize="m">govuk-caption-m</Typography>
      <Typography component="h3" variant="m">govuk-heading-m</Typography>
    </>
  ),
};

const nestedCaptions: ContainerStory = {
  name: "nested captions",
  render: (_args) => (
    <Typography component="h2" variant="l">
      <Typography variant="caption" captionSize="l">govuk-caption-l</Typography>
      govuk-heading-l
    </Typography>
  ),
};

const body: ContainerStory = {
  name: "body",
  render: (_args) => (
    <Typography>
      govuk-body
    </Typography>
  ),
};


const lead: ContainerStory = {
  name: "lead",
  render: (_args) => (
    <Typography classes="govuk-body-l">
      govuk-body-l
    </Typography>
  ),
};

const bodySmall: ContainerStory = {
  name: "body",
  render: (_args) => (
    <Typography classes="govuk-body-s">
      govuk-body-s
    </Typography>
  ),
};

const fontSize: ContainerStory = {
  name: "font size",
  render: (_args) => (
    <>
      <Typography classes="govuk-!-font-size-80">govuk-!-font-size-80</Typography>
      <Typography classes="govuk-!-font-size-48">govuk-!-font-size-48</Typography>
      <Typography classes="govuk-!-font-size-36">govuk-!-font-size-36</Typography>
      <Typography classes="govuk-!-font-size-27">govuk-!-font-size-27</Typography>
      <Typography classes="govuk-!-font-size-24">govuk-!-font-size-24</Typography>
      <Typography classes="govuk-!-font-size-19">govuk-!-font-size-19</Typography>
      <Typography classes="govuk-!-font-size-16">govuk-!-font-size-16</Typography>
      <Typography classes="govuk-!-font-size-14">govuk-!-font-size-14</Typography>
    </>
  ),
};

const fontWeight: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <>
      <Typography classes="govuk-!-font-weight-regular">govuk-!-font-weight-regular</Typography>
      <Typography classes="govuk-!-font-weight-bold">govuk-!-font-weight-bold</Typography>
    </>
  ),
};

const links: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <Typography>
      Jump to <a href="#" className="govuk-link">HTML example</a>.
    </Typography>
  ),
};

const linkNoVisitedState: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <a href="#" className="govuk-link govuk-link--no-visited-state">link text (with no visited state)</a>
  ),
};

const linkNewTab: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <a href="#" className="govuk-link" rel="noreferrer noopener" target="_blank">link text (opens in new tab)</a>
  ),
};

const linksOnDarkBackgrounds: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <a href="#" className="govuk-link govuk-link--inverse">link text (on dark background)</a>
  ),
};

const linkNoUnderline: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <a href="#" className="govuk-link govuk-link--no-underline">link text (with no underline)</a>
  ),
};

const lists: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <ul className="govuk-list">
      <li>
        <a className="govuk-link" href="#">Benefits calculators</a>
      </li>
      <li>
        <a className="govuk-link" href="#">Benefit overpayments</a>
      </li>
      <li>
        <a className="govuk-link" href="#">Benefit fraud</a>
      </li>
      <li>
        <a className="govuk-link" href="#">More</a>
      </li>
    </ul>
  ),
};

const bulletedLists: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <>
      <p className="govuk-body">You can buy:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>apples</li>
        <li>oranges</li>
        <li>pears</li>
      </ul>
    </>
  ),
};

const numberedLists: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <ol className="govuk-list govuk-list--number">
      <li>Delivery address.</li>
      <li>Payment.</li>
      <li>Confirmation.</li>
    </ol>
  ),
};

const listExtraSpacing: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <>
      <p className="govuk-body">You will have to apply the reverse charge if you supply any of these services:</p>
      <ul className="govuk-list govuk-list--bullet govuk-list--spaced">
        <li>
          constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether
          permanent or not), including offshore installation services
        </li>
        <li>
          constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of
          the land, including (in particular) walls, roadworks, power lines, electronic communications equipment,
          aircraft runways, railways, inland waterways, docks and harbours
        </li>
        <li>
          pipelines, reservoirs, water mains, wells, sewers, industrial plant and installations for purposes of land
          drainage, coast protection or defence
        </li>
        <li>
          installing heating, lighting, air-conditioning, ventilation, power supply, drainage, sanitation, water supply
          or fire protection systems in any building or structure
        </li>
        <li>
          internal cleaning of buildings and structures, so far as carried out in the course of their construction,
          alteration, repair, extension or restoration
        </li>
        <li>
          painting or decorating the inside or the external surfaces of any building or structure
        </li>
        <li>
          services which form an integral part of, or are part of the preparation or completion of the services
          described above - including site clearance, earth-moving, excavation, tunnelling and boring, laying of
          foundations, erection of scaffolding, site restoration, landscaping and the provision of roadways and other
          access works
        </li>
      </ul>
    </>
  ),
};

const sectionBreak: ContainerStory = {
  name: "font weight",
  render: (_args) => (
    <>
      <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible"/>
      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible"/>
      <hr className="govuk-section-break govuk-section-break--m govuk-section-break--visible"/>
      <hr className="govuk-section-break govuk-section-break--visible"/>
    </>
  ),
};

export {
  headings,
  headingsLongFormContent,
  headingsWithCaptions,
  nestedCaptions,
  body,
  lead,
  bodySmall,
  fontSize,
  fontWeight,
  links,
  linkNoVisitedState,
  linkNewTab,
  linksOnDarkBackgrounds,
  linkNoUnderline,
  lists,
  bulletedLists,
  numberedLists,
  listExtraSpacing,
  sectionBreak,
};
