import{j as e,a as o,F as l}from"./jsx-runtime-670450c2.js";import{M as d,C as i,S as t}from"./index-6b58d56d.js";import"./chunk-PCJTTTQV-e5cddbfa.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{primary as c,insideForm as p,confirmationMessage as u,hiddenMessages as m,hiddenMessageShown as g,alertRole as k,alertRoleAccepted as f,alertRoleRejected as y,nonEssential as b}from"./CookieBanner.stories-f4e536b5.js";import"./Accordion-b094a9f4.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-6a127f9a.js";import"./CharacterCount-9f689b66.js";import"./CookieBanner-c4de4ce5.js";import"./Details-ea8c166a.js";import"./ErrorMessage-5eec86f5.js";import"./FileUpload-a04d48dc.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import{H as v}from"./Radios-17bf4bdd.js";import"./InsetText-5be58372.js";import"./NotificationBanner-9be16c78.js";import"./Pagination-1429ab7b.js";import{T as w}from"./PhaseBanner-e4ef22fe.js";import"./Select-0fca9528.js";import"./SkipLink-6f274826.js";import"./Tabs-8973fdcc.js";import"./WarningText-53f07e98.js";import{u as h}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-6f6ef1fd.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-f64090b0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-61705542.js";import"./Typography-a2bc044e.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";function ce(r={}){const{wrapper:s}=Object.assign({},h(),r.components);return s?e(s,Object.assign({},r,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",h4:"h4"},h(),r.components);return o(l,{children:[e(d,{title:"Components/Cookie banner"}),`
`,e(v,{children:"Components"}),`
`,e(n.h1,{children:"Cookie banner"}),`
`,e(w,{children:"EXPERIMENTAL"}),`
`,o(n.p,{children:["This component is currently experimental because ",e(n.a,{href:"https://design-system.service.gov.uk/components/cookie-banner/#research-on-this-component",children:"more research"})," is needed to validate it."]}),`
`,e(n.p,{children:"Allow users to accept or reject cookies which are not essential to making your service work."}),`
`,e(i,{children:e(t,{of:c})}),`
`,e(n.h2,{children:"When to use this component"}),`
`,e(n.p,{children:"Use this component if your service sets any cookies on a user’s device."}),`
`,e(n.p,{children:"Remember, you must:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"tell users about the cookies your service sets on their device"}),`
`,e(n.li,{children:"let users accept or reject any cookies that are not essential to providing your service"}),`
`]}),`
`,e(n.p,{children:"The term ‘non-essential cookies’ includes:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"HTML5 local storage"}),`
`,e(n.li,{children:"service workers"}),`
`,e(n.li,{children:"any other technologies that store files on the user’s device"}),`
`]}),`
`,e(n.p,{children:"This cookie banner and the cookies page pattern are based on the approach to getting cookie consent used on the GOV.UK website."}),`
`,e(n.p,{children:"This component page shows several options for using a cookie banner, based on the types of cookies you’re using in the service. We also tell you what to cover in your cookie banner, with some text examples."}),`
`,e(n.h3,{children:"Before you start"}),`
`,e(n.p,{children:"Audit and categorise your cookies as shown in the cookies page pattern to help you choose the best option for your service."}),`
`,e(n.p,{children:"You must not take the information on this page as legal advice. Your organisation is responsible and accountable for what they do to comply with data protection legislation, such as:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"Privacy and Electronic Communications Regulations (PECR)"}),`
`,e(n.li,{children:"General Data Protection Regulation (GDPR)"}),`
`]}),`
`,e(n.p,{children:"Check with your organisation’s privacy expert to see how data protection legislation affects your website and service."}),`
`,e(n.h2,{children:"How it works"}),`
`,e(n.p,{children:"Show the cookie banner every time the user accesses your service until they either:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"accept or reject cookies using the buttons in the cookie banner"}),`
`,e(n.li,{children:"save their cookie preferences on the service’s cookies page"}),`
`]}),`
`,e(n.p,{children:"Once the user has accepted or rejected cookies, the cookie banner should:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"hide the cookie banner message"}),`
`,e(n.li,{children:"show a confirmation message — and a ‘hide’ button to let the user close the banner"}),`
`,e(n.li,{children:"set a cookie to save the user’s preferences for 1 year"}),`
`]}),`
`,e(n.p,{children:"Make sure the cookie banner does not:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"show when the user visits again, once their preferences have been saved"}),`
`,e(n.li,{children:"set any non-essential cookies unless the user accepted them on a previous visit"}),`
`]}),`
`,o(n.p,{children:["Position the cookie banner after the opening ",e(n.code,{children:"<body>"})," tag and before the ’skip to main content‘ link."]}),`
`,e(n.h3,{children:"Option 1: If you’re only using essential cookies"}),`
`,e(n.p,{children:"You can choose not to have a cookie banner if the service only sets essential or ‘strictly necessary’ cookies, as these do not need user consent."}),`
`,e(n.p,{children:"However, you must tell users that you set essential cookies. You can do this with a cookies page — link to this page in the footer."}),`
`,e(n.h3,{children:"Option 2: If you set non-essential cookies on the server"}),`
`,e(n.p,{children:"You can choose this option if your service sets non-essential cookies on the server — your service may also set non-essential cookies on the client."}),`
`,e(n.p,{children:"To get consent from the user, display the cookie banner inside a form that lets them submit their choice to accept or reject cookies."}),`
`,e(n.p,{children:"All users will be able to see the banner as this approach does not rely on JavaScript."}),`
`,e(n.p,{children:"Here’s an example of a cookie banner inside a form:"}),`
`,e(i,{children:e(t,{of:p})}),`
`,e(n.p,{children:"Once the user has accepted or rejected cookies and set their cookie preferences, reload the page to show a confirmation message."}),`
`,e(n.p,{children:"Here’s an example of a confirmation message inside a form:"}),`
`,e(i,{children:e(t,{of:u})}),`
`,e(n.h3,{children:"Show the same message to all users"}),`
`,e(n.p,{children:"In the cookie banner, tell the user about all the cookies you’re using in the service — whether they’ve enabled JavaScript or not. This way, you will not need to ask the user to give their consent again on their next visit."}),`
`,e(n.h3,{children:"Help users keep their place using progressive enhancement"}),`
`,e(n.p,{children:"If the user is entering information into a form as part of the service, they might lose their place when they submit their choice to accept or reject cookies."}),`
`,e(n.p,{children:"To help users running JavaScript on their device, you can write some JavaScript code to let them submit their choice and prevent the page from reloading."}),`
`,o(n.p,{children:["Include all possible messages that the user could see in the cookie banner when the page loads. Hide these with the ",e(n.code,{children:"hidden"})," HTML attribute where needed."]}),`
`,o(n.p,{children:["Here’s an example of a progressively enhanced cookie banner that includes all possible messages which are hidden using HTML — the cookie banner message is shown using JavaScript to remove the ",e(n.code,{children:"hidden"})," attribute:"]}),`
`,e(i,{children:e(t,{of:m})}),`
`,e(n.p,{children:"Here’s the same example of a progressively enhanced cookie banner, with the confirmation message shown instead:"}),`
`,e(i,{children:e(t,{of:g})}),`
`,e(n.h3,{children:"Option 3: If you set non-essential cookies, but only on the client"}),`
`,e(n.p,{children:"You can choose to make your banner only work with JavaScript if your service only needs to set non-essential cookies on the client."}),`
`,o(n.p,{children:["When the page loads, the ",e(n.code,{children:"hidden"})," html attribute hides the component, as well as all the cookie banner messages it contains, which the user might otherwise see."]}),`
`,e(n.h4,{children:"Show the cookie banner only to users that have enabled JavaScript"}),`
`,o(n.p,{children:["Use JavaScript to show cookie banner messages to users that have not accepted or rejected cookies by removing the ",e(n.code,{children:"hidden"})," attribute as needed."]}),`
`,e(n.p,{children:"Write your own JavaScript code so that when the user accepts or rejects cookies, the cookie banner will:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"hide the cookie message by adding the hidden attribute"}),`
`,e(n.li,{children:"show a confirmation message by removing its hidden attribute"}),`
`,o(n.li,{children:["give the confirmation message the ",e(n.code,{children:'tabindex="-1"'})," and ",e(n.code,{children:'role="alert"'})," attributes — this will allow the element to be focused so assistive technology can read the message"]}),`
`,e(n.li,{children:"shift focus to the confirmation message"}),`
`]}),`
`,e(n.p,{children:"Here’s an example:"}),`
`,e(i,{children:e(t,{of:k})}),`
`,e(n.h4,{children:"When the user has accepted cookies"}),`
`,e(n.p,{children:"Show a confirmation message confirming that the user has either accepted or rejected cookies by removing the hidden attribute."}),`
`,e(i,{children:e(t,{of:f})}),`
`,e(n.h4,{children:"When the user has rejected cookies"}),`
`,e(i,{children:e(t,{of:y})}),`
`,e(n.h2,{children:"What to cover in your cookie banner"}),`
`,e(n.p,{children:"Include the name of the service in the banner heading to help users understand that the cookies you’re talking about are different from the ones set by the main GOV.UK platform."}),`
`,e(n.p,{children:"You’ll need to change the example cookie banner text if your service:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"allows third parties to set cookies (tell the user that both your organisation and other organisations will be setting cookies)"}),`
`,e(n.li,{children:"uses cookies for reasons other than collecting analytics information or remembering the user’s settings"}),`
`]}),`
`,e(n.p,{children:`Keep the text as short as possible while making sure it’s an accurate description of how you use cookies.
For example, if you use more than one ‘functional’ cookie and there’s not enough space to mention what each of them does, you could ask for permission to set cookies so ‘you can use as many of the service’s features as possible’.`}),`
`,e(n.h3,{children:"If you’re using essential cookies and analytics cookies"}),`
`,e(n.p,{children:"You can use this example text for a service which sets essential and analytics cookies. Analytics cookies are those set by your organisation to collect information about how people are using your digital service."}),`
`,e(i,{children:e(t,{of:c})}),`
`,e(n.h3,{children:"If you’re using more than one type of non-essential cookie"}),`
`,e(n.p,{children:"You can use this example text for a service that set:"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"essential cookies"}),`
`,e(n.li,{children:"analytics cookies"}),`
`,e(n.li,{children:"functional cookies to remember the user’s settings but are not essential"}),`
`]}),`
`,e(i,{children:e(t,{of:b})}),`
`,e(n.h2,{children:"Creating a cookies page"}),`
`,o(n.p,{children:["You’ll need a ",e(n.a,{href:"",children:"cookies page"})," as well as a cookie banner."]})]})}}export{ce as default};
//# sourceMappingURL=CookieBanner-c9942b3f.js.map
