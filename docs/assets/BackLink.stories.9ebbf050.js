import{B as o}from"./BackLink.48f318ff.js";import"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const n="back-link",c=[{name:"default",options:{href:"#"},hidden:!1,html:'<a href="#" class="govuk-back-link">Back</a>'},{name:"with custom text",options:{href:"#",text:"Back to home"},hidden:!1,html:'<a href="#" class="govuk-back-link">Back to home</a>'},{name:"classes",options:{classes:"app-back-link--custom-class",href:"#"},hidden:!0,html:'<a href="#" class="govuk-back-link app-back-link--custom-class">Back</a>'},{name:"html as text",options:{text:"<b>Home</b>",href:"#"},hidden:!0,html:'<a href="#" class="govuk-back-link">&lt;b&gt;Home&lt;/b&gt;</a>'},{name:"html",options:{html:"<b>Back</b>",href:"#"},hidden:!0,html:'<a href="#" class="govuk-back-link"><b>Back</b></a>'},{name:"attributes",options:{href:"#",html:"<b>Back to home</b>",attributes:{"data-test":"attribute","aria-label":"Back to home"}},hidden:!0,html:'<a href="#" class="govuk-back-link" data-test="attribute" aria-label="Back to home"><b>Back to home</b></a>'}],i={component:n,fixtures:c},p={title:"BackLink",component:o},m={name:"default"},l={name:"with custom text"},a=[];a.push(m);a.push(l);i.fixtures.forEach(t=>{let e=a.find(s=>s.name===t.name.replace(/[^a-z0-9s]/gi,""))||{};e.name===t.name&&(e.args={href:t.options.href,text:t.options.text,classes:t.options.classes,attributes:t.options.attributes})});const u=["primary","withCustomText"];export{u as __namedExportsOrder,p as default,m as primary,l as withCustomText};
//# sourceMappingURL=BackLink.stories.9ebbf050.js.map