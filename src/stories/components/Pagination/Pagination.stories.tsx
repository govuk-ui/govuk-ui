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
      <PaginationItem href={"#"} />,
      <PaginationItem href={"#"} />,
      <PaginationItem href={"#"} />,
      <PaginationItem href={"#"} />,
      <PaginationItem href={"#"} />,
    ]
  }
};

export {
  primary,
};
