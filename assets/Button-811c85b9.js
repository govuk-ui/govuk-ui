import{a as e,j as i,F as h}from"./jsx-runtime-68f49b4e.js";import{M as d,C as t,S as o}from"./chunk-4XCFV5WA-d129f2ed.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as c,start as u,secondary as p,warning as m,disabled as f,group as g,groupWithLink as b,preventDoubleClick as w}from"./Button.stories-51283969.js";import"./Accordion-12d9884c.js";import"./BackLink-54564ca1.js";import"./BreadcrumbItem-7e03e4ef.js";import"./Button-791dc627.js";import"./CharacterCount-6c285db3.js";import"./SummaryListActions-5b32f1f4.js";import"./CookieBanner-5f4494f2.js";import"./DateInput-4b08d3af.js";import"./Details-7a2689db.js";import"./ErrorMessage-07ea8fac.js";import"./ErrorSummary-d6d61f90.js";import"./FileUpload-b260dab3.js";import"./Footer-aedacc55.js";import"./Header-81057254.js";import{H as y}from"./Hint-47130fa7.js";import"./Input-70154cc0.js";import"./InsetText-39830db6.js";import"./Label-3d09487c.js";import"./NotificationBanner-b6ddf0d7.js";import"./Pagination-3b973ce5.js";import"./Panel-9db3f9a0.js";import"./PhaseBanner-2999952f.js";import"./Radios-78e6f060.js";import"./Select-d6e3d713.js";import"./SkipLink-0b18f351.js";import"./Table-4ff13347.js";import"./Tabs-61739ac7.js";import"./Tag-a86cd5c3.js";import"./Textarea-0f1928d4.js";import"./WarningText-6272bbd9.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-cb3e9a20.js";import"../sb-preview/runtime.mjs";import"./index-2d4beb60.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./FormGroup-f91b51d3.js";import"./Fieldset-cd643f71.js";import"./Legend-645732ce.js";import"./Typography-3950099a.js";function pe(r={}){const{wrapper:a}=Object.assign({},l(),r.components);return a?e(a,Object.assign({},r,{children:e(s,{})})):s();function s(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code"},l(),r.components);return i(h,{children:[e(d,{title:"Button"}),`
`,e(y,{children:"Components"}),`
`,e(n.h1,{children:"Button"}),`
`,e(t,{children:e(o,{of:c})}),`
`,e(n.h2,{children:"When to use this component"}),`
`,e(n.p,{children:"Use the button component to help users carry out an action like starting an application or saving their information."}),`
`,e(n.h2,{children:"How it works"}),`
`,e(n.p,{children:"Write button text in sentence case, describing the action it performs. For example:"}),`
`,i(n.ul,{children:[`
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
`,e(n.h2,{children:"Default buttons"}),`
`,e(n.p,{children:"Use a default button for the main call to action on a page."}),`
`,e(n.p,{children:"Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next."}),`
`,e(t,{children:e(o,{of:c})}),`
`,e(n.h2,{children:"Start buttons"}),`
`,e(n.p,{children:"Use a start button for the main call to action on your service’s start page."}),`
`,e(n.p,{children:"Start buttons do not usually submit form data, so use a link tag instead of a button tag."}),`
`,e(t,{children:e(o,{of:u})}),`
`,e(n.h2,{children:"Secondary buttons"}),`
`,e(n.p,{children:"Use secondary buttons for secondary calls to action on a page."}),`
`,e(n.p,{children:"Pages with too many calls to action make it hard for users to know what to do next. Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages."}),`
`,e(t,{children:e(o,{of:p})}),`
`,e(n.p,{children:"You can also group default and secondary buttons together."}),`
`,e(n.h2,{children:"Warning buttons"}),`
`,e(n.p,{children:"Warning buttons are designed to make users think carefully before they use them. They only work if used very sparingly. Most services should not need one."}),`
`,e(t,{children:e(o,{of:m})}),`
`,e(n.p,{children:"Only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account."}),`
`,e(n.p,{children:"When letting users carry out an action like this, it’s a good idea to include an additional step which asks them to confirm it."}),`
`,e(n.p,{children:"In this instance, use another style of button for the initial call to action, and a warning button for the final confirmation."}),`
`,e(n.p,{children:"Do not only rely on the red colour of a warning button to communicate the serious nature of the action. This is because not all users will be able to see the colour or will understand what it signifies. Make sure the context and button text make clear what will happen if the user selects it."}),`
`,e(n.h2,{children:"Disabled buttons"}),`
`,e(n.p,{children:"Disabled buttons have poor contrast and can confuse some users, so avoid them if possible."}),`
`,e(n.p,{children:"Only use disabled buttons if research shows it makes the user interface easier to understand."}),`
`,e(t,{children:e(o,{of:f})}),`
`,e(n.h2,{children:"Grouping buttons"}),`
`,e(n.p,{children:"Use a button group when two or more buttons are placed together."}),`
`,e(t,{children:e(o,{of:g})}),`
`,e(n.p,{children:"Any links within a button group will automatically align with the buttons."}),`
`,e(t,{children:e(o,{of:b})}),`
`,e(n.h2,{children:"Stop users from accidentally sending information more than once"}),`
`,e(n.p,{children:"Sometimes, users double click buttons because they:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"have used operating systems where they have to double click items to make them work"}),`
`,e(n.li,{children:"are experiencing a slow connection which means they are not given feedback on their action quickly enough"}),`
`,e(n.li,{children:"have motor impairments such as hand tremors which cause them to click the button involuntarily"}),`
`]}),`
`,e(n.p,{children:"In some cases, this can mean their information is sent twice."}),`
`,e(n.p,{children:"For example, the GOV.UK Notify team discovered that a number of users were receiving invitations twice, because the person sending them was double clicking the ‘send’ button."}),`
`,e(n.p,{children:"If you are working in production and research shows that users are frequently sending information twice, you can configure the button to ignore the second click."}),`
`,i(n.p,{children:["To do this, set the ",e(n.code,{children:"preventDoubleClick"})," prop as shown in this example."]}),`
`,e(t,{children:e(o,{of:w})}),`
`,e(n.p,{children:"This feature will prevent double clicks for users that have JavaScript enabled, however you should also think about the issue server-side to protect against attacks."}),`
`,i(n.p,{children:["In the case of slow connections, aim to give the user information about what’s happening, for example, by showing a loading spinner or a modal, before using ",e(n.code,{children:"preventDoubleClick"}),"."]})]})}}export{pe as default};
//# sourceMappingURL=Button-811c85b9.js.map
