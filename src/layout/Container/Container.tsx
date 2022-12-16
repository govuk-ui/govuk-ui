import React from "react";
import ContainerProps from "../Container/Container.types";

export const BackLink = ({
  children,
  width,
  header,
  classes,
  ...attributes
}: ContainerProps) => {

  if (!width && !header) {
    width = true;
  }

  return (
    <div className={`${width ? 'govuk-width-container' : ''} ${header ? 'govuk-header__container' : ''} ${classes || ''}`} { ...attributes }>
      { children }
    </div>
  );
};

export default BackLink;
