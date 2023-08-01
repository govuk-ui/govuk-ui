import React, { Children, cloneElement, isValidElement } from "react";
import TableProps from "./Table.types";
import { TableHeader, TableRow } from "../index";

export const Table = ({
  id,
  children,
  classes,
  caption,
  captionClasses,
  firstCellIsHeader,
  ...attributes
}: TableProps) => {
  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <table className={`govuk-table${classes ? ` ${classes}` : ""}`} id={id} {...attributes}>
        {caption && (
          <caption className={`govuk-table__caption${captionClasses ? ` ${captionClasses}` : ""}`}>
            {caption}
          </caption>
        )}
        {Children.map(arrayChildren, (child: any, _index) => {
          if (isValidElement(child) && child.type === TableHeader) {
            return <>{cloneElement(child as React.ReactElement<any>, {})}</>;
          }
        })}
        <tbody className="govuk-table__body">
          {Children.map(arrayChildren, (child: any, _index) => {
            if (isValidElement(child) && child.type === TableRow) {
              return <>{cloneElement(child as React.ReactElement<any>, { firstCellIsHeader })}</>;
            }
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
