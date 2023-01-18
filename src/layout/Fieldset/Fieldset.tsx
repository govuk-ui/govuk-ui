import React from "react";
import FieldsetProps from "./Fieldset.types";

export const Fieldset = ({
  children,
  classes,
  describedBy,
  ...attributes
}: FieldsetProps) => {
  return (
    <fieldset className={`govuk-fieldset ${classes || ''}`} { ...attributes } aria-describedby={describedBy || ''}>
      { children }
    </fieldset>
  );
};

export default Fieldset;
