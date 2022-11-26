
  import type { Meta, StoryObj } from '@storybook/react';

  import DateInput from '../components/DateInput';
  import fixtures from 'govuk-frontend/govuk/components/date-input/fixtures.json';
  
  const meta: Meta<typeof DateInput> = {
    title: 'DateInput',
    component: DateInput,
  };

  export default meta;
  type Story = StoryObj<typeof DateInput>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };