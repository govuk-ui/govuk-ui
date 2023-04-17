import React from "react";
import CookieBannerActionProps from "./CookieBannerAction.types";
import Button from "../Button";

export const CookieBannerAction = ({
  children,
  type,
  href,
  name,
  value,
  classes,
  ...attributes
}: CookieBannerActionProps) => {
  return (
    <>
      { href && (
        <>
          { type === 'button' && (
            <Button name={name} type={type} value={value} classes={classes} { ...attributes }>
              { children }
            </Button>
          )}
          { type !== 'button' && (
            <a
              className={`govuk-link${classes ? ` ${classes}` : ''}`}
              href={href}
              { ...attributes }
            >
              { children }
            </a>
          )}
        </>
      )}
      { !href && (
        <Button name={name} type={type} value={value} classes={classes} { ...attributes }>
          { children }
        </Button>
      )}
    </>
  );
};

export default CookieBannerAction;
