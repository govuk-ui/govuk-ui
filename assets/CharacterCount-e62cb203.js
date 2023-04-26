import{j as e,a as r,F as c}from"./jsx-runtime-670450c2.js";import{M as l,C as n}from"./index-0d10909b.js";import"./chunk-PCJTTTQV-9462c729.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as a,multipleQuestions as m,oneFiftyWords as d,threshold as p,errorInPlace as u}from"./CharacterCount.stories-079bc3df.js";import"./Accordion-5a2ba4cd.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-e68229e2.js";import"./CookieBanner-791a857d.js";import"./Details-ea8c166a.js";import{H as w}from"./Radios-0a1531ac.js";import"./Footer-d07f7a45.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./WarningText-53f07e98.js";import{G as f}from"./GovScript-6b99b831.js";import{u as h}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-56c93b75.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-61705542.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Typography-a2bc044e.js";function Z(i={}){const{wrapper:o}=Object.assign({},h(),i.components);return o?e(o,Object.assign({},i,{children:e(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3"},h(),i.components);return r(c,{children:[e(l,{title:"Components/Character count"}),`
`,e(w,{children:"Components"}),`
`,e(t.h1,{id:"character-count",children:"Character count"}),`
`,e(t.p,{children:"Help users know how much text they can enter when there is a limit on the number of characters."}),`
`,e(n,{of:a}),`
`,e(t.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(t.p,{children:"Always test your service without a character count first."}),`
`,e(t.p,{children:"Only use the character count component when there is a good reason for limiting the number of characters users can enter. For example, if there is:"}),`
`,r(t.ul,{children:[`
`,e(t.li,{children:"evidence that users are likely to enter more information than they need to"}),`
`,e(t.li,{children:"a legal or technical reason that means an entry must be no more than a certain number of characters"}),`
`]}),`
`,e(t.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,e(t.p,{children:"If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count."}),`
`,e(t.h2,{id:"how-it-works",children:"How it works"}),`
`,e(t.p,{children:"It tells users how many characters they have remaining as they type into a textarea with a character limit."}),`
`,e(t.p,{children:"Users will get updates at a pace that works best for the way they interact with the textarea. This means:"}),`
`,r(t.ul,{children:[`
`,e(t.li,{children:"sighted users will see a count message that updates as they type"}),`
`,e(t.li,{children:"screen reader users will hear the count announcement when they stop typing."}),`
`]}),`
`,e(t.p,{children:"This component does not restrict the user from entering information. The user can enter more than the character limit, but are told they’ve entered too many characters. This lets them type or copy and paste their full answer, then edit it down."}),`
`,e(t.p,{children:"The count message appears below the textarea so that:"}),`
`,r(t.ul,{children:[`
`,e(t.li,{children:"it’s clearly separate from any hint text or error message above the textarea"}),`
`,e(t.li,{children:"if it’s below the visible screen area, users will still see it again when they scroll down to send their response"}),`
`]}),`
`,e(t.p,{children:"This component uses JavaScript. If JavaScript is not available, users will see a static message in place of the count message, telling them how many characters they can enter."}),`
`,e(n,{of:a}),`
`,e(t.h2,{id:"if-youre-asking-more-than-one-question-on-the-page",children:"If you’re asking more than one question on the page"}),`
`,r(t.p,{children:["If you’re asking more than one question on the page, do not set the contents of the ",e(t.code,{children:"<label>"})," as the page heading."]}),`
`,e(n,{of:m}),`
`,e(t.h2,{id:"consider-if-a-word-count-is-more-helpful",children:"Consider if a word count is more helpful"}),`
`,e(t.p,{children:"In some cases it may be more helpful to show a word count. For example, if your question requires a longer answer."}),`
`,r(t.p,{children:["Do this by setting data-maxwords in the component markup. For example, ",e(t.code,{children:'maxWords="150"'})," will set a word limit of 150."]}),`
`,e(n,{of:d}),`
`,e(t.h2,{id:"avoid-narrow-limits",children:"Avoid narrow limits"}),`
`,e(t.p,{children:"When using a character count, try to set the limit higher than most users will need. Find out what this is by doing user research and data analysis."}),`
`,e(t.p,{children:"If the limit is much higher than most users are likely to reach, you can choose to only display the message after a user has entered a certain amount."}),`
`,r(t.p,{children:["To do this, set a threshold in the component markup. For example, ",e(t.code,{children:'threshold="75"'})," will show the count message only when users have entered 75% of the limit."]}),`
`,e(t.p,{children:"Screen reader users will hear the character limit when they first interact with a textarea using the threshold option. Sighted users will not see anything until the count message is shown — though you might choose to include the character limit in the hint text."}),`
`,e(n,{of:p}),`
`,e(t.h2,{id:"error-messages",children:"Error messages"}),`
`,e(t.p,{children:"Error messages should be styled like this:"}),`
`,e(n,{of:u}),`
`,e(t.p,{children:"If a user tries to send their response with too many characters, you must show an error message above the field as well as the count message below it."}),`
`,e(t.p,{children:"The error message tells users what went wrong and how to fix it. The count message provides live feedback and updates as a user types."}),`
`,e(t.p,{children:"The input shows a red border only when the user tries to enter more than the character limit. If the number of characters is within the limit, the input does not show this border even when there’s been an error. We felt it might cause the user difficulty if the border disappeared once they started typing."}),`
`,r(t.p,{children:["Make sure errors follow GOV.UK guidance on ",e("a",{class:"govuk-link",href:"https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise",children:"writing error messages"})," and have specific error messages for specific error states."]}),`
`,e(t.h3,{id:"if-the-input-it-empty",children:"If the input it empty"}),`
`,e(t.p,{children:"Say ‘Enter [whatever it is]’."}),`
`,e(t.p,{children:"For example, ‘Enter a summary’."}),`
`,e(t.h3,{id:"if-the-input-is-too-long",children:"If the input is too long"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be [number] characters or less’."}),`
`,e(t.p,{children:"For example, ‘Summary must be 400 characters or less’."}),`
`,e(f,{})]})}}export{Z as default};
//# sourceMappingURL=CharacterCount-e62cb203.js.map
