import React from "react";
import SummaryListProps from "./SummaryListItem.types";

export const SummaryListItem = ({ 
  id,
  rowKey,
  classes,
  children,
  action,
  ...attributes
}: SummaryListProps) => {

  return (
    <div className="govuk-summary-list__row">
      <dt className="govuk-summary-list__key">
        {rowKey}
      </dt>
      <dd className="govuk-summary-list__value">
        {children}
      </dd>
      <dd className="govuk-summary-list__actions">
        {action}
      </dd>
    </div>
  );
};

export default SummaryListItem;
