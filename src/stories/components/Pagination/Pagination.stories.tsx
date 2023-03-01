import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Pagination from "../../../components/Pagination";
import PaginationItem from "../../../components/PaginationItem";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const primary: Story = {
  name: "Pagination",
  args: {
    previous: {
      href: "#"
    },
    next: {
      href: "#"
    },
    currentPageNumber: 2,
    children: [
      <PaginationItem href={"#"} number="1" />,
      <PaginationItem href={"#"} number="2" />,
      <PaginationItem href={"#"} number="3" />,
    ]
  }
};

const largeNumberOfPages: Story = {
  name: "Large number of pages",
  args: {
    previous: {
      href: "#"
    },
    next: {
      href: "#"
    },
    currentPageNumber: 5,
    children: [
      <PaginationItem href={"#"} number="1" />,
      <PaginationItem href={"#"} number="2" />,
      <PaginationItem href={"#"} number="3" />,
      <PaginationItem href={"#"} number="4" />,
      <PaginationItem href={"#"} number="5" />,
      <PaginationItem href={"#"} number="6" />,
      <PaginationItem href={"#"} number="7" />,
      <PaginationItem href={"#"} number="8" />,
      <PaginationItem href={"#"} number="9" />,
      <PaginationItem href={"#"} number="42" />,
    ]
  }
};

const numberLabels: Story = {
  name: "Number labels",
  args: {
    previous: {
      href: "#",
      labelText: "1 of 3"
    },
    next: {
      href: "#",
      labelText: "3 of 3"
    },
    currentPageNumber: 2,
  }
};

const linkLabels: Story = {
  name: "Number labels",
  args: {
    previous: {
      href: "#",
      labelText: "Applying for a provisional lorry or bus licence",
    },
    next: {
      href: "#",
      labelText: "Driver CPC part 1 test: theory"
    },
    currentPageNumber: 2,
  }
};

const firstPage: Story = {
  name: "First page",
  args: {
    previous: {
      href: "#"
    },
    next: {
      href: "#"
    },
    currentPageNumber: 1,
    children: [
      <PaginationItem href={"#"} number="1" />,
      <PaginationItem href={"#"} number="2" />,
      <PaginationItem href={"#"} number="3" />,
    ]
  }
};

const lastPage: Story = {
  name: "First page",
  args: {
    previous: {
      href: "#"
    },
    next: {
      href: "#"
    },
    currentPageNumber: 3,
    children: [
      <PaginationItem href={"#"} number="1" />,
      <PaginationItem href={"#"} number="2" />,
      <PaginationItem href={"#"} number="3" />,
    ]
  }
};

export {
  primary,
  largeNumberOfPages,
  numberLabels,
  linkLabels,
  firstPage,
  lastPage,
};
