import React from "react";
import TextareaProps from "./Textarea.types";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../../layout/FormGroup";

export const Textarea = ({
  name,
  id,
  rows,
  autocomplete,
  spellcheck,
  classes,
  errorMessage,
  attributes,
  children,
  describedBy,
  value,
}: TextareaProps) => {
  let describedByValue = describedBy || '';
  let errorMessageComponent;

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  return (
    <>
      <FormGroup error={errorMessage}>
        {errorMessageComponent}
        <textarea
          className={`govuk-textarea ${classes}`}
          id={id}
          name={name}
          rows={rows}
          autocomplete={autocomplete}
          spellCheck={spellcheck}
          aria-describedby={describedByValue || ''}
          defaultValue={value}
          {...attributes}
        >
          {children}
        </textarea>
      </FormGroup>
    </>
  );
};

export default Textarea;
