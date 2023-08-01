import React, { Children, cloneElement, isValidElement } from "react";
import { SummaryListActions, SummaryListKey, SummaryListValue } from "..";
import SummaryListItemProps from "./SummaryListItem.types";

export const SummaryListItem = ({ id, classes, children, ...attributes }: SummaryListItemProps) => {
  const arrayChildren: any = Children.toArray(children);
  // Check if arrayChildren contains a SummaryListActions component
  const hasActions = arrayChildren.some(
    (child: any) => isValidElement(child) && child.type === SummaryListActions
  );

  return (
    <div
      className={`govuk-summary-list__row${classes ? ` ${classes}` : ""}${
        !hasActions ? " govuk-summary-list__row--no-actions" : ""
      }`}
      id={id}
      {...attributes}
    >
      {Children.map(arrayChildren, (child: any, index) => {
        if (
          isValidElement(child) &&
          (child.type === SummaryListKey ||
            child.type === SummaryListValue ||
            child.type === SummaryListActions)
        ) {
          return <>{cloneElement(child as React.ReactElement<any>, {})}</>;
        }
      })}
    </div>
  );
};

export default SummaryListItem;
