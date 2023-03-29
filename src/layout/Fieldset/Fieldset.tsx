import React from "react";
import FieldsetProps from "./Fieldset.types";

export const Fieldset = ({
  children,
  classes,
  describedBy,
  role,
  ...attributes
}: FieldsetProps) => {
  return (
    <fieldset
      className={`govuk-fieldset${classes ? ` ${classes}` : ''}`}
      aria-describedby={describedBy || ''}
      role={role || ''}
      { ...attributes }
    >
      { children }
    </fieldset>
  );
};

export default Fieldset;
