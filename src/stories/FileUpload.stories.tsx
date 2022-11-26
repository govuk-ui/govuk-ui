
  import type { Meta, StoryObj } from '@storybook/react';

  import FileUpload from '../components/FileUpload';
  import fixtures from 'govuk-frontend/govuk/components/file-upload/fixtures.json';
  
  const meta: Meta<typeof FileUpload> = {
    title: 'FileUpload',
    component: FileUpload,
  };

  export default meta;
  type Story = StoryObj<typeof FileUpload>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };