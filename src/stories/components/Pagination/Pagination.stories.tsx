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
      <PaginationItem href={"#"} number="4" />,
      <PaginationItem href={"#"} number="5" />,
      <PaginationItem href={"#"} number="6" />,
      <PaginationItem href={"#"} number="7" />,
    ]
  }
};

export {
  primary,
};
