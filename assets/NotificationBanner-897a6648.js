import{j as e,a as t,F as l}from"./jsx-runtime-670450c2.js";import{M as d,C as i,S as o}from"./index-8c0c3ee6.js";import"./chunk-PCJTTTQV-1a003912.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as h,coronavirus as p,green as m}from"./NotificationBanner.stories-72922797.js";import"./Accordion-b094a9f4.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-6a127f9a.js";import"./CharacterCount-9c8d5d28.js";import"./CookieBanner-c4de4ce5.js";import"./Details-ea8c166a.js";import{H as u}from"./Radios-f218e915.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./Tabs-8973fdcc.js";import"./WarningText-53f07e98.js";import{u as c}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-381ff2be.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-61705542.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Typography-a2bc044e.js";function Q(a={}){const{wrapper:r}=Object.assign({},c(),a.components);return r?e(r,Object.assign({},a,{children:e(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3"},c(),a.components);return t(l,{children:[e(d,{title:"Components/Notification banner"}),`
`,e(u,{children:"Components"}),`
`,e(n.h1,{children:"Notification banner"}),`
`,e(n.p,{children:"Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content."}),`
`,e(i,{children:e(o,{of:h})}),`
`,e(n.h2,{children:"When to use this component"}),`
`,e(n.p,{children:"A notification banner lets you tell the user about something that’s not directly relevant to the thing they’re trying to do on that page of the service. For example:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"telling the user about a problem that’s affecting the service as a whole (for example, delays in processing applications because of an emergency)"}),`
`,e(n.li,{children:"telling the user about something that affects them in particular (for example, an approaching deadline they need to meet)"}),`
`,e(n.li,{children:"telling the user about the outcome of something they’ve just done on a previous page (for example, confirming that an email has been sent)"}),`
`]}),`
`,e(n.h2,{children:"When not to use this component"}),`
`,t(n.p,{children:["Use notification banners sparingly. There’s ",e("a",{class:"govuk-link",href:"https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/",children:"evidence that people often miss them"}),", and using them too often is likely to make this problem worse."]}),`
`,t(n.p,{children:["If the information is directly relevant to the thing the user is doing on that page, put the information in the main page content instead. Use ",e("a",{class:"govuk-link",href:"/?path=/docs/components-inset-text--docs",children:"inset text"})," or ",e("a",{class:"govuk-link",href:"/?path=/docs/components-warning-text--docs",children:"warning text"})," if it needs to stand out."]}),`
`,e(n.p,{children:"Do not:"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["use a notification banner to tell the user about validation errors - use an ",e("a",{class:"govuk-link",href:"/?path=/docs/components-error-message--docs",children:"error message"})," and ",e("a",{class:"govuk-link",href:"/?path=/docs/components-error-summary--docs",children:"error summary"})," instead"]}),`
`,t(n.li,{children:["show a notification banner and an error summary on the same page - just show the ",e("a",{class:"govuk-link",href:"/?path=/docs/components-error-summary--docs",children:"error summary"})]}),`
`]}),`
`,e(n.h2,{children:"How it works"}),`
`,t(n.p,{children:["Position a notification banner immediately before the page ",e(n.code,{children:"h1"}),". The notification banner should be the same width as the page’s other content, such as components, headings and body text. For example, if the other content takes up two-thirds of the screen on desktop devices, then the notification banner should also take up two-thirds. ",e("a",{class:"govuk-link",href:"https://design-system.service.gov.uk/styles/layout/",children:"Read about how to lay out pages"}),"."]}),`
`,e(n.p,{children:"Avoid showing more than one notification banner on the same page. Instead, combine the messages in a single notification banner. If the messages are too different to combine, only show the highest priority notification banner."}),`
`,e(n.h3,{children:"Notification banner headings"}),`
`,e(n.p,{children:"Avoid using headings for single-line notifications that do not need them."}),`
`,e(n.h2,{children:"Telling the user about a problem that affects the whole service"}),`
`,e(n.p,{children:"Use a ‘neutral’ blue notification banner if the user needs to know about a problem with the service as a whole."}),`
`,e(n.p,{children:"For example:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"in a service that lets the user register or apply for something, they might need to know that it’s taking longer than usual to process applications because of an emergency"}),`
`,e(n.li,{children:"in an account-type service, the user might need to know that the service will be down for scheduled maintenance"}),`
`]}),`
`,e(i,{children:e(o,{of:p})}),`
`,t(n.p,{children:["If your service is on GOV.UK and it’s affected by an emergency, ask your department’s content team to ",e("a",{class:"govuk-link",href:"https://www.gov.uk/guidance/contact-the-government-digital-service/request-a-thing#change-govuk-content",children:"request a change to the service start page"}),`
If your service is getting more demand than usual, check that you’ve set up `,e("a",{class:"govuk-link",href:"/patterns/problem-with-the-service-pages/",children:"There is a problem with the service pages"})," and ",e("a",{class:"govuk-link",href:"/patterns/service-unavailable-pages/",children:"Service unavailable pages"}),", and the wording is up to date."]}),`
`,e(n.h2,{children:"Telling the user about something that’s happening elsewhere"}),`
`,e(n.p,{children:"Use a ‘neutral’ notification banner if the user needs to know about something that’s happening elsewhere in the service. For example:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"in a case working system, the user might need to know that there are new cases waiting for their attention"}),`
`,e(n.li,{children:"in an account-type service, you might need to tell the user that there’s a deadline approaching or that a payment is overdue"}),`
`]}),`
`,e(i,{children:e(o,{of:h})}),`
`,e(n.h2,{children:"Reacting to something the user has done"}),`
`,t(n.p,{children:["You can also use a notification banner to tell the user about the outcome of something they’ve just done - but they have not finished using the service, so it does not make sense to use a ",e("a",{class:"govuk-link",href:"/patterns/confirmation-pages/",children:"confirmation page"}),"."]}),`
`,t(n.p,{children:["Using a notification banner is unlikely to be the right approach in a linear service - for example, a service that lets the user register or apply for a thing. For a linear service, it will usually make sense to stick to the ",e("a",{class:"govuk-link",href:"https://www.gov.uk/service-manual/design/form-structure",children:"‘one thing per page’ approach"}),". Do not use a notification banner to tell users that they’ve finished using a linear service. Use a ",e("a",{class:"govuk-link",href:"/patterns/confirmation-pages/",children:"confirmation page"})," instead."]}),`
`,e(n.p,{children:"Use the green version of the notification banner to confirm that something they’re expecting to happen has happened."}),`
`,e(i,{children:e(o,{of:m})}),`
`,t(n.p,{children:["Since you’re using the notification banner to tell the user about the outcome of something they’ve just done, add ",e(n.code,{children:'role="alert"'})," so focus shifts to the notification banner on page load."]}),`
`,e(n.p,{children:"Remove a green notification banner when the user moves to a new page."}),`
`,e(n.p,{children:"To make the green version of the notification banner accessible:"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[`
`,t(n.p,{children:["use headings like ‘Success’ - so that you’re ",e("a",{class:"govuk-link",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html",children:"not relying on colour alone to convey meaning"})]}),`
`]}),`
`,t(n.li,{children:[`
`,t(n.p,{children:["use the same heading for green notification banners within the same service - so that you’re ",e("a",{class:"govuk-link",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification",children:"identifying components that work in the same way consistently"})]}),`
`]}),`
`]})]})}}export{Q as default};
//# sourceMappingURL=NotificationBanner-897a6648.js.map
