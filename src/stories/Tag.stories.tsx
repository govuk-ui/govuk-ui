
  import type { Meta, StoryObj } from '@storybook/react';

  import Tag from '../components/Tag';
  import fixtures from 'govuk-frontend/govuk/components/tag/fixtures.json';
  
  const meta: Meta<typeof Tag> = {
    title: 'Tag',
    component: Tag,
  };

  export default meta;
  type Story = StoryObj<typeof Tag>;
  const primary: Story = { name: 'default' }
  const inactive: Story = { name: 'inactive' }
  const grey: Story = { name: 'grey' }
  const blue: Story = { name: 'blue' }
  const turquoise: Story = { name: 'turquoise' }
  const green: Story = { name: 'green' }
  const purple: Story = { name: 'purple' }
  const pink: Story = { name: 'pink' }
  const red: Story = { name: 'red' }
  const orange: Story = { name: 'orange' }
  const yellow: Story = { name: 'yellow' }

  const stories: Story[] = [];
  stories.push(primary);
  stories.push(inactive);
  stories.push(grey);
  stories.push(blue);
  stories.push(turquoise);
  stories.push(green);
  stories.push(purple);
  stories.push(pink);
  stories.push(red);
  stories.push(orange);
  stories.push(yellow);

  fixtures.fixtures.forEach(fixture => {
    let story: Story = stories.find(s => s.name === fixture.name.replace(/[^a-z0-9s]/gi, '')) || { };
    if (story.name === fixture.name) {
      story.args = {
        text: fixture.options.text,
        classes: fixture.options.classes,
        attributes: fixture.options.attributes,
        html: fixture.options.html,
      }
    }
  });

  export {
    primary,
    inactive,
    grey,
    blue,
    turquoise,
    green,
    purple,
    pink,
    red,
    orange,
    yellow,
  };
