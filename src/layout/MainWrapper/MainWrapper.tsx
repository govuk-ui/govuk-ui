import React from "react";
import MainWrapperProps from "../MainWrapper/MainWrapper.types";

export const MainWrapper = ({
  children,
  classes,
  ...attributes
}: MainWrapperProps) => {
  return (
    <div className={`govuk-main-wrapper ${classes || ''}`} { ...attributes }>
      { children }
    </div>
  );
};

export default MainWrapper;
