import React, { Children, cloneElement, isValidElement } from "react";
import DetailsSummary from '../DetailsSummary';
import DetailsProps from "./Details.types";

export const Details = ({ 
  id,
  open,
  classes,
  children,
  ...attributes }: DetailsProps) => {

  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <details className={`govuk-details ${classes || ''}`} data-module="govuk-details" { ...attributes }>
        <>
          { Children.map(arrayChildren, (child:any, index) => {
            if (isValidElement(child) && child.type === DetailsSummary) {
              return cloneElement(child as React.ReactElement<any>, {})
            } else {
              return (
                <div className="govuk-details__text">
                  { cloneElement(child as React.ReactElement<any>, {}) }
                </div>
              )
            }
          })}
        </>
      </details>
    </>
  );
};

export default Details;
