
  import type { Meta, StoryObj } from '@storybook/react';

  import InsetText from '../components/InsetText';
  import fixtures from 'govuk-frontend/govuk/components/inset-text/fixtures.json';
  
  const meta: Meta<typeof InsetText> = {
    title: 'InsetText',
    component: InsetText,
  };

  export default meta;
  type Story = StoryObj<typeof InsetText>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };