
  import type { Meta, StoryObj } from '@storybook/react';

  import Select from '../components/Select';
  import fixtures from 'govuk-frontend/govuk/components/select/fixtures.json';
  
  const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
  };

  export default meta;
  type Story = StoryObj<typeof Select>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };