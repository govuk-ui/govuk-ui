import React, {Children, cloneElement, isValidElement} from "react";
import TableProps from "./Table.types";
import TableHeader from "../TableHeader/TableHeader";

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
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
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
          </tr>
        </thead>
        <tbody className="govuk-table__body">
          <tr className="govuk-table__row">
            <th scope="row" className="govuk-table__header">First 6 weeks</th>
            <td className="govuk-table__cell">£109.80 per week</td>
            <td className="govuk-table__cell">£59.10 per week</td>
          </tr>
          <tr className="govuk-table__row">
            <th scope="row" className="govuk-table__header">Next 33 weeks</th>
            <td className="govuk-table__cell">£159.80 per week</td>
            <td className="govuk-table__cell">£89.10 per week</td>
          </tr>
          <tr className="govuk-table__row">
            <th scope="row" className="govuk-table__header">Total estimated pay</th>
            <td className="govuk-table__cell">£4,282.20</td>
            <td className="govuk-table__cell">£2,182.20</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
