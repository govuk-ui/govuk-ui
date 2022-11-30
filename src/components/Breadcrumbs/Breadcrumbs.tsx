import React from "react";
import BreadcrumbsProps from "./Breadcrumbs.types";

export const Breadcrumbs = ({ items, collapseOnMobile, classes, attributes }: BreadcrumbsProps) => {
  return (
    <div class="govuk-breadcrumbs">
      <ol class="govuk-breadcrumbs__list">
        <li class="govuk-breadcrumbs__list-item">
          <a class="govuk-breadcrumbs__link" href="/section">
            Section
          </a>
        </li>

        <li class="govuk-breadcrumbs__list-item">
          <a class="govuk-breadcrumbs__link" href="/section/sub-section">
            Sub-section
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumbs;
