import React from "react";
import BreadcrumbsProps from "./Breadcrumbs.types";

export const Breadcrumbs = ({items, collapseOnMobile, classes, attributes}: BreadcrumbsProps) => {
  const breadcrumbs = items
    ? items.map((item, index) => {
      const { key, children } = item;

      return (
        <li
          key={key || index}
          className="govuk-breadcrumbs__list-item"
          aria-current="page"
        >
          {children}
        </li>
      );
    })
    : null;

  return (
    <div
      className={`govuk-breadcrumbs ${classes || ''} ${
          collapseOnMobile ? 'govuk-breadcrumbs--collapse-on-mobile' : ''
      }`}
      {...attributes}
    >
      <ol className="govuk-breadcrumbs__list">{breadcrumbs}</ol>
    </div>
  );
};

export default Breadcrumbs;
