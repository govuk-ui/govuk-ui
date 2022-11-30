import React from "react";
import ErrorMessageProps from "./ErrorMessage.types";

export const ErrorMessage = ({ text, visuallyHiddenText, html, id, classes, attributes }: ErrorMessageProps) => {
  return (
    <p class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message about full name goes here
    </p>
  );
};

export default ErrorMessage;
