import{j as e,a as o,F as l}from"./jsx-runtime-29545a09.js";import{M as h,C as t}from"./index-7274de15.js";import"./chunk-S4VUQJ4A-a0bac834.js";import{primary as s,start as d,secondary as u,warning as p,disabled as m,group as f,groupWithLink as b,preventDoubleClick as g}from"./Button.stories-43c540c5.js";import"./Textarea-da411eb3.js";import"./BackLink-db4a3555.js";import"./BreadcrumbItem-4c671eb0.js";import"./Button-e9eb043b.js";import"./CookieBanner-d4f62548.js";import"./Details-b31dbea0.js";import{H as w}from"./Radios-a3c37471.js";import"./Footer-c20a9c5d.js";import"./Header-19efd5f0.js";import"./InsetText-f9c5a393.js";import"./Pagination-e4f0cd70.js";import"./PhaseBanner-85bc883f.js";import"./SkipLink-7ef7355e.js";import"./WarningText-4cfd38cd.js";import{G as y}from"./GovScript-04710f98.js";import{u as c}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-49479615.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";import"./FormGroup-201d2661.js";import"./Fieldset-d9d8ba59.js";import"./Container-045493c7.js";import"./Grid-408885ec.js";import"./Typography-359fe8b4.js";function te(i={}){const{wrapper:r}=Object.assign({},c(),i.components);return r?e(r,Object.assign({},i,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code"},c(),i.components);return o(l,{children:[e(h,{title:"Components/Button"}),`
`,e(w,{children:"Components"}),`
`,e(n.h1,{id:"button",children:"Button"}),`
`,e(t,{of:s}),`
`,e(n.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(n.p,{children:"Use the button component to help users carry out an action like starting an application or saving their information."}),`
`,e(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e(n.p,{children:"Write button text in sentence case, describing the action it performs. For example:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"‘Start now’ at the start of the service"}),`
`,e(n.li,{children:"‘Sign in’ to an account a user has already created"}),`
`,e(n.li,{children:"‘Continue’ when the service does not save a user’s information"}),`
`,e(n.li,{children:"‘Save and continue’ when the service does save a user’s information"}),`
`,e(n.li,{children:"‘Save and come back later’ when a user can save their information and come back later"}),`
`,e(n.li,{children:"‘Add another’ to add another item to a list or group"}),`
`,e(n.li,{children:"‘Pay’ to make a payment"}),`
`,e(n.li,{children:"‘Confirm and send’ on a check answers page that does not have any legal content a user must agree to"}),`
`,e(n.li,{children:"‘Accept and send’ on a check answers page that has legal content a user must agree to"}),`
`,e(n.li,{children:`‘Sign out’ when a user is signed in to an account
You may need to include more or different words to better describe the action. For example, ‘Add another address’ and ‘Accept and claim a tax refund’.`}),`
`]}),`
`,e(n.p,{children:"Align the primary action button to the left edge of your form."}),`
`,e(n.h2,{id:"default-buttons",children:"Default buttons"}),`
`,e(n.p,{children:"Use a default button for the main call to action on a page."}),`
`,e(n.p,{children:"Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next."}),`
`,e(t,{of:s}),`
`,e(n.h2,{id:"start-buttons",children:"Start buttons"}),`
`,e(n.p,{children:"Use a start button for the main call to action on your service’s start page."}),`
`,e(n.p,{children:"Start buttons do not usually submit form data, so use a link tag instead of a button tag."}),`
`,e(t,{of:d}),`
`,e(n.h2,{id:"secondary-buttons",children:"Secondary buttons"}),`
`,e(n.p,{children:"Use secondary buttons for secondary calls to action on a page."}),`
`,e(n.p,{children:"Pages with too many calls to action make it hard for users to know what to do next. Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages."}),`
`,e(t,{of:u}),`
`,e(n.p,{children:"You can also group default and secondary buttons together."}),`
`,e(n.h2,{id:"warning-buttons",children:"Warning buttons"}),`
`,e(n.p,{children:"Warning buttons are designed to make users think carefully before they use them. They only work if used very sparingly. Most services should not need one."}),`
`,e(t,{of:p}),`
`,e(n.p,{children:"Only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account."}),`
`,e(n.p,{children:"When letting users carry out an action like this, it’s a good idea to include an additional step which asks them to confirm it."}),`
`,e(n.p,{children:"In this instance, use another style of button for the initial call to action, and a warning button for the final confirmation."}),`
`,e(n.p,{children:"Do not only rely on the red colour of a warning button to communicate the serious nature of the action. This is because not all users will be able to see the colour or will understand what it signifies. Make sure the context and button text make clear what will happen if the user selects it."}),`
`,e(n.h2,{id:"disabled-buttons",children:"Disabled buttons"}),`
`,e(n.p,{children:"Disabled buttons have poor contrast and can confuse some users, so avoid them if possible."}),`
`,e(n.p,{children:"Only use disabled buttons if research shows it makes the user interface easier to understand."}),`
`,e(t,{of:m}),`
`,e(n.h2,{id:"grouping-buttons",children:"Grouping buttons"}),`
`,e(n.p,{children:"Use a button group when two or more buttons are placed together."}),`
`,e(t,{of:f}),`
`,e(n.p,{children:"Any links within a button group will automatically align with the buttons."}),`
`,e(t,{of:b}),`
`,e(n.h2,{id:"stop-users-from-accidentally-sending-information-more-than-once",children:"Stop users from accidentally sending information more than once"}),`
`,e(n.p,{children:"Sometimes, users double click buttons because they:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"have used operating systems where they have to double click items to make them work"}),`
`,e(n.li,{children:"are experiencing a slow connection which means they are not given feedback on their action quickly enough"}),`
`,e(n.li,{children:"have motor impairments such as hand tremors which cause them to click the button involuntarily"}),`
`]}),`
`,e(n.p,{children:"In some cases, this can mean their information is sent twice."}),`
`,e(n.p,{children:"For example, the GOV.UK Notify team discovered that a number of users were receiving invitations twice, because the person sending them was double clicking the ‘send’ button."}),`
`,e(n.p,{children:"If you are working in production and research shows that users are frequently sending information twice, you can configure the button to ignore the second click."}),`
`,o(n.p,{children:["To do this, set the ",e(n.code,{children:"preventDoubleClick"})," prop as shown in this example."]}),`
`,e(t,{of:g}),`
`,e(n.p,{children:"This feature will prevent double clicks for users that have JavaScript enabled, however you should also think about the issue server-side to protect against attacks."}),`
`,o(n.p,{children:["In the case of slow connections, aim to give the user information about what’s happening, for example, by showing a loading spinner or a modal, before using ",e(n.code,{children:"preventDoubleClick"}),"."]}),`
`,e(y,{})]})}}export{te as default};
//# sourceMappingURL=Button-6d70207a.js.map