import{j as e,a as i,F as l}from"./jsx-runtime-29545a09.js";import{M as d,C as t}from"./index-a6644abe.js";import"./chunk-S4VUQJ4A-16bd699b.js";import{headings as h,headingsLongFormContent as c,headingsWithCaptions as p,nestedCaptions as u,body as g,lead as f,bodySmall as m,fontSize as k,fontWeight as y,links as b,linkNoVisitedState as w,linkNewTab as v,linksOnDarkBackgrounds as x,linkNoUnderline as T,lists as I,bulletedLists as U,numberedLists as S,listExtraSpacing as L,sectionBreak as C}from"./Typography.stories-c510744b.js";import{g as z}from"./Typography-f899da69.js";import{u as s}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ea379913.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";function X(o={}){const{wrapper:r}=Object.assign({},s(),o.components);return r?e(r,Object.assign({},o,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",a:"a",code:"code",strong:"strong"},s(),o.components);return i(l,{children:[e(d,{title:"Styles/Typhography"}),`
`,e(z,{children:"Styles"}),`
`,e(n.h1,{id:"typography",children:"Typography"}),`
`,e(n.h2,{id:"font",children:"Font"}),`
`,e(n.p,{children:"If your service is on the service.gov.uk subdomain you must use the GDS Transport font."}),`
`,e(n.h3,{id:"when-not-to-use-the-gds-transport-font",children:"When not to use the GDS Transport font"}),`
`,e(n.p,{children:"If your service is publicly available on a subdomain other than service.gov.uk, use an alternative typeface like Helvetica or Arial."}),`
`,e(n.p,{children:"If you’re not sure whether you should use GDS Transport, do one of the following:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk#if-your-service-isnt-on-govuk",target:"_blank",rel:"nofollow noopener noreferrer",children:"read the ‘If your service is not on GOV.UK’ section on ‘Making your service look like GOV.UK’"})}),`
`,e(n.li,{children:e(n.a,{href:"https://design-system.service.gov.uk/get-in-touch/",target:"_blank",rel:"nofollow noopener noreferrer",children:"contact the Design System team"})}),`
`]}),`
`,e(n.h2,{id:"headings",children:"Headings"}),`
`,e(t,{of:h}),`
`,e(t,{of:c}),`
`,e(n.h2,{id:"headings-with-captions",children:"Headings with captions"}),`
`,e(n.p,{children:"Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading with a caption above it."}),`
`,e(t,{of:p}),`
`,i(n.p,{children:["If the caption should be considered part of the page heading, you can also nest the caption within the heading ",e(n.code,{children:"<Typography>"})," component."]}),`
`,e(t,{of:u}),`
`,e(n.h2,{id:"paragraphs",children:"Paragraphs"}),`
`,e(n.h3,{id:"body",children:"Body"}),`
`,e(n.p,{children:"The default paragraph font size is 19px on large screens and 16px on small screens."}),`
`,e(t,{of:g}),`
`,e(n.p,{children:"You can also add classes to create a lead paragraph or smaller body copy to convey hierarchy in your page."}),`
`,e(n.h3,{id:"lead-paragraph",children:"Lead paragraph"}),`
`,e(n.p,{children:"A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content. Lead paragraphs use 24px type on desktop and should only be used once per page if needed."}),`
`,e(t,{of:f}),`
`,e(n.h3,{id:"body-small",children:"Body small"}),`
`,e(n.p,{children:"You can use the govuk-body-s class sparingly to make your paragraph font size smaller: 16px on larger screens and 14px on smaller screens."}),`
`,e(n.p,{children:"The majority of your body copy should use the standard 19px paragraph size."}),`
`,e(t,{of:m}),`
`,e(n.h2,{id:"text-alignment-override-classes",children:"Text alignment override classes"}),`
`,e(n.p,{children:"If you need to align text differently to how it usually displays on the page, you can use text alignment override classes."}),`
`,e(n.p,{children:"Use:"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"govuk-!-text-align-left"})," to align text to the left"]}),`
`,i(n.li,{children:[e(n.code,{children:"govuk-!-text-align-right"})," to align text to the right"]}),`
`,i(n.li,{children:[e(n.code,{children:"govuk-!-text-align-centre"})," to align text to the centre"]}),`
`]}),`
`,e(n.p,{children:"You should usually left-align body copy that’s read left to right. Right-aligned body copy can be hard for users to find and read when they magnify their screen."}),`
`,e(n.p,{children:"Do not ‘justify’ blocks of body copy so that they’re aligned to both the left and right margins. Doing this creates wider spaces between words, which can make the text hard to read."}),`
`,e(n.h2,{id:"font-override-classes",children:"Font override classes"}),`
`,e(n.p,{children:"You might need to set the font size or font weight of an element outside of the predefined heading and paragraph classes. For this you can use the font override classes in your HTML or reference the typography mixins in your own components."}),`
`,e(n.h3,{id:"font-size",children:"Font size"}),`
`,e(n.p,{children:"The full GOV.UK typography scale goes from 14px up to 80px on large screens. You can add these font size override classes to any other typographic class or element and they will change the font size."}),`
`,e(t,{of:k}),`
`,e(n.h3,{id:"font-weight",children:"Font weight"}),`
`,e(n.p,{children:"As with the font size, you can add a font weight override class to any other typographic class or element to change the font weight to regular or bold weight."}),`
`,e(t,{of:y}),`
`,e(n.p,{children:`Bold text
You can use bold to emphasise particular words in a transaction. Use it to highlight critical information that users need to refer to or you’ve seen them miss.`}),`
`,i(n.p,{children:['For example, "Your reference number is ',e(n.strong,{children:"ABC12345678"}),". Use this to track your application. Updates will be sent to ",e(n.strong,{children:"name @example.com"}),'"']}),`
`,e(n.p,{children:"Use bold sparingly. Overuse will make it difficult for users to know which parts of your content they need to pay the most attention to."}),`
`,e(n.h2,{id:"links",children:"Links"}),`
`,e(n.p,{children:"Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop."}),`
`,e(t,{of:b}),`
`,i(n.p,{children:["Use the ",e(n.code,{children:"govuk-link--no-visited-state"})," modifier class where it is not helpful to distinguish between visited and unvisited states, for example when linking to pages with frequently-changing content such as the dashboard for an admin interface."]}),`
`,e(t,{of:w}),`
`,e(n.h3,{id:"external-links",children:"External links"}),`
`,e(n.p,{children:"If it’s an external link to a non-government website, make that clear in the link text. For example, ‘read advice on writing link text from [name of organisation]’. There’s no need to say explicitly that you’re linking to an external site. Do not use an external link icon."}),`
`,e(n.h3,{id:"opening-links-in-a-new-tab",children:"Opening links in a new tab"}),`
`,i(n.p,{children:["Avoid opening links in a new tab or window. It can be disorienting - and ",e(n.a,{href:"https://www.w3.org/TR/WCAG20-TECHS/G200.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"can cause accessibility problems for people who cannot visually perceive that the new tab has opened"}),"."]}),`
`,e(n.p,{children:"If you need a link to open in a new tab - for example, to stop the user losing information they’ve entered into a form - then include the words ‘opens in new tab’ as part of the link. There’s no need to say ‘tab or window’, since opening in a new tab is the default behaviour for most browsers."}),`
`,i(n.p,{children:["Include ",e(n.code,{children:'rel="noreferrer noopener"'})," along with ",e(n.code,{children:'target="_blank"'})," to reduce the risk of ",e(n.a,{href:"https://owasp.org/www-community/attacks/Reverse_Tabnabbing",target:"_blank",rel:"nofollow noopener noreferrer",children:"reverse tabnabbing"}),". The following example shows how to do this in HTML."]}),`
`,e(t,{of:v}),`
`,e(n.p,{children:"If you’re displaying lots of links together and want to save space and avoid repetition, consider doing both of the following:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"adding a line of text before the links saying ‘The following links open in a new tab’"}),`
`,i(n.li,{children:["including ",e(n.code,{children:'<span class="govuk-visually-hidden">(opens in new tab)</span>'})," as part of the link text, so that part of the link text is visually hidden but still accessible to screen readers"]}),`
`]}),`
`,e(n.h3,{id:"links-on-dark-backgrounds",children:"Links on dark backgrounds"}),`
`,i(n.p,{children:["Use the ",e(n.code,{children:"govuk-link--inverse"})," modifier class to show white links on dark backgrounds — for example, in headers, custom components, and patterns with darker backgrounds."]}),`
`,i(n.p,{children:["Make sure all users can see the links — the white links and background colour ",e(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"must have a contrast ratio of at least 4.5:1"}),"."]}),`
`,e(t,{of:x,className:"dark-background"}),`
`,e(n.h3,{id:"links-without-underlines",children:"Links without underlines"}),`
`,i(n.p,{children:["Use the ",e(n.code,{children:"govuk-link--no-underline"})," modifier class to remove underlines from links."]}),`
`,e(n.p,{children:"Only do this if the context tells the user that the text is a link, even without the underline."}),`
`,e(n.p,{children:"For example, links in a header or side navigation might not need underlines. Users will understand that they’re links because of where they are, at the same place, across different pages."}),`
`,e(t,{of:T}),`
`,e(n.h2,{id:"lists",children:"Lists"}),`
`,e(n.p,{children:"Use lists to make blocks of text easier to read, and to break information into manageable chunks."}),`
`,e(t,{of:I}),`
`,e(n.h3,{id:"bulleted-lists",children:"Bulleted lists"}),`
`,e(n.p,{children:"Introduce bulleted lists with a lead-in line ending in a colon. Start each item with a lowercase letter, and do not use a full stop at the end."}),`
`,e(t,{of:U}),`
`,e(n.h3,{id:"numbered-lists",children:"Numbered lists"}),`
`,e(n.p,{children:"Use numbered lists instead of bulleted lists when the order of the items is relevant."}),`
`,e(n.p,{children:"You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop because each should be a complete sentence."}),`
`,e(t,{of:S}),`
`,e(n.h3,{id:"adding-extra-spacing-between-list-items",children:"Adding extra spacing between list items"}),`
`,e(n.p,{children:"If a list is hard to read because the items run across multiple lines you can add extra spacing."}),`
`,e(t,{of:L}),`
`,e(n.h2,{id:"section-break",children:"Section break"}),`
`,i(n.p,{children:["You can use the ",e(n.code,{children:"govuk-section-break"})," classes on an ",e(n.code,{children:"<hr>"})," element to create a thematic break between sections of content. ",e(n.code,{children:"govuk-section-break"})," has class-based modifiers for different size margins."]}),`
`,i(n.p,{children:["By default ",e(n.code,{children:"govuk-section-break"})," is only visible by its margin. You can add the ",e(n.code,{children:"govuk-section-break--visible"})," class to make it visible with a separator line."]}),`
`,e(t,{of:C})]})}}export{X as default};
//# sourceMappingURL=Typography-04581aaf.js.map
