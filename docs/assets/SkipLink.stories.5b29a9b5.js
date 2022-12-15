import{S as i}from"./SkipLink.68447f01.js";import"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const e="skip-link",a=[{name:"default",options:{text:"Skip to main content",href:"#content"},hidden:!1,html:'<a href="#content" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>'},{name:"with focus",options:{classes:":focus",text:"Skip to main content",href:"#content"},hidden:!1,html:'<a href="#content" class="govuk-skip-link :focus" data-module="govuk-skip-link">Skip to main content</a>'},{name:"no href",options:{text:"Skip to main content"},hidden:!0,html:'<a href="#content" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>'},{name:"custom href",options:{text:"Skip to custom content",href:"#custom"},hidden:!0,html:'<a href="#custom" class="govuk-skip-link" data-module="govuk-skip-link">Skip to custom content</a>'},{name:"custom text",options:{text:"skip"},hidden:!0,html:'<a href="#content" class="govuk-skip-link" data-module="govuk-skip-link">skip</a>'},{name:"html as text",options:{text:"<p>skip</p>"},hidden:!0,html:'<a href="#content" class="govuk-skip-link" data-module="govuk-skip-link">&lt;p&gt;skip&lt;/p&gt;</a>'},{name:"html",options:{html:"<p>skip</p>"},hidden:!0,html:'<a href="#content" class="govuk-skip-link" data-module="govuk-skip-link"><p>skip</p></a>'},{name:"classes",options:{text:"Skip link",classes:"app-skip-link--custom-class"},hidden:!0,html:'<a href="#content" class="govuk-skip-link app-skip-link--custom-class" data-module="govuk-skip-link">Skip link</a>'},{name:"attributes",options:{text:"Skip link",attributes:{"data-test":"attribute","aria-label":"Skip to content"}},hidden:!0,html:'<a href="#content" class="govuk-skip-link" data-test="attribute" aria-label="Skip to content" data-module="govuk-skip-link">Skip link</a>'}],k={component:e,fixtures:a},h={title:"SkipLink",component:i},p={name:"default"},l={name:"with focus"},n=[];n.push(p);n.push(l);k.fixtures.forEach(t=>{let o=n.find(s=>s.name===t.name.replace(/[^a-z0-9s]/gi,""))||{};o.name===t.name&&(o.args={text:t.options.text,href:t.options.href,classes:t.options.classes,html:t.options.html,attributes:t.options.attributes})});const d=["primary","withFocus"];export{d as __namedExportsOrder,h as default,p as primary,l as withFocus};
//# sourceMappingURL=SkipLink.stories.5b29a9b5.js.map
