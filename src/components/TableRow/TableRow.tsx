import React, {Children, cloneElement, isValidElement} from "react";
import TableRowProps from "./TableRow.types";
import TableCell from "../TableCell/TableCell";

export const TableRow = ({
  id,
  children,
  caption ,
  classes,
  attributes,
 }: TableRowProps) => {

  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <tr className={`govuk-table__row${classes ? ` ${classes}` : ''}`} id={id} { ...attributes }>
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === TableCell)) {
            return (
              <>
                {
                  cloneElement(child as React.ReactElement<any>, {})
                }
              </>
            );
          }
        })}
      </tr>
    </>
  );
};

export default TableRow;
