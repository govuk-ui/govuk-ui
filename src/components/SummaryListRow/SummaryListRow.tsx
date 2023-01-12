import React from "react";
import { SummaryListActions, SummaryListItem, SummaryListKey, SummaryListValue } from "..";
import SummaryListRowProps from "./SummaryListRow.types";

export const SummaryListRow = ({ 
  id,
  classes,
  children,
  field,
  data,
  key,
  href,
  ...attributes
}: SummaryListRowProps) => {

  if (!field || ! data) {
    return null;
  }

  if (!Object.keys(data).includes(field)) {
    return null;
  }

  return (
    <SummaryListItem classes={classes} id={id} { ...attributes }>
      <SummaryListKey>
        { key ? key : field}
      </SummaryListKey>
      <SummaryListValue>
        { data[field] }
      </SummaryListValue>
      <SummaryListActions>
        <a className="govuk-link" href={href}>
          Change <span className="govuk-visually-hidden">
            { field.toLowerCase() }
          </span>
        </a>
      </SummaryListActions>
    </SummaryListItem>
  );
};

export default SummaryListRow;

