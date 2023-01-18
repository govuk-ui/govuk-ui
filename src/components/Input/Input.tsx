import React from "react";
import InputProps from "./Input.types";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../../layout/FormGroup";

export const Input = ({
  label,
  id,
  name,
  errorMessage,
  classes,
  type,
  value,
  describedBy,
  attributes,
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
      <FormGroup error={errorMessage}>
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
      </FormGroup>
    </>
  );
};

export default Input;
