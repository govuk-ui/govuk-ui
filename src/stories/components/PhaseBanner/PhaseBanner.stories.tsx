import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { PhaseBanner } from "../../../components";

const meta: Meta<typeof PhaseBanner> = {
  title: "PhaseBanner",
  component: PhaseBanner,
};

export default meta;
type Story = StoryObj<typeof PhaseBanner>;

const primary: Story = {
  name: "default",
  render: (_args) => (
    <PhaseBanner phase="alpha">
      This is a new service – your{" "}
      <a className="govuk-link" href="/feedback">
        feedback
      </a>{" "}
      will help us to improve it.
    </PhaseBanner>
  ),
};

const beta: Story = {
  name: "default",
  render: (_args) => (
    <PhaseBanner phase="beta">
      This is a new service – your{" "}
      <a className="govuk-link" href="/feedback">
        feedback
      </a>{" "}
      will help us to improve it.
    </PhaseBanner>
  ),
};

export { primary, beta };
