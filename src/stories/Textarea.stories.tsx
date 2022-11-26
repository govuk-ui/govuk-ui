
  import type { Meta, StoryObj } from '@storybook/react';

  import Textarea from '../components/Textarea';
  import fixtures from 'govuk-frontend/govuk/components/textarea/fixtures.json';
  
  const meta: Meta<typeof Textarea> = {
    title: 'Textarea',
    component: Textarea,
  };

  export default meta;
  type Story = StoryObj<typeof Textarea>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };