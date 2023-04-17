import React from "react";
import FormGroupProps from "./FormGroup.types";

export const FormGroup = ({
  children,
  classes,
  error,
  ...attributes
}: FormGroupProps) => {
  return (
    <div className={`govuk-form-group${error ? ' govuk-form-group--error' : ''}${classes ? ` ${classes}` : ''}`} { ...attributes }>
      { children }
    </div>
  );
};

export default FormGroup;
