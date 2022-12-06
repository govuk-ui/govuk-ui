import React from "react";
import HintProps from "./Hint.types";

export const Hint = ({ children, id, classes, ...attributes }: HintProps) => {
  return (
    <div className={`govuk-hint ${classes || ''}`} id={id} { ...attributes }>
      { children }
    </div>
  );
};

export default Hint;
