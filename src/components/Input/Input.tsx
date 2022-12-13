import React from "react";
import InputProps from "./Input.types";

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
  return (
    <>
      <div className="govuk-form-group">
        { label && (
          <label className="govuk-label" htmlFor="input-example">
            { label }
          </label>
        )}
        <input className={`govuk-input ${classes || ''}`} id={id} name={name} type={type} defaultValue={value} />
      </div>
    </>
  );
};

export default Input;
