
  import type { Meta, StoryObj } from '@storybook/react';

  import Tag from '../components/Tag';
  import fixtures from 'govuk-frontend/govuk/components/tag/fixtures.json';
  
  const meta: Meta<typeof Tag> = {
    title: 'Tag',
    component: Tag,
  };

  export default meta;
  type Story = StoryObj<typeof Tag>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };