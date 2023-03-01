import React from "react";
import PaginationItemProps from "./PaginationItem.types";

export const PaginationItem = ({
  number,
  visuallyHiddenText,
  href,
  current,
  ellipsis
}: PaginationItemProps) => {
  return (
    <>
      { ellipsis && (
        <li className="govuk-pagination__item govuk-pagination__item--ellipses">&hellip;</li>
      )}
      { !ellipsis && (
        <li className={`govuk-pagination__item ${current ? 'govuk-pagination__item--current' : ''}`}>
          <a
            className="govuk-link govuk-pagination__link"
            href={href}
            aria-label={`${visuallyHiddenText ? visuallyHiddenText : `Page ${number}`}`}
            aria-current={current ? 'page' : undefined}
          >
            { number }
          </a>
        </li>
      )}
    </>
  );
};

export default PaginationItem;
