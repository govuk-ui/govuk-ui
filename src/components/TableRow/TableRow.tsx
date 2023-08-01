import React, { Children, cloneElement, isValidElement } from "react";
import TableRowProps from "./TableRow.types";
import { TableCell } from "../index";

export const TableRow = ({
  id,
  children,
  classes,
  firstCellIsHeader,
  ...attributes
}: TableRowProps) => {
  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <tr className={`govuk-table__row ${classes || ""}`} id={id} {...attributes}>
        {Children.map(arrayChildren, (child: any, index) => {
          if (isValidElement(child) && child.type === TableCell) {
            if (firstCellIsHeader && index === 0) {
              return (
                <>
                  {cloneElement(child as React.ReactElement<any>, { isHeader: true, scope: "row" })}
                </>
              );
            }
            return <>{cloneElement(child as React.ReactElement<any>, {})}</>;
          }
        })}
      </tr>
    </>
  );
};

export default TableRow;
