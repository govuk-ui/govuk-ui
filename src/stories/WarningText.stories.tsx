
  import type { Meta, StoryObj } from '@storybook/react';

  import WarningText from '../components/WarningText';
  import fixtures from 'govuk-frontend/govuk/components/warning-text/fixtures.json';
  
  const meta: Meta<typeof WarningText> = {
    title: 'WarningText',
    component: WarningText,
  };

  export default meta;
  type Story = StoryObj<typeof WarningText>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };