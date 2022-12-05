import React from "react";
import PhaseBannerProps from "./PhaseBanner.types";
import Tag from "../Tag";

export const PhaseBanner = ({ className, children, phase, attributes }: PhaseBannerProps) => {
  return (
    <div className={`govuk-phase-banner ${className || ''}`} {...attributes}>
      <p className="govuk-phase-banner__content">
        <Tag className={`govuk-phase-banner__content__tag`}>
          {phase}
        </Tag>

        <span className="govuk-phase-banner__text">{children}</span>
      </p>
    </div>
  );
};

export default PhaseBanner;
