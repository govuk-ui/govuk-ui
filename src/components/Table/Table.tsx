import React from "react";
import TableProps from "./Table.types";

export const Table = ({ rows, head, caption, captionClasses, firstCellIsHeader, classes, attributes }: TableProps) => {
  return (
    <>
      <table className="govuk-table">
        <tbody className="govuk-table__body">
          <tr className="govuk-table__row">
            <td className="govuk-table__cell">January</td>

            <td className="govuk-table__cell govuk-table__cell--numeric">£85</td>

            <td className="govuk-table__cell govuk-table__cell--numeric">£95</td>
          </tr>

          <tr className="govuk-table__row">
            <td className="govuk-table__cell">February</td>

            <td className="govuk-table__cell govuk-table__cell--numeric">£75</td>

            <td className="govuk-table__cell govuk-table__cell--numeric">£55</td>
          </tr>

          <tr className="govuk-table__row">
            <td className="govuk-table__cell">March</td>

            <td className="govuk-table__cell govuk-table__cell--numeric">£165</td>

            <td className="govuk-table__cell govuk-table__cell--numeric">£125</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
