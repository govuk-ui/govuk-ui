
  import type { Meta, StoryObj } from '@storybook/react';

  import CharacterCount from '../components/CharacterCount';
  import fixtures from 'govuk-frontend/govuk/components/character-count/fixtures.json';
  
  const meta: Meta<typeof CharacterCount> = {
    title: 'CharacterCount',
    component: CharacterCount,
  };

  export default meta;
  type Story = StoryObj<typeof CharacterCount>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };