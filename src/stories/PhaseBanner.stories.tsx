
  import type { Meta, StoryObj } from '@storybook/react';

  import PhaseBanner from '../components/PhaseBanner';
  import fixtures from 'govuk-frontend/govuk/components/phase-banner/fixtures.json';
  
  const meta: Meta<typeof PhaseBanner> = {
    title: 'PhaseBanner',
    component: PhaseBanner,
  };

  export default meta;
  type Story = StoryObj<typeof PhaseBanner>;

  const primary: Story = { name: 'default' };

  const stories: Story[] = [];
  stories.push(primary);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary
  };