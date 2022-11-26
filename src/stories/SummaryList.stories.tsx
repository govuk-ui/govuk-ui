
  import type { Meta, StoryObj } from '@storybook/react';

  import SummaryList from '../components/SummaryList';
  import fixtures from 'govuk-frontend/govuk/components/summary-list/fixtures.json';
  
  const meta: Meta<typeof SummaryList> = {
    title: 'SummaryList',
    component: SummaryList,
  };

  export default meta;
  type Story = StoryObj<typeof SummaryList>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };