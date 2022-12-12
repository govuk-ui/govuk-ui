import React from "react";
import ErrorSummaryMessageProps from "./ErrorSummaryMessage.types";

export const ErrorSummaryMessage = ({
  id,
  children,
  ...attributes
}: ErrorSummaryMessageProps) => {
  return (
    <>
      <li {...attributes}>
        <a href={`#${id}`}>{children}</a>
      </li>
    </>
  );
};

export default ErrorSummaryMessage;
