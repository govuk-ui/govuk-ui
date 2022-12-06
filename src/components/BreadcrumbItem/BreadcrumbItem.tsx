import React from "react";
import BreadcrumbItemProps from "./BreadcrumbItem.types";

export const BreadcrumbItem = ({key, children}: BreadcrumbItemProps) => {
  return (
      <li
          key={key}
          className="govuk-breadcrumbs__list-item"
          aria-current="page"
      >
        {children}
      </li>
  );
};

export default BreadcrumbItem;
