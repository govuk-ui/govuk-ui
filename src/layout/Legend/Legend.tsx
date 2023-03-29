import React from "react";
import LegendProps from "./Legend.types";
import { Typography } from "../../typography";

export const Legend = ({
  children,
  classes,
  isPageHeading,
  ...attributes
}: LegendProps) => {
  if (isPageHeading) {
    return (
      <legend
        className={`govuk-fieldset__legend${classes ? ` ${classes}` : ''}`}
        { ...attributes }
      >
        <h1 className="govuk-fieldset__heading">{ children }</h1>
      </legend>
    );
  } else {
    return (
      <legend
        className={`govuk-fieldset__legend${classes ? ` ${classes}` : ''}`}
        { ...attributes }
      >
        { children }
      </legend>
    );
  }
};

export default Legend;
