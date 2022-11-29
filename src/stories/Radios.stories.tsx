
  import type { Meta, StoryObj } from '@storybook/react';

  import Radios from '../components/Radios';
  import fixtures from 'govuk-frontend/govuk/components/radios/fixtures.json';
  
  const meta: Meta<typeof Radios> = {
    title: 'Radios',
    component: Radios,
  };

  export default meta;
  type Story = StoryObj<typeof Radios>;
  const primary: Story = { }
  const inline: Story = { }
  const withDisabled: Story = { }
  const withLegendAsPageHeading: Story = { }
  const withAMediumLegend: Story = { }
  const withADivider: Story = { }
  const withHintsOnItems: Story = { }
  const withoutFieldset: Story = { }
  const withFieldsetAndErrorMessage: Story = { }
  const withVeryLongOptionText: Story = { }
  const withConditionalItems: Story = { }
  const withConditionalItemsWithSpecialCharacters: Story = { }
  const withConditionalItemChecked: Story = { }
  const prechecked: Story = { }
  const precheckedUsingValue: Story = { }
  const withConditionalItemsAndPrecheckedValue: Story = { }
  const withOptionalFormgroupClassesShowingGroupError: Story = { }
  const small: Story = { }
  const smallWithLongText: Story = { }
  const smallWithError: Story = { }
  const smallWithHint: Story = { }
  const smallWithDisabled: Story = { }
  const smallWithConditionalReveal: Story = { }
  const smallInline: Story = { }
  const smallInlineExtreme: Story = { }
  const smallWithADivider: Story = { }
  const withIdPrefix: Story = { }
  const minimalItemsAndName: Story = { }
  const withFalseyItems: Story = { }
  const fieldsetWithDescribedBy: Story = { }
  const attributes: Story = { }
  const itemsWithAttributes: Story = { }
  const withEmptyConditional: Story = { }
  const labelWithClasses: Story = { }
  const withHintsOnParentAndItems: Story = { }
  const withDescribedByAndHint: Story = { }
  const withErrorMessage: Story = { }
  const withErrorMessageAndIdPrefix: Story = { }
  const withHintAndErrorMessage: Story = { }
  const withHintErrorMessageAndDescribedBy: Story = { }
  const labelWithAttributes: Story = { }
  const fieldsetParams: Story = { }
  const fieldsetWithHtml: Story = { }
  const withFieldsetErrorMessageAndDescribedBy: Story = { }
  const itemCheckedOverridesValue: Story = { }

  const stories: Story[] = [];
  stories.push(primary);
  stories.push(inline);
  stories.push(withDisabled);
  stories.push(withLegendAsPageHeading);
  stories.push(withAMediumLegend);
  stories.push(withADivider);
  stories.push(withHintsOnItems);
  stories.push(withoutFieldset);
  stories.push(withFieldsetAndErrorMessage);
  stories.push(withVeryLongOptionText);
  stories.push(withConditionalItems);
  stories.push(withConditionalItemsWithSpecialCharacters);
  stories.push(withConditionalItemChecked);
  stories.push(prechecked);
  stories.push(precheckedUsingValue);
  stories.push(withConditionalItemsAndPrecheckedValue);
  stories.push(withOptionalFormgroupClassesShowingGroupError);
  stories.push(small);
  stories.push(smallWithLongText);
  stories.push(smallWithError);
  stories.push(smallWithHint);
  stories.push(smallWithDisabled);
  stories.push(smallWithConditionalReveal);
  stories.push(smallInline);
  stories.push(smallInlineExtreme);
  stories.push(smallWithADivider);
  stories.push(withIdPrefix);
  stories.push(minimalItemsAndName);
  stories.push(withFalseyItems);
  stories.push(fieldsetWithDescribedBy);
  stories.push(attributes);
  stories.push(itemsWithAttributes);
  stories.push(withEmptyConditional);
  stories.push(labelWithClasses);
  stories.push(withHintsOnParentAndItems);
  stories.push(withDescribedByAndHint);
  stories.push(withErrorMessage);
  stories.push(withErrorMessageAndIdPrefix);
  stories.push(withHintAndErrorMessage);
  stories.push(withHintErrorMessageAndDescribedBy);
  stories.push(labelWithAttributes);
  stories.push(fieldsetParams);
  stories.push(fieldsetWithHtml);
  stories.push(withFieldsetErrorMessageAndDescribedBy);
  stories.push(itemCheckedOverridesValue);

  fixtures.fixtures.forEach(fixture => {
    // arg population goes here
  });

  export {
    primary,
    inline,
    withDisabled,
    withLegendAsPageHeading,
    withAMediumLegend,
    withADivider,
    withHintsOnItems,
    withoutFieldset,
    withFieldsetAndErrorMessage,
    withVeryLongOptionText,
    withConditionalItems,
    withConditionalItemsWithSpecialCharacters,
    withConditionalItemChecked,
    prechecked,
    precheckedUsingValue,
    withConditionalItemsAndPrecheckedValue,
    withOptionalFormgroupClassesShowingGroupError,
    small,
    smallWithLongText,
    smallWithError,
    smallWithHint,
    smallWithDisabled,
    smallWithConditionalReveal,
    smallInline,
    smallInlineExtreme,
    smallWithADivider,
    withIdPrefix,
    minimalItemsAndName,
    withFalseyItems,
    fieldsetWithDescribedBy,
    attributes,
    itemsWithAttributes,
    withEmptyConditional,
    labelWithClasses,
    withHintsOnParentAndItems,
    withDescribedByAndHint,
    withErrorMessage,
    withErrorMessageAndIdPrefix,
    withHintAndErrorMessage,
    withHintErrorMessageAndDescribedBy,
    labelWithAttributes,
    fieldsetParams,
    fieldsetWithHtml,
    withFieldsetErrorMessageAndDescribedBy,
    itemCheckedOverridesValue,
  };
