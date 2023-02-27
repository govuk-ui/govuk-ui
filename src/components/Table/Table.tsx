import React, {Children, cloneElement, isValidElement} from "react";
import TableProps from "./Table.types";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

export const Table = ({
  id,
  children,
  classes,
  attributes,
 }: TableProps) => {
  
  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <table className={`govuk-table ${classes || ''}`} id={id} { ...attributes }>
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === TableHeader)) {
            return (
                <>
                  {
                    cloneElement(child as React.ReactElement<any>, {})
                  }
                </>
            );
          }
        })}
        <tbody className="govuk-table__body">
          { Children.map(arrayChildren, (child:any, _index) => {
            if (isValidElement(child) && (child.type === TableRow)) {
              return (
                  <>
                    {
                      cloneElement(child as React.ReactElement<any>, {})
                    }
                  </>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
