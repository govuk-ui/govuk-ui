import React, {Children, cloneElement, isValidElement} from "react";
import CookieBannerMessageProps from "./CookieBannerMessage.types";
import CookieBannerAction from "../CookieBannerAction";

export const CookieBannerMessage = ({
  heading,
  children,
  role,
  hidden = false,
  classes,
  ...attributes
}: CookieBannerMessageProps) => {
  const hiddenAttribute = hidden ? { hidden: true } : {};
  const arrayChildren = Children.toArray(children);
  const hasActions = arrayChildren.some((child: any) => child.type === CookieBannerAction);
  return (
    <>
      <div
        className={`govuk-cookie-banner__message govuk-width-container${classes ? ` ${classes}` : ''}`}
        role={role}
        { ...hiddenAttribute }
        { ...attributes }
      >
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            { heading && (
              <h2 className="govuk-cookie-banner__heading govuk-heading-m">
                { heading }
              </h2>
            )}
            <div className="govuk-cookie-banner__content">
              { Children.map(arrayChildren, (child:any, _index) => {
                if (isValidElement(child) && (child.type !== CookieBannerAction)) {
                  return (
                    <>
                      {
                        cloneElement(child as React.ReactElement<any>, {})
                      }
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
        { hasActions && (
          <div className="govuk-button-group">
            { Children.map(arrayChildren, (child:any, _index) => {
              if (isValidElement(child) && (child.type === CookieBannerAction)) {
                return (
                  <>
                    {
                      cloneElement(child as React.ReactElement<any>, {})
                    }
                  </>
                );
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CookieBannerMessage;
