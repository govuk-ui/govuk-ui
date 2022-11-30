import React from "react";
import BackLinkProps from "./BackLink.types";

export const BackLink = ({ href, text, classes, html, attributes }: BackLinkProps) => {
  return (
    <a href="#" class="govuk-back-link">
      Back
    </a>
  );
};

export default BackLink;
