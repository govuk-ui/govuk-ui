import React, { Children, cloneElement, isValidElement } from "react";
import TableHeaderProps from "./TableHeader.types";
import { TableCell } from "../index";

export const TableHeader = ({ id, children, classes, ...attributes }: TableHeaderProps) => {
  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <thead className={`govuk-table__head${classes ? ` ${classes}` : ""}`} id={id} {...attributes}>
        <tr className="govuk-table__row">
          {Children.map(arrayChildren, (child: any, index) => {
            if (isValidElement(child) && child.type === TableCell) {
              return (
                <>
                  {cloneElement(child as React.ReactElement<any>, { isHeader: true, scope: "col" })}
                </>
              );
            }
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
