
  import type { Meta, StoryObj } from '@storybook/react';

  import CookieBanner from '../components/CookieBanner';
  import fixtures from 'govuk-frontend/govuk/components/cookie-banner/fixtures.json';
  
  const meta: Meta<typeof CookieBanner> = {
    title: 'CookieBanner',
    component: CookieBanner,
  };

  export default meta;
  type Story = StoryObj<typeof CookieBanner>;
  const primary: Story = { name: 'default' }
  const acceptedConfirmationBanner: Story = { name: 'accepted confirmation banner' }
  const rejectedConfirmationBanner: Story = { name: 'rejected confirmation banner' }
  const clientsideImplementation: Story = { name: 'clientside implementation' }
  const withHtml: Story = { name: 'with html' }

  const stories: Story[] = [];
  stories.push(primary);
  stories.push(acceptedConfirmationBanner);
  stories.push(rejectedConfirmationBanner);
  stories.push(clientsideImplementation);
  stories.push(withHtml);

  fixtures.fixtures.forEach(fixture => {
    let story: Story = stories.find(s => s.name === fixture.name.replace(/[^a-z0-9s]/gi, '')) || { };
    if (story.name === fixture.name) {
      story.args = {
        messages: fixture.options.messages,
        ariaLabel: fixture.options.ariaLabel,
        hidden: fixture.options.hidden,
        classes: fixture.options.classes,
        attributes: fixture.options.attributes,
      }
    }
  });

  export {
    primary,
    acceptedConfirmationBanner,
    rejectedConfirmationBanner,
    clientsideImplementation,
    withHtml,
  };
