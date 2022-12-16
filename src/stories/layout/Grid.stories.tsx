import type { Meta, StoryObj } from '@storybook/react';

import Grid from '../../layout/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof Grid>;

const primary: Story = { 
  name: 'default',
};

export {
  primary,
};
