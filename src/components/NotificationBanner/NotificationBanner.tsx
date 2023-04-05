import React from "react";
import NotificationBannerProps from "./NotificationBanner.types";

export const NotificationBanner = ({
  title,
  children,
  type,
  role,
  disableAutoFocus,
  titleHeadingLevel,
  classes,
  ...attributes
}: NotificationBannerProps) => {

  if (!role) {
    role = 'region;'
  }
  return (
    <>
      <div
        className={`govuk-notification-banner ${type === 'success' ? 'govuk-notification-banner--success' : ''} ${classes || ''}`}
        role={role}
        aria-labelledby="govuk-notification-banner-title"
        data-module="govuk-notification-banner"
        { ...attributes }
      >
        <div className="govuk-notification-banner__header">
          <h2 className="govuk-notification-banner__title" id="govuk-notification-banner-title">
            {title}
          </h2>
        </div>
        <div className="govuk-notification-banner__content">
          {children}
        </div>
      </div>
    </>
  );
};

export default NotificationBanner;
