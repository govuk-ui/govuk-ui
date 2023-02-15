import React from "react";
import LegendProps from "./Legend.types";

export const Legend = ({
  children,
  classes,
  ...attributes
}: LegendProps) => {
  return (
    <legend
      className={`govuk-fieldset__legend ${classes || ''}`}
      { ...attributes }
    >
      {children}
    </legend>
  );
};

export default Legend;
