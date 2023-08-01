import React, { Children, cloneElement, isValidElement } from "react";
import SummaryListCardProps from "./SummaryListCard.types";
import { SummaryList, SummaryListCardAction } from "../index";

export const SummaryListCard = ({
  id,
  title,
  classes,
  children,
  ...attributes
}: SummaryListCardProps) => {
  const arrayChildren: any = Children.toArray(children);
  const summaryListCardActions = arrayChildren.filter(
    (child: any) => isValidElement(child) && child.type === SummaryListCardAction,
  );

  return (
    <div className={`govuk-summary-card${classes ? ` ${classes}` : ""}`} {...attributes}>
      <div className="govuk-summary-card__title-wrapper">
        <h2 className="govuk-summary-card__title">{title}</h2>
        <ul className="govuk-summary-card__actions">
          {summaryListCardActions.map((child: any, index: number) => {
            if (isValidElement(child) && child.type === SummaryListCardAction) {
              return <>{cloneElement(child as React.ReactElement<any>, { key: index })}</>;
            }
          })}
        </ul>
      </div>
      <div className="govuk-summary-card__content">
        {Children.map(arrayChildren, (child: any, index) => {
          if (isValidElement(child) && child.type === SummaryList) {
            return <>{cloneElement(child as React.ReactElement<any>, {})}</>;
          }
        })}
      </div>
    </div>
  );
};

export default SummaryListCard;
