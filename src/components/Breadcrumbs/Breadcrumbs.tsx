import React from "react";
import BreadcrumbsProps from "./Breadcrumbs.types";

export const Breadcrumbs = ({children, collapseOnMobile, classes, attributes}: BreadcrumbsProps) => {
  return (
    <div
      className={`govuk-breadcrumbs ${classes || ''} ${
          collapseOnMobile ? 'govuk-breadcrumbs--collapse-on-mobile' : ''
      }`}
      {...attributes}
    >
      <ol className="govuk-breadcrumbs__list">
        {children}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
