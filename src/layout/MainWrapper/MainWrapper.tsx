import React from "react";
import MainWrapperProps from "../MainWrapper/MainWrapper.types";

export const MainWrapper = ({
  children,
  classes,
  ...attributes
}: MainWrapperProps) => {
  return (
    <main className={`govuk-main-wrapper${classes ? ` ${classes}` : ''}`} { ...attributes }>
      { children }
    </main>
  );
};

export default MainWrapper;
