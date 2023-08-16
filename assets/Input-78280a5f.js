import{j as e,a as n,F as l}from"./jsx-runtime-29545a09.js";import{M as d,C as i}from"./index-a6644abe.js";import"./chunk-S4VUQJ4A-16bd699b.js";import{primary as h,withoutHeading as u,fixedWidthInputs as c,fluidWidthInputs as p,hintText as m,number as f,numberWithDecimals as w,prefixAndSuffix as b,prefix as y,suffix as x,autocomplete as g,spellcheck as k,error as v,prefixSuffixError as I}from"./Input.stories-9445e969.js";import{g as F}from"./Typography-f899da69.js";import{u as a}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ea379913.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";function B(r={}){const{wrapper:o}=Object.assign({},a(),r.components);return o?e(o,Object.assign({},r,{children:e(s,{})})):s();function s(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",code:"code"},a(),r.components);return n(l,{children:[e(d,{title:"Components/Text input"}),`
`,e(F,{children:"Components"}),`
`,e(t.h1,{id:"text-input",children:"Text input"}),`
`,e(i,{of:h}),`
`,e(t.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(t.p,{children:"Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number."}),`
`,e(t.p,{children:"When not to use this component"}),`
`,e(t.p,{children:"Do not use the text input component if you need to let users enter longer answers that might span multiple lines. In this case, you should use the textarea component."}),`
`,e(t.h2,{id:"how-it-works",children:"How it works"}),`
`,e(t.p,{children:"All text inputs must have labels, and in most cases the label should be visible."}),`
`,e(t.p,{children:"You should align labels above the text input they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels."}),`
`,e(t.h3,{id:"avoid-placeholder-text",children:"Avoid placeholder text"}),`
`,e(t.p,{children:"Do not use placeholder text in place of a label, or for hints or examples, as:"}),`
`,n(t.ul,{children:[`
`,e(t.li,{children:"it vanishes when the user starts typing, which can cause problems for users with memory conditions or when reviewing answers"}),`
`,e(t.li,{children:"not all screen readers read it out"}),`
`,e(t.li,{children:"its browser default styles often do not meet minimum contrast requirements"}),`
`]}),`
`,e(t.h3,{id:"if-youre-asking-one-question-on-the-page",children:"If you’re asking one question on the page"}),`
`,n(t.p,{children:["If you’re asking just one question per page as recommended, you can set the contents of the ",e(t.code,{children:"<Label>"})," as the page heading. This is good practice as it means that users of screen readers will only hear the contents once."]}),`
`,e(t.p,{children:"Read more about why and how to set legends as headings."}),`
`,e(i,{of:h}),`
`,e(t.h3,{id:"if-youre-asking-more-than-one-question-on-the-page",children:"If you’re asking more than one question on the page"}),`
`,n(t.p,{children:["If you’re asking more than one question on the page, do not set the contents of the ",e(t.code,{children:"<label>"})," as the page heading. Read more about asking multiple questions on question pages."]}),`
`,e(i,{of:u}),`
`,e(t.h2,{id:"use-appropriately-sized-text-inputs",children:"Use appropriately-sized text inputs"}),`
`,e(t.p,{children:"Help users understand what they should enter by making text inputs the right size for the content they’re intended for."}),`
`,e(t.p,{children:"By default, the width of text inputs is fluid and will fit the full width of the container they are placed into."}),`
`,e(t.p,{children:"If you want to make the input smaller, you can either use a fixed width input, or use the width override classes to create a smaller, fluid width input."}),`
`,e(t.h3,{id:"fixed-width-inputs",children:"Fixed width inputs"}),`
`,e(t.p,{children:"Use fixed width inputs for content that has a specific, known length. Postcode inputs should be postcode-sized, telephone number inputs should be telephone number-sized."}),`
`,e(t.p,{children:"The widths are designed for specific character lengths and to be consistent across a range of browsers. They include extra padding to fit icons that some browsers might insert into the input (for example to show or generate a password)."}),`
`,e(t.p,{children:"On fixed width inputs, the width will remain fixed on all screens unless it is wider than the viewport, in which case it will shrink to fit."}),`
`,e(i,{of:c}),`
`,e(t.h3,{id:"fluid-width-inputs",children:"Fluid width inputs"}),`
`,e(t.p,{children:"Use the width override classes to reduce the width of an input in relation to its parent container, for example, to two-thirds."}),`
`,e(t.p,{children:"Fluid width inputs will resize with the viewport."}),`
`,e(i,{of:p}),`
`,e(t.h2,{id:"hint-text",children:"Hint text"}),`
`,e(t.p,{children:"Use hint text for help that’s relevant to the majority of users, like how their information will be used, or where to find it."}),`
`,e(i,{of:m}),`
`,e(t.h3,{id:"when-not-to-use-hint-text",children:"When not to use hint text"}),`
`,e(t.p,{children:"Do not use long paragraphs and lists in hint text. Screen readers read out the entire text when users interact with the form element. This could frustrate users if the text is long."}),`
`,e(t.h3,{id:"avoid-links",children:"Avoid links"}),`
`,e(t.p,{children:"Do not include links within hint text. While screen readers will read out the link text when describing the field, they will not tell users that the text is a link."}),`
`,e(t.h2,{id:"numbers",children:"Numbers"}),`
`,e(t.h3,{id:"asking-for-whole-numbers",children:"Asking for whole numbers"}),`
`,n(t.p,{children:["If you’re asking the user to enter a whole number, set the ",e(t.code,{children:"inputmode"})," attribute to ",e(t.code,{children:"numeric"})," to use the numeric keypad on devices with on-screen keyboards."]}),`
`,e(t.p,{children:"See how to do this in this example:"}),`
`,e(i,{of:f}),`
`,e(t.p,{children:"There is specific guidance on how to ask for:"}),`
`,n(t.ul,{children:[`
`,e(t.li,{children:"dates"}),`
`,e(t.li,{children:"telephone numbers"}),`
`]}),`
`,e(t.h3,{id:"asking-for-decimal-numbers",children:"Asking for decimal numbers"}),`
`,n(t.p,{children:["If you’re asking the user to enter a number that might include decimal places, use ",e(t.code,{children:'input type="text"'}),"."]}),`
`,n(t.p,{children:["Do not set the ",e(t.code,{children:"inputmode"})," attribute to ",e(t.code,{children:"decimal"})," as it causes some devices to bring up a keypad without a key for the decimal separator."]}),`
`,e(i,{of:w}),`
`,e(t.h3,{id:"avoid-using-inputs-with-a-type-of-number",children:"Avoid using inputs with a type of number"}),`
`,n(t.p,{children:["Do not use ",e(t.code,{children:'<input type="number">'})," unless your user research shows that there’s a need for it. With ",e(t.code,{children:'<input type="number">'})," there’s a risk of users accidentally incrementing a number when they’re trying to do something else - for example, scroll up or down the page. And if the user tries to enter something that’s not a number, there’s no explicit feedback about what they’re doing wrong."]}),`
`,e(t.h2,{id:"prefixes-and-suffixes",children:"Prefixes and suffixes"}),`
`,e(t.p,{children:"Use prefixes and suffixes to help users enter things like currencies and measurements."}),`
`,e(i,{of:b}),`
`,e(t.p,{children:"Prefixes and suffixes are useful when there’s a commonly understood symbol or abbreviation for the type of information you’re asking for. Do not rely on prefixes or suffixes alone, because screen readers will not read them out."}),`
`,e(t.p,{children:"If you need a specific type of information, say so in the input label or hint text as well. For example, put ‘Cost, in pounds’ in the input label and use the ‘£’ symbol in the prefix."}),`
`,e(t.p,{children:"Position prefixes and suffixes so that they’re outside of their input. This is to avoid interfering with some browsers that might insert an icon into the input (for example to show or generate a password)."}),`
`,e(t.p,{children:"Some users may miss that the input already has a suffix or prefix, and enter a prefix or suffix into the input. Allow for this in your validation and do not show an error."}),`
`,e(t.h3,{id:"text-inputs-with-a-prefix",children:"Text inputs with a prefix"}),`
`,e(i,{of:y}),`
`,e(t.h3,{id:"text-inputs-with-a-suffix",children:"Text inputs with a suffix"}),`
`,e(i,{of:x}),`
`,e(t.h2,{id:"use-the-autocomplete-attribute",children:"Use the autocomplete attribute"}),`
`,n(t.p,{children:["Use the ",e(t.code,{children:"autocomplete"})," attribute on text inputs to help users complete forms more quickly. This lets you specify an input’s purpose so browsers can autofill the information on a user’s behalf if they’ve entered it previously."]}),`
`,n(t.p,{children:["For example, to enable autofill on a postcode field, set the ",e(t.code,{children:"autocomplete"})," attribute to ",e(t.code,{children:"postal-code"}),"."]}),`
`,e(i,{of:g}),`
`,n(t.p,{children:["If you are working in production and there is a relevant input purpose, you’ll need to use the ",e(t.code,{children:"autocomplete"})," attribute to meet WCAG 2.1 Level AA."]}),`
`,n(t.p,{children:["You will not normally need to use the ",e(t.code,{children:"autocomplete"})," attribute in prototypes, as users will not generally be using their own devices."]}),`
`,e(t.h2,{id:"do-not-disable-copy-and-paste",children:"Do not disable copy and paste"}),`
`,e(t.p,{children:"Users often need to copy and paste information into a text input, so do not stop them from doing this."}),`
`,e(t.h2,{id:"how-and-when-to-spellcheck-a-users-input",children:"How and when to spellcheck a user’s input"}),`
`,e(t.p,{children:"Sometimes, browsers will spellcheck the information a user puts into a text input. If a user enters something which is recognised as a spelling error, sighted users will see a red line under the word."}),`
`,e(t.p,{children:"If you are asking users for information which is not appropriate to spellcheck, like a reference number, name, email address or National Insurance number, disable the spellcheck."}),`
`,n(t.p,{children:["To do this set the ",e(t.code,{children:"spellcheck"})," attribute to ",e(t.code,{children:"false"})," as shown in this example."]}),`
`,e(i,{of:k}),`
`,n(t.p,{children:["Browsers do not consistently spellcheck user’s input by default. If you are asking a question where spellcheck would be useful, set the ",e(t.code,{children:"spellcheck"})," prop to ",e(t.code,{children:"true"}),"."]}),`
`,e(t.h2,{id:"error-messages",children:"Error messages"}),`
`,e(t.p,{children:"Error messages should be styled like this:"}),`
`,e(i,{of:v}),`
`,e(t.h3,{id:"if-the-input-has-a-prefix-or-a-suffix",children:"If the input has a prefix or a suffix"}),`
`,e(i,{of:I}),`
`,e(t.p,{children:"Make sure errors follow the guidance in error message and have specific error messages for specific error states."}),`
`,e(t.h3,{id:"if-the-input-is-empty",children:"If the input is empty"}),`
`,e(t.p,{children:"Say ‘Enter [whatever it is]’."}),`
`,e(t.p,{children:"For example, ‘Enter your first name’."}),`
`,e(t.h3,{id:"if-the-input-is-too-long",children:"If the input is too long"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be [number] characters or less’."}),`
`,e(t.p,{children:"For example, ‘Address line 1 must be 35 characters or less’."}),`
`,e(t.h3,{id:"if-the-input-is-too-short",children:"If the input is too short"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be [number] characters or more’."}),`
`,e(t.p,{children:"For example, ‘Full name must be 2 characters or more’."}),`
`,e(t.h3,{id:"if-the-input-has-both-a-minimum-and-maximum-length",children:"If the input has both a minimum and maximum length"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be between [number] and [number] characters’."}),`
`,e(t.p,{children:"For example, ‘Last name must be between 2 and 35 characters’."}),`
`,e(t.h3,{id:"if-the-input-uses-characters-that-are-not-allowed-and-you-know-what-the-characters-are",children:"If the input uses characters that are not allowed and you know what the characters are"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must not include [characters]’."}),`
`,e(t.p,{children:"For example, ‘Town or city must not include è and £’."}),`
`,e(t.p,{children:"Support all the characters the user might need to enter, including numbers and symbols."}),`
`,e(t.h3,{id:"if-the-input-uses-characters-that-are-not-allowed-and-you-do-not-know-what-the-characters-are",children:"If the input uses characters that are not allowed and you do not know what the characters are"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must only include [list of allowed characters]’."}),`
`,e(t.p,{children:"For example, ‘Full name must only include letters a to z, and special characters such as hyphens, spaces and apostrophes’."}),`
`,e(t.p,{children:"Support all the characters the user might need to enter, including numbers and symbols."}),`
`,e(t.h3,{id:"if-the-input-is-not-a-number",children:"If the input is not a number"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be a number [optional example]’."}),`
`,e(t.p,{children:"For example, ‘Hours worked a week must be a number, like 30’."}),`
`,e(t.p,{children:"If the input requires a decimal, use a decimal in the example. If the input allows both whole numbers and decimals, use both in the example."}),`
`,e(t.h2,{id:"if-the-input-is-not-a-whole-number",children:"If the input is not a whole number"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be a whole number [optional example]’."}),`
`,e(t.p,{children:"For example, ‘Hours worked a week must be a whole number, like 30’."}),`
`,e(t.h3,{id:"if-the-number-is-too-low",children:"If the number is too low"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be [lowest] or more’."}),`
`,e(t.p,{children:"For example, ‘Hours worked a week must be 16 or more’."}),`
`,e(t.h3,{id:"if-the-number-is-too-high",children:"If the number is too high"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be [highest] or fewer’."}),`
`,e(t.p,{children:"For example, ‘Hours worked a week must be 99 or fewer’."}),`
`,e(t.h3,{id:"if-the-input-must-be-between-2-numbers",children:"If the input must be between 2 numbers"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be between [lowest] and [highest]’."}),`
`,e(t.p,{children:"For example, ‘Hours worked a week must be between 16 and 99’."}),`
`,e(t.h3,{id:"if-the-input-is-an-amount-of-money-that-needs-decimals",children:"If the input is an amount of money that needs decimals"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must include pence, like 123.45 or 156.00’."}),`
`,e(t.p,{children:"For example, ‘How much you earn a week must include pence, like 123.45 or 156.00’."}),`
`,e(t.h3,{id:"if-the-input-is-an-amount-of-money-that-must-not-have-decimals",children:"If the input is an amount of money that must not have decimals"}),`
`,e(t.p,{children:"Say ‘[whatever it is] must not include pence, like 123 or 156’."}),`
`,e(t.p,{children:"For example, ‘How much you earn a week must not include pence, like 123 or 156’."})]})}}export{B as default};
//# sourceMappingURL=Input-78280a5f.js.map
