import React from "react";
import NotificationBannerProps from "./NotificationBanner.types";

export const NotificationBanner = ({
  text,
  html,
  type,
  disableAutoFocus,
  role,
  attributes,
  titleText,
  titleHtml,
  titleHeadingLevel,
  titleId,
  classes,
}: NotificationBannerProps) => {
  return (
    <>
      <div
        className="govuk-notification-banner"
        role="region"
        aria-labelledby="govuk-notification-banner-title"
        data-module="govuk-notification-banner"
      >
        <div className="govuk-notification-banner__header">
          <h2 className="govuk-notification-banner__title" id="govuk-notification-banner-title">
            Important
          </h2>
        </div>
        <div className="govuk-notification-banner__content">
          <p className="govuk-notification-banner__heading">This publication was withdrawn on 7 March 2014.</p>
        </div>
      </div>
    </>
  );
};

export default NotificationBanner;
