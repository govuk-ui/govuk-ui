
  import type { Meta, StoryObj } from '@storybook/react';

  import Header from '../components/Header';
  import fixtures from 'govuk-frontend/govuk/components/header/fixtures.json';
  
  const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
  };

  export default meta;
  type Story = StoryObj<typeof Header>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };