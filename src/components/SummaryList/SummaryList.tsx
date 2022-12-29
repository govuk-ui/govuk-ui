import React, { Children, cloneElement, isValidElement } from "react";
import SummaryListItem from "../SummaryListItem";
import SummaryListProps from "./SummaryList.types";

export const SummaryList = ({ 
  id,
  classes,
  children,
  ...attributes
}: SummaryListProps) => {

  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <dl 
        className={`govuk-summary-list ${classes || ''}`}
        id={id}
        { ...attributes }
      >
        { Children.map(arrayChildren, (child:any, index) => {
          if (isValidElement(child) && child.type === SummaryListItem) {
            return (
              <>
                { 
                  cloneElement(child as React.ReactElement<any>, {})
                }
              </>
            );
          }
        })}
      </dl>
    </>
  );
};

export default SummaryList;
