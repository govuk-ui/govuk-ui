import{j as n,a as t,F as l}from"./jsx-runtime-29545a09.js";import{M as h,C as o}from"./index-d957edab.js";import"./chunk-S4VUQJ4A-3d1a1320.js";import{primary as p,numberLabels as d,linkLabels as c,largeNumberOfPages as g,firstPage as m,lastPage as u}from"./Pagination.stories-624e9323.js";import"./Textarea-3401356c.js";import"./BackLink-db4a3555.js";import"./BreadcrumbItem-4c671eb0.js";import"./Button-c79cc17b.js";import"./CookieBanner-54ff0914.js";import"./Details-b31dbea0.js";import{H as f}from"./Radios-a3c37471.js";import"./Footer-c20a9c5d.js";import"./Header-19efd5f0.js";import"./InsetText-f9c5a393.js";import"./Pagination-e4f0cd70.js";import"./PhaseBanner-85bc883f.js";import"./SkipLink-7ef7355e.js";import"./WarningText-4cfd38cd.js";import{u as a}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a724b768.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";import"./FormGroup-201d2661.js";import"./Fieldset-d9d8ba59.js";import"./Container-045493c7.js";import"./Grid-408885ec.js";import"./Typography-359fe8b4.js";function Z(r={}){const{wrapper:i}=Object.assign({},a(),r.components);return i?n(i,Object.assign({},r,{children:n(s,{})})):s();function s(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong"},a(),r.components);return t(l,{children:[n(h,{title:"Components/Pagination"}),`
`,n(f,{children:"Components"}),`
`,n(e.h1,{id:"pagination",children:"Pagination"}),`
`,n(e.p,{children:"Help users navigate forwards and backwards through a series of pages. For example, search results or guidance that’s divided into multiple website pages — like the GOV.UK mainstream guide format."}),`
`,n(o,{of:p}),`
`,n(e.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,n(e.p,{children:"Consider using pagination when:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"showing all the content on a single page makes the page take too long to load"}),`
`,n(e.li,{children:"most users will only need the content on the first page or first few pages"}),`
`]}),`
`,n(e.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,n(e.p,{children:"Only break up content onto separate pages if it improves the performance or usability of your service."}),`
`,n(e.p,{children:"Avoid using the ‘infinite scroll’ technique to automatically load content when the user approaches the bottom of the page. This causes problems for keyboard users."}),`
`,n(e.p,{children:"Do not use this Pagination component for linear journeys — for example, where you’re asking the user to complete a form. Instead, use the Button component (usually a ‘Continue’ button) to let the user move to the next page — and a Back link to let them move to the previous page."}),`
`,n(e.h2,{id:"how-it-works",children:"How it works"}),`
`,n(e.p,{children:"Add the pagination component after the content on each page that you’re paginating."}),`
`,n(e.p,{children:"Do not show pagination if there’s only one page of content."}),`
`,n(e.p,{children:"Redirect users to the first page if they enter a URL of a page that no longer exists."}),`
`,n(e.h2,{id:"for-smaller-numbers-of-pages",children:"For smaller numbers of pages"}),`
`,n(e.p,{children:"Use ‘Previous’ and ‘Next’ links to let users navigate through a small number of pages. Stack the links vertically, so they’re more obvious to screen magnifier users when they’re zoomed in:"}),`
`,n(o,{of:d}),`
`,n(e.h3,{id:"add-link-labels-to-describe-pages",children:"Add link labels to describe pages"}),`
`,n(e.p,{children:"You can use link labels to give more context:"}),`
`,n(o,{of:c}),`
`,n(e.h2,{id:"for-larger-numbers-of-pages",children:"For larger numbers of pages"}),`
`,n(e.p,{children:"Use a list-type layout if users need to navigate through large numbers of pages. For example, long lists of search results."}),`
`,n(o,{of:g}),`
`,t(e.p,{children:["Show the page number in the page ",n(e.code,{children:"<title>"})," so that screen reader users know they’ve navigated to a different page. For example, ‘Search results (page 1 of 4)’."]}),`
`,n(e.p,{children:"Show an appropriate number of pages to fit the horizontal space available."}),`
`,n(e.p,{children:"For smaller screens, show page numbers for:"}),`
`,n(e.p,{children:`the current page
previous and next pages
first and last pages
For larger screens, show page numbers for:`}),`
`,n(e.p,{children:`the current page
at least one page immediately before and after the current page
first and last pages
Use ellipses (…) to replace any skipped pages. For example:`}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"[1]"})," 2 … 100"]}),`
`,t(e.li,{children:["1 ",n(e.strong,{children:"[2]"})," 3 … 100"]}),`
`,t(e.li,{children:["1 2 ",n(e.strong,{children:"[3]"})," 4 … 100"]}),`
`,t(e.li,{children:["1 2 3 ",n(e.strong,{children:"[4]"})," 5 … 100"]}),`
`,t(e.li,{children:["1 … 4 ",n(e.strong,{children:"[5]"})," 6 … 100"]}),`
`,t(e.li,{children:["1 … 97 ",n(e.strong,{children:"[98]"})," 99 100"]}),`
`,t(e.li,{children:["1 … 98 ",n(e.strong,{children:"[99]"})," 100"]}),`
`,t(e.li,{children:["1 … 99 ",n(e.strong,{children:"[100]"})]}),`
`]}),`
`,n(e.h2,{id:"first-and-last-pages",children:"First and last pages"}),`
`,n(e.p,{children:"Do not show the previous page link on the first page — and do not show the next page link on the last page."}),`
`,n(o,{of:m}),`
`,n(o,{of:u}),`
`,n(e.h2,{id:"filtering-and-sorting",children:"Filtering and sorting"}),`
`,n(e.p,{children:"Consider adding filtering or sorting options if it helps users to find what they need in a long list of pages. For example, the business support finder on GOV.UK has filtering options."}),`
`,n(e.p,{children:"If the user filters or sorts the list of pages, apply this to the whole list (not just the current page) and redirect them back to the first page of the new results."}),`
`,n(e.p,{children:"Set defaults to minimise how many pages most users have to click through to find what they need."})]})}}export{Z as default};
//# sourceMappingURL=Pagination-b7066d35.js.map
