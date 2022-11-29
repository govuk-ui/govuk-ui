
  import type { Meta, StoryObj } from '@storybook/react';

  import Tabs from '../components/Tabs';
  import fixtures from 'govuk-frontend/govuk/components/tabs/fixtures.json';
  
  const meta: Meta<typeof Tabs> = {
    title: 'Tabs',
    component: Tabs,
  };

  export default meta;
  type Story = StoryObj<typeof Tabs>;
  const primary: Story = { name: 'default' }
  const tabswithanchorinpanel: Story = { name: 'tabswithanchorinpanel' }

  const stories: Story[] = [];
  stories.push(primary);
  stories.push(tabswithanchorinpanel);

  fixtures.fixtures.forEach(fixture => {
    let story: Story = stories.find(s => s.name === fixture.name.replace(/[^a-z0-9s]/gi, '')) || { };
    if (story.name === fixture.name) {
      story.args = {
        items: fixture.options.items,
        classes: fixture.options.classes,
        id: fixture.options.id,
        title: fixture.options.title,
        attributes: fixture.options.attributes,
        idPrefix: fixture.options.idPrefix,
      }
    }
  });

  export {
    primary,
    tabswithanchorinpanel,
  };
