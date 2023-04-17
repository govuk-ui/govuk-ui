import React from "react";
import { Typography } from "../..";
import AccordionItemProps from "./AccordionItem.types";

export const AccordionItem = ({
  children,
  classes,
  heading,
  headingLevel,
  summary,
  id,
  index,
  expanded,
  ...attributes
}: AccordionItemProps) => {
  return (
    <div className={`govuk-accordion__section${expanded ? ' govuk-accordion__section--expanded': ''}${classes ? ` ${classes}` : ''}`} {...attributes}>
      <div className="govuk-accordion__section-header">
        <Typography component={headingLevel ? headingLevel : 'h2'} classes='govuk-accordion__section-heading'>
          <span className="govuk-accordion__section-button" id={`${id}-heading-${index}`}>
            { heading }
          </span>
        </Typography>
        { summary && (
          <div className="govuk-accordion__section-summary govuk-body" id={`${id}-summary-${index}`}>
            { summary }
          </div>
        )}
      </div>
      <div className="govuk-accordion__section-content" aria-labelledby={`${id}-heading-${index}`} id={`${id}-content-${index}`}>
          { children }
      </div>
    </div>
  )
}

export default AccordionItem;