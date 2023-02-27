import React from "react";
import TableCellProps from "./TableCell.types";

export const TableCell = ({
  id,
  children,
  classes,
  attributes,
 }: TableCellProps) => {
  
  return (
    <>
      <td className={`govuk-table__cell ${classes || ''}`} id={id} { ...attributes }>
        { children }
      </td>
    </>
  );
};

export default TableCell;



