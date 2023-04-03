import{j as e,a as t,F as h}from"./jsx-runtime-670450c2.js";import{M as p,C as r,S as o}from"./index-9da969b9.js";import{primary as c,numberLabels as d,linkLabels as m,largeNumberOfPages as g,firstPage as u,lastPage as f}from"./Pagination.stories-5bf34704.js";import"./Accordion-b094a9f4.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-232179fb.js";import"./CharacterCount-7adc4d81.js";import"./CookieBanner-0021e8bc.js";import"./Details-ea8c166a.js";import"./ErrorMessage-5eec86f5.js";import"./FileUpload-a04d48dc.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import{H as b}from"./Radios-17bf4bdd.js";import"./InsetText-5be58372.js";import"./NotificationBanner-9be16c78.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./Select-0fca9528.js";import"./SkipLink-6f274826.js";import"./Tabs-8973fdcc.js";import"./WarningText-53f07e98.js";import"./chunk-PCJTTTQV-009fdc81.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-f75f7c11.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./Typography-a2bc044e.js";import"./react-18-61705542.js";function oe(i={}){const{wrapper:s}=Object.assign({},l(),i.components);return s?e(s,Object.assign({},i,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong"},l(),i.components);return t(h,{children:[e(p,{title:"Components/Pagination"}),`
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
`,e(n.p,{children:"Set defaults to minimise how many pages most users have to click through to find what they need."})]})}}export{oe as default};
//# sourceMappingURL=Pagination-101dc8ee.js.map