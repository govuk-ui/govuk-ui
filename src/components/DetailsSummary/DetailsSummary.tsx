import React from "react";
import DetailsProps from "./DetailsSummary.types";

export const DetailsSummary = ({ 
  id,
  classes,
  children,
  ...attributes }: DetailsProps) => {
  return (
    <>
      <summary className={`govuk-details__summary ${classes}`} { ...attributes}>
        <span className="govuk-details__summary-text">
          { children }
        </span>
      </summary>
    </>
  );
};

export default DetailsSummary;
