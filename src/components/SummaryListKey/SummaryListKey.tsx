import React from "react";
import SummaryListKeyProps from "./SummaryListKey.types";

export const SummaryListKey = ({ 
  id,
  classes,
  children,
  ...attributes
}: SummaryListKeyProps) => {
  return (
    <dt className={`govuk-summary-list__key ${classes || ''}`}
      id={id}
      { ...attributes }
    >
      {children}
    </dt>
  );
};

export default SummaryListKey;
