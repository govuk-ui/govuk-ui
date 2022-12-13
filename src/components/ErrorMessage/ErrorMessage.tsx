import React from "react";
import ErrorMessageProps from "./ErrorMessage.types";

export const ErrorMessage = ({
  children,
  visuallyHiddenText,
  id,
  classes,
  attributes
}: ErrorMessageProps) => {
  const visuallyHiddenTextComponent = (
    <span className="govuk-visually-hidden">{visuallyHiddenText ? visuallyHiddenText : 'Error: '}: </span>
  );

  return (
    <p className={`govuk-error-message ${classes || ''}`} id={id} {...attributes}>
      {visuallyHiddenTextComponent}
      {children}
    </p>
  );
};

export default ErrorMessage;
