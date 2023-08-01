import{j as e,a as t,F as h}from"./jsx-runtime-29545a09.js";import{M as l,C as i}from"./index-d957edab.js";import"./chunk-S4VUQJ4A-3d1a1320.js";import{primary as a,summary as d}from"./Accordion.stories-cc450df7.js";import"./Textarea-3401356c.js";import"./BackLink-db4a3555.js";import"./BreadcrumbItem-4c671eb0.js";import"./Button-c79cc17b.js";import"./CookieBanner-54ff0914.js";import"./Details-b31dbea0.js";import{H as p}from"./Radios-a3c37471.js";import"./Footer-c20a9c5d.js";import"./Header-19efd5f0.js";import"./InsetText-f9c5a393.js";import"./Pagination-e4f0cd70.js";import{T as u}from"./PhaseBanner-85bc883f.js";import"./SkipLink-7ef7355e.js";import"./WarningText-4cfd38cd.js";import{G as m}from"./GovScript-04710f98.js";import{u as c}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a724b768.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";import"./Container-045493c7.js";import"./Grid-408885ec.js";import"./FormGroup-201d2661.js";import"./Fieldset-d9d8ba59.js";import"./Typography-359fe8b4.js";function Q(o={}){const{wrapper:s}=Object.assign({},c(),o.components);return s?e(s,Object.assign({},o,{children:e(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",h4:"h4",code:"code"},c(),o.components);return t(h,{children:[e(l,{title:"Components/Accordion"}),`
`,e(p,{children:"Components"}),`
`,e(n.h1,{id:"accordion",children:"Accordion"}),`
`,e(u,{children:"EXPERIMENTAL"}),`
`,e(n.p,{children:"The accordion component lets users show and hide sections of related content on a page."}),`
`,e(i,{of:a}),`
`,e(n.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(n.p,{children:"Only use an accordion if there’s evidence it’s helpful for the user to:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"see an overview of multiple, related sections of content"}),`
`,e(n.li,{children:"choose to show and hide sections that are relevant to them"}),`
`,e(n.li,{children:"look across information that might otherwise be on different pages"}),`
`]}),`
`,e(n.p,{children:"For example, an accordion can work well if the user needs to reveal and compare information that’s relevant to them."}),`
`,e(n.p,{children:"Accordions can also work well for people who use a service regularly. For example, users of caseworking systems who need to do familiar tasks quickly."}),`
`,e(n.p,{children:"Test with users to decide if using an accordion outweighs the potential problems with hiding content."}),`
`,e(n.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,e(n.p,{children:"Accordions hide content from the user. Not all users will notice them or understand how they work. For this reason, you should only use them in specific situations and if user research supports it."}),`
`,e(n.p,{children:"Do not use an accordion for content that all users need to see."}),`
`,t(n.p,{children:["Test your content without an accordion first. Well-written and structured content, as shown in the ",e("a",{href:"https://www.gov.uk/guidance/content-design/writing-for-gov-uk",children:"Content design: writing for GOV.UK"})," guidance, can remove the need to use an accordion."]}),`
`,e(n.p,{children:"It’s usually better to:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"simplify and reduce the amount of content"}),`
`,e(n.li,{children:"split the content across multiple pages"}),`
`,e(n.li,{children:"keep the content on a single page, separated by headings"}),`
`,e(n.li,{children:"use a list of links at the start of the page (known as ‘anchor links’) to take the user to particular sections of a page"}),`
`]}),`
`,e(n.p,{children:"Accordions work best for simple content and links. Do not use accordions to split up a series of questions. Use separate pages instead."}),`
`,e(n.p,{children:"Do not put accordions within accordions, as it will make content difficult to find."}),`
`,e(n.p,{children:"Do not use the accordion component if the amount of content inside will make the page slow to load."}),`
`,e(n.h2,{id:"decide-between-using-accordions-tabs-and-details",children:"Decide between using accordions, tabs and details"}),`
`,e(n.p,{children:"Accordions, tabs and details all work by hiding sections of content which a user can choose to reveal. Avoid using any of these components within one another."}),`
`,e(n.p,{children:"If you decide to use one of these components, consider if:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"the user needs to look at more than one section at a time — an accordion can show multiple sections at a time, unlike tabs"}),`
`,e(n.li,{children:"the user needs to switch quickly between sections — tabs can show content without pushing other sections down the page, unlike accordions"}),`
`,e(n.li,{children:"there are many sections of content — accordions can fit more sections as they’re arranged vertically, unlike tabs which are arranged horizontally"}),`
`,e(n.li,{children:"there’s only one or two pieces of short, less important content — the details component is more suitable as it’s visually smaller and less prominent than an accordion or tabs"}),`
`]}),`
`,e(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e(n.p,{children:"The accordion component uses JavaScript. When JavaScript is not available, users will see all the content displayed with the section labels as headings."}),`
`,e(n.h3,{id:"section-heading-buttons",children:"Section heading buttons"}),`
`,e(n.p,{children:"An accordion will usually start with all sections hidden. To show a section, the user can interact anywhere in the heading button."}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"heading text"}),`
`,e(n.li,{children:"summary line (if you decide to add one)"}),`
`,e(n.li,{children:"call-to-action text to ‘show’ or ‘hide’"}),`
`]}),`
`,e(n.p,{children:"For users of screen readers, all the text in the button will be read as a single statement (separated by commas to allow for slight pauses). There’s also some visually hidden content in the heading text to help announce the call-to-action as ‘show this section’ or ‘hide this section’."}),`
`,e(i,{of:a}),`
`,e(n.h4,{id:"write-clear-button-text",children:"Write clear button text"}),`
`,e(n.p,{children:`Write the heading and summary line like any other button text. Use sentence case, describe the content that will show, and keep it short.
Users of screen readers might find it difficult to navigate the accordion if the button text is too long.`}),`
`,e(n.p,{children:"If you struggle to come up with clear button text, it might be because the way you’ve separated the content is not clear. Organise sections in a way that makes sense to users, based on their needs."}),`
`,e(n.h4,{id:"adding-a-summary-line",children:"Adding a summary line"}),`
`,e(n.p,{children:"Only add a summary line if it’s actually needed, as it’s likely to make the button text too long."}),`
`,e(n.p,{children:"If you’ve decided that you need the summary line, you must make it as short as possible."}),`
`,e(i,{of:d}),`
`,e(n.h4,{id:"structure-section-headings-with-the-rest-of-the-page",children:"Structure section headings with the rest of the page"}),`
`,t(n.p,{children:["The accordion component shows section headings as ",e(n.code,{children:"<h2>"})," headings. If needed, change the heading level of the section headings to make them fit within the other headings on the page."]}),`
`,e(n.h3,{id:"starting-with-sections-open",children:"Starting with sections open"}),`
`,e(n.p,{children:"Users might need some sections to be open from the start. If they leave and then return to the page, they might also need sections they opened to stay open."}),`
`,e(n.p,{children:"If the user leaves and then returns to the page within the same page session, the accordion component will use ‘session storage’ to remember which sections were open. You can configure sections to start and stay open, but not stay closed."}),`
`,e(n.p,{children:"To see the changes you’ve made, you may need to create a new ‘session’. For example, by opening a page in a new tab or window."}),`
`,e(n.h3,{id:"do-not-disable-sections",children:"Do not disable sections"}),`
`,e(n.p,{children:"Disabling controls is normally confusing for users. If there is no content for a section, either remove the section or, if this would be confusing for your users, explain why there is no content when the section is opened."}),`
`,e(m,{})]})}}export{Q as default};
//# sourceMappingURL=Accordion-9eb35154.js.map
