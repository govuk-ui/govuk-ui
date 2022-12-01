import React from "react";
import CookieBannerProps from "./CookieBanner.types";

export const CookieBanner = ({ messages, ariaLabel, hidden, classes, attributes }: CookieBannerProps) => {
  return (
    <>
      <div className="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
        <div className="govuk-cookie-banner__message govuk-width-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h2 className="govuk-cookie-banner__heading govuk-heading-m">Cookies on this government service</h2>

              <div className="govuk-cookie-banner__content">
                <p className="govuk-body">We use analytics cookies to help understand how users use our service.</p>
              </div>
            </div>
          </div>

          <div className="govuk-button-group">
            <button value="accept" type="submit" name="cookies" className="govuk-button" data-module="govuk-button">
              Accept analytics cookies
            </button>

            <button value="reject" type="submit" name="cookies" className="govuk-button" data-module="govuk-button">
              Reject analytics cookies
            </button>

            <a className="govuk-link" href="/cookie-preferences">
              View cookie preferences
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
