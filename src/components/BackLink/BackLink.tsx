import React from "react";
import BackLinkProps from "./BackLink.types";

export const BackLink = ({ href, text, classes, ...attributes }: BackLinkProps) => {
  return (
    <a href={href} className={`govuk-back-link ${classes || ''}`} { ...attributes }>
      { text || 'Back' }
    </a>
  );
};

export default BackLink;
