import type { Meta, StoryObj } from '@storybook/react';

import Container from '../../layout/Container';

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

const primary: Story = { 
  name: 'default',
};

export {
  primary,
};
