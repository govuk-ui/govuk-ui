import React from "react";
import PanelProps from "./Panel.types";

export const Panel = ({ titleHtml, text, titleText, headingLevel, html, classes, attributes }: PanelProps) => {
  return (
    <>
      <div className="govuk-panel govuk-panel--confirmation">
        <h1 className="govuk-panel__title">Application complete</h1>

        <div className="govuk-panel__body">Your reference number: HDJ2123F</div>
      </div>
    </>
  );
};

export default Panel;
