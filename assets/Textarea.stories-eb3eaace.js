import{T as s}from"./Textarea-af6ce767.js";import"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./ErrorMessage-5eec86f5.js";import"./FormGroup-df38f41d.js";import"./Hint-44397457.js";import"./Label-8f102d27.js";const i="textarea",n=[{name:"default",options:{name:"more-detail",id:"more-detail",label:{text:"Can you provide more detail?"}},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>


  <textarea class="govuk-textarea" id="more-detail" name="more-detail" rows="5"></textarea>
</div>`},{name:"with hint",options:{name:"more-detail",id:"more-detail",label:{text:"Can you provide more detail?"},hint:{text:"Don't include personal or financial information, eg your National Insurance number or credit card details."}},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>

  
  
  <div id="more-detail-hint" class="govuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>


  <textarea class="govuk-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>`},{name:"with error message",options:{name:"no-ni-reason",id:"no-ni-reason",label:{text:"Why can’t you provide a National Insurance number?"},errorMessage:{text:"You must provide an explanation"}},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="no-ni-reason">
    Why can’t you provide a National Insurance number?
  </label>


  
  
  <p id="no-ni-reason-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> You must provide an explanation
  </p>

  <textarea class="govuk-textarea govuk-textarea--error" id="no-ni-reason" name="no-ni-reason" rows="5" aria-describedby="no-ni-reason-error"></textarea>
</div>`},{name:"with default value",options:{id:"full-address",name:"address",value:`221B Baker Street
London
NW1 6XE
`,label:{text:"Full address"}},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="full-address">
    Full address
  </label>


  <textarea class="govuk-textarea" id="full-address" name="address" rows="5">221B Baker Street
London
NW1 6XE
</textarea>
</div>`},{name:"with custom rows",options:{id:"full-address",name:"address",label:{text:"Full address"},rows:8},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="full-address">
    Full address
  </label>


  <textarea class="govuk-textarea" id="full-address" name="address" rows="8"></textarea>
</div>`},{name:"with label as page heading",options:{id:"textarea-with-page-heading",name:"address",label:{text:"Full address",classes:"govuk-label--l",isPageHeading:!0}},hidden:!1,html:`<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="textarea-with-page-heading">
      Full address
    </label>
    </h1>


  <textarea class="govuk-textarea" id="textarea-with-page-heading" name="address" rows="5"></textarea>
</div>`},{name:"with optional form-group classes",options:{id:"textarea-with-page-heading",name:"address",label:{text:"Full address"},formGroup:{classes:"extra-class"}},hidden:!1,html:`<div class="govuk-form-group extra-class">
  <label class="govuk-label" for="textarea-with-page-heading">
    Full address
  </label>


  <textarea class="govuk-textarea" id="textarea-with-page-heading" name="address" rows="5"></textarea>
</div>`},{name:"with autocomplete attribute",options:{id:"textarea-with-autocomplete-attribute",name:"address",label:{text:"Full address"},autocomplete:"street-address"},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="textarea-with-autocomplete-attribute">
    Full address
  </label>


  <textarea class="govuk-textarea" id="textarea-with-autocomplete-attribute" name="address" rows="5" autocomplete="street-address"></textarea>
</div>`},{name:"with spellcheck enabled",options:{label:{text:"Spellcheck is enabled"},id:"textarea-with-spellcheck-enabled",name:"spellcheck",spellcheck:!0},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="textarea-with-spellcheck-enabled">
    Spellcheck is enabled
  </label>


  <textarea class="govuk-textarea" id="textarea-with-spellcheck-enabled" name="spellcheck" rows="5" spellcheck="true"></textarea>
</div>`},{name:"with spellcheck disabled",options:{label:{text:"Spellcheck is disabled"},id:"textarea-with-spellcheck-disabled",name:"spellcheck",spellcheck:!1},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="textarea-with-spellcheck-disabled">
    Spellcheck is disabled
  </label>


  <textarea class="govuk-textarea" id="textarea-with-spellcheck-disabled" name="spellcheck" rows="5" spellcheck="false"></textarea>
</div>`},{name:"classes",options:{id:"with-classes",name:"with-classes",label:{text:"With classes"},classes:"app-textarea--custom-modifier"},hidden:!0,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="with-classes">
    With classes
  </label>


  <textarea class="govuk-textarea app-textarea--custom-modifier" id="with-classes" name="with-classes" rows="5"></textarea>
</div>`},{name:"attributes",options:{id:"with-attributes",name:"with-attributes",label:{text:"With attributes"},attributes:{"data-attribute":"my data value"}},hidden:!0,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="with-attributes">
    With attributes
  </label>


  <textarea class="govuk-textarea" id="with-attributes" name="with-attributes" rows="5" data-attribute="my data value"></textarea>
</div>`},{name:"with describedBy",options:{id:"with-describedby",name:"with-describedby",label:{text:"With describedBy"},describedBy:"some-id"},hidden:!0,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="with-describedby">
    With describedBy
  </label>


  <textarea class="govuk-textarea" id="with-describedby" name="with-describedby" rows="5" aria-describedby="some-id"></textarea>
</div>`},{name:"with hint and described by",options:{id:"with-hint-describedby",name:"with-hint-describedby",label:{text:"With hint and describedBy"},describedBy:"some-id",hint:{text:"It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."}},hidden:!0,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="with-hint-describedby">
    With hint and describedBy
  </label>

  
  
  <div id="with-hint-describedby-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>


  <textarea class="govuk-textarea" id="with-hint-describedby" name="with-hint-describedby" rows="5" aria-describedby="some-id with-hint-describedby-hint"></textarea>
</div>`},{name:"with error message and described by",options:{name:"textarea-with-error",label:{text:"Textarea with error"},describedBy:"some-id",id:"textarea-with-error",errorMessage:{text:"Error message"}},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="textarea-with-error">
    Textarea with error
  </label>


  
  
  <p id="textarea-with-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <textarea class="govuk-textarea govuk-textarea--error" id="textarea-with-error" name="textarea-with-error" rows="5" aria-describedby="some-id textarea-with-error-error"></textarea>
</div>`},{name:"with hint and error message",options:{id:"with-hint-error",name:"with-hint-error",label:{text:"With hint and error"},errorMessage:{text:"Error message"},hint:{text:"Hint"}},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="with-hint-error">
    With hint and error
  </label>

  
  
  <div id="with-hint-error-hint" class="govuk-hint">
    Hint
  </div>


  
  
  <p id="with-hint-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <textarea class="govuk-textarea govuk-textarea--error" id="with-hint-error" name="with-hint-error" rows="5" aria-describedby="with-hint-error-hint with-hint-error-error"></textarea>
</div>`},{name:"with hint, error message and described by",options:{id:"with-hint-error-describedby",name:"with-hint-error-describedby",label:{text:"With hint, error and describedBy"},describedBy:"some-id",errorMessage:{text:"Error message"},hint:{text:"Hint"}},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="with-hint-error-describedby">
    With hint, error and describedBy
  </label>

  
  
  <div id="with-hint-error-describedby-hint" class="govuk-hint">
    Hint
  </div>


  
  
  <p id="with-hint-error-describedby-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <textarea class="govuk-textarea govuk-textarea--error" id="with-hint-error-describedby" name="with-hint-error-describedby" rows="5" aria-describedby="some-id with-hint-error-describedby-hint with-hint-error-describedby-error"></textarea>
</div>`}],o={component:i,fixtures:n},F={title:"Textarea",component:s},l={name:"default"},d={name:"with hint"},h={name:"with error message"},c={name:"with default value"},u={name:"with custom rows"},b={name:"with label as page heading"},m={name:"with optional formgroup classes"},p={name:"with autocomplete attribute"},g={name:"with spellcheck enabled"},v={name:"with spellcheck disabled"},a=[];a.push(l);a.push(d);a.push(h);a.push(c);a.push(u);a.push(b);a.push(m);a.push(p);a.push(g);a.push(v);o.fixtures.forEach(e=>{let t=a.find(r=>r.name===e.name.replace(/[^a-z0-9s]/gi,""))||{};t.name===e.name&&(t.args={name:e.options.name,id:e.options.id,label:e.options.label,rows:e.options.rows,autocomplete:e.options.autocomplete,spellcheck:e.options.spellcheck,classes:e.options.classes,attributes:e.options.attributes,describedBy:e.options.describedBy})});const C=["primary","withHint","withErrorMessage","withDefaultValue","withCustomRows","withLabelAsPageHeading","withOptionalFormgroupClasses","withAutocompleteAttribute","withSpellcheckEnabled","withSpellcheckDisabled"];export{C as __namedExportsOrder,F as default,l as primary,p as withAutocompleteAttribute,u as withCustomRows,c as withDefaultValue,h as withErrorMessage,d as withHint,b as withLabelAsPageHeading,m as withOptionalFormgroupClasses,v as withSpellcheckDisabled,g as withSpellcheckEnabled};
//# sourceMappingURL=Textarea.stories-eb3eaace.js.map
