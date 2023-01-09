import React from "react";
import SummaryListValueProps from "./SummaryListValue.types";

export const SummaryListValue = ({ 
  id,
  classes,
  children,
  ...attributes
}: SummaryListValueProps) => {
  return (
    <dt class={`govuk-summary-list__value ${classes || ''}`}
      id={id}
      { ...attributes }
    >
      {children}
    </dt>
  );
};

export default SummaryListValue;

