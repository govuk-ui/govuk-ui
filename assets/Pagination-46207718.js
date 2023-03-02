import{a as e,j as t,F as h}from"./jsx-runtime-68f49b4e.js";import{M as p,C as r,S as o}from"./chunk-4XCFV5WA-e30dc86e.js";import{primary as c,numberLabels as d,linkLabels as m,largeNumberOfPages as g,firstPage as u,lastPage as f}from"./Pagination.stories-4b1df077.js";import"./Accordion-12d9884c.js";import"./BackLink-54564ca1.js";import"./BreadcrumbItem-7e03e4ef.js";import"./Button-791dc627.js";import"./CharacterCount-6c285db3.js";import"./Table-778a5eb5.js";import"./CookieBanner-5f4494f2.js";import"./DateInput-e4c6e0c9.js";import"./Details-7a2689db.js";import"./ErrorMessage-07ea8fac.js";import"./ErrorSummary-d6d61f90.js";import"./FileUpload-b260dab3.js";import"./Footer-aedacc55.js";import"./Header-81057254.js";import{H as b}from"./Hint-47130fa7.js";import"./Legend-3f30edf0.js";import"./InsetText-39830db6.js";import"./Label-3d09487c.js";import"./NotificationBanner-b6ddf0d7.js";import"./Pagination-b98a4ff4.js";import"./Panel-9db3f9a0.js";import"./PhaseBanner-b7bf4a2c.js";import"./Radios-79cc87ab.js";import"./Select-d6e3d713.js";import"./SkipLink-0b18f351.js";import"./Tabs-61739ac7.js";import"./Textarea-0f1928d4.js";import"./WarningText-7f7d45da.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-51d0bfda.js";import"../sb-preview/runtime.mjs";import"./index-2d4beb60.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./FormGroup-f91b51d3.js";import"./Fieldset-cd643f71.js";import"./Typography-3950099a.js";function le(i={}){const{wrapper:s}=Object.assign({},l(),i.components);return s?e(s,Object.assign({},i,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong"},l(),i.components);return t(h,{children:[e(p,{title:"Pagination"}),`
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
`,e(n.p,{children:"Set defaults to minimise how many pages most users have to click through to find what they need."})]})}}export{le as default};
//# sourceMappingURL=Pagination-46207718.js.map
