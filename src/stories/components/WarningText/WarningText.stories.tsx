import type { Meta, StoryObj } from "@storybook/react";

import WarningText from "../../../components/WarningText";

const meta: Meta<typeof WarningText> = {
  title: "WarningText",
  component: WarningText,
};

export default meta;
type Story = StoryObj<typeof WarningText>;

const primary: Story = {
  name: "default",
  args: {
    iconFallbackText: 'Warning',
    children: 'You can be fined up to £5,000 if you do not register.'
  }
};

export {
  primary
};
