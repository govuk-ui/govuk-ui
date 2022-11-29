
  import type { Meta, StoryObj } from '@storybook/react';

  import Accordion from '../components/Accordion';
  import fixtures from 'govuk-frontend/govuk/components/accordion/fixtures.json';
  
  const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
  };

  export default meta;
  type Story = StoryObj<typeof Accordion>;
  const primary: Story = { name: 'default' }
  const withAdditionalDescriptions: Story = { name: 'with additional descriptions' }
  const withLongContentAndDescription: Story = { name: 'with long content and description' }
  const withOneSectionOpen: Story = { name: 'with one section open' }
  const withAllSectionsAlreadyOpen: Story = { name: 'with all sections already open' }
  const withFocusableElementsInside: Story = { name: 'with focusable elements inside' }
  const withTranslations: Story = { name: 'with translations' }

  const stories: Story[] = [];
  stories.push(primary);
  stories.push(withAdditionalDescriptions);
  stories.push(withLongContentAndDescription);
  stories.push(withOneSectionOpen);
  stories.push(withAllSectionsAlreadyOpen);
  stories.push(withFocusableElementsInside);
  stories.push(withTranslations);

  fixtures.fixtures.forEach(fixture => {
    let story: Story = stories.find(s => s.name === fixture.name.replace(/[^a-z0-9s]/gi, '')) || { };
    if (story.name === fixture.name) {
      story.args = {
        id: fixture.options.id,
        items: fixture.options.items,
        hideAllSectionsText: fixture.options.hideAllSectionsText,
        showAllSectionsText: fixture.options.showAllSectionsText,
        hideSectionText: fixture.options.hideSectionText,
        hideSectionAriaLabelText: fixture.options.hideSectionAriaLabelText,
        showSectionText: fixture.options.showSectionText,
        showSectionAriaLabelText: fixture.options.showSectionAriaLabelText,
        classes: fixture.options.classes,
        attributes: fixture.options.attributes,
        headingLevel: fixture.options.headingLevel,
      }
    }
  });

  export {
    primary,
    withAdditionalDescriptions,
    withLongContentAndDescription,
    withOneSectionOpen,
    withAllSectionsAlreadyOpen,
    withFocusableElementsInside,
    withTranslations,
  };
