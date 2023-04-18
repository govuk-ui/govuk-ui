import{j as e,a as n,F as p}from"./jsx-runtime-670450c2.js";import{M as d,C as o,S as r}from"./index-c0943c2d.js";import"./chunk-PCJTTTQV-893ced84.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as h,withRows as l,withLabel as m,withError as u}from"./Textarea.stories-dc8d7365.js";import"./Accordion-9ebb3012.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-6a127f9a.js";import"./CookieBanner-c4de4ce5.js";import"./Details-ea8c166a.js";import{H as f}from"./Radios-f218e915.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./WarningText-53f07e98.js";import{u as c}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-1c2585b8.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-61705542.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./Typography-a2bc044e.js";function Q(a={}){const{wrapper:i}=Object.assign({},c(),a.components);return i?e(i,Object.assign({},a,{children:e(s,{})})):s();function s(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",h3:"h3",code:"code"},c(),a.components);return n(p,{children:[e(d,{title:"Components/Textarea"}),`
`,e(f,{children:"Components"}),`
`,e(t.h1,{id:"textarea",children:"Textarea"}),`
`,e(o,{children:e(r,{of:h})}),`
`,e(t.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(t.p,{children:"Use the textarea component when you need to let users enter an amount of text that’s longer than a single line."}),`
`,e(t.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,n(t.p,{children:["Users can find open-ended questions difficult to answer. It might be better to break up one complex question into a series of simple ones, for example where users can select from options using ",e(t.a,{href:"?path=/docs/components-radios--docs",children:"radios"}),"."]}),`
`,e(t.h3,{id:"if-you-need-to-ask-an-open-question",children:"If you need to ask an open question"}),`
`,n(t.p,{children:["Do not use the textarea component if you need to let users enter shorter answers no longer than a single line, such as a phone number or name. In this case, you should use the ",e(t.a,{href:"?path=/docs/components-text-input--docs",children:"text input"})," component."]}),`
`,e(t.h2,{id:"how-it-works",children:"How it works"}),`
`,e(t.p,{children:"You must label textareas. Placeholder text is not a suitable substitute for a label, as it disappears when users click inside the textarea."}),`
`,e(t.p,{children:"Labels must be aligned above the textarea they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels."}),`
`,e(o,{children:e(r,{of:h})}),`
`,e(t.h2,{id:"use-appropriately-sized-textareas",children:"Use appropriately-sized textareas"}),`
`,e(t.p,{children:"Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by by specifying the rows attribute."}),`
`,e(o,{children:e(r,{of:l})}),`
`,e(t.h2,{id:"do-not-disable-copy-and-paste",children:"Do not disable copy and paste"}),`
`,e(t.p,{children:"Users will often need to copy and paste information into a textarea, so do not stop them from doing this."}),`
`,e(t.h2,{id:"if-youre-asking-more-than-one-question-on-the-page",children:"If you’re asking more than one question on the page"}),`
`,n(t.p,{children:["If you’re asking more than one question on the page, do not set the contents of the ",e(t.code,{children:"<label>"})," as the page heading."]}),`
`,e(o,{children:e(r,{of:m})}),`
`,e(t.h2,{id:"limiting-the-number-of-characters",children:"Limiting the number of characters"}),`
`,n(t.p,{children:["If there’s a good reason to limit the number of characters users can enter, you can use the ",e(t.a,{href:"?path=/docs/components-character-count--docs",children:"character count"})," component."]}),`
`,e(t.h2,{id:"error-messages",children:"Error messages"}),`
`,e(t.p,{children:"Error messages should be styled like this:"}),`
`,e(o,{children:e(r,{of:u})}),`
`,n(t.p,{children:["Make sure errors follow the guidance in ",e(t.a,{href:"?path=/docs/components-error-message--docs",children:"error message"})," and have specific error messages for specific error states."]}),`
`,e(t.h3,{id:"if-the-input-is-empty",children:"If the input is empty"}),`
`,e(t.p,{children:"Say ‘Enter [whatever it is]’."}),`
`,e(t.p,{children:"For example, ‘Enter summary’."}),`
`,e(t.h3,{id:"if-the-input-is-too-long",children:"If the input is too long"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be [number] characters or less’."}),`
`,e(t.p,{children:"For example, ‘Summary must be 400 characters or less’."}),`
`,e(t.h3,{id:"if-the-input-is-too-short",children:"If the input is too short"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be [number] characters or more’."}),`
`,e(t.p,{children:"For example, ‘Summary must be 10 characters or more’."}),`
`,e(t.h3,{id:"if-the-input-is-too-long-or-too-short",children:"If the input is too long or too short"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be between [number] and [number] characters’."}),`
`,e(t.p,{children:"For example, ‘Summary must be between 10 and 400 characters’."}),`
`,e(t.h3,{id:"if-the-input-uses-characters-that-are-not-allowed-and-you-know-what-the-characters-are",children:"If the input uses characters that are not allowed and you know what the characters are"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must not include [characters]’."}),`
`,e(t.p,{children:"For example, ‘Summary must not include è and £’."}),`
`,e(t.h3,{id:"if-the-input-uses-characters-that-are-not-allowed-and-you-do-not-know-what-the-characters-are",children:"If the input uses characters that are not allowed and you do not know what the characters are"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must only include [list of allowed characters]’."}),`
`,e(t.p,{children:"For example, ‘Summary must only include letters a to z, hyphens, spaces and apostrophes."})]})}}export{Q as default};
//# sourceMappingURL=Textarea-3a413d19.js.map
