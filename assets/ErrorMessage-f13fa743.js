import{a as e,j as r,F as h}from"./jsx-runtime-68f49b4e.js";import{M as d,C as i,S as t}from"./chunk-4XCFV5WA-702abb6b.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as c,error as m,legend as p,label as u}from"./ErrorMessage.stories-2f65f5d9.js";import"./Accordion-12d9884c.js";import"./BackLink-54564ca1.js";import"./BreadcrumbItem-7e03e4ef.js";import"./Button-791dc627.js";import"./CharacterCount-6c285db3.js";import"./Table-8d10af1d.js";import"./CookieBanner-5f4494f2.js";import"./DateInput-e4c6e0c9.js";import"./Details-7a2689db.js";import"./ErrorMessage-07ea8fac.js";import"./ErrorSummary-d6d61f90.js";import"./FileUpload-b260dab3.js";import"./Footer-aedacc55.js";import"./Header-81057254.js";import{H as f}from"./Hint-47130fa7.js";import"./Legend-3f30edf0.js";import"./InsetText-39830db6.js";import"./Label-3d09487c.js";import"./NotificationBanner-b6ddf0d7.js";import"./Pagination-252dd775.js";import"./Panel-9db3f9a0.js";import"./PhaseBanner-b7bf4a2c.js";import"./Radios-79cc87ab.js";import"./Select-d6e3d713.js";import"./SkipLink-0b18f351.js";import"./Tabs-61739ac7.js";import"./Textarea-0f1928d4.js";import"./WarningText-7f7d45da.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-271d4ed5.js";import"../sb-preview/runtime.mjs";import"./index-2d4beb60.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./Container-67190f80.js";import"./Grid-3db4db30.js";import"./MainWrapper-68156f52.js";import"./FormGroup-f91b51d3.js";import"./Fieldset-cd643f71.js";import"./Typography-3950099a.js";function he(o={}){const{wrapper:a}=Object.assign({},l(),o.components);return a?e(a,Object.assign({},o,{children:e(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li"},l(),o.components);return r(h,{children:[e(d,{title:"Error message"}),`
`,e(f,{children:"Components"}),`
`,e(n.h1,{children:"Error message"}),`
`,e(n.p,{children:"This guidance is for government teams that build online services. To find information and services for the public, go to GOV.UK."}),`
`,e(n.p,{children:"Follow the validation pattern and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it."}),`
`,e(i,{children:e(t,{of:c})}),`
`,e(n.h2,{children:"When to use this component"}),`
`,e(n.p,{children:"Show an error message next to the field and in the error summary when there is a validation error."}),`
`,e(n.p,{children:"Use standard messages for different components."}),`
`,e(n.h2,{children:"When not to use this component"}),`
`,e(n.p,{children:"Do not use error messages to tell a user that they are not eligible or do not have permission to do something. Or to tell them about a lack of capacity or other problem the user cannot fix - because the problem is with the service rather than with the information the user has provided."}),`
`,e(n.p,{children:"Instead, take the user to a page that explains the problem (for example, telling them why they’re not eligible) and provides useful information about what to do next."}),`
`,e(n.p,{children:"There are separate patterns for:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"‘there is a problem with the service’ pages"}),`
`,e(n.li,{children:"‘page not found’ pages"}),`
`,e(n.li,{children:"‘service unavailable’ pages"}),`
`]}),`
`,e(n.h2,{children:"How it works"}),`
`,e(n.p,{children:"For each error:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"put the message in red after the question text and hint text"}),`
`,e(n.li,{children:"use a red border to visually connect the message and the question it belongs to"}),`
`,e(n.li,{children:"if the error relates to a specific field within the question, give it a red border and refer to that field in the error message - for example: “you must enter a year”"}),`
`]}),`
`,e(n.p,{children:"To help screen reader users, the error message component includes a hidden ‘Error:’ before the error message. These users will hear, for example, “Error: The date your passport was issued must be in the past”."}),`
`,e(n.p,{children:"If your error message is written in another language, you can change the prefix as needed, as shown in this example."}),`
`,e(i,{children:e(t,{of:m})}),`
`,e(n.p,{children:"Summarise all errors at the top of the page the user is on using an error summary."}),`
`,e(n.h2,{children:"Legend"}),`
`,e(i,{children:e(t,{of:p})}),`
`,e(n.h2,{children:"Label"}),`
`,e(i,{children:e(t,{of:u})}),`
`,e(n.h2,{children:"Be clear and concise"}),`
`,e(n.p,{children:"Describe what has happened and tell them how to fix it. The message must be in plain English, use positive language and get to the point."}),`
`,e(n.p,{children:"Do not use:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"technical jargon like ‘form post error’, ‘unspecified error’ and ‘error 0x0000000643’"}),`
`,e(n.li,{children:"words like ‘forbidden’, ‘illegal’, ‘you forgot’ and ‘prohibited’"}),`
`,e(n.li,{children:"‘please’ because it implies a choice"}),`
`,e(n.li,{children:"‘sorry’ because it does not help fix the problem"}),`
`,e(n.li,{children:"‘valid’ and ‘invalid’ because they do not add anything to the message"}),`
`,e(n.li,{children:"humourous, informal language like ‘oops’"}),`
`]}),`
`,e(n.p,{children:"Do not give an example in the error message if there is an example on the screen. For example, if you are asking for a National Insurance number and include ‘QQ 12 34 56 C’ as hint text, do not include an example in the error message."}),`
`,e(n.p,{children:"Above all, aim for clarity."}),`
`,e(n.p,{children:"Read the message out loud to see if it sounds like something you would say."}),`
`,e(n.h2,{children:"Be consistent"}),`
`,e(n.p,{children:"Use the same message next to the field and in the error summary so they:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"look, sound and mean the same"}),`
`,e(n.li,{children:"make sense out of context"}),`
`,e(n.li,{children:"reduce the cognitive effort needed to understand what has happened"}),`
`]}),`
`,e(n.p,{children:"Use the question or form label in the error to provide context. For example, ‘Enter how many hours you work a week’ for ‘How many hours do you work a week?’"}),`
`,e(n.h2,{children:"Be specific"}),`
`,e(n.p,{children:"General errors are not helpful to everyone. They do not make sense out of context. Avoid messages like:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"‘An error occurred’"}),`
`,e(n.li,{children:"‘Answer the question’"}),`
`,e(n.li,{children:"‘Select an option’"}),`
`,e(n.li,{children:"‘Fill in the field’"}),`
`,e(n.li,{children:"‘This field is required’"}),`
`]}),`
`,e(n.p,{children:"Different errors need different messages. For example, text fields may be:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"empty"}),`
`,e(n.li,{children:"too long"}),`
`,e(n.li,{children:"too short"}),`
`,e(n.li,{children:"using characters that are not allowed"}),`
`,e(n.li,{children:"in the wrong format"}),`
`]}),`
`,e(n.p,{children:"An error for a specific situation is more helpful. It will tell someone what has happened and how to fix it."}),`
`,e(n.h2,{children:"Use instructions and descriptions"}),`
`,e(n.p,{children:"Some errors work better as instructions and some work better as descriptions. For example:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"‘Enter your first name’ is clearer, more direct and natural than ‘First name must have an entry’"}),`
`,e(n.li,{children:"‘Enter a first name that is 35 characters or less’ is wordier, less direct and natural than ‘First name must be 35 characters or less’"}),`
`,e(n.li,{children:`‘Enter a date after 31 August 2017 for when you started the course’ is wordier, less direct and natural than ‘Date you started the course must be after 31 August 2017’
Use both instructions and descriptions, but use them consistently. For example, use an instruction for empty fields like ‘Enter your name’, but a description like ‘Name must be 35 characters or less’ for entries that are too long.`}),`
`]}),`
`,e(n.h2,{children:"Use error message templates"}),`
`,e(n.p,{children:"Use template messages for common errors on:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"addresses"}),`
`,e(n.li,{children:"character count"}),`
`,e(n.li,{children:"checkboxes"}),`
`,e(n.li,{children:"date input"}),`
`,e(n.li,{children:"email address"}),`
`,e(n.li,{children:"file upload"}),`
`,e(n.li,{children:"names"}),`
`,e(n.li,{children:"National Insurance numbers"}),`
`,e(n.li,{children:"radios"}),`
`,e(n.li,{children:"telephone numbers"}),`
`,e(n.li,{children:"text input"}),`
`,e(n.li,{children:"textarea"}),`
`]}),`
`,e(n.h2,{children:"Track errors"}),`
`,e(n.p,{children:"Find out how often people see them. This will let you:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"improve content"}),`
`,e(n.li,{children:"A/B test variations"}),`
`,e(n.li,{children:"redesign a journey"}),`
`]})]})}}export{he as default};
//# sourceMappingURL=ErrorMessage-f13fa743.js.map
