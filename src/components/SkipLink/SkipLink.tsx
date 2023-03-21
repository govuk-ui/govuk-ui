import React from "react";
import SkipLinkProps from "./SkipLink.types";

export const SkipLink = ({ children, href, classes, attributes }: SkipLinkProps) => {
  return (
    <a href={href} className={`govuk-skip-link${classes ? ` ${classes}` : ''}`} data-module="govuk-skip-link" { ...attributes }>
      {children}
    </a>
  );
};

export default SkipLink;
