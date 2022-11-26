
  import type { Meta, StoryObj } from '@storybook/react';

  import Input from '../components/Input';
  import fixtures from 'govuk-frontend/govuk/components/input/fixtures.json';
  
  const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
  };

  export default meta;
  type Story = StoryObj<typeof Input>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };