import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableHeader, TableRow, TableCell } from "../../../components";

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <Table caption="Dates and amounts" captionClasses="govuk-table__caption--m" firstCellIsHeader>
      <TableHeader>
        <TableCell>Date</TableCell>
        <TableCell>Amount</TableCell>
      </TableHeader>
      <TableRow>
        <TableCell>First 6 weeks</TableCell>
        <TableCell>£109.80 per week</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Next 33 weeks</TableCell>
        <TableCell>£109.80 per week</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Total estimated pay</TableCell>
        <TableCell>£4,282.20</TableCell>
      </TableRow>
    </Table>
  ),
};

const customCaptionSize: Story = {
  name: "custom caption size",
  render: (_args) => (
    <Table caption="Months and rates" captionClasses="govuk-table__caption--l" firstCellIsHeader>
      <TableHeader>
        <TableCell>Month you apply</TableCell>
        <TableCell>Rate for vehicles</TableCell>
      </TableHeader>
      <TableRow>
        <TableCell>January</TableCell>
        <TableCell>£95</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>February</TableCell>
        <TableCell>£55</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>March</TableCell>
        <TableCell>£215</TableCell>
      </TableRow>
    </Table>
  ),
};

const numbers: Story = {
  name: "numbers in a table",
  render: (_args) => (
    <Table caption="Months and rates" captionClasses="govuk-table__caption--m" firstCellIsHeader>
      <TableHeader>
        <TableCell>Month you apply</TableCell>
        <TableCell format="numeric">Rate for bikes</TableCell>
        <TableCell format="numeric">Rate for vehicles</TableCell>
      </TableHeader>
      <TableRow>
        <TableCell>January</TableCell>
        <TableCell format="numeric">£85</TableCell>
        <TableCell format="numeric">£95</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>February</TableCell>
        <TableCell format="numeric">£75</TableCell>
        <TableCell format="numeric">£55</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>March</TableCell>
        <TableCell format="numeric">£165</TableCell>
        <TableCell format="numeric">£125</TableCell>
      </TableRow>
    </Table>
  ),
};

const customColumnWidth: Story = {
  name: "custom column width",
  render: (_args) => (
    <Table caption="Month you apply" captionClasses="govuk-table__caption--m" firstCellIsHeader>
      <TableHeader>
        <TableCell classes="govuk-!-width-one-half">Date</TableCell>
        <TableCell classes="govuk-!-width-one-quarter">Rate for vehicles</TableCell>
        <TableCell classes="govuk-!-width-one-quarter">Rate for bicycles</TableCell>
      </TableHeader>
      <TableRow>
        <TableCell>First 6 weeks</TableCell>
        <TableCell>£109.80 per week</TableCell>
        <TableCell>£59.10 per week</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Next 33 weeks</TableCell>
        <TableCell>£159.80 per week</TableCell>
        <TableCell>£89.10 per week</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Total estimated pay</TableCell>
        <TableCell>£4,282.20</TableCell>
        <TableCell>£2,182.20</TableCell>
      </TableRow>
    </Table>
  ),
};

export { primary, customCaptionSize, numbers, customColumnWidth };
