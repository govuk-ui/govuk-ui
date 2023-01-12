import React from "react";
import SummaryListActionsProps from "./SummaryListActions.types";

export const SummaryListActions = ({ 
  id,
  classes,
  children,
  ...attributes
}: SummaryListActionsProps) => {
  return (
    <dt className={`govuk-summary-list__actions ${classes || ''}`}
      id={id}
      { ...attributes }
    >
      {children}
    </dt>
  );
};

export default SummaryListActions;
