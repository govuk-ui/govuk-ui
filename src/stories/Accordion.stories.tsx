
  import type { Meta, StoryObj } from '@storybook/react';

  import Accordion from '../components/Accordion';
  import fixtures from 'govuk-frontend/govuk/components/accordion/fixtures.json';
  
  const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
  };

  export default meta;
  type Story = StoryObj<typeof Accordion>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };