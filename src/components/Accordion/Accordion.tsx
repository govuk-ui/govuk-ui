import React from "react";
import AccordionProps from "./Accordion.types";

export const Accordion = ({
  id,
  items,
  hideAllSectionsText,
  showAllSectionsText,
  hideSectionText,
  hideSectionAriaLabelText,
  showSectionText,
  showSectionAriaLabelText,
  classes,
  attributes,
  headingLevel,
}: AccordionProps) => {
  return (
    <>
      <div className="govuk-accordion" data-module="govuk-accordion" id="default-example">
        <div className="govuk-accordion__section ">
          <div className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <span className="govuk-accordion__section-button" id="default-example-heading-1">
                Section A
              </span>
            </h2>
          </div>
          <div
            id="default-example-content-1"
            className="govuk-accordion__section-content"
            aria-labelledby="default-example-heading-1"
          >
            <p className="govuk-body">
              We need to know your nationality so we can work out which elections you’re entitled to vote in. If you
              cannot provide your nationality, you’ll have to send copies of identity documents through the post.
            </p>
          </div>
        </div>

        <div className="govuk-accordion__section ">
          <div className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <span className="govuk-accordion__section-button" id="default-example-heading-2">
                Section B
              </span>
            </h2>
          </div>
          <div
            id="default-example-content-2"
            className="govuk-accordion__section-content"
            aria-labelledby="default-example-heading-2"
          >
            <ul className="govuk-list govuk-list--bullet">
              <li>Example item 2</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
