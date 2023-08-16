import{j as e,a as t,F as c}from"./jsx-runtime-29545a09.js";import{M as l,C as i}from"./index-a6644abe.js";import"./chunk-S4VUQJ4A-16bd699b.js";import{primary as s,coronavirus as d,green as p}from"./NotificationBanner.stories-f85d4254.js";import{g as u}from"./Typography-f899da69.js";import{G as g}from"./GovScript-04710f98.js";import{u as h}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ea379913.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";function G(o={}){const{wrapper:a}=Object.assign({},h(),o.components);return a?e(a,Object.assign({},o,{children:e(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3"},h(),o.components);return t(c,{children:[e(l,{title:"Components/Notification banner"}),`
`,e(u,{children:"Components"}),`
`,e(n.h1,{id:"notification-banner",children:"Notification banner"}),`
`,e(n.p,{children:"Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content."}),`
`,e(i,{of:s}),`
`,e(n.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(n.p,{children:"A notification banner lets you tell the user about something that’s not directly relevant to the thing they’re trying to do on that page of the service. For example:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"telling the user about a problem that’s affecting the service as a whole (for example, delays in processing applications because of an emergency)"}),`
`,e(n.li,{children:"telling the user about something that affects them in particular (for example, an approaching deadline they need to meet)"}),`
`,e(n.li,{children:"telling the user about the outcome of something they’ve just done on a previous page (for example, confirming that an email has been sent)"}),`
`]}),`
`,e(n.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,t(n.p,{children:["Use notification banners sparingly. There’s ",e("a",{class:"govuk-link",href:"https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/",children:"evidence that people often miss them"}),", and using them too often is likely to make this problem worse."]}),`
`,t(n.p,{children:["If the information is directly relevant to the thing the user is doing on that page, put the information in the main page content instead. Use ",e("a",{class:"govuk-link",href:"/?path=/docs/components-inset-text--docs",children:"inset text"})," or ",e("a",{class:"govuk-link",href:"/?path=/docs/components-warning-text--docs",children:"warning text"})," if it needs to stand out."]}),`
`,e(n.p,{children:"Do not:"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["use a notification banner to tell the user about validation errors - use an ",e("a",{class:"govuk-link",href:"/?path=/docs/components-error-message--docs",children:"error message"})," and ",e("a",{class:"govuk-link",href:"/?path=/docs/components-error-summary--docs",children:"error summary"})," instead"]}),`
`,t(n.li,{children:["show a notification banner and an error summary on the same page - just show the ",e("a",{class:"govuk-link",href:"/?path=/docs/components-error-summary--docs",children:"error summary"})]}),`
`]}),`
`,e(n.h2,{id:"how-it-works",children:"How it works"}),`
`,t(n.p,{children:["Position a notification banner immediately before the page ",e(n.code,{children:"h1"}),". The notification banner should be the same width as the page’s other content, such as components, headings and body text. For example, if the other content takes up two-thirds of the screen on desktop devices, then the notification banner should also take up two-thirds. ",e("a",{class:"govuk-link",href:"https://design-system.service.gov.uk/styles/layout/",children:"Read about how to lay out pages"}),"."]}),`
`,e(n.p,{children:"Avoid showing more than one notification banner on the same page. Instead, combine the messages in a single notification banner. If the messages are too different to combine, only show the highest priority notification banner."}),`
`,e(n.h3,{id:"notification-banner-headings",children:"Notification banner headings"}),`
`,e(n.p,{children:"Avoid using headings for single-line notifications that do not need them."}),`
`,e(n.h2,{id:"telling-the-user-about-a-problem-that-affects-the-whole-service",children:"Telling the user about a problem that affects the whole service"}),`
`,e(n.p,{children:"Use a ‘neutral’ blue notification banner if the user needs to know about a problem with the service as a whole."}),`
`,e(n.p,{children:"For example:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"in a service that lets the user register or apply for something, they might need to know that it’s taking longer than usual to process applications because of an emergency"}),`
`,e(n.li,{children:"in an account-type service, the user might need to know that the service will be down for scheduled maintenance"}),`
`]}),`
`,e(i,{of:d}),`
`,t(n.p,{children:["If your service is on GOV.UK and it’s affected by an emergency, ask your department’s content team to ",e("a",{class:"govuk-link",href:"https://www.gov.uk/guidance/contact-the-government-digital-service/request-a-thing#change-govuk-content",children:"request a change to the service start page"}),`
If your service is getting more demand than usual, check that you’ve set up `,e("a",{class:"govuk-link",href:"/patterns/problem-with-the-service-pages/",children:"There is a problem with the service pages"})," and ",e("a",{class:"govuk-link",href:"/patterns/service-unavailable-pages/",children:"Service unavailable pages"}),", and the wording is up to date."]}),`
`,e(n.h2,{id:"telling-the-user-about-something-thats-happening-elsewhere",children:"Telling the user about something that’s happening elsewhere"}),`
`,e(n.p,{children:"Use a ‘neutral’ notification banner if the user needs to know about something that’s happening elsewhere in the service. For example:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"in a case working system, the user might need to know that there are new cases waiting for their attention"}),`
`,e(n.li,{children:"in an account-type service, you might need to tell the user that there’s a deadline approaching or that a payment is overdue"}),`
`]}),`
`,e(i,{of:s}),`
`,e(n.h2,{id:"reacting-to-something-the-user-has-done",children:"Reacting to something the user has done"}),`
`,t(n.p,{children:["You can also use a notification banner to tell the user about the outcome of something they’ve just done - but they have not finished using the service, so it does not make sense to use a ",e("a",{class:"govuk-link",href:"/patterns/confirmation-pages/",children:"confirmation page"}),"."]}),`
`,t(n.p,{children:["Using a notification banner is unlikely to be the right approach in a linear service - for example, a service that lets the user register or apply for a thing. For a linear service, it will usually make sense to stick to the ",e("a",{class:"govuk-link",href:"https://www.gov.uk/service-manual/design/form-structure",children:"‘one thing per page’ approach"}),". Do not use a notification banner to tell users that they’ve finished using a linear service. Use a ",e("a",{class:"govuk-link",href:"/patterns/confirmation-pages/",children:"confirmation page"})," instead."]}),`
`,e(n.p,{children:"Use the green version of the notification banner to confirm that something they’re expecting to happen has happened."}),`
`,e(i,{of:p}),`
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
`]}),`
`,e(g,{})]})}}export{G as default};
//# sourceMappingURL=NotificationBanner-ff8ab4b4.js.map
