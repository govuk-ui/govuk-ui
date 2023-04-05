import{j as e,a as t,F as d}from"./jsx-runtime-670450c2.js";import{M as c,C as o,S as i}from"./index-8c0c3ee6.js";import{withHeading as l,withoutHeading as p,inline as m,withHint as u,withDivider as f,conditional as y,small as w,errors as g,conditionalWithErrors as v}from"./Radios.stories-5b619706.js";import"./Accordion-b094a9f4.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-6a127f9a.js";import"./CharacterCount-9c8d5d28.js";import"./CookieBanner-c4de4ce5.js";import"./Details-ea8c166a.js";import{H as b}from"./Radios-f218e915.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./Tabs-8973fdcc.js";import"./WarningText-53f07e98.js";import"./chunk-PCJTTTQV-1a003912.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as h}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-381ff2be.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./Typography-a2bc044e.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./react-18-61705542.js";function ie(r={}){const{wrapper:s}=Object.assign({},h(),r.components);return s?e(s,Object.assign({},r,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},h(),r.components);return t(d,{children:[e(c,{title:"Components/Radios"}),`
`,e(b,{children:"Components"}),`
`,e(n.h1,{children:"Radios"}),`
`,e(o,{withToolbar:!0,children:e(i,{of:l})}),`
`,e(n.h2,{children:"When to use this component"}),`
`,e(n.p,{children:"Use the radios component when users can only select one option from a list."}),`
`,e(n.h2,{children:"When not to use this component"}),`
`,e(n.p,{children:"Do not use the radios component if users might need to select more than one option. In this case, you should use the checkboxes component instead."}),`
`,e(n.h2,{children:"How it works"}),`
`,e(n.p,{children:"Always position radios to the left of their labels. This makes them easier to find, especially for users of screen magnifiers."}),`
`,e(n.p,{children:"Unlike with checkboxes, users can only select one option from a list of radios. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone."}),`
`,e(n.p,{children:"If needed, add a hint explaining this, for example, ‘Select one option’."}),`
`,e(n.p,{children:"Do not pre-select radio options as this makes it more likely that users will:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"not realise they’ve missed a question"}),`
`,e(n.li,{children:"submit the wrong answer"}),`
`]}),`
`,e(n.p,{children:"Users cannot go back to having no option selected once they have selected one, without refreshing their browser window. Therefore, you should include ‘None of the above’ or ‘I do not know’ if they are valid options."}),`
`,e(n.p,{children:"Order radio options alphabetically by default."}),`
`,e(n.p,{children:"In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for ‘Where do you live?’ based on population size."}),`
`,e(n.p,{children:"However you should do this with extreme caution as it can reinforce bias in your service. If in doubt, order alphabetically."}),`
`,t(n.p,{children:["Group radios together in a ",e(n.code,{children:"<fieldset>"})," with a ",e(n.code,{children:"<legend>"})," that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’."]}),`
`,e(n.h2,{children:"If you’re asking one question on the page"}),`
`,t(n.p,{children:["If you are asking just one question per page as recommended, you can set the contents of the ",e(n.code,{children:"<legend>"})," as the page heading. This is good practice as it means that users of screen readers will only hear the contents once."]}),`
`,t(n.p,{children:["Read more about ",e("a",{href:"https://design-system.service.gov.uk/get-started/labels-legends-headings/",children:"why and how to set legends as headings."})]}),`
`,e(o,{children:e(i,{of:l})}),`
`,e(n.h2,{children:"If you’re asking more than one question on the page"}),`
`,t(n.p,{children:["If you’re asking more than one question on the page, do not set the contents of the ",e(n.code,{children:"<legend>"})," as the page heading. Read more about asking multiple questions on question pages."]}),`
`,e(o,{children:e(i,{of:p})}),`
`,e(n.h2,{children:"Inline radios"}),`
`,e(n.p,{children:"In some cases, you can choose to display radios ‘inline’ beside one another (horizontally)."}),`
`,e(n.p,{children:"Only use inline radios when:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"the question only has two options"}),`
`,e(n.li,{children:"both options are short"}),`
`]}),`
`,e(n.p,{children:"Remember that on small screens such as mobile devices, the radios will still be ‘stacked’ on top of one another (vertically)."}),`
`,e(o,{children:e(i,{of:m})}),`
`,e(n.h2,{children:"Radio items with hints"}),`
`,e(n.p,{children:"You can add hints to radio items to provide additional information about the options."}),`
`,e(o,{children:e(i,{of:u})}),`
`,e(n.h2,{children:"Radio items with a text divider"}),`
`,e(n.p,{children:"If one or more of your radio options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’."}),`
`,e(o,{children:e(i,{of:f})}),`
`,e(n.h2,{children:"Conditionally revealing a related question"}),`
`,e(n.p,{children:"You can ask the user a related question when they select a particular radio option, so they only see the question when it’s relevant to them."}),`
`,e(n.p,{children:"This might make two related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the ‘Contact me by phone’ option."}),`
`,e(o,{children:e(i,{of:y})}),`
`,e(n.p,{children:"Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead."}),`
`,e(n.p,{children:"Do not conditionally reveal questions to inline radios, such as ‘yes’ and ‘no’ options placed next to each other."}),`
`,e(n.p,{children:"Conditionally reveal questions only - do not show or hide anything that is not a question."}),`
`,e(n.h3,{children:"Known issues"}),`
`,t(n.p,{children:["Users are not always notified when a conditionally revealed question is shown or hidden. This fails ",e("a",{href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",children:"WCAG 2.1 success criterion 4.1.2 Name, Role, Value"}),"."]}),`
`,e(n.p,{children:"However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long it’s kept simple. Users we tested with did get confused when complicated questions were conditionally revealed to them, particularly questions with more than one part."}),`
`,e(n.p,{children:"We’ll keep looking for opportunities to learn more about how conditionally revealed questions be used in services."}),`
`,e(n.h2,{children:"Smaller radios"}),`
`,e(n.p,{children:"Use standard-sized radios in nearly all cases. However, smaller versions work well on pages where it’s helpful to make them less visually prominent."}),`
`,e(n.p,{children:"For example, on a page of search results, the primary user need is to see the results. Using smaller radios lets users see and change search filters without distracting them from the main content."}),`
`,e(o,{children:e(i,{of:w})}),`
`,e(n.p,{children:"Small radios can work well on information dense screens in services designed for repeat use, like caseworking systems."}),`
`,e(n.p,{children:"In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times."}),`
`,e(n.h2,{children:"Error messages"}),`
`,e(n.p,{children:"Display an error message if the user has not:"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"selected any radios"}),`
`,e(n.li,{children:"answered a conditionally revealed question"}),`
`]}),`
`,e(n.p,{children:"Error messages should be styled like this:"}),`
`,e(o,{children:e(i,{of:g})}),`
`,e(n.p,{children:"Make sure errors follow the guidance in error message and have specific error messages for specific error states."}),`
`,e(n.h3,{children:"If it’s a ‘yes’ or ‘no’ question"}),`
`,e(n.p,{children:"Say ‘Select yes if [whatever it is is true]’. For example, ‘Select yes if Sarah normally lives with you’."}),`
`,e(n.h3,{children:"If there are two options which are not ‘yes’ and ‘no’"}),`
`,e(n.p,{children:"Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’."}),`
`,e(n.h3,{children:"If there are more than two options"}),`
`,e(n.p,{children:"Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’."}),`
`,e(n.h3,{children:"If it’s a conditionally revealed question"}),`
`,e(n.p,{children:"Include an error message that is clearly related to the initial question."}),`
`,e(o,{children:e(i,{of:v})})]})}}export{ie as default};
//# sourceMappingURL=Radios-07e597d7.js.map
