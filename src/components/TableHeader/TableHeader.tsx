import React, {Children, cloneElement, isValidElement} from "react";
import TableHeaderProps from "./TableHeader.types";
import TableCell from "../TableCell";

export const TableHeader = ({
  id,
  children,
  classes,
  attributes,
 }: TableHeaderProps) => {
  
  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <thead className={`govuk-table__head ${classes || ''}`} id={id} { ...attributes }>
        <tr className="govuk-table__row">
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
      </thead>
    </>
  );
};

export default TableHeader;
