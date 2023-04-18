import{j as e,a as t,F as h}from"./jsx-runtime-670450c2.js";import{M as p,C as o,S as r}from"./index-c0943c2d.js";import{primary as d,numberLabels as c,linkLabels as g,largeNumberOfPages as m,firstPage as u,lastPage as f}from"./Pagination.stories-5bf34704.js";import"./Accordion-9ebb3012.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-6a127f9a.js";import"./CookieBanner-c4de4ce5.js";import"./Details-ea8c166a.js";import{H as b}from"./Radios-f218e915.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./WarningText-53f07e98.js";import"./chunk-PCJTTTQV-893ced84.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-1c2585b8.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./Typography-a2bc044e.js";import"./react-18-61705542.js";function Z(i={}){const{wrapper:s}=Object.assign({},l(),i.components);return s?e(s,Object.assign({},i,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong"},l(),i.components);return t(h,{children:[e(p,{title:"Components/Pagination"}),`
`,e(b,{children:"Components"}),`
`,e(n.h1,{id:"pagination",children:"Pagination"}),`
`,e(n.p,{children:"Help users navigate forwards and backwards through a series of pages. For example, search results or guidance that’s divided into multiple website pages — like the GOV.UK mainstream guide format."}),`
`,e(o,{children:e(r,{of:d})}),`
`,e(n.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(n.p,{children:"Consider using pagination when:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"showing all the content on a single page makes the page take too long to load"}),`
`,e(n.li,{children:"most users will only need the content on the first page or first few pages"}),`
`]}),`
`,e(n.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,e(n.p,{children:"Only break up content onto separate pages if it improves the performance or usability of your service."}),`
`,e(n.p,{children:"Avoid using the ‘infinite scroll’ technique to automatically load content when the user approaches the bottom of the page. This causes problems for keyboard users."}),`
`,e(n.p,{children:"Do not use this Pagination component for linear journeys — for example, where you’re asking the user to complete a form. Instead, use the Button component (usually a ‘Continue’ button) to let the user move to the next page — and a Back link to let them move to the previous page."}),`
`,e(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e(n.p,{children:"Add the pagination component after the content on each page that you’re paginating."}),`
`,e(n.p,{children:"Do not show pagination if there’s only one page of content."}),`
`,e(n.p,{children:"Redirect users to the first page if they enter a URL of a page that no longer exists."}),`
`,e(n.h2,{id:"for-smaller-numbers-of-pages",children:"For smaller numbers of pages"}),`
`,e(n.p,{children:"Use ‘Previous’ and ‘Next’ links to let users navigate through a small number of pages. Stack the links vertically, so they’re more obvious to screen magnifier users when they’re zoomed in:"}),`
`,e(o,{children:e(r,{of:c})}),`
`,e(n.h3,{id:"add-link-labels-to-describe-pages",children:"Add link labels to describe pages"}),`
`,e(n.p,{children:"You can use link labels to give more context:"}),`
`,e(o,{children:e(r,{of:g})}),`
`,e(n.h2,{id:"for-larger-numbers-of-pages",children:"For larger numbers of pages"}),`
`,e(n.p,{children:"Use a list-type layout if users need to navigate through large numbers of pages. For example, long lists of search results."}),`
`,e(o,{children:e(r,{of:m})}),`
`,t(n.p,{children:["Show the page number in the page ",e(n.code,{children:"<title>"})," so that screen reader users know they’ve navigated to a different page. For example, ‘Search results (page 1 of 4)’."]}),`
`,e(n.p,{children:"Show an appropriate number of pages to fit the horizontal space available."}),`
`,e(n.p,{children:"For smaller screens, show page numbers for:"}),`
`,e(n.p,{children:`the current page
previous and next pages
first and last pages
For larger screens, show page numbers for:`}),`
`,e(n.p,{children:`the current page
at least one page immediately before and after the current page
first and last pages
Use ellipses (…) to replace any skipped pages. For example:`}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[e(n.strong,{children:"[1]"})," 2 … 100"]}),`
`,t(n.li,{children:["1 ",e(n.strong,{children:"[2]"})," 3 … 100"]}),`
`,t(n.li,{children:["1 2 ",e(n.strong,{children:"[3]"})," 4 … 100"]}),`
`,t(n.li,{children:["1 2 3 ",e(n.strong,{children:"[4]"})," 5 … 100"]}),`
`,t(n.li,{children:["1 … 4 ",e(n.strong,{children:"[5]"})," 6 … 100"]}),`
`,t(n.li,{children:["1 … 97 ",e(n.strong,{children:"[98]"})," 99 100"]}),`
`,t(n.li,{children:["1 … 98 ",e(n.strong,{children:"[99]"})," 100"]}),`
`,t(n.li,{children:["1 … 99 ",e(n.strong,{children:"[100]"})]}),`
`]}),`
`,e(n.h2,{id:"first-and-last-pages",children:"First and last pages"}),`
`,e(n.p,{children:"Do not show the previous page link on the first page — and do not show the next page link on the last page."}),`
`,e(o,{children:e(r,{of:u})}),`
`,e(o,{children:e(r,{of:f})}),`
`,e(n.h2,{id:"filtering-and-sorting",children:"Filtering and sorting"}),`
`,e(n.p,{children:"Consider adding filtering or sorting options if it helps users to find what they need in a long list of pages. For example, the business support finder on GOV.UK has filtering options."}),`
`,e(n.p,{children:"If the user filters or sorts the list of pages, apply this to the whole list (not just the current page) and redirect them back to the first page of the new results."}),`
`,e(n.p,{children:"Set defaults to minimise how many pages most users have to click through to find what they need."})]})}}export{Z as default};
//# sourceMappingURL=Pagination-3d760710.js.map
