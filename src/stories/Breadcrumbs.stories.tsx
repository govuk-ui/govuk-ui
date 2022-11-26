
  import type { Meta, StoryObj } from '@storybook/react';

  import Breadcrumbs from '../components/Breadcrumbs';
  import fixtures from 'govuk-frontend/govuk/components/breadcrumbs/fixtures.json';
  
  const meta: Meta<typeof Breadcrumbs> = {
    title: 'Breadcrumbs',
    component: Breadcrumbs,
  };

  export default meta;
  type Story = StoryObj<typeof Breadcrumbs>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };