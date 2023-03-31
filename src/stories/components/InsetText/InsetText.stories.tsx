import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InsetText from "../../../components/InsetText";

const meta: Meta<typeof InsetText> = {
  title: "Inset text",
  component: InsetText,
};

export default meta;
type Story = StoryObj<typeof InsetText>;

const primary: Story = {
  name: 'Inset Text',
  args: {
    children: 'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.'
  }
}

export {
  primary,
};
