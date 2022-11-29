
  import type { Meta, StoryObj } from '@storybook/react';

  import SkipLink from '../components/SkipLink';
  import fixtures from 'govuk-frontend/govuk/components/skip-link/fixtures.json';
  
  const meta: Meta<typeof SkipLink> = {
    title: 'SkipLink',
    component: SkipLink,
  };

  export default meta;
  type Story = StoryObj<typeof SkipLink>;
  const primary: Story = { name: 'default' }
  const withFocus: Story = { name: 'with focus' }

  const stories: Story[] = [];
  stories.push(primary);
  stories.push(withFocus);

  fixtures.fixtures.forEach(fixture => {
    let story: Story = stories.find(s => s.name === fixture.name.replace(/[^a-z0-9s]/gi, '')) || { };
    if (story.name === fixture.name) {
      story.args = {
        text: fixture.options.text,
        href: fixture.options.href,
        classes: fixture.options.classes,
        html: fixture.options.html,
        attributes: fixture.options.attributes,
      }
    }
  });

  export {
    primary,
    withFocus,
  };
