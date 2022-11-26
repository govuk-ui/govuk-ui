
  import type { Meta, StoryObj } from '@storybook/react';

  import Label from '../components/Label';
  import fixtures from 'govuk-frontend/govuk/components/label/fixtures.json';
  
  const meta: Meta<typeof Label> = {
    title: 'Label',
    component: Label,
  };

  export default meta;
  type Story = StoryObj<typeof Label>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };