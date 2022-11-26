
  import type { Meta, StoryObj } from '@storybook/react';

  import Panel from '../components/Panel';
  import fixtures from 'govuk-frontend/govuk/components/panel/fixtures.json';
  
  const meta: Meta<typeof Panel> = {
    title: 'Panel',
    component: Panel,
  };

  export default meta;
  type Story = StoryObj<typeof Panel>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };