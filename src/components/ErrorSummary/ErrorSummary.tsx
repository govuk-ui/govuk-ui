import React, { Children, cloneElement, isValidElement } from "react";
import ErrorSummaryMessage from "../ErrorSummaryMessage";
import ErrorSummaryProps from "./ErrorSummary.types";

export const ErrorSummary = ({
  titleText,
  classes,
  disableAutoFocus,
  children,
  ...attributes
}: ErrorSummaryProps) => {

  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <div className={`govuk-error-summary ${classes || ''}`} data-module="govuk-error-summary" data-disable-auto-focus={disableAutoFocus} {...attributes}>
        <div role="alert">
          <h2 className="govuk-error-summary__title">{titleText || 'There is a problem'}</h2>
          <div className="govuk-error-summary__body">
            <ul className="govuk-list govuk-error-summary__list">
              { Children.map(arrayChildren, (child) => {
                if (isValidElement(child) && child.type === ErrorSummaryMessage) {
                  return cloneElement(child, {});
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorSummary;
