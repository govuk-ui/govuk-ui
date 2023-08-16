import{j as e,a as o,F as m}from"./jsx-runtime-29545a09.js";import{M as l,C as n}from"./index-a6644abe.js";import"./chunk-S4VUQJ4A-16bd699b.js";import{primary as s,linking as c,linkingDateInput as d,checkboxes as p,fullPageExample as u}from"./ErrorSummary.stories-6d976989.js";import{g as f}from"./Typography-f899da69.js";import{G as y}from"./GovScript-04710f98.js";import{u as h}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ea379913.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";function G(t={}){const{wrapper:i}=Object.assign({},h(),t.components);return i?e(i,Object.assign({},t,{children:e(a,{})})):a();function a(){const r=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code"},h(),t.components);return o(m,{children:[e(l,{title:"Components/Error summary"}),`
`,e(f,{children:"Components"}),`
`,e(r.h1,{id:"error-summary",children:"Error summary"}),`
`,e(r.p,{children:"Use this component at the top of a page to summarise any errors a user has made."}),`
`,o(r.p,{children:["When a user makes an error, you must show both an error summary and an ",e(r.a,{href:"?path=/docs/components-error-message--docs",children:"error message"})," next to each answer that contains an error."]}),`
`,e(n,{of:s}),`
`,e(r.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(r.p,{children:"Always show an error summary when there is a validation error, even if there’s only one."}),`
`,e(r.h2,{id:"how-it-works",children:"How it works"}),`
`,e(r.p,{children:"You must:"}),`
`,o(r.ul,{children:[`
`,e(r.li,{children:"move keyboard focus to the error summary"}),`
`,e(r.li,{children:"include the heading ‘There is a problem’"}),`
`,e(r.li,{children:"link to each of the answers that have validation errors"}),`
`,e(r.li,{children:"make sure the error messages in the error summary are worded the same as those which appear next to the inputs with errors"}),`
`]}),`
`,o(r.p,{children:["As well as showing an error summary, follow the validation pattern - for example, by adding ‘Error: ’ to the beginning of the page ",e(r.code,{children:"<title>"})," so screen readers read it out as soon as possible."]}),`
`,e(r.p,{children:"And make your error messages clear and concise."}),`
`,e(n,{of:s}),`
`,e(r.h2,{id:"linking-from-the-error-summary-to-each-answer",children:"Linking from the error summary to each answer"}),`
`,e(r.p,{children:"You must link the errors in the error summary to the answer they relate to."}),`
`,e(r.p,{children:"For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the field."}),`
`,e(n,{of:c}),`
`,e(r.p,{children:"When a user has to enter their answer into multiple fields, such as the day, month and year fields in the date input component, link to the first field that contains an error."}),`
`,e(r.p,{children:"If you do not know which field contains an error, link to the first field."}),`
`,e(n,{of:d}),`
`,e(r.p,{children:"For questions that require a user to select one or more options from a list using radios or checkboxes, link to the first radio or checkbox."}),`
`,e(n,{of:p}),`
`,e(r.h2,{id:"where-to-put-the-error-summary",children:"Where to put the error summary"}),`
`,o(r.p,{children:["Put the error summary at the top of the main container. If your page includes breadcrumbs or a back link, place it below these, but above the ",e(r.code,{children:"<h1>"}),"."]}),`
`,e(n,{of:u}),`
`,e(y,{})]})}}export{G as default};
//# sourceMappingURL=ErrorSummary-1d8694d0.js.map
