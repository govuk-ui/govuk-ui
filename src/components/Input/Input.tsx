import React from "react";
import InputProps from "./Input.types";
import ErrorMessage from "../ErrorMessage";

export const Input = ({
  label,
  id,
  name,
  hint,
  errorMessage,
  classes,
  formGroup,
  autocomplete,
  type,
  pattern,
  spellcheck,
  prefix,
  suffix,
  value,
  describedBy,
  attributes,
  inputmode,
}: InputProps) => {
  let describedByValue = describedBy || '';
  let errorMessageComponent;

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  return (
    <>
      <div className={`govuk-form-group ${errorMessage ? 'govuk-form-group--error' : ''}`}>
        { label && (
          <label className="govuk-label" htmlFor="input-example">
            { label }
          </label>
        )}
        {errorMessageComponent}
        <input
          className={`govuk-input ${classes || ''} ${errorMessage ? ' govuk-input--error' : ''}`}
          id={id}
          name={name}
          type={type}
          defaultValue={value}
          aria-describedby={describedByValue || ''}
        />
      </div>
    </>
  );
};

export default Input;
