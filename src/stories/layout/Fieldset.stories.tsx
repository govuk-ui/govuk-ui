import type { Meta, StoryObj } from '@storybook/react';

import Fieldset from '../../layout/Fieldset';

const meta: Meta<typeof Fieldset> = {
  title: 'Fieldset',
  component: Fieldset,
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

const primary: Story = {
  name: 'default',
};

export {
  primary,
};
