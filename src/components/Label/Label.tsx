import React from "react";
import LabelProps from "./Label.types";

export const Label = ({ children, id, classes, htmlFor, isPageHeading, ...attributes }: LabelProps) => {
  const labelHtml = (
    <label className={`govuk-label ${classes || ''}`} htmlFor={htmlFor} id={id} { ...attributes }>
      { children }
    </label>
  )
  if (isPageHeading) {
    return (
      <h1 className="govuk-label-wrapper">
        { labelHtml }
      </h1>
    )
  } else {
    return labelHtml
  }
};

export default Label;
