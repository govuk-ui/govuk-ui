import React from "react";
import BreadcrumbsProps from "./Breadcrumbs.types";

export const Breadcrumbs = ({ items, collapseOnMobile, classes, attributes }: BreadcrumbsProps) => {
  return (
    <>
      <div className="govuk-breadcrumbs">
        <ol className="govuk-breadcrumbs__list">
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="/section">
              Section
            </a>
          </li>

          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="/section/sub-section">
              Sub-section
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Breadcrumbs;
