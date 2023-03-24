import{j as e,a as t,F as d}from"./jsx-runtime-670450c2.js";import{M as c,C as i,S as r}from"./index-3dddc1a8.js";import"./chunk-PCJTTTQV-0a1a07f6.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as a,withoutHeading as u,fixedWidthInputs as p,fluidWidthInputs as m,hintText as f,number as w,numberWithDecimals as b,prefixAndSuffix as y,prefix as x,suffix as g,autocomplete as k,spellcheck as v,error as I,prefixSuffixError as S}from"./Input.stories-0d50c7be.js";import"./Accordion-b094a9f4.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-232179fb.js";import"./CharacterCount-57162165.js";import"./CookieBanner-0021e8bc.js";import"./DateInput-733620fd.js";import"./Details-ea8c166a.js";import"./ErrorMessage-5eec86f5.js";import"./ErrorSummary-4f66acfb.js";import"./FileUpload-a04d48dc.js";import"./Footer-e6905889.js";import"./Header-a8883776.js";import{H as F}from"./Hint-44397457.js";import"./Legend-8894f637.js";import"./InsetText-5d239799.js";import"./Label-8f102d27.js";import"./NotificationBanner-9be16c78.js";import"./Pagination-1429ab7b.js";import"./Panel-9bfd3250.js";import"./PhaseBanner-809e0913.js";import"./Radios-e7bbc035.js";import"./Select-64b9b78a.js";import"./SkipLink-6f274826.js";import"./Tabs-8973fdcc.js";import"./Textarea-af6ce767.js";import"./WarningText-53f07e98.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-5f2dfd2c.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-2d4beb60.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-75f22a57.js";import"./Typography-a2bc044e.js";import"./FormGroup-df38f41d.js";import"./Fieldset-4e09a399.js";function be(o={}){const{wrapper:s}=Object.assign({},l(),o.components);return s?e(s,Object.assign({},o,{children:e(h,{})})):h();function h(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",code:"code"},l(),o.components);return t(d,{children:[e(c,{title:"Components/Text input"}),`
`,e(F,{children:"Components"}),`
`,e(n.h1,{children:"Text input"}),`
`,e(i,{children:e(r,{of:a})}),`
`,e(n.h2,{children:"When to use this component"}),`
`,e(n.p,{children:"Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number."}),`
`,e(n.p,{children:"When not to use this component"}),`
`,e(n.p,{children:"Do not use the text input component if you need to let users enter longer answers that might span multiple lines. In this case, you should use the textarea component."}),`
`,e(n.h2,{children:"How it works"}),`
`,e(n.p,{children:"All text inputs must have labels, and in most cases the label should be visible."}),`
`,e(n.p,{children:"You should align labels above the text input they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels."}),`
`,e(n.h3,{children:"Avoid placeholder text"}),`
`,e(n.p,{children:"Do not use placeholder text in place of a label, or for hints or examples, as:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"it vanishes when the user starts typing, which can cause problems for users with memory conditions or when reviewing answers"}),`
`,e(n.li,{children:"not all screen readers read it out"}),`
`,e(n.li,{children:"its browser default styles often do not meet minimum contrast requirements"}),`
`]}),`
`,e(n.h3,{children:"If you’re asking one question on the page"}),`
`,t(n.p,{children:["If you’re asking just one question per page as recommended, you can set the contents of the ",e(n.code,{children:"<Label>"})," as the page heading. This is good practice as it means that users of screen readers will only hear the contents once."]}),`
`,e(n.p,{children:"Read more about why and how to set legends as headings."}),`
`,e(i,{children:e(r,{of:a})}),`
`,e(n.h3,{children:"If you’re asking more than one question on the page"}),`
`,t(n.p,{children:["If you’re asking more than one question on the page, do not set the contents of the ",e(n.code,{children:"<label>"})," as the page heading. Read more about asking multiple questions on question pages."]}),`
`,e(i,{children:e(r,{of:u})}),`
`,e(n.h2,{children:"Use appropriately-sized text inputs"}),`
`,e(n.p,{children:"Help users understand what they should enter by making text inputs the right size for the content they’re intended for."}),`
`,e(n.p,{children:"By default, the width of text inputs is fluid and will fit the full width of the container they are placed into."}),`
`,e(n.p,{children:"If you want to make the input smaller, you can either use a fixed width input, or use the width override classes to create a smaller, fluid width input."}),`
`,e(n.h3,{children:"Fixed width inputs"}),`
`,e(n.p,{children:"Use fixed width inputs for content that has a specific, known length. Postcode inputs should be postcode-sized, telephone number inputs should be telephone number-sized."}),`
`,e(n.p,{children:"The widths are designed for specific character lengths and to be consistent across a range of browsers. They include extra padding to fit icons that some browsers might insert into the input (for example to show or generate a password)."}),`
`,e(n.p,{children:"On fixed width inputs, the width will remain fixed on all screens unless it is wider than the viewport, in which case it will shrink to fit."}),`
`,e(i,{children:e(r,{of:p})}),`
`,e(n.h3,{children:"Fluid width inputs"}),`
`,e(n.p,{children:"Use the width override classes to reduce the width of an input in relation to its parent container, for example, to two-thirds."}),`
`,e(n.p,{children:"Fluid width inputs will resize with the viewport."}),`
`,e(i,{children:e(r,{of:m})}),`
`,e(n.h2,{children:"Hint text"}),`
`,e(n.p,{children:"Use hint text for help that’s relevant to the majority of users, like how their information will be used, or where to find it."}),`
`,e(i,{children:e(r,{of:f})}),`
`,e(n.h3,{children:"When not to use hint text"}),`
`,e(n.p,{children:"Do not use long paragraphs and lists in hint text. Screen readers read out the entire text when users interact with the form element. This could frustrate users if the text is long."}),`
`,e(n.h3,{children:"Avoid links"}),`
`,e(n.p,{children:"Do not include links within hint text. While screen readers will read out the link text when describing the field, they will not tell users that the text is a link."}),`
`,e(n.h2,{children:"Numbers"}),`
`,e(n.h3,{children:"Asking for whole numbers"}),`
`,t(n.p,{children:["If you’re asking the user to enter a whole number, set the ",e(n.code,{children:"inputmode"})," attribute to ",e(n.code,{children:"numeric"})," to use the numeric keypad on devices with on-screen keyboards."]}),`
`,e(n.p,{children:"See how to do this in this example:"}),`
`,e(i,{children:e(r,{of:w})}),`
`,e(n.p,{children:"There is specific guidance on how to ask for:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"dates"}),`
`,e(n.li,{children:"telephone numbers"}),`
`]}),`
`,e(n.h3,{children:"Asking for decimal numbers"}),`
`,t(n.p,{children:["If you’re asking the user to enter a number that might include decimal places, use ",e(n.code,{children:'input type="text"'}),"."]}),`
`,t(n.p,{children:["Do not set the ",e(n.code,{children:"inputmode"})," attribute to ",e(n.code,{children:"decimal"})," as it causes some devices to bring up a keypad without a key for the decimal separator."]}),`
`,e(i,{children:e(r,{of:b})}),`
`,e(n.h3,{children:"Avoid using inputs with a type of number"}),`
`,t(n.p,{children:["Do not use ",e(n.code,{children:'<input type="number">'})," unless your user research shows that there’s a need for it. With ",e(n.code,{children:'<input type="number">'})," there’s a risk of users accidentally incrementing a number when they’re trying to do something else - for example, scroll up or down the page. And if the user tries to enter something that’s not a number, there’s no explicit feedback about what they’re doing wrong."]}),`
`,e(n.h2,{children:"Prefixes and suffixes"}),`
`,e(n.p,{children:"Use prefixes and suffixes to help users enter things like currencies and measurements."}),`
`,e(i,{children:e(r,{of:y})}),`
`,e(n.p,{children:"Prefixes and suffixes are useful when there’s a commonly understood symbol or abbreviation for the type of information you’re asking for. Do not rely on prefixes or suffixes alone, because screen readers will not read them out."}),`
`,e(n.p,{children:"If you need a specific type of information, say so in the input label or hint text as well. For example, put ‘Cost, in pounds’ in the input label and use the ‘£’ symbol in the prefix."}),`
`,e(n.p,{children:"Position prefixes and suffixes so that they’re outside of their input. This is to avoid interfering with some browsers that might insert an icon into the input (for example to show or generate a password)."}),`
`,e(n.p,{children:"Some users may miss that the input already has a suffix or prefix, and enter a prefix or suffix into the input. Allow for this in your validation and do not show an error."}),`
`,e(n.h3,{children:"Text inputs with a prefix"}),`
`,e(i,{children:e(r,{of:x})}),`
`,e(n.h3,{children:"Text inputs with a suffix"}),`
`,e(i,{children:e(r,{of:g})}),`
`,e(n.h2,{children:"Use the autocomplete attribute"}),`
`,t(n.p,{children:["Use the ",e(n.code,{children:"autocomplete"})," attribute on text inputs to help users complete forms more quickly. This lets you specify an input’s purpose so browsers can autofill the information on a user’s behalf if they’ve entered it previously."]}),`
`,t(n.p,{children:["For example, to enable autofill on a postcode field, set the ",e(n.code,{children:"autocomplete"})," attribute to ",e(n.code,{children:"postal-code"}),"."]}),`
`,e(i,{children:e(r,{of:k})}),`
`,t(n.p,{children:["If you are working in production and there is a relevant input purpose, you’ll need to use the ",e(n.code,{children:"autocomplete"})," attribute to meet WCAG 2.1 Level AA."]}),`
`,t(n.p,{children:["You will not normally need to use the ",e(n.code,{children:"autocomplete"})," attribute in prototypes, as users will not generally be using their own devices."]}),`
`,e(n.h2,{children:"Do not disable copy and paste"}),`
`,e(n.p,{children:"Users often need to copy and paste information into a text input, so do not stop them from doing this."}),`
`,e(n.h2,{children:"How and when to spellcheck a user’s input"}),`
`,e(n.p,{children:"Sometimes, browsers will spellcheck the information a user puts into a text input. If a user enters something which is recognised as a spelling error, sighted users will see a red line under the word."}),`
`,e(n.p,{children:"If you are asking users for information which is not appropriate to spellcheck, like a reference number, name, email address or National Insurance number, disable the spellcheck."}),`
`,t(n.p,{children:["To do this set the ",e(n.code,{children:"spellcheck"})," attribute to ",e(n.code,{children:"false"})," as shown in this example."]}),`
`,e(i,{children:e(r,{of:v})}),`
`,t(n.p,{children:["Browsers do not consistently spellcheck user’s input by default. If you are asking a question where spellcheck would be useful, set the ",e(n.code,{children:"spellcheck"})," prop to ",e(n.code,{children:"true"}),"."]}),`
`,e(n.h2,{children:"Error messages"}),`
`,e(n.p,{children:"Error messages should be styled like this:"}),`
`,e(i,{children:e(r,{of:I})}),`
`,e(n.h3,{children:"If the input has a prefix or a suffix"}),`
`,e(i,{children:e(r,{of:S})}),`
`,e(n.p,{children:"Make sure errors follow the guidance in error message and have specific error messages for specific error states."}),`
`,e(n.h3,{children:"If the input is empty"}),`
`,e(n.p,{children:"Say ‘Enter [whatever it is]’."}),`
`,e(n.p,{children:"For example, ‘Enter your first name’."}),`
`,e(n.h3,{children:"If the input is too long"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must be [number] characters or less’."}),`
`,e(n.p,{children:"For example, ‘Address line 1 must be 35 characters or less’."}),`
`,e(n.h3,{children:"If the input is too short"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must be [number] characters or more’."}),`
`,e(n.p,{children:"For example, ‘Full name must be 2 characters or more’."}),`
`,e(n.h3,{children:"If the input has both a minimum and maximum length"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must be between [number] and [number] characters’."}),`
`,e(n.p,{children:"For example, ‘Last name must be between 2 and 35 characters’."}),`
`,e(n.h3,{children:"If the input uses characters that are not allowed and you know what the characters are"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must not include [characters]’."}),`
`,e(n.p,{children:"For example, ‘Town or city must not include è and £’."}),`
`,e(n.p,{children:"Support all the characters the user might need to enter, including numbers and symbols."}),`
`,e(n.h3,{children:"If the input uses characters that are not allowed and you do not know what the characters are"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must only include [list of allowed characters]’."}),`
`,e(n.p,{children:"For example, ‘Full name must only include letters a to z, and special characters such as hyphens, spaces and apostrophes’."}),`
`,e(n.p,{children:"Support all the characters the user might need to enter, including numbers and symbols."}),`
`,e(n.h3,{children:"If the input is not a number"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must be a number [optional example]’."}),`
`,e(n.p,{children:"For example, ‘Hours worked a week must be a number, like 30’."}),`
`,e(n.p,{children:"If the input requires a decimal, use a decimal in the example. If the input allows both whole numbers and decimals, use both in the example."}),`
`,e(n.h2,{children:"If the input is not a whole number"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must be a whole number [optional example]’."}),`
`,e(n.p,{children:"For example, ‘Hours worked a week must be a whole number, like 30’."}),`
`,e(n.h3,{children:"If the number is too low"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must be [lowest] or more’."}),`
`,e(n.p,{children:"For example, ‘Hours worked a week must be 16 or more’."}),`
`,e(n.h3,{children:"If the number is too high"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must be [highest] or fewer’."}),`
`,e(n.p,{children:"For example, ‘Hours worked a week must be 99 or fewer’."}),`
`,e(n.h3,{children:"If the input must be between 2 numbers"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must be between [lowest] and [highest]’."}),`
`,e(n.p,{children:"For example, ‘Hours worked a week must be between 16 and 99’."}),`
`,e(n.h3,{children:"If the input is an amount of money that needs decimals"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must include pence, like 123.45 or 156.00’."}),`
`,e(n.p,{children:"For example, ‘How much you earn a week must include pence, like 123.45 or 156.00’."}),`
`,e(n.h3,{children:"If the input is an amount of money that must not have decimals"}),`
`,e(n.p,{children:"Say ‘[whatever it is] must not include pence, like 123 or 156’."}),`
`,e(n.p,{children:"For example, ‘How much you earn a week must not include pence, like 123 or 156’."})]})}}export{be as default};
//# sourceMappingURL=Input-2d6ea116.js.map
