import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Header } from "../../../components";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

const primary: Story = {
  name: "default",
  render: (_args) => <Header homepageUrl="#" />,
};

const withServiceName: Story = {
  name: "default",
  render: (_args) => <Header homepageUrl="#" serviceName="Service name" />,
};

export { primary, withServiceName };
