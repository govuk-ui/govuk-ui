import{P as t}from"./Pagination.6ec622b2.js";import"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const o="pagination",l=[{name:"default",options:{previous:{href:"/previous"},next:{href:"/next"},items:[{number:1,href:"/page/1"},{number:2,href:"/page/2",current:!0},{number:3,href:"/page/3"}]},hidden:!1,html:`<nav class="govuk-pagination" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title">Previous</span></a>
    </div>
  <ul class="govuk-pagination__list"><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
              1
            </a>
          </li><li class="govuk-pagination__item govuk-pagination__item--current">
            <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2" aria-current="page">
              2
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3">
              3
            </a>
          </li></ul><div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
        <span class="govuk-pagination__link-title">Next</span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg></a>
    </div></nav>`},{name:"with custom navigation landmark",options:{previous:{href:"/previous"},next:{href:"/next"},landmarkLabel:"search",items:[{number:1,href:"/page/1"},{number:2,href:"/page/2",current:!0},{number:3,href:"/page/3"}]},hidden:!1,html:`<nav class="govuk-pagination" role="navigation" aria-label="search"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title">Previous</span></a>
    </div>
  <ul class="govuk-pagination__list"><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
              1
            </a>
          </li><li class="govuk-pagination__item govuk-pagination__item--current">
            <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2" aria-current="page">
              2
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3">
              3
            </a>
          </li></ul><div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
        <span class="govuk-pagination__link-title">Next</span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg></a>
    </div></nav>`},{name:"with custom link and item text",options:{previous:{href:"/previous",text:"Previous page"},next:{href:"/next",text:"Next page"},items:[{number:"one",href:"/page/1"},{number:"two",href:"/page/2",current:!0},{number:"three",href:"/page/3"}]},hidden:!1,html:`<nav class="govuk-pagination" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title">Previous page</span></a>
    </div>
  <ul class="govuk-pagination__list"><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page one">
              one
            </a>
          </li><li class="govuk-pagination__item govuk-pagination__item--current">
            <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page two" aria-current="page">
              two
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page three">
              three
            </a>
          </li></ul><div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
        <span class="govuk-pagination__link-title">Next page</span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg></a>
    </div></nav>`},{name:"with custom accessible labels on item links",options:{previous:{href:"/previous"},next:{href:"/next"},items:[{number:1,href:"/page/1",visuallyHiddenText:"1st page"},{number:2,href:"/page/2",current:!0,visuallyHiddenText:"2nd page (you are currently on this page)"},{number:3,href:"/page/3",visuallyHiddenText:"3rd page"}]},hidden:!1,html:`<nav class="govuk-pagination" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title">Previous</span></a>
    </div>
  <ul class="govuk-pagination__list"><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="1st page">
              1
            </a>
          </li><li class="govuk-pagination__item govuk-pagination__item--current">
            <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="2nd page (you are currently on this page)" aria-current="page">
              2
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="3rd page">
              3
            </a>
          </li></ul><div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
        <span class="govuk-pagination__link-title">Next</span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg></a>
    </div></nav>`},{name:"with many pages",options:{previous:{href:"/previous"},next:{href:"/next"},items:[{number:1,href:"/page/1"},{ellipsis:!0},{number:8,href:"/page/8"},{number:9,href:"/page/9"},{number:10,href:"/page/10",current:!0},{number:11,href:"/page/11"},{number:12,href:"/page/12"},{ellipsis:!0},{number:40,href:"/page/40"}]},hidden:!1,html:`<nav class="govuk-pagination" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title">Previous</span></a>
    </div>
  <ul class="govuk-pagination__list"><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
              1
            </a>
          </li><li class="govuk-pagination__item govuk-pagination__item--ellipses">&ctdot;</li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/8" aria-label="Page 8">
              8
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/9" aria-label="Page 9">
              9
            </a>
          </li><li class="govuk-pagination__item govuk-pagination__item--current">
            <a class="govuk-link govuk-pagination__link" href="/page/10" aria-label="Page 10" aria-current="page">
              10
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/11" aria-label="Page 11">
              11
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/12" aria-label="Page 12">
              12
            </a>
          </li><li class="govuk-pagination__item govuk-pagination__item--ellipses">&ctdot;</li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/40" aria-label="Page 40">
              40
            </a>
          </li></ul><div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
        <span class="govuk-pagination__link-title">Next</span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg></a>
    </div></nav>`},{name:"first page",options:{next:{href:"/next"},items:[{number:1,href:"/page/1",current:!0},{number:2,href:"/page/2"},{number:3,href:"/page/3"}]},hidden:!1,html:`<nav class="govuk-pagination" role="navigation" aria-label="results"><ul class="govuk-pagination__list"><li class="govuk-pagination__item govuk-pagination__item--current">
            <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1" aria-current="page">
              1
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2">
              2
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3">
              3
            </a>
          </li></ul><div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
        <span class="govuk-pagination__link-title">Next</span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg></a>
    </div></nav>`},{name:"last page",options:{previous:{href:"/previous"},items:[{number:1,href:"/page/1"},{number:2,href:"/page/2"},{number:3,href:"/page/3",current:!0}]},hidden:!1,html:`<nav class="govuk-pagination" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title">Previous</span></a>
    </div>
  <ul class="govuk-pagination__list"><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
              1
            </a>
          </li><li class="govuk-pagination__item">
            <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2">
              2
            </a>
          </li><li class="govuk-pagination__item govuk-pagination__item--current">
            <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3" aria-current="page">
              3
            </a>
          </li></ul></nav>`},{name:"with prev and next only",options:{previous:{href:"/previous"},next:{href:"/next"}},hidden:!1,html:`<nav class="govuk-pagination govuk-pagination--block" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">Previous</span></a>
    </div>
  <div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
        <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">Next</span></a>
    </div></nav>`},{name:"with prev and next only and labels",options:{previous:{text:"Previous page",labelText:"1 of 3",href:"/previous"},next:{text:"Next page",labelText:"3 of 3",href:"/next"}},hidden:!1,html:`<nav class="govuk-pagination govuk-pagination--block" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title">Previous page</span><span class="govuk-visually-hidden">:</span>
          <span class="govuk-pagination__link-label">1 of 3</span></a>
    </div>
  <div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
        <span class="govuk-pagination__link-title">Next page</span><span class="govuk-visually-hidden">:</span>
          <span class="govuk-pagination__link-label">3 of 3</span></a>
    </div></nav>`},{name:"with prev and next only and very long labels",options:{previous:{text:"Previous page",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",href:"/previous"},next:{text:"Next page",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",href:"/next"}},hidden:!1,html:`<nav class="govuk-pagination govuk-pagination--block" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title">Previous page</span><span class="govuk-visually-hidden">:</span>
          <span class="govuk-pagination__link-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></a>
    </div>
  <div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
        <span class="govuk-pagination__link-title">Next page</span><span class="govuk-visually-hidden">:</span>
          <span class="govuk-pagination__link-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></a>
    </div></nav>`},{name:"with prev and next only in a different language",options:{previous:{text:"pr\xE9c\xE9dente",href:"/previous",visuallyHiddenText:"Page pr\xE9c\xE9dente"},next:{text:"suivante",href:"/next",visuallyHiddenText:"Page suivante"}},hidden:!1,html:`<nav class="govuk-pagination govuk-pagination--block" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">pr\xE9c\xE9dente</span></a>
    </div>
  <div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
        <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">suivante</span></a>
    </div></nav>`},{name:"with previous only",options:{previous:{href:"/previous"}},hidden:!1,html:`<nav class="govuk-pagination govuk-pagination--block" role="navigation" aria-label="results"><div class="govuk-pagination__prev">
      <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
        </svg>
        <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">Previous</span></a>
    </div>
  </nav>`},{name:"with next only",options:{next:{href:"/next"}},hidden:!1,html:`<nav class="govuk-pagination govuk-pagination--block" role="navigation" aria-label="results"><div class="govuk-pagination__next">
      <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
        <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">Next</span></a>
    </div></nav>`}],s={component:o,fixtures:l},N={title:"Pagination",component:t},g={name:"default"},u={name:"with custom navigation landmark"},p={name:"with custom link and item text"},v={name:"with custom accessible labels on item links"},r={name:"with many pages"},k={name:"first page"},h={name:"last page"},c={name:"with prev and next only"},_={name:"with prev and next only and labels"},d={name:"with prev and next only and very long labels"},m={name:"with prev and next only in a different language"},f={name:"with previous only"},x={name:"with next only"},a=[];a.push(g);a.push(u);a.push(p);a.push(v);a.push(r);a.push(k);a.push(h);a.push(c);a.push(_);a.push(d);a.push(m);a.push(f);a.push(x);s.fixtures.forEach(n=>{let i=a.find(e=>e.name===n.name.replace(/[^a-z0-9s]/gi,""))||{};i.name===n.name&&(i.args={previous:n.options.previous,next:n.options.next,items:n.options.items,landmarkLabel:n.options.landmarkLabel})});const z=["primary","withCustomNavigationLandmark","withCustomLinkAndItemText","withCustomAccessibleLabelsOnItemLinks","withManyPages","firstPage","lastPage","withPrevAndNextOnly","withPrevAndNextOnlyAndLabels","withPrevAndNextOnlyAndVeryLongLabels","withPrevAndNextOnlyInADifferentLanguage","withPreviousOnly","withNextOnly"];export{z as __namedExportsOrder,N as default,k as firstPage,h as lastPage,g as primary,v as withCustomAccessibleLabelsOnItemLinks,p as withCustomLinkAndItemText,u as withCustomNavigationLandmark,r as withManyPages,x as withNextOnly,c as withPrevAndNextOnly,_ as withPrevAndNextOnlyAndLabels,d as withPrevAndNextOnlyAndVeryLongLabels,m as withPrevAndNextOnlyInADifferentLanguage,f as withPreviousOnly};
//# sourceMappingURL=Pagination.stories.badbb07d.js.map
