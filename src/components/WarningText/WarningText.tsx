import React from "react";
import WarningTextProps from "./WarningText.types";

export const WarningText = ({ children, iconFallbackText, attributes, classes }: WarningTextProps) => {
  return (
    <>
      <div className={`govuk-warning-text ${classes ? classes : ''}`} { ...attributes }>
        <span className="govuk-warning-text__icon" aria-hidden="true">
          !
        </span>
        <strong className="govuk-warning-text__text">
          <span className="govuk-warning-text__assistive">{ iconFallbackText }</span>
          { children }
        </strong>
      </div>
    </>
  );
};

export default WarningText;
