import React from "react";
import WarningTextProps from "./WarningText.types";

export const WarningText = ({ text, iconFallbackText, attributes, classes, html }: WarningTextProps) => {
  return (
    <>
      <div className="govuk-warning-text">
        <span className="govuk-warning-text__icon" aria-hidden="true">
          !
        </span>
        <strong className="govuk-warning-text__text">
          <span className="govuk-warning-text__assistive">Warning</span>
          You can be fined up to £5,000 if you don’t register.
        </strong>
      </div>
    </>
  );
};

export default WarningText;
