import{j as n,a as o,F as h}from"./jsx-runtime-670450c2.js";import{M as l,C as i}from"./index-9b617b84.js";import"./chunk-PCJTTTQV-c593258c.js";import{primary as a,insideForm as d,confirmationMessage as p,hiddenMessages as u,hiddenMessageShown as m,alertRole as k,alertRoleAccepted as g,alertRoleRejected as f,nonEssential as y}from"./CookieBanner.stories-0402855b.js";import"./Accordion-7d72fd04.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-e68229e2.js";import"./CookieBanner-791a857d.js";import"./Details-ea8c166a.js";import{H as b}from"./Radios-0a1531ac.js";import"./Footer-d07f7a45.js";import"./Header-764f25f2.js";import"./InsetText-5be58372.js";import"./Pagination-1429ab7b.js";import{T as v}from"./PhaseBanner-e4ef22fe.js";import"./SkipLink-6f274826.js";import"./WarningText-53f07e98.js";import{u as c}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-a39a62a1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-7f486528.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-95a02a32.js";import"./Typography-a2bc044e.js";import"./FormGroup-b495daf4.js";import"./Fieldset-2e55f4ed.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";function ee(t={}){const{wrapper:s}=Object.assign({},c(),t.components);return s?n(s,Object.assign({},t,{children:n(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",h4:"h4"},c(),t.components);return o(h,{children:[n(l,{title:"Components/Cookie banner"}),`
`,n(b,{children:"Components"}),`
`,n(e.h1,{id:"cookie-banner",children:"Cookie banner"}),`
`,n(v,{children:"EXPERIMENTAL"}),`
`,o(e.p,{children:["This component is currently experimental because ",n(e.a,{href:"https://design-system.service.gov.uk/components/cookie-banner/#research-on-this-component",target:"_blank",rel:"nofollow noopener noreferrer",children:"more research"})," is needed to validate it."]}),`
`,n(e.p,{children:"Allow users to accept or reject cookies which are not essential to making your service work."}),`
`,n(i,{of:a}),`
`,n(e.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,n(e.p,{children:"Use this component if your service sets any cookies on a user’s device."}),`
`,n(e.p,{children:"Remember, you must:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"tell users about the cookies your service sets on their device"}),`
`,n(e.li,{children:"let users accept or reject any cookies that are not essential to providing your service"}),`
`]}),`
`,n(e.p,{children:"The term ‘non-essential cookies’ includes:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"HTML5 local storage"}),`
`,n(e.li,{children:"service workers"}),`
`,n(e.li,{children:"any other technologies that store files on the user’s device"}),`
`]}),`
`,n(e.p,{children:"This cookie banner and the cookies page pattern are based on the approach to getting cookie consent used on the GOV.UK website."}),`
`,n(e.p,{children:"This component page shows several options for using a cookie banner, based on the types of cookies you’re using in the service. We also tell you what to cover in your cookie banner, with some text examples."}),`
`,n(e.h3,{id:"before-you-start",children:"Before you start"}),`
`,n(e.p,{children:"Audit and categorise your cookies as shown in the cookies page pattern to help you choose the best option for your service."}),`
`,n(e.p,{children:"You must not take the information on this page as legal advice. Your organisation is responsible and accountable for what they do to comply with data protection legislation, such as:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"Privacy and Electronic Communications Regulations (PECR)"}),`
`,n(e.li,{children:"General Data Protection Regulation (GDPR)"}),`
`]}),`
`,n(e.p,{children:"Check with your organisation’s privacy expert to see how data protection legislation affects your website and service."}),`
`,n(e.h2,{id:"how-it-works",children:"How it works"}),`
`,n(e.p,{children:"Show the cookie banner every time the user accesses your service until they either:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"accept or reject cookies using the buttons in the cookie banner"}),`
`,n(e.li,{children:"save their cookie preferences on the service’s cookies page"}),`
`]}),`
`,n(e.p,{children:"Once the user has accepted or rejected cookies, the cookie banner should:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"hide the cookie banner message"}),`
`,n(e.li,{children:"show a confirmation message — and a ‘hide’ button to let the user close the banner"}),`
`,n(e.li,{children:"set a cookie to save the user’s preferences for 1 year"}),`
`]}),`
`,n(e.p,{children:"Make sure the cookie banner does not:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"show when the user visits again, once their preferences have been saved"}),`
`,n(e.li,{children:"set any non-essential cookies unless the user accepted them on a previous visit"}),`
`]}),`
`,o(e.p,{children:["Position the cookie banner after the opening ",n(e.code,{children:"<body>"})," tag and before the ’skip to main content‘ link."]}),`
`,n(e.h3,{id:"option-1-if-youre-only-using-essential-cookies",children:"Option 1: If you’re only using essential cookies"}),`
`,n(e.p,{children:"You can choose not to have a cookie banner if the service only sets essential or ‘strictly necessary’ cookies, as these do not need user consent."}),`
`,n(e.p,{children:"However, you must tell users that you set essential cookies. You can do this with a cookies page — link to this page in the footer."}),`
`,n(e.h3,{id:"option-2-if-you-set-non-essential-cookies-on-the-server",children:"Option 2: If you set non-essential cookies on the server"}),`
`,n(e.p,{children:"You can choose this option if your service sets non-essential cookies on the server — your service may also set non-essential cookies on the client."}),`
`,n(e.p,{children:"To get consent from the user, display the cookie banner inside a form that lets them submit their choice to accept or reject cookies."}),`
`,n(e.p,{children:"All users will be able to see the banner as this approach does not rely on JavaScript."}),`
`,n(e.p,{children:"Here’s an example of a cookie banner inside a form:"}),`
`,n(i,{of:d}),`
`,n(e.p,{children:"Once the user has accepted or rejected cookies and set their cookie preferences, reload the page to show a confirmation message."}),`
`,n(e.p,{children:"Here’s an example of a confirmation message inside a form:"}),`
`,n(i,{of:p}),`
`,n(e.h3,{id:"show-the-same-message-to-all-users",children:"Show the same message to all users"}),`
`,n(e.p,{children:"In the cookie banner, tell the user about all the cookies you’re using in the service — whether they’ve enabled JavaScript or not. This way, you will not need to ask the user to give their consent again on their next visit."}),`
`,n(e.h3,{id:"help-users-keep-their-place-using-progressive-enhancement",children:"Help users keep their place using progressive enhancement"}),`
`,n(e.p,{children:"If the user is entering information into a form as part of the service, they might lose their place when they submit their choice to accept or reject cookies."}),`
`,n(e.p,{children:"To help users running JavaScript on their device, you can write some JavaScript code to let them submit their choice and prevent the page from reloading."}),`
`,o(e.p,{children:["Include all possible messages that the user could see in the cookie banner when the page loads. Hide these with the ",n(e.code,{children:"hidden"})," HTML attribute where needed."]}),`
`,o(e.p,{children:["Here’s an example of a progressively enhanced cookie banner that includes all possible messages which are hidden using HTML — the cookie banner message is shown using JavaScript to remove the ",n(e.code,{children:"hidden"})," attribute:"]}),`
`,n(i,{of:u}),`
`,n(e.p,{children:"Here’s the same example of a progressively enhanced cookie banner, with the confirmation message shown instead:"}),`
`,n(i,{of:m}),`
`,n(e.h3,{id:"option-3-if-you-set-non-essential-cookies-but-only-on-the-client",children:"Option 3: If you set non-essential cookies, but only on the client"}),`
`,n(e.p,{children:"You can choose to make your banner only work with JavaScript if your service only needs to set non-essential cookies on the client."}),`
`,o(e.p,{children:["When the page loads, the ",n(e.code,{children:"hidden"})," html attribute hides the component, as well as all the cookie banner messages it contains, which the user might otherwise see."]}),`
`,n(e.h4,{id:"show-the-cookie-banner-only-to-users-that-have-enabled-javascript",children:"Show the cookie banner only to users that have enabled JavaScript"}),`
`,o(e.p,{children:["Use JavaScript to show cookie banner messages to users that have not accepted or rejected cookies by removing the ",n(e.code,{children:"hidden"})," attribute as needed."]}),`
`,n(e.p,{children:"Write your own JavaScript code so that when the user accepts or rejects cookies, the cookie banner will:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"hide the cookie message by adding the hidden attribute"}),`
`,n(e.li,{children:"show a confirmation message by removing its hidden attribute"}),`
`,o(e.li,{children:["give the confirmation message the ",n(e.code,{children:'tabindex="-1"'})," and ",n(e.code,{children:'role="alert"'})," attributes — this will allow the element to be focused so assistive technology can read the message"]}),`
`,n(e.li,{children:"shift focus to the confirmation message"}),`
`]}),`
`,n(e.p,{children:"Here’s an example:"}),`
`,n(i,{of:k}),`
`,n(e.h4,{id:"when-the-user-has-accepted-cookies",children:"When the user has accepted cookies"}),`
`,n(e.p,{children:"Show a confirmation message confirming that the user has either accepted or rejected cookies by removing the hidden attribute."}),`
`,n(i,{of:g}),`
`,n(e.h4,{id:"when-the-user-has-rejected-cookies",children:"When the user has rejected cookies"}),`
`,n(i,{of:f}),`
`,n(e.h2,{id:"what-to-cover-in-your-cookie-banner",children:"What to cover in your cookie banner"}),`
`,n(e.p,{children:"Include the name of the service in the banner heading to help users understand that the cookies you’re talking about are different from the ones set by the main GOV.UK platform."}),`
`,n(e.p,{children:"You’ll need to change the example cookie banner text if your service:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"allows third parties to set cookies (tell the user that both your organisation and other organisations will be setting cookies)"}),`
`,n(e.li,{children:"uses cookies for reasons other than collecting analytics information or remembering the user’s settings"}),`
`]}),`
`,n(e.p,{children:`Keep the text as short as possible while making sure it’s an accurate description of how you use cookies.
For example, if you use more than one ‘functional’ cookie and there’s not enough space to mention what each of them does, you could ask for permission to set cookies so ‘you can use as many of the service’s features as possible’.`}),`
`,n(e.h3,{id:"if-youre-using-essential-cookies-and-analytics-cookies",children:"If you’re using essential cookies and analytics cookies"}),`
`,n(e.p,{children:"You can use this example text for a service which sets essential and analytics cookies. Analytics cookies are those set by your organisation to collect information about how people are using your digital service."}),`
`,n(i,{of:a}),`
`,n(e.h3,{id:"if-youre-using-more-than-one-type-of-non-essential-cookie",children:"If you’re using more than one type of non-essential cookie"}),`
`,n(e.p,{children:"You can use this example text for a service that set:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"essential cookies"}),`
`,n(e.li,{children:"analytics cookies"}),`
`,n(e.li,{children:"functional cookies to remember the user’s settings but are not essential"}),`
`]}),`
`,n(i,{of:y}),`
`,n(e.h2,{id:"creating-a-cookies-page",children:"Creating a cookies page"}),`
`,o(e.p,{children:["You’ll need a ",n(e.a,{href:"",children:"cookies page"})," as well as a cookie banner."]})]})}}export{ee as default};
//# sourceMappingURL=CookieBanner-8d8c9ea5.js.map
