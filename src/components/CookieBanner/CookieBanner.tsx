import React, {Children, cloneElement, isValidElement} from "react";
import CookieBannerProps from "./CookieBanner.types";
import Legend from "../../layout/Legend";
import CookieBannerMessage from "../CookieBannerMessage";

export const CookieBanner = ({
  children,
  ariaLabel = "Cookie banner",
  hidden = false,
  classes,
  ...attributes
}: CookieBannerProps) => {
  const hiddenAttribute = hidden ? { hidden: true } : {};
  const arrayChildren = Children.toArray(children);
  return (
    <>
      <div className={`govuk-cookie-banner${classes ? ` ${classes}` : ''}`} { ...hiddenAttribute } data-nosnippet role="region" aria-label={ariaLabel} { ...attributes }>
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === CookieBannerMessage)) {
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
    </>
  );
};

export default CookieBanner;
