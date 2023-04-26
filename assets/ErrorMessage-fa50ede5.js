import{j as n,a as r,F as l}from"./jsx-runtime-670450c2.js";import{M as h,C as i}from"./index-c74fa780.js";import"./chunk-PCJTTTQV-9a82ccd3.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as d,error as c,legend as m,label as p}from"./ErrorMessage.stories-8e8131f0.js";import"./Accordion-5a2ba4cd.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-e68229e2.js";import"./CookieBanner-791a857d.js";import"./Details-ea8c166a.js";import{H as u}from"./Radios-0a1531ac.js";import"./Footer-d07f7a45.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./WarningText-53f07e98.js";import{u as a}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-fc09acd1.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-61705542.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Typography-a2bc044e.js";function J(t={}){const{wrapper:o}=Object.assign({},a(),t.components);return o?n(o,Object.assign({},t,{children:n(s,{})})):s();function s(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li"},a(),t.components);return r(l,{children:[n(h,{title:"Components/Error message"}),`
`,n(u,{children:"Components"}),`
`,n(e.h1,{id:"error-message",children:"Error message"}),`
`,n(e.p,{children:"This guidance is for government teams that build online services. To find information and services for the public, go to GOV.UK."}),`
`,n(e.p,{children:"Follow the validation pattern and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it."}),`
`,n(i,{of:d}),`
`,n(e.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,n(e.p,{children:"Show an error message next to the field and in the error summary when there is a validation error."}),`
`,n(e.p,{children:"Use standard messages for different components."}),`
`,n(e.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,n(e.p,{children:"Do not use error messages to tell a user that they are not eligible or do not have permission to do something. Or to tell them about a lack of capacity or other problem the user cannot fix - because the problem is with the service rather than with the information the user has provided."}),`
`,n(e.p,{children:"Instead, take the user to a page that explains the problem (for example, telling them why they’re not eligible) and provides useful information about what to do next."}),`
`,n(e.p,{children:"There are separate patterns for:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"‘there is a problem with the service’ pages"}),`
`,n(e.li,{children:"‘page not found’ pages"}),`
`,n(e.li,{children:"‘service unavailable’ pages"}),`
`]}),`
`,n(e.h2,{id:"how-it-works",children:"How it works"}),`
`,n(e.p,{children:"For each error:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"put the message in red after the question text and hint text"}),`
`,n(e.li,{children:"use a red border to visually connect the message and the question it belongs to"}),`
`,n(e.li,{children:"if the error relates to a specific field within the question, give it a red border and refer to that field in the error message - for example: “you must enter a year”"}),`
`]}),`
`,n(e.p,{children:"To help screen reader users, the error message component includes a hidden ‘Error:’ before the error message. These users will hear, for example, “Error: The date your passport was issued must be in the past”."}),`
`,n(e.p,{children:"If your error message is written in another language, you can change the prefix as needed, as shown in this example."}),`
`,n(i,{of:c}),`
`,n(e.p,{children:"Summarise all errors at the top of the page the user is on using an error summary."}),`
`,n(e.h2,{id:"legend",children:"Legend"}),`
`,n(i,{of:m}),`
`,n(e.h2,{id:"label",children:"Label"}),`
`,n(i,{of:p}),`
`,n(e.h2,{id:"be-clear-and-concise",children:"Be clear and concise"}),`
`,n(e.p,{children:"Describe what has happened and tell them how to fix it. The message must be in plain English, use positive language and get to the point."}),`
`,n(e.p,{children:"Do not use:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"technical jargon like ‘form post error’, ‘unspecified error’ and ‘error 0x0000000643’"}),`
`,n(e.li,{children:"words like ‘forbidden’, ‘illegal’, ‘you forgot’ and ‘prohibited’"}),`
`,n(e.li,{children:"‘please’ because it implies a choice"}),`
`,n(e.li,{children:"‘sorry’ because it does not help fix the problem"}),`
`,n(e.li,{children:"‘valid’ and ‘invalid’ because they do not add anything to the message"}),`
`,n(e.li,{children:"humourous, informal language like ‘oops’"}),`
`]}),`
`,n(e.p,{children:"Do not give an example in the error message if there is an example on the screen. For example, if you are asking for a National Insurance number and include ‘QQ 12 34 56 C’ as hint text, do not include an example in the error message."}),`
`,n(e.p,{children:"Above all, aim for clarity."}),`
`,n(e.p,{children:"Read the message out loud to see if it sounds like something you would say."}),`
`,n(e.h2,{id:"be-consistent",children:"Be consistent"}),`
`,n(e.p,{children:"Use the same message next to the field and in the error summary so they:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"look, sound and mean the same"}),`
`,n(e.li,{children:"make sense out of context"}),`
`,n(e.li,{children:"reduce the cognitive effort needed to understand what has happened"}),`
`]}),`
`,n(e.p,{children:"Use the question or form label in the error to provide context. For example, ‘Enter how many hours you work a week’ for ‘How many hours do you work a week?’"}),`
`,n(e.h2,{id:"be-specific",children:"Be specific"}),`
`,n(e.p,{children:"General errors are not helpful to everyone. They do not make sense out of context. Avoid messages like:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"‘An error occurred’"}),`
`,n(e.li,{children:"‘Answer the question’"}),`
`,n(e.li,{children:"‘Select an option’"}),`
`,n(e.li,{children:"‘Fill in the field’"}),`
`,n(e.li,{children:"‘This field is required’"}),`
`]}),`
`,n(e.p,{children:"Different errors need different messages. For example, text fields may be:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"empty"}),`
`,n(e.li,{children:"too long"}),`
`,n(e.li,{children:"too short"}),`
`,n(e.li,{children:"using characters that are not allowed"}),`
`,n(e.li,{children:"in the wrong format"}),`
`]}),`
`,n(e.p,{children:"An error for a specific situation is more helpful. It will tell someone what has happened and how to fix it."}),`
`,n(e.h2,{id:"use-instructions-and-descriptions",children:"Use instructions and descriptions"}),`
`,n(e.p,{children:"Some errors work better as instructions and some work better as descriptions. For example:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"‘Enter your first name’ is clearer, more direct and natural than ‘First name must have an entry’"}),`
`,n(e.li,{children:"‘Enter a first name that is 35 characters or less’ is wordier, less direct and natural than ‘First name must be 35 characters or less’"}),`
`,n(e.li,{children:`‘Enter a date after 31 August 2017 for when you started the course’ is wordier, less direct and natural than ‘Date you started the course must be after 31 August 2017’
Use both instructions and descriptions, but use them consistently. For example, use an instruction for empty fields like ‘Enter your name’, but a description like ‘Name must be 35 characters or less’ for entries that are too long.`}),`
`]}),`
`,n(e.h2,{id:"use-error-message-templates",children:"Use error message templates"}),`
`,n(e.p,{children:"Use template messages for common errors on:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"addresses"}),`
`,n(e.li,{children:"character count"}),`
`,n(e.li,{children:"checkboxes"}),`
`,n(e.li,{children:"date input"}),`
`,n(e.li,{children:"email address"}),`
`,n(e.li,{children:"file upload"}),`
`,n(e.li,{children:"names"}),`
`,n(e.li,{children:"National Insurance numbers"}),`
`,n(e.li,{children:"radios"}),`
`,n(e.li,{children:"telephone numbers"}),`
`,n(e.li,{children:"text input"}),`
`,n(e.li,{children:"textarea"}),`
`]}),`
`,n(e.h2,{id:"track-errors",children:"Track errors"}),`
`,n(e.p,{children:"Find out how often people see them. This will let you:"}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"improve content"}),`
`,n(e.li,{children:"A/B test variations"}),`
`,n(e.li,{children:"redesign a journey"}),`
`]})]})}}export{J as default};
//# sourceMappingURL=ErrorMessage-fa50ede5.js.map
