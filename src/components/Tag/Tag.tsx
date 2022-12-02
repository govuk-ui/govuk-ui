import React from "react";
import TagProps from "./Tag.types";

export const Tag = ({ children, className, ...attributes }: TagProps) => {
  return (
    <strong className={`govuk-tag ${className || ''}`} {...attributes}>
      {children}
    </strong>
  );
};

export default Tag;
