import React from "react";
import InsetTextProps from "./InsetText.types";

export const InsetText = ({ text, html, classes, id, attributes }: InsetTextProps) => {
  return (
    <div class="govuk-inset-text">
      It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
    </div>
  );
};

export default InsetText;
