
  import type { Meta, StoryObj } from '@storybook/react';

  import Table from '../components/Table';
  import fixtures from 'govuk-frontend/govuk/components/table/fixtures.json';
  
  const meta: Meta<typeof Table> = {
    title: 'Table',
    component: Table,
  };

  export default meta;
  type Story = StoryObj<typeof Table>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };