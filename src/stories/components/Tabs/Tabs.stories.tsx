import type { Meta, StoryObj } from "@storybook/react";
import React, {useEffect} from "react";

import {
  Tabs,
  TabItem,
  TableHeader,
  TableCell,
  TableRow,
  Tag,
  Table
} from "../../../components";
import {Typography} from "../../../typography";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const primary: Story = {
  name: "default",
  render: (args) => (
    <Tabs>
      <TabItem id="past-day" label='Past day'>
        <Table>
          <TableHeader classes="govuk-table__header">
            <TableCell>Case manager</TableCell>
            <TableCell>Cases opened</TableCell>
            <TableCell>Cases closed</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>David Francis</TableCell>
            <TableCell>3</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Paul Farmer</TableCell>
            <TableCell>1</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rita Patel</TableCell>
            <TableCell>2</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </Table>
      </TabItem>
      <TabItem id="past-week" label='Past week'>
        <Table>
          <TableHeader classes="govuk-table__header">
            <TableCell>Case manager</TableCell>
            <TableCell>Cases opened</TableCell>
            <TableCell>Cases closed</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>David Francis</TableCell>
            <TableCell>24</TableCell>
            <TableCell>18</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Paul Farmer</TableCell>
            <TableCell>16</TableCell>
            <TableCell>20</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rita Patel</TableCell>
            <TableCell>24</TableCell>
            <TableCell>27</TableCell>
          </TableRow>
        </Table>
      </TabItem>
      <TabItem id="past-month" label='Past month'>
        <Table>
          <TableHeader classes="govuk-table__header">
            <TableCell>Case manager</TableCell>
            <TableCell>Cases opened</TableCell>
            <TableCell>Cases closed</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>David Francis</TableCell>
            <TableCell>98</TableCell>
            <TableCell>95</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Paul Farmer</TableCell>
            <TableCell>122</TableCell>
            <TableCell>131</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rita Patel</TableCell>
            <TableCell>126</TableCell>
            <TableCell>142</TableCell>
          </TableRow>
        </Table>
      </TabItem>
      <TabItem id="past-year" label='Past year'>
        <Table>
          <TableHeader classes="govuk-table__header">
            <TableCell>Case manager</TableCell>
            <TableCell>Cases opened</TableCell>
            <TableCell>Cases closed</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>David Francis</TableCell>
            <TableCell>1380</TableCell>
            <TableCell>1472</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Paul Farmer</TableCell>
            <TableCell>1129</TableCell>
            <TableCell>1083</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rita Patel</TableCell>
            <TableCell>1539</TableCell>
            <TableCell>1265</TableCell>
          </TableRow>
        </Table>
      </TabItem>
    </Tabs>
  )
};

export {
  primary
};
