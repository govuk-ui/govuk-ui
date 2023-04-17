import React, {Children, cloneElement, isValidElement} from "react";
import FooterMetaProps from "./FooterMeta.types";
import FooterMetaItem from "../FooterMetaItem";
import FooterMetaItemProps from "../FooterMetaItem/FooterMetaItem.types";

export const FooterMeta = ({
  visuallyHiddenTitle = 'Support links',
  children,
}: FooterMetaProps) => {
  const arrayChildren: any = Children.toArray(children);
  const metaItems: FooterMetaItemProps[] = arrayChildren.filter((child: any) => child.type === FooterMetaItem);
  const nonMetaItems: any = arrayChildren.filter((child: any) => child.type !== FooterMetaItem);
  return (
    <>
      <h2 className="govuk-visually-hidden">{visuallyHiddenTitle}</h2>
      { metaItems && (
        <ul className="govuk-footer__inline-list">
          { Children.map(arrayChildren, (child:any, _index) => {
            if (isValidElement(child) && (child.type === FooterMetaItem)) {
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
      )}
      { nonMetaItems && (
        <div className="govuk-footer__meta-custom">
          {nonMetaItems}
        </div>
      )}
    </>
  );
};

export default FooterMeta;
