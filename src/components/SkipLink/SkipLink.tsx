import React from "react";
import SkipLinkProps from "./SkipLink.types";

export const SkipLink = ({ text, href, classes, html, attributes }: SkipLinkProps) => {
  return (
    <a href="#content" class="govuk-skip-link" data-module="govuk-skip-link">
      Skip to main content
    </a>
  );
};

export default SkipLink;
