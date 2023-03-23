import React from "react";
import CharacterCountProps from "./CharacterCount.types";
import { Textarea } from "..";

export const CharacterCount = ({
  name,
  id,
  maxLength,
  textareaDescriptionText,
  value,
  errorMessage,
  rows,
  autocomplete,
  children,
  maxWords,
  threshold,
  charactersUnderLimitText,
  charactersAtLimitText,
  charactersOverLimitText,
  wordsUnderLimitText,
  wordsAtLimitText,
  wordsOverLimitText,
  classes,
  formGroup,
  countMessage,
  spellcheck,
  describedBy,
  ...attributes
}: CharacterCountProps) => {

  const hintSuffix = maxWords ? `${maxWords} words` : `${maxLength} characters`;
  const hintMessage = `You can enter up to ${hintSuffix}`;
  return (
    <>
      <div className={`govuk-character-count ${classes}`} data-module="govuk-character-count" data-maxlength="10">
        <Textarea
          classes="govuk-textarea govuk-js-character-count"
          id={id}
          name={name}
          rows={rows}
          autocomplete={autocomplete}
          spellcheck={spellcheck}
          describedBy={describedBy || ''}
          value={value || ''}
          {...attributes}
        >
          {children}
        </Textarea>

        <div id={`${id}-info`} className="govuk-hint govuk-character-count__message">
          {hintMessage}
        </div>
      </div>
    </>
  );
};

export default CharacterCount;
