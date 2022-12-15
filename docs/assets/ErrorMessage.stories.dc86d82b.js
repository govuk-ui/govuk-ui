import{E as r}from"./ErrorMessage.a77cea3a.js";import"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const t="error-message",o=[{name:"default",options:{text:"Error message about full name goes here"},hidden:!1,html:`<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message about full name goes here
</p>`},{name:"translated",options:{visuallyHiddenText:"",html:'<span class="govuk-visually-hidden">Gwall:</span> Neges gwall am yr enw llawn yn mynd yma'},hidden:!1,html:`<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Gwall:</span> Neges gwall am yr enw llawn yn mynd yma
</p>`},{name:"id",options:{id:"my-error-message-id",text:"This is an error message"},hidden:!0,html:`<p id="my-error-message-id" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> This is an error message
</p>`},{name:"classes",options:{classes:"custom-class",text:"This is an error message"},hidden:!0,html:`<p class="govuk-error-message custom-class">
  <span class="govuk-visually-hidden">Error:</span> This is an error message
</p>`},{name:"html as text",options:{text:"Unexpected > in body"},hidden:!0,html:`<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Unexpected &gt; in body
</p>`},{name:"html",options:{html:"Unexpected <b>bold text</b> in body copy"},hidden:!0,html:`<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Unexpected <b>bold text</b> in body copy
</p>`},{name:"attributes",options:{text:"This is an error message",attributes:{"data-test":"attribute",id:"my-error-message"}},hidden:!0,html:`<p class="govuk-error-message" data-test="attribute" id="my-error-message">
  <span class="govuk-visually-hidden">Error:</span> This is an error message
</p>`},{name:"with visually hidden text",options:{text:"Rhowch eich enw llawn",visuallyHiddenText:"Gwall"},hidden:!0,html:`<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Gwall:</span> Rhowch eich enw llawn
</p>`},{name:"visually hidden text removed",options:{text:"There is an error on line 42",visuallyHiddenText:""},hidden:!0,html:`<p class="govuk-error-message">
  There is an error on line 42
</p>`}],l={component:t,fixtures:o},g={title:"ErrorMessage",component:r},i={name:"default"},d={name:"translated"},s=[];s.push(i);s.push(d);l.fixtures.forEach(e=>{let a=s.find(n=>n.name===e.name.replace(/[^a-z0-9s]/gi,""))||{};a.name===e.name&&(a.args={children:e.options.text,visuallyHiddenText:e.options.visuallyHiddenText,id:e.options.id,classes:e.options.classes,attributes:e.options.attributes})});const c=["primary","translated"];export{c as __namedExportsOrder,g as default,i as primary,d as translated};
//# sourceMappingURL=ErrorMessage.stories.dc86d82b.js.map
