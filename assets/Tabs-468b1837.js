import{j as t,a as n,F as h}from"./jsx-runtime-670450c2.js";import{M as l,C as s}from"./index-c0943c2d.js";import{primary as a}from"./Tabs.stories-7fa71342.js";import"./Accordion-9ebb3012.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-6a127f9a.js";import"./CookieBanner-c4de4ce5.js";import"./Details-ea8c166a.js";import{H as d}from"./Radios-f218e915.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import{T as m}from"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./WarningText-53f07e98.js";import"./chunk-PCJTTTQV-893ced84.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as c}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-1c2585b8.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./Typography-a2bc044e.js";import"./react-18-61705542.js";function P(o={}){const{wrapper:i}=Object.assign({},c(),o.components);return i?t(i,Object.assign({},o,{children:t(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",code:"code"},c(),o.components);return n(h,{children:[t(l,{title:"Components/Tabs"}),`
`,t(d,{children:"Components"}),`
`,t(e.h1,{id:"tabs",children:"Tabs"}),`
`,t(m,{children:"EXPERIMENTAL"}),`
`,t(e.p,{children:"This component is currently experimental because more research is needed to validate it."}),`
`,t(e.p,{children:"The tabs component lets users navigate between related sections of content, displaying one section at a time."}),`
`,t(s,{of:a}),`
`,t(e.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,t(e.p,{children:"Tabs can be a helpful way of letting users quickly switch between related information if:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:"your content can be usefully separated into clearly labelled sections"}),`
`,t(e.li,{children:"the first section is more relevant than the others for most users"}),`
`,t(e.li,{children:"users will not need to view all the sections at once"}),`
`]}),`
`,t(e.p,{children:"Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use."}),`
`,t(e.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,t(e.p,{children:"Do not use the tabs component if the total amount of content the tabs contain will make the page slow to load. For this reason, do not use the tabs component as a form of page navigation."}),`
`,t(e.p,{children:"Tabs hide content from users and not everyone will notice them or understand how they work."}),`
`,t(e.p,{children:"Do not use tabs if your users might need to:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:"read through all of the content in order, for example, to understand a step-by-step process"}),`
`,t(e.li,{children:"compare information in different tabs - having to memorise the information and switch backwards and forwards can be frustrating and difficult"}),`
`]}),`
`,t(e.p,{children:"Test your content without tabs first. Consider if it’s better to:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:"simplify and reduce the amount of content"}),`
`,t(e.li,{children:"split the content across multiple pages"}),`
`,t(e.li,{children:"keep the content on a single page, separated by headings"}),`
`,t(e.li,{children:"use a table of contents to let users navigate quickly to specific sections of content"}),`
`]}),`
`,t(e.h2,{id:"decide-between-using-tabs-accordion-and-details",children:"Decide between using tabs, accordion and details"}),`
`,n(e.p,{children:["Tabs, ",t(e.a,{href:"?path=/docs/components-accordion--docs",children:"accordions"}),", and ",t(e.a,{href:"?path=/docs/components-details--docs",children:"details"})," all hide sections of content which a user can choose to reveal."]}),`
`,t(e.p,{children:"If you decide to use one of these components, consider if:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:"the user does not need to view more than one section at a time — consider using tabs"}),`
`,t(e.li,{children:"the user needs to switch quickly between sections — tabs can show content without pushing other sections down the page, unlike accordions"}),`
`,t(e.li,{children:"there are many pieces of content — tabs can fit fewer sections as they’re arranged horizontally, unlike accordions which are arranged vertically"}),`
`,t(e.li,{children:"there’s only one or two pieces of short, less important content — the details component is more suitable as it’s visually smaller and less prominent than an accordion or tabs"}),`
`]}),`
`,t(e.h2,{id:"how-it-works",children:"How it works"}),`
`,t(s,{of:a}),`
`,t(e.p,{children:"The tabs component uses JavaScript. When JavaScript is not available, users will see the tabbed content on a single page, in order from first to last, with a table of contents that links to each of the sections."}),`
`,t(e.p,{children:"This is also how the component currently behaves on small screens, though more research is needed on this."}),`
`,t(e.h3,{id:"the-current-tab-gets-stored-in-the-url",children:"The current tab gets stored in the URL"}),`
`,n(e.p,{children:["When moving between tabs, the URL gets updated with a fragment (",t(e.code,{children:"#id-of-the-tab"}),") corresponding to the current tab’s ",t(e.code,{children:"id"})," attribute’s value."]}),`
`,n(e.p,{children:["If the tab’s name is “United Kingdom” then the fragment could be ",t(e.code,{children:"#tab_united-kingdom"}),"."]}),`
`,t(e.p,{children:"Because of this feature, pressing the browser’s ‘back’ button should navigate back to the previous tab."}),`
`,t(e.h3,{id:"use-clear-labels",children:"Use clear labels"}),`
`,t(e.p,{children:"Tabs hide content, so the tab labels need to make it very clear what they link to, otherwise users will not know if they need to click on them."}),`
`,t(e.p,{children:"If you struggle to come up with clear labels, it might be because the way you’ve separated the content is not clear."}),`
`,t(e.h3,{id:"order-the-tabs-according-to-user-needs",children:"Order the tabs according to user needs"}),`
`,t(e.p,{children:"The first tab should be the most commonly-needed section. Arrange the other tabs in the order that makes most sense for your users."}),`
`,t(e.h3,{id:"do-not-disable-tabs",children:"Do not disable tabs"}),`
`,t(e.p,{children:"Disabling elements is normally confusing for users. If there is no content for a tab, either remove the tab or, if that would be confusing for your users, explain why there is no content when the tab is selected."}),`
`,t(e.h3,{id:"avoid-tabs-that-wrap-over-more-than-one-line",children:"Avoid tabs that wrap over more than one line"}),`
`,t(e.p,{children:"If you use too many tabs or they have long labels then they may wrap over more than one line. This makes it harder for users to see the connection between the selected tab and its content."})]})}}export{P as default};
//# sourceMappingURL=Tabs-468b1837.js.map
