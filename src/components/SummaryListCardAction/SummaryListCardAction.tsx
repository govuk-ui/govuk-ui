import React from "react";
import SummaryListCardActionProps from "./SummaryListCardAction.types";

export const SummaryListCardAction = ({
  id,
  classes,
  children,
  ...attributes
}: SummaryListCardActionProps) => {
  return (
    <li className={`govuk-summary-card__action${classes ? ` ${classes}` : ""}`} {...attributes}>
      {children}
    </li>
  );
};

export default SummaryListCardAction;
