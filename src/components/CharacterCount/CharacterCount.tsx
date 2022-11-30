import React from "react";
import CharacterCountProps from "./CharacterCount.types";

export const CharacterCount = ({
  name,
  id,
  maxlength,
  label,
  textareaDescriptionText,
  hint,
  value,
  errorMessage,
  rows,
  maxwords,
  threshold,
  charactersUnderLimitText,
  charactersAtLimitText,
  charactersOverLimitText,
  wordsUnderLimitText,
  wordsAtLimitText,
  wordsOverLimitText,
  classes,
  attributes,
  formGroup,
  countMessage,
  spellcheck,
}: CharacterCountProps) => {
  return (
    <div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
      <div class="govuk-form-group">
        <label class="govuk-label" for="more-detail">
          Can you provide more detail?
        </label>

        <textarea
          class="govuk-textarea govuk-js-character-count"
          id="more-detail"
          name="more-detail"
          rows="5"
          aria-describedby="more-detail-info"
        ></textarea>
      </div>

      <div id="more-detail-info" class="govuk-hint govuk-character-count__message">
        You can enter up to 10 characters
      </div>
    </div>
  );
};

export default CharacterCount;
