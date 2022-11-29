
  import type { Meta, StoryObj } from '@storybook/react';

  import Footer from '../components/Footer';
  import fixtures from 'govuk-frontend/govuk/components/footer/fixtures.json';
  
  const meta: Meta<typeof Footer> = {
    title: 'Footer',
    component: Footer,
  };

  export default meta;
  type Story = StoryObj<typeof Footer>;
  const primary: Story = { name: 'default' }
  const withCustomHTMLContentLicenceAndCopyrightNotice: Story = { name: 'with custom HTML content licence and copyright notice' }
  const withCustomTextContentLicenceAndCopyrightNotice: Story = { name: 'with custom text content licence and copyright notice' }
  const withMeta: Story = { name: 'with meta' }
  const withCustomMeta: Story = { name: 'with custom meta' }
  const withMetaLinksAndMetaContent: Story = { name: 'with meta links and meta content' }
  const withDefaultWidthNavigationoneColumn: Story = { name: 'with default width navigation one column' }
  const withDefaultWidthNavigationtwoColumns: Story = { name: 'with default width navigation two columns' }
  const withNavigation: Story = { name: 'with navigation' }
  const fullGDSExample: Story = { name: 'Full GDS example' }
  const threeEqualColumns: Story = { name: 'Three equal columns' }

  const stories: Story[] = [];
  stories.push(primary);
  stories.push(withCustomHTMLContentLicenceAndCopyrightNotice);
  stories.push(withCustomTextContentLicenceAndCopyrightNotice);
  stories.push(withMeta);
  stories.push(withCustomMeta);
  stories.push(withMetaLinksAndMetaContent);
  stories.push(withDefaultWidthNavigationoneColumn);
  stories.push(withDefaultWidthNavigationtwoColumns);
  stories.push(withNavigation);
  stories.push(fullGDSExample);
  stories.push(threeEqualColumns);

  fixtures.fixtures.forEach(fixture => {
    let story: Story = stories.find(s => s.name === fixture.name.replace(/[^a-z0-9s]/gi, '')) || { };
    if (story.name === fixture.name) {
      story.args = {
        contentLicence: fixture.options.contentLicence,
        copyright: fixture.options.copyright,
        meta: fixture.options.meta,
        navigation: fixture.options.navigation,
        attributes: fixture.options.attributes,
        classes: fixture.options.classes,
        containerClasses: fixture.options.containerClasses,
      }
    }
  });

  export {
    primary,
    withCustomHTMLContentLicenceAndCopyrightNotice,
    withCustomTextContentLicenceAndCopyrightNotice,
    withMeta,
    withCustomMeta,
    withMetaLinksAndMetaContent,
    withDefaultWidthNavigationoneColumn,
    withDefaultWidthNavigationtwoColumns,
    withNavigation,
    fullGDSExample,
    threeEqualColumns,
  };
