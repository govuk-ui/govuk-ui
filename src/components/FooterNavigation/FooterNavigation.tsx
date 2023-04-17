import React, {Children, cloneElement, isValidElement} from "react";
import FooterNavigationProps from "./FooterNavigation.types";
import FooterNavigationItem from "../FooterNavigationItem";

export const FooterNavigation = ({
  title,
  width,
  columns,
  children,
  classes,
  ...attributes
}: FooterNavigationProps) => {
  const arrayChildren: any = Children.toArray(children);

  return (
    <div className={`govuk-footer__section govuk-grid-column-${width || 'full'}`}>
      <h2 className="govuk-footer__heading govuk-heading-m">
        {title}
      </h2>
      <ul className={`govuk-footer__list${classes ? ` ${classes}` : ''}${columns ? ` govuk-footer__list--columns-${columns}`: ''}`} { ...attributes }>
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === FooterNavigationItem)) {
            return (
              <>
                {
                  cloneElement(child as React.ReactElement<any>, {})
                }
              </>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default FooterNavigation;
