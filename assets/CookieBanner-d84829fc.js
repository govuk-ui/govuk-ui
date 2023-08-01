import{j as o,a as n,F as h}from"./jsx-runtime-29545a09.js";import{M as l,C as i}from"./index-27d68b79.js";import"./chunk-S4VUQJ4A-622e07a9.js";import{primary as a,insideForm as d,confirmationMessage as p,hiddenMessages as u,hiddenMessageShown as m,alertRole as k,alertRoleAccepted as g,alertRoleRejected as f,nonEssential as y}from"./CookieBanner.stories-6829eba2.js";import"./Textarea-22722f7a.js";import"./BackLink-db4a3555.js";import"./BreadcrumbItem-4c671eb0.js";import"./Button-c79cc17b.js";import"./CookieBanner-54ff0914.js";import"./Details-b31dbea0.js";import{H as b}from"./Radios-a3c37471.js";import"./Footer-c20a9c5d.js";import"./Header-19efd5f0.js";import"./InsetText-f9c5a393.js";import"./Pagination-e4f0cd70.js";import{T as v}from"./PhaseBanner-85bc883f.js";import"./SkipLink-7ef7355e.js";import"./WarningText-4cfd38cd.js";import{u as c}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2a142ad5.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";import"./Typography-359fe8b4.js";import"./FormGroup-201d2661.js";import"./Fieldset-d9d8ba59.js";import"./Container-045493c7.js";import"./Grid-408885ec.js";function ne(t={}){const{wrapper:s}=Object.assign({},c(),t.components);return s?o(s,Object.assign({},t,{children:o(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",h4:"h4"},c(),t.components);return n(h,{children:[o(l,{title:"Components/Cookie banner"}),`
`,o(b,{children:"Components"}),`
`,o(e.h1,{id:"cookie-banner",children:"Cookie banner"}),`
`,o(v,{children:"EXPERIMENTAL"}),`
`,n(e.p,{children:["This component is currently experimental because ",o(e.a,{href:"https://design-system.service.gov.uk/components/cookie-banner/#research-on-this-component",target:"_blank",rel:"nofollow noopener noreferrer",children:"more research"})," is needed to validate it."]}),`
`,o(e.p,{children:"Allow users to accept or reject cookies which are not essential to making your service work."}),`
`,o(i,{of:a}),`
`,o(e.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,o(e.p,{children:"Use this component if your service sets any cookies on a user’s device."}),`
`,o(e.p,{children:"Remember, you must:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"tell users about the cookies your service sets on their device"}),`
`,o(e.li,{children:"let users accept or reject any cookies that are not essential to providing your service"}),`
`]}),`
`,o(e.p,{children:"The term ‘non-essential cookies’ includes:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"HTML5 local storage"}),`
`,o(e.li,{children:"service workers"}),`
`,o(e.li,{children:"any other technologies that store files on the user’s device"}),`
`]}),`
`,o(e.p,{children:"This cookie banner and the cookies page pattern are based on the approach to getting cookie consent used on the GOV.UK website."}),`
`,o(e.p,{children:"This component page shows several options for using a cookie banner, based on the types of cookies you’re using in the service. We also tell you what to cover in your cookie banner, with some text examples."}),`
`,o(e.h3,{id:"before-you-start",children:"Before you start"}),`
`,o(e.p,{children:"Audit and categorise your cookies as shown in the cookies page pattern to help you choose the best option for your service."}),`
`,o(e.p,{children:"You must not take the information on this page as legal advice. Your organisation is responsible and accountable for what they do to comply with data protection legislation, such as:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"Privacy and Electronic Communications Regulations (PECR)"}),`
`,o(e.li,{children:"General Data Protection Regulation (GDPR)"}),`
`]}),`
`,o(e.p,{children:"Check with your organisation’s privacy expert to see how data protection legislation affects your website and service."}),`
`,o(e.h2,{id:"how-it-works",children:"How it works"}),`
`,o(e.p,{children:"Show the cookie banner every time the user accesses your service until they either:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"accept or reject cookies using the buttons in the cookie banner"}),`
`,o(e.li,{children:"save their cookie preferences on the service’s cookies page"}),`
`]}),`
`,o(e.p,{children:"Once the user has accepted or rejected cookies, the cookie banner should:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"hide the cookie banner message"}),`
`,o(e.li,{children:"show a confirmation message — and a ‘hide’ button to let the user close the banner"}),`
`,o(e.li,{children:"set a cookie to save the user’s preferences for 1 year"}),`
`]}),`
`,o(e.p,{children:"Make sure the cookie banner does not:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"show when the user visits again, once their preferences have been saved"}),`
`,o(e.li,{children:"set any non-essential cookies unless the user accepted them on a previous visit"}),`
`]}),`
`,n(e.p,{children:["Position the cookie banner after the opening ",o(e.code,{children:"<body>"})," tag and before the ’skip to main content‘ link."]}),`
`,o(e.h3,{id:"option-1-if-youre-only-using-essential-cookies",children:"Option 1: If you’re only using essential cookies"}),`
`,o(e.p,{children:"You can choose not to have a cookie banner if the service only sets essential or ‘strictly necessary’ cookies, as these do not need user consent."}),`
`,o(e.p,{children:"However, you must tell users that you set essential cookies. You can do this with a cookies page — link to this page in the footer."}),`
`,o(e.h3,{id:"option-2-if-you-set-non-essential-cookies-on-the-server",children:"Option 2: If you set non-essential cookies on the server"}),`
`,o(e.p,{children:"You can choose this option if your service sets non-essential cookies on the server — your service may also set non-essential cookies on the client."}),`
`,o(e.p,{children:"To get consent from the user, display the cookie banner inside a form that lets them submit their choice to accept or reject cookies."}),`
`,o(e.p,{children:"All users will be able to see the banner as this approach does not rely on JavaScript."}),`
`,o(e.p,{children:"Here’s an example of a cookie banner inside a form:"}),`
`,o(i,{of:d}),`
`,o(e.p,{children:"Once the user has accepted or rejected cookies and set their cookie preferences, reload the page to show a confirmation message."}),`
`,o(e.p,{children:"Here’s an example of a confirmation message inside a form:"}),`
`,o(i,{of:p}),`
`,o(e.h3,{id:"show-the-same-message-to-all-users",children:"Show the same message to all users"}),`
`,o(e.p,{children:"In the cookie banner, tell the user about all the cookies you’re using in the service — whether they’ve enabled JavaScript or not. This way, you will not need to ask the user to give their consent again on their next visit."}),`
`,o(e.h3,{id:"help-users-keep-their-place-using-progressive-enhancement",children:"Help users keep their place using progressive enhancement"}),`
`,o(e.p,{children:"If the user is entering information into a form as part of the service, they might lose their place when they submit their choice to accept or reject cookies."}),`
`,o(e.p,{children:"To help users running JavaScript on their device, you can write some JavaScript code to let them submit their choice and prevent the page from reloading."}),`
`,n(e.p,{children:["Include all possible messages that the user could see in the cookie banner when the page loads. Hide these with the ",o(e.code,{children:"hidden"})," HTML attribute where needed."]}),`
`,n(e.p,{children:["Here’s an example of a progressively enhanced cookie banner that includes all possible messages which are hidden using HTML — the cookie banner message is shown using JavaScript to remove the ",o(e.code,{children:"hidden"})," attribute:"]}),`
`,o(i,{of:u}),`
`,o(e.p,{children:"Here’s the same example of a progressively enhanced cookie banner, with the confirmation message shown instead:"}),`
`,o(i,{of:m}),`
`,o(e.h3,{id:"option-3-if-you-set-non-essential-cookies-but-only-on-the-client",children:"Option 3: If you set non-essential cookies, but only on the client"}),`
`,o(e.p,{children:"You can choose to make your banner only work with JavaScript if your service only needs to set non-essential cookies on the client."}),`
`,n(e.p,{children:["When the page loads, the ",o(e.code,{children:"hidden"})," html attribute hides the component, as well as all the cookie banner messages it contains, which the user might otherwise see."]}),`
`,o(e.h4,{id:"show-the-cookie-banner-only-to-users-that-have-enabled-javascript",children:"Show the cookie banner only to users that have enabled JavaScript"}),`
`,n(e.p,{children:["Use JavaScript to show cookie banner messages to users that have not accepted or rejected cookies by removing the ",o(e.code,{children:"hidden"})," attribute as needed."]}),`
`,o(e.p,{children:"Write your own JavaScript code so that when the user accepts or rejects cookies, the cookie banner will:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"hide the cookie message by adding the hidden attribute"}),`
`,o(e.li,{children:"show a confirmation message by removing its hidden attribute"}),`
`,n(e.li,{children:["give the confirmation message the ",o(e.code,{children:'tabindex="-1"'})," and ",o(e.code,{children:'role="alert"'})," attributes — this will allow the element to be focused so assistive technology can read the message"]}),`
`,o(e.li,{children:"shift focus to the confirmation message"}),`
`]}),`
`,o(e.p,{children:"Here’s an example:"}),`
`,o(i,{of:k}),`
`,o(e.h4,{id:"when-the-user-has-accepted-cookies",children:"When the user has accepted cookies"}),`
`,o(e.p,{children:"Show a confirmation message confirming that the user has either accepted or rejected cookies by removing the hidden attribute."}),`
`,o(i,{of:g}),`
`,o(e.h4,{id:"when-the-user-has-rejected-cookies",children:"When the user has rejected cookies"}),`
`,o(i,{of:f}),`
`,o(e.h2,{id:"what-to-cover-in-your-cookie-banner",children:"What to cover in your cookie banner"}),`
`,o(e.p,{children:"Include the name of the service in the banner heading to help users understand that the cookies you’re talking about are different from the ones set by the main GOV.UK platform."}),`
`,o(e.p,{children:"You’ll need to change the example cookie banner text if your service:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"allows third parties to set cookies (tell the user that both your organisation and other organisations will be setting cookies)"}),`
`,o(e.li,{children:"uses cookies for reasons other than collecting analytics information or remembering the user’s settings"}),`
`]}),`
`,o(e.p,{children:`Keep the text as short as possible while making sure it’s an accurate description of how you use cookies.
For example, if you use more than one ‘functional’ cookie and there’s not enough space to mention what each of them does, you could ask for permission to set cookies so ‘you can use as many of the service’s features as possible’.`}),`
`,o(e.h3,{id:"if-youre-using-essential-cookies-and-analytics-cookies",children:"If you’re using essential cookies and analytics cookies"}),`
`,o(e.p,{children:"You can use this example text for a service which sets essential and analytics cookies. Analytics cookies are those set by your organisation to collect information about how people are using your digital service."}),`
`,o(i,{of:a}),`
`,o(e.h3,{id:"if-youre-using-more-than-one-type-of-non-essential-cookie",children:"If you’re using more than one type of non-essential cookie"}),`
`,o(e.p,{children:"You can use this example text for a service that set:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:"essential cookies"}),`
`,o(e.li,{children:"analytics cookies"}),`
`,o(e.li,{children:"functional cookies to remember the user’s settings but are not essential"}),`
`]}),`
`,o(i,{of:y}),`
`,o(e.h2,{id:"creating-a-cookies-page",children:"Creating a cookies page"}),`
`,n(e.p,{children:["You’ll need a ",o(e.a,{href:"",children:"cookies page"})," as well as a cookie banner."]})]})}}export{ne as default};
//# sourceMappingURL=CookieBanner-d84829fc.js.map
