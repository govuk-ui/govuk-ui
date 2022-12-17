import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../../typography/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

const primary: Story = { 
  name: 'default',
};

export {
  primary,
};
