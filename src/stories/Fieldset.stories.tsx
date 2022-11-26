
  import type { Meta, StoryObj } from '@storybook/react';

  import Fieldset from '../components/Fieldset';
  import fixtures from 'govuk-frontend/govuk/components/fieldset/fixtures.json';
  
  const meta: Meta<typeof Fieldset> = {
    title: 'Fieldset',
    component: Fieldset,
  };

  export default meta;
  type Story = StoryObj<typeof Fieldset>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };