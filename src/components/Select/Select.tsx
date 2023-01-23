import React from "react";
import SelectProps from "./Select.types";
import FormGroup from "../../layout/FormGroup";
import ErrorMessage from "../ErrorMessage";

export const Select = ({
  id,
  name,
  classes,
  children,
  errorMessage,
  describedBy,
  ...attributes
}: SelectProps) => {
  let describedByValue = describedBy || '';
  let errorMessageComponent;

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  return (
    <FormGroup error={errorMessage}>
      {errorMessageComponent}
      <select className={`govuk-select ${classes || ''}`} id={id} name={name} aria-describedby={describedByValue} {...attributes}>
        { children }
      </select>
    </FormGroup>
  );
};

export default Select;
