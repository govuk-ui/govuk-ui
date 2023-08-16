import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Pagination, PaginationItem } from "../../../components";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const primary: Story = {
  name: "Pagination",
  render: (_args) => (
    <Pagination currentPageNumber={2} previous={{ href: "#" }} next={{ href: "#" }}>
      <PaginationItem href={"#"} number="1" />
      <PaginationItem href={"#"} number="2" />
      <PaginationItem href={"#"} number="3" />
    </Pagination>
  ),
};

const largeNumberOfPages: Story = {
  name: "Large number of pages",
  render: (_args) => (
    <Pagination currentPageNumber={5} previous={{ href: "#" }} next={{ href: "#" }}>
      <PaginationItem href={"#"} number="1" />
      <PaginationItem href={"#"} number="2" />
      <PaginationItem href={"#"} number="3" />
      <PaginationItem href={"#"} number="4" />
      <PaginationItem href={"#"} number="5" />
      <PaginationItem href={"#"} number="6" />
      <PaginationItem href={"#"} number="7" />
      <PaginationItem href={"#"} number="8" />
      <PaginationItem href={"#"} number="9" />
      <PaginationItem href={"#"} number="42" />
    </Pagination>
  ),
};

const numberLabels: Story = {
  name: "Number labels",
  render: (_args) => (
    <Pagination
      currentPageNumber={2}
      previous={{ href: "#", labelText: "1 of 3" }}
      next={{ href: "#", labelText: "3 of 3" }}
    />
  ),
};

const linkLabels: Story = {
  name: "Number labels",
  render: (_args) => (
    <Pagination
      currentPageNumber={2}
      previous={{ href: "#", labelText: "Applying for a provisional lorry or bus licence" }}
      next={{ href: "#", labelText: "Driver CPC part 1 test: theory" }}
    />
  ),
};

const firstPage: Story = {
  name: "First page",
  render: (_args) => (
    <Pagination currentPageNumber={1} previous={{ href: "#" }} next={{ href: "#" }}>
      <PaginationItem href={"#"} number="1" />
      <PaginationItem href={"#"} number="2" />
      <PaginationItem href={"#"} number="3" />
    </Pagination>
  ),
};

const lastPage: Story = {
  name: "First page",
  render: (_args) => (
    <Pagination currentPageNumber={3} previous={{ href: "#" }} next={{ href: "#" }}>
      <PaginationItem href={"#"} number="1" />
      <PaginationItem href={"#"} number="2" />
      <PaginationItem href={"#"} number="3" />
    </Pagination>
  ),
};

export { primary, largeNumberOfPages, numberLabels, linkLabels, firstPage, lastPage };
