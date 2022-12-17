import React from "react";
import FormGroupProps from "./FormGroup.types";

export const FormGroup = ({
  children,
  classes,
  ...attributes
}: FormGroupProps) => {
  return (
    <div className={`govuk-form-group ${classes || ''}`} { ...attributes }>
      <fieldset className="govuk-fieldset">
        { children }
      </fieldset>
    </div>
  );
};

export default FormGroup;
