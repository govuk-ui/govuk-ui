import{j as e,a as i,F as h}from"./jsx-runtime-670450c2.js";import{M as d,C as o}from"./index-981f5620.js";import"./chunk-PCJTTTQV-6032a0f0.js";import{withHeading as a,withoutHeading as c,inline as p,withHint as m,withDivider as u,conditional as f,small as y,errors as w,conditionalWithErrors as g}from"./Radios.stories-9b61d5d0.js";import"./Accordion-7d72fd04.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-e68229e2.js";import"./CookieBanner-791a857d.js";import"./Details-ea8c166a.js";import{H as v}from"./Radios-0a1531ac.js";import"./Footer-d07f7a45.js";import"./Header-764f25f2.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./WarningText-53f07e98.js";import{G as b}from"./GovScript-6b99b831.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-76ff6d10.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-7f486528.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-95a02a32.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./Typography-a2bc044e.js";function ne(t={}){const{wrapper:s}=Object.assign({},l(),t.components);return s?e(s,Object.assign({},t,{children:e(r,{})})):r();function r(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},l(),t.components);return i(h,{children:[e(d,{title:"Components/Radios"}),`
`,e(v,{children:"Components"}),`
`,e(n.h1,{id:"radios",children:"Radios"}),`
`,e(o,{of:a}),`
`,e(n.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(n.p,{children:"Use the radios component when users can only select one option from a list."}),`
`,e(n.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,e(n.p,{children:"Do not use the radios component if users might need to select more than one option. In this case, you should use the checkboxes component instead."}),`
`,e(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e(n.p,{children:"Always position radios to the left of their labels. This makes them easier to find, especially for users of screen magnifiers."}),`
`,e(n.p,{children:"Unlike with checkboxes, users can only select one option from a list of radios. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone."}),`
`,e(n.p,{children:"If needed, add a hint explaining this, for example, ‘Select one option’."}),`
`,e(n.p,{children:"Do not pre-select radio options as this makes it more likely that users will:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"not realise they’ve missed a question"}),`
`,e(n.li,{children:"submit the wrong answer"}),`
`]}),`
`,e(n.p,{children:"Users cannot go back to having no option selected once they have selected one, without refreshing their browser window. Therefore, you should include ‘None of the above’ or ‘I do not know’ if they are valid options."}),`
`,e(n.p,{children:"Order radio options alphabetically by default."}),`
`,e(n.p,{children:"In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for ‘Where do you live?’ based on population size."}),`
`,e(n.p,{children:"However you should do this with extreme caution as it can reinforce bias in your service. If in doubt, order alphabetically."}),`
`,i(n.p,{children:["Group radios together in a ",e(n.code,{children:"<fieldset>"})," with a ",e(n.code,{children:"<legend>"})," that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’."]}),`
`,e(n.h2,{id:"if-youre-asking-one-question-on-the-page",children:"If you’re asking one question on the page"}),`
`,i(n.p,{children:["If you are asking just one question per page as recommended, you can set the contents of the ",e(n.code,{children:"<legend>"})," as the page heading. This is good practice as it means that users of screen readers will only hear the contents once."]}),`
`,i(n.p,{children:["Read more about ",e("a",{href:"https://design-system.service.gov.uk/get-started/labels-legends-headings/",children:"why and how to set legends as headings."})]}),`
`,e(o,{of:a}),`
`,e(n.h2,{id:"if-youre-asking-more-than-one-question-on-the-page",children:"If you’re asking more than one question on the page"}),`
`,i(n.p,{children:["If you’re asking more than one question on the page, do not set the contents of the ",e(n.code,{children:"<legend>"})," as the page heading. Read more about asking multiple questions on question pages."]}),`
`,e(o,{of:c}),`
`,e(n.h2,{id:"inline-radios",children:"Inline radios"}),`
`,e(n.p,{children:"In some cases, you can choose to display radios ‘inline’ beside one another (horizontally)."}),`
`,e(n.p,{children:"Only use inline radios when:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"the question only has two options"}),`
`,e(n.li,{children:"both options are short"}),`
`]}),`
`,e(n.p,{children:"Remember that on small screens such as mobile devices, the radios will still be ‘stacked’ on top of one another (vertically)."}),`
`,e(o,{of:p}),`
`,e(n.h2,{id:"radio-items-with-hints",children:"Radio items with hints"}),`
`,e(n.p,{children:"You can add hints to radio items to provide additional information about the options."}),`
`,e(o,{of:m}),`
`,e(n.h2,{id:"radio-items-with-a-text-divider",children:"Radio items with a text divider"}),`
`,e(n.p,{children:"If one or more of your radio options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’."}),`
`,e(o,{of:u}),`
`,e(n.h2,{id:"conditionally-revealing-a-related-question",children:"Conditionally revealing a related question"}),`
`,e(n.p,{children:"You can ask the user a related question when they select a particular radio option, so they only see the question when it’s relevant to them."}),`
`,e(n.p,{children:"This might make two related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the ‘Contact me by phone’ option."}),`
`,e(o,{of:f}),`
`,e(n.p,{children:"Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead."}),`
`,e(n.p,{children:"Do not conditionally reveal questions to inline radios, such as ‘yes’ and ‘no’ options placed next to each other."}),`
`,e(n.p,{children:"Conditionally reveal questions only - do not show or hide anything that is not a question."}),`
`,e(n.h3,{id:"known-issues",children:"Known issues"}),`
`,i(n.p,{children:["Users are not always notified when a conditionally revealed question is shown or hidden. This fails ",e("a",{href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",children:"WCAG 2.1 success criterion 4.1.2 Name, Role, Value"}),"."]}),`
`,e(n.p,{children:"However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long it’s kept simple. Users we tested with did get confused when complicated questions were conditionally revealed to them, particularly questions with more than one part."}),`
`,e(n.p,{children:"We’ll keep looking for opportunities to learn more about how conditionally revealed questions be used in services."}),`
`,e(n.h2,{id:"smaller-radios",children:"Smaller radios"}),`
`,e(n.p,{children:"Use standard-sized radios in nearly all cases. However, smaller versions work well on pages where it’s helpful to make them less visually prominent."}),`
`,e(n.p,{children:"For example, on a page of search results, the primary user need is to see the results. Using smaller radios lets users see and change search filters without distracting them from the main content."}),`
`,e(o,{of:y}),`
`,e(n.p,{children:"Small radios can work well on information dense screens in services designed for repeat use, like caseworking systems."}),`
`,e(n.p,{children:"In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times."}),`
`,e(n.h2,{id:"error-messages",children:"Error messages"}),`
`,e(n.p,{children:"Display an error message if the user has not:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"selected any radios"}),`
`,e(n.li,{children:"answered a conditionally revealed question"}),`
`]}),`
`,e(n.p,{children:"Error messages should be styled like this:"}),`
`,e(o,{of:w}),`
`,e(n.p,{children:"Make sure errors follow the guidance in error message and have specific error messages for specific error states."}),`
`,e(n.h3,{id:"if-its-a-yes-or-no-question",children:"If it’s a ‘yes’ or ‘no’ question"}),`
`,e(n.p,{children:"Say ‘Select yes if [whatever it is is true]’. For example, ‘Select yes if Sarah normally lives with you’."}),`
`,e(n.h3,{id:"if-there-are-two-options-which-are-not-yes-and-no",children:"If there are two options which are not ‘yes’ and ‘no’"}),`
`,e(n.p,{children:"Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’."}),`
`,e(n.h3,{id:"if-there-are-more-than-two-options",children:"If there are more than two options"}),`
`,e(n.p,{children:"Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’."}),`
`,e(n.h3,{id:"if-its-a-conditionally-revealed-question",children:"If it’s a conditionally revealed question"}),`
`,e(n.p,{children:"Include an error message that is clearly related to the initial question."}),`
`,e(o,{of:g}),`
`,e(b,{})]})}}export{ne as default};
//# sourceMappingURL=Radios-785b3c4d.js.map
