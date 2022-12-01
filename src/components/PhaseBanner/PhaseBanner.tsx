import React from "react";
import PhaseBannerProps from "./PhaseBanner.types";

export const PhaseBanner = ({ tag, html, text, classes, attributes }: PhaseBannerProps) => {
  return (
    <>
      <div className="govuk-phase-banner">
        <p className="govuk-phase-banner__content">
          <strong className="govuk-tag govuk-phase-banner__content__tag">alpha</strong>
          <span className="govuk-phase-banner__text">
            This is a new service - your{" "}
            <a href="#" className="govuk-link">
              feedback
            </a>{" "}
            will help us to improve it.
          </span>
        </p>
      </div>
    </>
  );
};

export default PhaseBanner;
