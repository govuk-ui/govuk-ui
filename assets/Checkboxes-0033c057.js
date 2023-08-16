import{j as e,a as t,F as c}from"./jsx-runtime-29545a09.js";import{M as d,C as o}from"./index-a6644abe.js";import{primary as h,withoutHeading as p,itemsWithHints as u,noneOption as m,noneOptionError as f,conditional as g,small as b,error as k}from"./Checkboxes.stories-ddebf29c.js";import{g as y,E as a}from"./Typography-f899da69.js";import"./chunk-S4VUQJ4A-16bd699b.js";import{G as w}from"./GovScript-04710f98.js";import{u as l}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ea379913.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";function N(i={}){const{wrapper:s}=Object.assign({},l(),i.components);return s?e(s,Object.assign({},i,{children:e(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3"},l(),i.components);return t(c,{children:[e(d,{title:"Components/Checkboxes"}),`
`,e(y,{children:"Components"}),`
`,e(n.h1,{id:"checkboxes",children:"Checkboxes"}),`
`,e(n.p,{children:"Let users select one or more options by using the checkboxes component."}),`
`,e(o,{of:h}),`
`,e(n.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(n.p,{children:"Use the checkboxes component when you need to help users:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"select multiple options from a list"}),`
`,e(n.li,{children:"toggle a single option on or off"}),`
`]}),`
`,e(n.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,e(n.p,{children:"Do not use the checkboxes component if users can only choose one option from a selection. In this case, use the radios component."}),`
`,e(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e(n.p,{children:"Always position checkboxes to the left of their labels. This makes them easier to find, especially for users of screen magnifiers."}),`
`,e(n.p,{children:"Unlike with radios, users can select multiple options from a list of checkboxes. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone."}),`
`,e(n.p,{children:"If needed, add a hint explaining this, for example, ‘Select all that apply’."}),`
`,e(n.p,{children:"Do not pre-select checkbox options as this makes it more likely that users will:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"not realise they’ve missed a question"}),`
`,e(n.li,{children:"submit the wrong answer"}),`
`]}),`
`,e(n.p,{children:"Order checkbox options alphabetically by default."}),`
`,e(n.p,{children:"In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for ‘What is your nationality?’ based on population size."}),`
`,t(n.p,{children:["Group checkboxes together in a ",e(n.code,{children:"<Fieldset>"})," with a ",e(n.code,{children:"<Legend>"})," that describes them, as shown in the examples on this page. This is usually a question, like ‘How would you like to be contacted?’."]}),`
`,e(n.h2,{id:"if-youre-asking-one-question-on-the-page",children:"If you’re asking one question on the page"}),`
`,t(n.p,{children:["If you’re asking just one question per page as recommended, you can set the contents of the ",e(n.code,{children:"<Legend>"})," component as the page heading by setting the prop ",e(n.code,{children:"isPageHeading"})," to ",e(n.code,{children:"true"}),". This is good practice as it means that users of screen readers will only hear the contents once."]}),`
`,e(o,{of:h}),`
`,e(n.h2,{id:"if-youre-asking-more-than-one-question-on-the-page",children:"If you’re asking more than one question on the page"}),`
`,t(n.p,{children:["If you’re asking more than one question on the page, do not set the contents of the ",e(n.code,{children:"<Legend>"})," as the page heading. Read more about asking multiple questions on question pages."]}),`
`,e(o,{of:p}),`
`,e(n.h2,{id:"checkbox-items-with-hints",children:"Checkbox items with hints"}),`
`,e(n.p,{children:"You can add hints to checkbox items to provide additional information about the options."}),`
`,e(o,{of:u}),`
`,e(n.h2,{id:"add-an-option-for-none",children:"Add an option for ‘none’"}),`
`,e(n.p,{children:"When ‘none’ would be a valid answer, give users the option to check a box to say none of the other options apply to them — without this option, users would have to leave all of the boxes unchecked. Giving users this option also makes sure they do not skip the question by accident."}),`
`,e(n.p,{children:"Remember to start by asking one question per page. You might be able to remove the need for a ‘none’ option by asking the user a better question or filtering them out with a ‘filter question’ beforehand. The GOV.UK Service Manual has guidance on designing good questions."}),`
`,e(n.p,{children:"Show the ‘none’ option last. Separate it from the other options using a divider. The text is usually the word ‘or’."}),`
`,e(n.p,{children:"Write a label that repeats the key part of the question."}),`
`,e(n.p,{children:"For example, for the question ‘Will you be travelling to any of these countries?’, say ‘No, I will not be travelling to any of these countries.’"}),`
`,t(n.p,{children:["To enable some JavaScript that unchecks all other checkboxes when the user clicks ‘None’, add the ",e(n.code,{children:"exclusive"})," behaviour to the ‘none’ checkbox."]}),`
`,e(o,{of:m}),`
`,e(n.p,{children:"If JavaScript is unavailable, and a user selects both the ‘none’ checkbox and another checkbox, display an error message."}),`
`,e(o,{of:f}),`
`,e(n.h2,{id:"conditionally-revealing-a-related-question",children:"Conditionally revealing a related question"}),`
`,e(n.p,{children:"You can ask the user a related question when they select a particular checkbox, so they only see the question when it’s relevant to them."}),`
`,e(n.p,{children:"This might make 2 related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the ‘Contact me by phone’ option."}),`
`,e(o,{of:g}),`
`,e(n.p,{children:"Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead."}),`
`,e(n.p,{children:"You should only conditionally reveal questions - do not show or hide anything that is not a question."}),`
`,e(n.h3,{id:"known-issues",children:"Known issues"}),`
`,e(n.p,{children:"Users are not always notified when a conditionally revealed question is shown or hidden. This fails WCAG 2.1 success criterion 4.1.2 Name, Role, Value."}),`
`,e(n.p,{children:"However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long as it’s kept simple. It confused our test users when we conditionally revealed complicated questions to them."}),`
`,e(n.h2,{id:"smaller-checkboxes",children:"Smaller checkboxes"}),`
`,e(n.p,{children:"Use standard-sized checkboxes in most cases. However, smaller checkboxes work well on pages where it’s helpful to make them less visually prominent."}),`
`,e(n.p,{children:"For example, on a page of search results, the main user need is to see the results. Using smaller checkboxes lets users see and change search filters without distracting them from the main content."}),`
`,e(o,{of:b}),`
`,e(n.p,{children:"Small checkboxes can work well on information dense screens in services designed for repeat use, like caseworking systems."}),`
`,e(n.p,{children:"In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times."}),`
`,e(n.h2,{id:"error-messages",children:"Error messages"}),`
`,e(n.p,{children:"Error messages should be styled like this:"}),`
`,e(o,{of:k}),`
`,e(n.p,{children:"Make sure errors follow the guidance in error message and have specific error messages for specific error states."}),`
`,e(n.h3,{id:"if-nothing-is-selected-and-the-question-has-options-in-it",children:"If nothing is selected and the question has options in it"}),`
`,e(n.p,{children:"Say ‘Select if [whatever it is]’."}),`
`,e(n.p,{children:"For example, ‘Select if you are British, Irish or a citizen of a different country’."}),`
`,e(n.h3,{id:"if-nothing-is-selected-and-the-question-does-not-have-options-in-it",children:"If nothing is selected and the question does not have options in it"}),`
`,e(n.p,{children:"Say ‘Select [whatever it is]’."}),`
`,e(n.p,{children:"For example, ‘Select your nationality or nationalities’."}),`
`,e(n.h3,{id:"if-users-check-both-a-none-checkbox-and-another-checkbox",children:"If users check both a ‘none’ checkbox and another checkbox"}),`
`,e(n.p,{children:"Say:"}),`
`,e(a,{children:e(n.p,{children:"Select [option label text] or select ‘[none of the above label text]’"})}),`
`,e(n.p,{children:"For example:"}),`
`,e(a,{children:e(n.p,{children:"Select countries you will be travelling to, or select ‘No, I will not be travelling to any of these countries’"})}),`
`,e(w,{})]})}}export{N as default};
//# sourceMappingURL=Checkboxes-0033c057.js.map