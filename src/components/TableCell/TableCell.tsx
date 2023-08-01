import React from "react";
import TableCellProps from "./TableCell.types";

export const TableCell = ({
  id,
  children,
  classes,
  isHeader,
  format,
  ...attributes
}: TableCellProps) => {
  return (
    <>
      {isHeader ? (
        <th
          className={`govuk-table__header
            ${classes ? ` ${classes}` : ""}
            ${format ? `govuk-table__header--${format}` : ""}
          `}
          id={id}
          {...attributes}
        >
          {children}
        </th>
      ) : (
        <td
          className={`govuk-table__cell
          ${classes ? ` ${classes}` : ""}
          ${format ? `govuk-table__cell--${format}` : ""}
        `}
          id={id}
          {...attributes}
        >
          {children}
        </td>
      )}
    </>
  );
};

export default TableCell;
