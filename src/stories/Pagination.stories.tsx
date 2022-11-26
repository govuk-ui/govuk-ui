
  import type { Meta, StoryObj } from '@storybook/react';

  import Pagination from '../components/Pagination';
  import fixtures from 'govuk-frontend/govuk/components/pagination/fixtures.json';
  
  const meta: Meta<typeof Pagination> = {
    title: 'Pagination',
    component: Pagination,
  };

  export default meta;
  type Story = StoryObj<typeof Pagination>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };