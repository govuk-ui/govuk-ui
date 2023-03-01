import React, {Children, cloneElement, isValidElement} from "react";
import PaginationProps from "./Pagination.types";
import PaginationItem from "../PaginationItem";
import {isUndefined} from "util";

export const Pagination = ({
                             children,
                             previous,
                             next,
                             landmarkLabel,
                             currentPageNumber,
                             classes,
                           }: PaginationProps) => {
  const arrayChildren: any = Children.toArray(children);

  if (currentPageNumber > 2) {
    arrayChildren.splice(1, 0, <PaginationItem ellipsis />)
  }

  if (currentPageNumber < (arrayChildren?.length - 2)) {
    arrayChildren.splice((arrayChildren?.length - 1), 0, <PaginationItem ellipsis />)
  }

  const finalArray: any = [];
  let ellipsisCount: number = 0;
  arrayChildren.forEach((child: any, index: number) => {
    console.log("CHILD: ", child)
    if (child.props?.ellipsis) {
      finalArray.push(child);
      ellipsisCount += 1;
    }
    if (index === 0) {
      finalArray.push(child);
    }
    // if (currentPageNumber > 2) {
    //   finalArray.push(child)
    // }
    if (currentPageNumber === index) {
      finalArray.push(child)
    }
    // if (currentPageNumber < arrayChildren.length - 1) {
    //   finalArray.push(child)
    // }
    if (arrayChildren.length - (1 + ellipsisCount) === index) {
      finalArray.push(child)
    }
  })

  console.log(arrayChildren)

  return (
      <>
        <nav className={`govuk-pagination ${classes ? classes : ''}`} role="navigation" aria-label={`${landmarkLabel ? landmarkLabel : 'results'}`}>

          {currentPageNumber > 0 && (
            <>
              <div className="govuk-pagination__prev">
                <a className="govuk-link govuk-pagination__link" href={previous?.href} rel="prev">
                  <svg
                      className="govuk-pagination__icon govuk-pagination__icon--prev"
                      xmlns="http://www.w3.org/2000/svg"
                      height="13"
                      width="15"
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 15 13"
                  >
                    <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
                  </svg>
                  <span className="govuk-pagination__link-title">
                    {previous?.labelText ? previous?.labelText : 'Previous'}
                  </span>
                  {previous?.labelText && (
                    <>
                      <span className="govuk-visually-hidden">:</span>
                      <span className="govuk-pagination__link-label">{previous.labelText}</span>
                    </>
                  )}
                </a>
              </div>
            </>
          )}

          { children && (
            <ul className="govuk-pagination__list">
              {finalArray?.length > 0 && Children.map(finalArray, (child: any, index) => {
                if (isValidElement(child) && (child.type === PaginationItem)) {
                  return (
                    <>
                      {
                        cloneElement(child as React.ReactElement<any>, {
                          number: `${index + 1}`,
                          current: (index + 1) === currentPageNumber
                        })
                      }
                    </>
                  );
                }
              })}
            </ul>
          )}

          {next && (
              <div className="govuk-pagination__next">
                <a className="govuk-link govuk-pagination__link" href={next.href} rel="next">
                  <span className="govuk-pagination__link-title">{next.text ? next.text : 'Next'}</span>
                  {next.labelText && (
                      <>
                        <span className="govuk-visually-hidden">:</span>
                        <span className="govuk-pagination__link-label">{next.labelText}</span>
                      </>
                  )}
                  <svg
                      className="govuk-pagination__icon govuk-pagination__icon--next"
                      xmlns="http://www.w3.org/2000/svg"
                      height="13"
                      width="15"
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 15 13"
                  >
                    <path
                        d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
                  </svg>
                </a>
              </div>
          )}
        </nav>
      </>
  );
};

export default Pagination;
