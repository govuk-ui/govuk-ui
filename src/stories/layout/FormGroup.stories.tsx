import type { Meta, StoryObj } from '@storybook/react';

import FormGroup from '../../layout/FormGroup';

const meta: Meta<typeof FormGroup> = {
  title: 'FormGroup',
  component: FormGroup,
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

const primary: Story = { 
  name: 'default',
};

export {
  primary,
};
