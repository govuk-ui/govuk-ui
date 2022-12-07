import React from "react";
import LabelProps from "./Label.types";

export const Label = ({ children, id, classes, htmlFor, attributes }: LabelProps) => {
  return (
    <label className={`govuk-label ${classes || ''}`} htmlFor={htmlFor} id={id} { ...attributes }>
      { children }
    </label>
  );
};

export default Label;
