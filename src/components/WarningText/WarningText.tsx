import React from "react";
import WarningTextProps from "./WarningText.types";

export const WarningText = ({ text, iconFallbackText, attributes, classes, html }: WarningTextProps) => {
  return (
    <div class="govuk-warning-text">
      <span class="govuk-warning-text__icon" aria-hidden="true">
        !
      </span>
      <strong class="govuk-warning-text__text">
        <span class="govuk-warning-text__assistive">Warning</span>
        You can be fined up to £5,000 if you don’t register.
      </strong>
    </div>
  );
};

export default WarningText;
