import React from "react";
import TableProps from "./Table.types";

export const Table = ({ rows, head, caption, captionClasses, firstCellIsHeader, classes, attributes }: TableProps) => {
  return (
    <table class="govuk-table">
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">January</td>

          <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>

          <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
        </tr>

        <tr class="govuk-table__row">
          <td class="govuk-table__cell">February</td>

          <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>

          <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
        </tr>

        <tr class="govuk-table__row">
          <td class="govuk-table__cell">March</td>

          <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>

          <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
