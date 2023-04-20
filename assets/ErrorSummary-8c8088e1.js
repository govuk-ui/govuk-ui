import{j as e,a as t,F as m}from"./jsx-runtime-670450c2.js";import{M as l,C as o}from"./index-5ee2314f.js";import"./chunk-PCJTTTQV-8fedb1a0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as s,linking as p,linkingDateInput as c,checkboxes as d,fullPageExample as u}from"./ErrorSummary.stories-3dccde46.js";import"./Accordion-f4a50bc6.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-6a127f9a.js";import"./CookieBanner-c4de4ce5.js";import"./Details-ea8c166a.js";import{H as f}from"./Radios-6fbe53a5.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./WarningText-53f07e98.js";import{G as y}from"./GovScript-6b99b831.js";import{u as h}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-7576cdfc.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-61705542.js";import"./Typography-a2bc044e.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";function Z(n={}){const{wrapper:i}=Object.assign({},h(),n.components);return i?e(i,Object.assign({},n,{children:e(a,{})})):a();function a(){const r=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code"},h(),n.components);return t(m,{children:[e(l,{title:"Components/Error summary"}),`
`,e(f,{children:"Components"}),`
`,e(r.h1,{id:"error-summary",children:"Error summary"}),`
`,e(r.p,{children:"Use this component at the top of a page to summarise any errors a user has made."}),`
`,t(r.p,{children:["When a user makes an error, you must show both an error summary and an ",e(r.a,{href:"?path=/docs/components-error-message--docs",children:"error message"})," next to each answer that contains an error."]}),`
`,e(o,{of:s}),`
`,e(r.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(r.p,{children:"Always show an error summary when there is a validation error, even if there’s only one."}),`
`,e(r.h2,{id:"how-it-works",children:"How it works"}),`
`,e(r.p,{children:"You must:"}),`
`,t(r.ul,{children:[`
`,e(r.li,{children:"move keyboard focus to the error summary"}),`
`,e(r.li,{children:"include the heading ‘There is a problem’"}),`
`,e(r.li,{children:"link to each of the answers that have validation errors"}),`
`,e(r.li,{children:"make sure the error messages in the error summary are worded the same as those which appear next to the inputs with errors"}),`
`]}),`
`,t(r.p,{children:["As well as showing an error summary, follow the validation pattern - for example, by adding ‘Error: ’ to the beginning of the page ",e(r.code,{children:"<title>"})," so screen readers read it out as soon as possible."]}),`
`,e(r.p,{children:"And make your error messages clear and concise."}),`
`,e(o,{of:s}),`
`,e(r.h2,{id:"linking-from-the-error-summary-to-each-answer",children:"Linking from the error summary to each answer"}),`
`,e(r.p,{children:"You must link the errors in the error summary to the answer they relate to."}),`
`,e(r.p,{children:"For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the field."}),`
`,e(o,{of:p}),`
`,e(r.p,{children:"When a user has to enter their answer into multiple fields, such as the day, month and year fields in the date input component, link to the first field that contains an error."}),`
`,e(r.p,{children:"If you do not know which field contains an error, link to the first field."}),`
`,e(o,{of:c}),`
`,e(r.p,{children:"For questions that require a user to select one or more options from a list using radios or checkboxes, link to the first radio or checkbox."}),`
`,e(o,{of:d}),`
`,e(r.h2,{id:"where-to-put-the-error-summary",children:"Where to put the error summary"}),`
`,t(r.p,{children:["Put the error summary at the top of the main container. If your page includes breadcrumbs or a back link, place it below these, but above the ",e(r.code,{children:"<h1>"}),"."]}),`
`,e(o,{of:u}),`
`,e(y,{})]})}}export{Z as default};
//# sourceMappingURL=ErrorSummary-8c8088e1.js.map
