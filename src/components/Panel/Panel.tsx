import React from "react";
import PanelProps from "./Panel.types";

export const Panel = ({ titleHtml, text, titleText, headingLevel, html, classes, attributes }: PanelProps) => {
  return (
    <div class="govuk-panel govuk-panel--confirmation">
      <h1 class="govuk-panel__title">Application complete</h1>

      <div class="govuk-panel__body">Your reference number: HDJ2123F</div>
    </div>
  );
};

export default Panel;
