import React from "react";
import TypographyProps from "./Typography.types";

export const Typography = ({
  children,
  classes,
  variant,
  captionSize,
  component,
  ...attributes
}: TypographyProps) => {

  let c = 'govuk-body';
  let Tag: any = 'p';

  switch (variant) {
    case 'h1':
      c = 'govuk-heading-xl';
      Tag = 'h1';
      break;
    case 'h2':
      c = 'govuk-heading-l';
      Tag = 'h2';
      break;
    case 'h3':
      c = 'govuk-heading-m';
      Tag = 'h3';
      break;
    case 'h4':
      c = 'govuk-heading-s';
      Tag = 'h4';
      break;
    case 'p':
      c = 'govuk-body';
      Tag = 'p';
      break;
    case 'span':
      if (!captionSize) {
        c = 'govuk-caption-m';
        Tag = 'span';
      } else {
        switch (captionSize) {
          case 'xl':
            c = 'govuk-caption-xl';
            Tag = 'span';
            break;
          case 'l':
            c = 'govuk-caption-l';
            Tag = 'span';
            break;
          case 'm':
            c = 'govuk-caption-m';
            Tag = 'span';
            break;
        }
      }
      break;
  }

  if (component) {
    Tag = component;
  }

  return (
    <Tag className={`${c} ${classes || ''}`} { ...attributes }>
      { children }
    </Tag>
  );
};

export default Typography;
