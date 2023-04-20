import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Tag,
  Table,
  TableHeader,
  TableRow,
  TableCell
} from "../../../components";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

const primary: Story = {
  name: "default",
  render: (args) => (
    <Tag>COMPLETED</Tag>
  ),
};

const multipleTags: Story = {
  name: "multipleTags",
  render: (args) => (
    <Table>
      <TableHeader classes="govuk-table__header">
        <TableCell>Name of user</TableCell>
        <TableCell>Status</TableCell>
      </TableHeader>
      <TableRow>
        <TableCell>Rachel Silver</TableCell>
        <TableCell><Tag className="govuk-tag--grey">INACTIVE</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jesse Smith</TableCell>
        <TableCell><Tag className="govuk-tag--grey">INACTIVE</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Joshua Wessel</TableCell>
        <TableCell><Tag>ACTIVE</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Rachael Pepper</TableCell>
        <TableCell><Tag>ACTIVE</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Staurt Say</TableCell>
        <TableCell><Tag className="govuk-tag--grey">INACTIVE</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Laura Frith</TableCell>
        <TableCell><Tag>ACTIVE</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Tim Harvey</TableCell>
        <TableCell><Tag className="govuk-tag--grey">INACTIVE</Tag></TableCell>
      </TableRow>
    </Table>
  ),
};

const colouredTags: Story = {
  name: "colouredTags",
  render: (args) => (
    <Table>
      <TableHeader classes="govuk-table__header">
        <TableCell>Application</TableCell>
        <TableCell>Status</TableCell>
      </TableHeader>
      <TableRow>
        <TableCell>Joshua Wessel</TableCell>
        <TableCell><Tag className="govuk-tag--red">URGENT</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Rachel Silver</TableCell>
        <TableCell><Tag>NEW</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Laura Frith</TableCell>
        <TableCell><Tag>NEW</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Paul French</TableCell>
        <TableCell><Tag>NEW</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jesse Smith</TableCell>
        <TableCell><Tag>NEW</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Rachael Pepper</TableCell>
        <TableCell><Tag className="govuk-tag--green">FINISHED</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Emma Tennant</TableCell>
        <TableCell><Tag className="govuk-tag--yellow">WAITING ON</Tag></TableCell>
      </TableRow>
    </Table>
  ),
};

const allColours: Story = {
  name: "allColours",
  render: (args) => (
    <Table>
      <TableHeader classes="govuk-table__header">
        <TableCell>Class name</TableCell>
        <TableCell>Status</TableCell>
      </TableHeader>
      <TableRow>
        <TableCell><code>govuk-tag--grey</code></TableCell>
        <TableCell><Tag className="govuk-tag--grey">INACTIVE</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>govuk-tag--green</code></TableCell>
        <TableCell><Tag className="govuk-tag--green">NEW</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>govuk-tag--turquoise</code></TableCell>
        <TableCell><Tag className="govuk-tag--turquoise">ACTIVE</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>govuk-tag--blue</code></TableCell>
        <TableCell><Tag className="govuk-tag--blue">PENDING</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>govuk-tag--purple</code></TableCell>
        <TableCell><Tag className="govuk-tag--purple">RECEIVED</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>govuk-tag--pink</code></TableCell>
        <TableCell><Tag className="govuk-tag--pink">SENT</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>govuk-tag--red</code></TableCell>
        <TableCell><Tag className="govuk-tag--red">REJECTED</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>govuk-tag--orange</code></TableCell>
        <TableCell><Tag className="govuk-tag--orange">DECLINED</Tag></TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>govuk-tag--yellow</code></TableCell>
        <TableCell><Tag className="govuk-tag--yellow">DELAYED</Tag></TableCell>
      </TableRow>
    </Table>
  ),
};

export {
  primary,
  multipleTags,
  colouredTags,
  allColours,
};
