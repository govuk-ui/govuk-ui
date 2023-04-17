import React, {Children, cloneElement, isValidElement} from "react";
import TableHeaderProps from "./TableHeader.types";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import TableCellProps from "../TableCell/TableCell.types";

export const TableHeader = ({
  id,
  children,
  classes,
  attributes,
 }: TableHeaderProps) => {

  const arrayChildren: any = Children.toArray(children);
  const tableCellChildren: TableCellProps[] = arrayChildren.filter((child: any) => child.type === TableCell);

  console.log("Array children", arrayChildren)
  return (
    <>
      <thead className={`govuk-table__head ${classes || ''}`} id={id} { ...attributes }>
        <tr className="govuk-table__row">
          { tableCellChildren.map((child: TableCellProps, index: number) => {
            return (
              <th>
                lol
              </th>
            )
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
