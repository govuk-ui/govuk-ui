import React from "react";
import InsetTextProps from "./InsetText.types";

export const InsetText = ({ children, classes, id, attributes }: InsetTextProps) => {
  return (
    <div className={`govuk-inset-text ${classes || ''}`} id={id} {...attributes}>
      {children}
    </div>
  );
};

export default InsetText;
