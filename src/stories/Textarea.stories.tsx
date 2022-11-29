
  import type { Meta, StoryObj } from '@storybook/react';

  import Textarea from '../components/Textarea';
  import fixtures from 'govuk-frontend/govuk/components/textarea/fixtures.json';
  
  const meta: Meta<typeof Textarea> = {
    title: 'Textarea',
    component: Textarea,
  };

  export default meta;
  type Story = StoryObj<typeof Textarea>;
  const primary: Story = { name: 'default' }
  const withHint: Story = { name: 'with hint' }
  const withErrorMessage: Story = { name: 'with error message' }
  const withDefaultValue: Story = { name: 'with default value' }
  const withCustomRows: Story = { name: 'with custom rows' }
  const withLabelAsPageHeading: Story = { name: 'with label as page heading' }
  const withOptionalFormgroupClasses: Story = { name: 'with optional formgroup classes' }
  const withAutocompleteAttribute: Story = { name: 'with autocomplete attribute' }
  const withSpellcheckEnabled: Story = { name: 'with spellcheck enabled' }
  const withSpellcheckDisabled: Story = { name: 'with spellcheck disabled' }

  const stories: Story[] = [];
  stories.push(primary);
  stories.push(withHint);
  stories.push(withErrorMessage);
  stories.push(withDefaultValue);
  stories.push(withCustomRows);
  stories.push(withLabelAsPageHeading);
  stories.push(withOptionalFormgroupClasses);
  stories.push(withAutocompleteAttribute);
  stories.push(withSpellcheckEnabled);
  stories.push(withSpellcheckDisabled);

  fixtures.fixtures.forEach(fixture => {
    let story: Story = stories.find(s => s.name === fixture.name.replace(/[^a-z0-9s]/gi, '')) || { };
    if (story.name === fixture.name) {
      story.args = {
        name: fixture.options.name,
        id: fixture.options.id,
        label: fixture.options.label,
        hint: fixture.options.hint,
        errorMessage: fixture.options.errorMessage,
        value: fixture.options.value,
        rows: fixture.options.rows,
        formGroup: fixture.options.formGroup,
        autocomplete: fixture.options.autocomplete,
        spellcheck: fixture.options.spellcheck,
        classes: fixture.options.classes,
        attributes: fixture.options.attributes,
        describedBy: fixture.options.describedBy,
      }
    }
  });

  export {
    primary,
    withHint,
    withErrorMessage,
    withDefaultValue,
    withCustomRows,
    withLabelAsPageHeading,
    withOptionalFormgroupClasses,
    withAutocompleteAttribute,
    withSpellcheckEnabled,
    withSpellcheckDisabled,
  };
