import{j as e,a as i,F as h}from"./jsx-runtime-670450c2.js";import{M as d,C as t,S as o}from"./index-9da969b9.js";import"./chunk-PCJTTTQV-009fdc81.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as c,start as u,secondary as p,warning as m,disabled as f,group as g,groupWithLink as b,preventDoubleClick as w}from"./Button.stories-e022bb4c.js";import"./Accordion-b094a9f4.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-232179fb.js";import"./CharacterCount-7adc4d81.js";import"./CookieBanner-0021e8bc.js";import"./Details-ea8c166a.js";import"./ErrorMessage-5eec86f5.js";import"./FileUpload-a04d48dc.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import{H as y}from"./Radios-17bf4bdd.js";import"./InsetText-5be58372.js";import"./NotificationBanner-9be16c78.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./Select-0fca9528.js";import"./SkipLink-6f274826.js";import"./Tabs-8973fdcc.js";import"./WarningText-53f07e98.js";import{u as l}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-f75f7c11.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-61705542.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import"./Typography-a2bc044e.js";function ae(r={}){const{wrapper:a}=Object.assign({},l(),r.components);return a?e(a,Object.assign({},r,{children:e(s,{})})):s();function s(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code"},l(),r.components);return i(h,{children:[e(d,{title:"Components/Button"}),`
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
`,i(n.p,{children:["In the case of slow connections, aim to give the user information about what’s happening, for example, by showing a loading spinner or a modal, before using ",e(n.code,{children:"preventDoubleClick"}),"."]})]})}}export{ae as default};
//# sourceMappingURL=Button-4b6f11e2.js.map