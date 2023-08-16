import{j as e,a as n,F as d}from"./jsx-runtime-29545a09.js";import{M as l,C as i}from"./index-a6644abe.js";import"./chunk-S4VUQJ4A-16bd699b.js";import{primary as a,twoQuestions as u,birthday as c,errorExample as p,errorExampleYear as m}from"./DateInput.stories-3193ced4.js";import{g as f}from"./Typography-f899da69.js";import{u as s}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ea379913.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";function A(o={}){const{wrapper:r}=Object.assign({},s(),o.components);return r?e(r,Object.assign({},o,{children:e(h,{})})):h();function h(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3"},s(),o.components);return n(d,{children:[e(l,{title:"Components/Date input"}),`
`,e(f,{children:"Components"}),`
`,e(t.h1,{id:"date-input",children:"Date input"}),`
`,e(t.p,{children:"Use the date input component to help users enter a memorable date or one they can easily look up."}),`
`,e(i,{of:a}),`
`,e(t.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(t.p,{children:"Use the date input component when you’re asking users for a date they’ll already know, or can look up without using a calendar."}),`
`,e(t.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,e(t.p,{children:"Do not use the date input component if users are unlikely to know the exact date of the event you’re asking about."}),`
`,n(t.p,{children:["Read more about how to ",e("a",{class:"govuk-link",href:"https://design-system.service.gov.uk/patterns/dates/",children:"ask users for dates"}),"."]}),`
`,e(t.h2,{id:"how-it-works",children:"How it works"}),`
`,e(t.p,{children:"The date input component consists of 3 fields to let users enter a day, month and year."}),`
`,n(t.p,{children:["The 3 date fields are grouped together in a ",e(t.code,{children:"<fieldset>"})," with a ",e(t.code,{children:"<legend>"})," that describes them, as shown in the examples on this page. This is usually a question, like ‘What is your date of birth?’."]}),`
`,n(t.p,{children:["If you’re asking ",e("a",{class:"govuk-link",href:"https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page",children:"one question per page"}),", you can set the contents of the ",e(t.code,{children:"<legend>"})," as the page heading. This is good practice as it means that users of screen readers will only hear the contents once."]}),`
`,n(t.p,{children:["Read more about ",e("a",{class:"govuk-link",href:"https://design-system.service.gov.uk/get-started/labels-legends-headings/",children:"why and how to set legends as headings"}),"."]}),`
`,e(t.p,{children:"Make sure that any example dates you use in hint text are valid for the question being asked."}),`
`,e(i,{of:a}),`
`,e(t.p,{children:"Never automatically tab users between the fields of the date input because this can be confusing and may clash with normal keyboard controls."}),`
`,e(t.h2,{id:"if-youre-asking-more-than-one-question-on-the-page",children:"If you’re asking more than one question on the page"}),`
`,n(t.p,{children:["If you’re asking more than one question on the page, do not set the contents of the ",e(t.code,{children:"<legend>"})," as the page heading. Read more about ",e("a",{class:"govuk-link",href:"https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page",children:"asking multiple questions on question pages"}),"."]}),`
`,e(i,{of:u}),`
`,e(t.h2,{id:"use-the-autocomplete-attribute-for-a-date-of-birth",children:"Use the autocomplete attribute for a date of birth"}),`
`,n(t.p,{children:["Use the ",e(t.code,{children:"autocomplete"})," attribute on the date input component when you’re asking for a date of birth. This lets browsers autofill the information on a user’s behalf if they’ve entered it previously."]}),`
`,n(t.p,{children:["To do this, set the ",e(t.code,{children:"autocomplete"})," attribute on the 3 fields to ",e(t.code,{children:"bday-day"}),", ",e(t.code,{children:"bday-month"})," and ",e(t.code,{children:"bday-year"}),"."]}),`
`,e(i,{of:c}),`
`,n(t.p,{children:["If you are working in production you’ll need to do this to meet ",e("a",{class:"govuk-link",href:"https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html",children:"WCAG 2.1 Level AA"}),"."]}),`
`,n(t.p,{children:["You will not normally need to use the ",e(t.code,{children:"autocomplete"})," attribute in prototypes, as users will not generally be using their own devices."]}),`
`,e(i,{of:a}),`
`,e(t.h2,{id:"error-messages",children:"Error messages"}),`
`,e(t.p,{children:"If you’re highlighting the whole date, style all the fields like this:"}),`
`,e(i,{of:p}),`
`,e(t.p,{children:"If you’re highlighting just one field - either the day, month or year - only style the field that has an error. The error message must say which field has an error, like this:"}),`
`,e(i,{of:m}),`
`,e(t.p,{children:"Make sure errors follow the guidance in error message and have specific error messages for specific error states."}),`
`,n(t.p,{children:["If there’s more than one error, show the highest priority ",e("a",{class:"govuk-link",href:"https://design-system.service.gov.uk/components/error-message/",children:"error message"}),". In order of priority, show error messages about:"]}),`
`,n(t.ul,{children:[`
`,e(t.li,{children:"missing or incomplete information"}),`
`,e(t.li,{children:"information that cannot be correct (for example, the number ‘13’ in the month field)"}),`
`,e(t.li,{children:"information that fails validation for another reason"}),`
`]}),`
`,e(t.h3,{id:"if-nothing-is-entered",children:"If nothing is entered"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘Enter [whatever it is]’. For example, ‘Enter your date of birth’."}),`
`,e(t.h3,{id:"if-the-date-is-incomplete",children:"If the date is incomplete"}),`
`,e(t.p,{children:"Highlight the day, month or year field where the information is missing or incomplete. If more than one field is missing information, highlight the fields the user needs to fill in."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must include a [whatever is missing]’."}),`
`,e(t.p,{children:"For example, ‘Date of birth must include a month’, ‘Date of birth must include a day and month’ or ‘Year must include 4 numbers’."}),`
`,e(t.h3,{id:"if-the-date-entered-cannot-be-correct",children:"If the date entered cannot be correct"}),`
`,e(t.p,{children:"For example, ‘13’ in the month field cannot be correct."}),`
`,e(t.p,{children:"Highlight the day, month or year field with the incorrect information. Or highlight the date as a whole if there’s incorrect information in more than one field, or it’s not clear which field is incorrect."}),`
`,e(t.p,{children:"Say ‘[Whatever it is] must be a real date’. For example, ‘Date of birth must be a real date’."}),`
`,e(t.h3,{id:"if-the-date-is-in-the-future-when-it-needs-to-be-in-the-past",children:"If the date is in the future when it needs to be in the past"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be in the past’. For example, ‘Date of birth must be in the past’."}),`
`,e(t.p,{children:`If the date is in the future when it needs to be today or in the past
Highlight the date input as a whole.`}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be today or in the past’. For example, ‘Date of birth must be today or in the past’."}),`
`,e(t.h3,{id:"if-the-date-is-in-the-past-when-it-needs-to-be-in-the-future",children:"If the date is in the past when it needs to be in the future"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be in the future’. For example, ‘The date your course ends must be in the future’."}),`
`,e(t.h3,{id:"if-the-date-is-in-the-past-when-it-needs-to-be-today-or-in-the-future",children:"If the date is in the past when it needs to be today or in the future"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be today or in the future’. For example, ‘The date your course ends must be today or in the future’."}),`
`,e(t.h3,{id:"if-the-date-must-be-the-same-as-or-after-another-date",children:"If the date must be the same as or after another date"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be the same as or after [date and optional description]’. For example, ‘The date your course ends must be the same as or after 1 September 2017 when you started the course’."}),`
`,e(t.h3,{id:"if-the-date-must-be-after-another-date",children:"If the date must be after another date"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be after [date and optional description]’. For example, ‘The day your course ends must be after 1 September 2017’."}),`
`,e(t.h3,{id:"if-the-date-must-be-the-same-as-or-before-another-date",children:"If the date must be the same as or before another date"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be the same as or before [date and optional description]’. For example, ‘The date of Gordon’s last exam must be the same as or before 31 August 2017 when they left school’."}),`
`,e(t.h3,{id:"if-the-date-must-be-before-another-date",children:"If the date must be before another date"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be before [date and optional description]’. For example, ‘The date of Gordon’s last exam must be the same as or before 31 August 2017’."}),`
`,e(t.h3,{id:"if-the-date-must-be-between-two-dates",children:"If the date must be between two dates"}),`
`,e(t.p,{children:"Highlight the date input as a whole."}),`
`,e(t.p,{children:"Say ‘[whatever it is] must be between [date] and [date and optional description]’. For example, ‘The date your contract started must be between 1 September 2017 and 30 September 2017 when you were self-employed’."})]})}}export{A as default};
//# sourceMappingURL=DateInput-2c0803d4.js.map
