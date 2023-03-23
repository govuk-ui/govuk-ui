import{j as e,a as t,F as h}from"./jsx-runtime-670450c2.js";import{M as p,C as r,S as o}from"./index-9e587e1e.js";import{primary as c,numberLabels as d,linkLabels as m,largeNumberOfPages as g,firstPage as u,lastPage as f}from"./Pagination.stories-5bf34704.js";import"./Accordion-b094a9f4.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-232179fb.js";import"./CharacterCount-018de6f6.js";import"./Table-97f97871.js";import"./CookieBanner-0021e8bc.js";import"./DateInput-733620fd.js";import"./Details-ea8c166a.js";import"./ErrorMessage-5eec86f5.js";import"./ErrorSummary-4f66acfb.js";import"./FileUpload-a04d48dc.js";import"./Footer-e6905889.js";import"./Header-a8883776.js";import{H as b}from"./Hint-44397457.js";import"./Legend-8894f637.js";import"./InsetText-5d239799.js";import"./Label-8f102d27.js";import"./NotificationBanner-9be16c78.js";import"./Pagination-1429ab7b.js";import"./Panel-9bfd3250.js";import"./PhaseBanner-809e0913.js";import"./Radios-e7bbc035.js";import"./Select-64b9b78a.js";import"./SkipLink-6f274826.js";import"./Tabs-8973fdcc.js";import"./Textarea-1da448ea.js";import"./WarningText-53f07e98.js";import"./chunk-PCJTTTQV-1c0b2f62.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-8449aae3.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-2d4beb60.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./FormGroup-df38f41d.js";import"./Fieldset-4e09a399.js";import"./Typography-a2bc044e.js";import"./react-18-75f22a57.js";function pe(i={}){const{wrapper:s}=Object.assign({},l(),i.components);return s?e(s,Object.assign({},i,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong"},l(),i.components);return t(h,{children:[e(p,{title:"Components/Pagination"}),`
`,e(b,{children:"Components"}),`
`,e(n.h1,{children:"Pagination"}),`
`,e(n.p,{children:"Help users navigate forwards and backwards through a series of pages. For example, search results or guidance that’s divided into multiple website pages — like the GOV.UK mainstream guide format."}),`
`,e(r,{children:e(o,{of:c})}),`
`,e(n.h2,{children:"When to use this component"}),`
`,e(n.p,{children:"Consider using pagination when:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"showing all the content on a single page makes the page take too long to load"}),`
`,e(n.li,{children:"most users will only need the content on the first page or first few pages"}),`
`]}),`
`,e(n.h2,{children:"When not to use this component"}),`
`,e(n.p,{children:"Only break up content onto separate pages if it improves the performance or usability of your service."}),`
`,e(n.p,{children:"Avoid using the ‘infinite scroll’ technique to automatically load content when the user approaches the bottom of the page. This causes problems for keyboard users."}),`
`,e(n.p,{children:"Do not use this Pagination component for linear journeys — for example, where you’re asking the user to complete a form. Instead, use the Button component (usually a ‘Continue’ button) to let the user move to the next page — and a Back link to let them move to the previous page."}),`
`,e(n.h2,{children:"How it works"}),`
`,e(n.p,{children:"Add the pagination component after the content on each page that you’re paginating."}),`
`,e(n.p,{children:"Do not show pagination if there’s only one page of content."}),`
`,e(n.p,{children:"Redirect users to the first page if they enter a URL of a page that no longer exists."}),`
`,e(n.h2,{children:"For smaller numbers of pages"}),`
`,e(n.p,{children:"Use ‘Previous’ and ‘Next’ links to let users navigate through a small number of pages. Stack the links vertically, so they’re more obvious to screen magnifier users when they’re zoomed in:"}),`
`,e(r,{children:e(o,{of:d})}),`
`,e(n.h3,{children:"Add link labels to describe pages"}),`
`,e(n.p,{children:"You can use link labels to give more context:"}),`
`,e(r,{children:e(o,{of:m})}),`
`,e(n.h2,{children:"For larger numbers of pages"}),`
`,e(n.p,{children:"Use a list-type layout if users need to navigate through large numbers of pages. For example, long lists of search results."}),`
`,e(r,{children:e(o,{of:g})}),`
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
`,e(n.h2,{children:"First and last pages"}),`
`,e(n.p,{children:"Do not show the previous page link on the first page — and do not show the next page link on the last page."}),`
`,e(r,{children:e(o,{of:u})}),`
`,e(r,{children:e(o,{of:f})}),`
`,e(n.h2,{children:"Filtering and sorting"}),`
`,e(n.p,{children:"Consider adding filtering or sorting options if it helps users to find what they need in a long list of pages. For example, the business support finder on GOV.UK has filtering options."}),`
`,e(n.p,{children:"If the user filters or sorts the list of pages, apply this to the whole list (not just the current page) and redirect them back to the first page of the new results."}),`
`,e(n.p,{children:"Set defaults to minimise how many pages most users have to click through to find what they need."})]})}}export{pe as default};
//# sourceMappingURL=Pagination-001a575b.js.map
