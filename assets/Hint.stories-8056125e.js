import{H as i}from"./Hint-44397457.js";import"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const o="hint",s=[{name:"default",options:{text:`It's on your National Insurance card, benefit letter, payslip or P60.
For example, 'QQ 12 34 56 C'.
`},hidden:!1,html:`<div class="govuk-hint">
  It&#39;s on your National Insurance card, benefit letter, payslip or P60.
For example, &#39;QQ 12 34 56 C&#39;.

</div>`},{name:"with html",options:{html:`It's on your National Insurance card, benefit letter, payslip or <a class="govuk-link" href="#">P60</a>.
For example, 'QQ 12 34 56 C'.
`},hidden:!1,html:`<div class="govuk-hint">
  It's on your National Insurance card, benefit letter, payslip or <a class="govuk-link" href="#">P60</a>.
For example, 'QQ 12 34 56 C'.

</div>`},{name:"classes",options:{id:"example-hint",classes:"app-hint--custom-modifier",text:"It's on your National Insurance card, benefit letter, payslip or P60."},hidden:!0,html:`<div id="example-hint" class="govuk-hint app-hint--custom-modifier">
  It&#39;s on your National Insurance card, benefit letter, payslip or P60.
</div>`},{name:"id",options:{id:"my-hint",text:"It's on your National Insurance card, benefit letter, payslip or P60."},hidden:!0,html:`<div id="my-hint" class="govuk-hint">
  It&#39;s on your National Insurance card, benefit letter, payslip or P60.
</div>`},{name:"html as text",options:{text:"Unexpected <strong>bold text</strong> in body"},hidden:!0,html:`<div class="govuk-hint">
  Unexpected &lt;strong&gt;bold text&lt;/strong&gt; in body
</div>`},{name:"attributes",options:{text:"It's on your National Insurance card, benefit letter, payslip or P60.",attributes:{"data-attribute":"my data value"}},hidden:!0,html:`<div class="govuk-hint" data-attribute="my data value">
  It&#39;s on your National Insurance card, benefit letter, payslip or P60.
</div>`}],r={component:o,fixtures:s},h={title:"Hint",component:i},l={name:"default"},d={name:"with html"},n=[];n.push(l);n.push(d);r.fixtures.forEach(t=>{let e=n.find(a=>a.name===t.name.replace(/[^a-z0-9s]/gi,""))||{};e.name===t.name&&(e.args={children:t.options.text,id:t.options.id,classes:t.options.classes,attributes:t.options.attributes})});const y=["primary","withHtml"];export{y as __namedExportsOrder,h as default,l as primary,d as withHtml};
//# sourceMappingURL=Hint.stories-8056125e.js.map
