import React, {Children, cloneElement, isValidElement} from "react";
import PaginationProps from "./Pagination.types";
import PaginationItem from "../PaginationItem";

export const Pagination = ({
  children,
  previous,
  next,
  landmarkLabel,
  currentPageNumber,
  classes,
}: PaginationProps) => {
  const arrayChildren: any = Children.toArray(children);

  if (arrayChildren?.length < 1) {
    return null;
  }

  const blockLevel = arrayChildren?.length < 1 && (previous || next);

  const finalArray: any = [];
  arrayChildren.forEach((child: any, index: number) => {

    //first page
    if (index === 0) {
      finalArray.push(child);
    }

    //previous page
    else if (index === currentPageNumber-2) {
      finalArray.push(child);
    }

    //current page
    else if (index === currentPageNumber-1) {
      finalArray.push(child);
    }

    //next page
    else if (index === currentPageNumber) {
      finalArray.push(child);
    }

    // last page
    else if (arrayChildren.length -1 === index) {
      finalArray.push(child)
    }
  })

  // ellipsis after first page
  if (currentPageNumber > 3) {
    finalArray.splice(1, 0, <PaginationItem ellipsis />)
  }

  // ellipsis before last page
  if (currentPageNumber < (arrayChildren?.length - 2)) {
    finalArray.splice((finalArray?.length - 1), 0, <PaginationItem ellipsis />)
  }

  const nextArrow = (
    <svg className="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
      <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
    </svg>
  );

  return (
    <>
      <nav className={`govuk-pagination ${blockLevel ? 'govuk-pagination--block' : ''} ${classes ? classes : ''}`} role="navigation" aria-label={`${landmarkLabel ? landmarkLabel : 'results'}`}>

        {previous && currentPageNumber > 1 && (
          <>
            <div className="govuk-pagination__prev">
              <a className="govuk-link govuk-pagination__link" href={previous.href} rel="prev">
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
                <span className={`govuk-pagination__link-title ${blockLevel && !previous.labelText ? 'govuk-pagination__link-title--decorated' : ''}`}>
                  {previous.text ? previous.text : 'Previous'}
                </span>
                {previous.labelText && blockLevel && (
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
                        current: currentPageNumber?.toString() === child.props.number
                      })
                    }
                  </>
                );
              }
            })}
          </ul>
        )}

        {next && currentPageNumber !== arrayChildren.length && (
          <div className="govuk-pagination__next">
            <a className="govuk-link govuk-pagination__link" href={next.href} rel="next">
              { blockLevel && nextArrow }
              <span className={`govuk-pagination__link-title ${blockLevel && !next.labelText ? 'govuk-pagination__link-title--decorated' : ''}`}>
                {next.text ? next.text : 'Next'}
              </span>
              {next.labelText && blockLevel && (
                <>
                  <span className="govuk-visually-hidden">:</span>
                  <span className="govuk-pagination__link-label">{next.labelText}</span>
                </>
              )}
              { !blockLevel && nextArrow }
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Pagination;
