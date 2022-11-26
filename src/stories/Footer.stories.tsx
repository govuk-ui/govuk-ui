
  import type { Meta, StoryObj } from '@storybook/react';

  import Footer from '../components/Footer';
  import fixtures from 'govuk-frontend/govuk/components/footer/fixtures.json';
  
  const meta: Meta<typeof Footer> = {
    title: 'Footer',
    component: Footer,
  };

  export default meta;
  type Story = StoryObj<typeof Footer>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };