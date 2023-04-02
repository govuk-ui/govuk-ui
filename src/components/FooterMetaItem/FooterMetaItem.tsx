import React from "react";
import FooterMetaItemProps from "./FooterMetaItem.types";

export const FooterMetaItem = ({
  href,
  children,
  classes,
  ...attributes
}: FooterMetaItemProps) => {
  return (
    <li className={`govuk-footer__inline-list-item${classes ? ` ${classes}` : ''}`}>
      <a className="govuk-footer__link" href={href} { ...attributes }>
        {children}
      </a>
    </li>
  );
};

export default FooterMetaItem;
