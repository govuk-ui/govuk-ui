import React from "react";
import FooterNavigationItemProps from "./FooterNavigationItem.types";

export const FooterNavigationItem = ({
  href,
  children,
  classes,
  ...attributes
}: FooterNavigationItemProps) => {
  return (
    <li className={`govuk-footer__list-item${classes ? ` ${classes}` : ''}`}>
      <a className="govuk-footer__link" href={href} { ...attributes }>
        {children}
      </a>
    </li>
  );
};

export default FooterNavigationItem;
