import{C as o}from"./CharacterCount.291a0ce6.js";import"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const r="character-count",s=[{name:"default",options:{name:"more-detail",id:"more-detail",maxlength:10,label:{text:"Can you provide more detail?"}},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-info"></textarea>
</div>

  
  <div id="more-detail-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with custom textarea description",options:{name:"custom-textarea-description",id:"custom-textarea-description",maxlength:10,textareaDescriptionText:"Gallwch ddefnyddio hyd at %{count} nod"},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  


  <textarea class="govuk-textarea govuk-js-character-count" id="custom-textarea-description" name="custom-textarea-description" rows="5" aria-describedby="custom-textarea-description-info"></textarea>
</div>

  
  <div id="custom-textarea-description-info" class="govuk-hint govuk-character-count__message">
  Gallwch ddefnyddio hyd at 10 nod
</div>

</div>`},{name:"with hint",options:{name:"with-hint",id:"with-hint",maxlength:10,label:{text:"Can you provide more detail?"},hint:{text:"Don't include personal or financial information, eg your National Insurance number or credit card details."}},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="with-hint">
    Can you provide more detail?
  </label>

  
  
  <div id="with-hint-hint" class="govuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>


  <textarea class="govuk-textarea govuk-js-character-count" id="with-hint" name="with-hint" rows="5" aria-describedby="with-hint-info with-hint-hint"></textarea>
</div>

  
  <div id="with-hint-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with default value",options:{id:"with-default-value",name:"default-value",maxlength:100,label:{text:"Full address"},value:`221B Baker Street
London
NW1 6XE
`},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="100"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="with-default-value">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="with-default-value" name="default-value" rows="5" aria-describedby="with-default-value-info">221B Baker Street
London
NW1 6XE
</textarea>
</div>

  
  <div id="with-default-value-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 100 characters
</div>

</div>`},{name:"with default value exceeding limit",options:{id:"exceeding-characters",name:"exceeding",maxlength:10,value:`221B Baker Street
London
NW1 6XE
`,label:{text:"Full address"},errorMessage:{text:"Please do not exceed the maximum allowed limit"}},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="exceeding-characters">
    Full address
  </label>


  
  
  <p id="exceeding-characters-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please do not exceed the maximum allowed limit
  </p>

  <textarea class="govuk-textarea govuk-textarea--error govuk-js-character-count" id="exceeding-characters" name="exceeding" rows="5" aria-describedby="exceeding-characters-info exceeding-characters-error">221B Baker Street
London
NW1 6XE
</textarea>
</div>

  
  <div id="exceeding-characters-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with custom rows",options:{id:"custom-rows",name:"custom",maxlength:10,label:{text:"Full address"},rows:8},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="custom-rows">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="custom-rows" name="custom" rows="8" aria-describedby="custom-rows-info"></textarea>
</div>

  
  <div id="custom-rows-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with label as page heading",options:{id:"textarea-with-page-heading",name:"address",maxlength:10,label:{text:"Full address",classes:"govuk-label--l",isPageHeading:!0}},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="textarea-with-page-heading">
      Full address
    </label>
    </h1>


  <textarea class="govuk-textarea govuk-js-character-count" id="textarea-with-page-heading" name="address" rows="5" aria-describedby="textarea-with-page-heading-info"></textarea>
</div>

  
  <div id="textarea-with-page-heading-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with word count",options:{id:"word-count",name:"word-count",maxwords:10,label:{text:"Full address"}},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxwords="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="word-count">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="word-count" name="word-count" rows="5" aria-describedby="word-count-info"></textarea>
</div>

  
  <div id="word-count-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 words
</div>

</div>`},{name:"with threshold",options:{id:"with-threshold",name:"with-threshold",maxlength:10,threshold:75,label:{text:"Full address"}},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10" data-threshold="75"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="with-threshold">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="with-threshold" name="with-threshold" rows="5" aria-describedby="with-threshold-info"></textarea>
</div>

  
  <div id="with-threshold-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with translations",options:{id:"with-translations",name:"with-translations",maxlength:10,charactersUnderLimitText:{other:"%{count} characters to go",one:"One character to go"},charactersAtLimitText:"Zero characters left",charactersOverLimitText:{other:"%{count} characters too many",one:"One character too many"},wordsUnderLimitText:{other:"%{count} words to go",one:"One word to go"},wordsAtLimitText:"Zero words left",wordsOverLimitText:{other:"%{count} words too many",one:"One word too many"}},hidden:!1,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"

   data-i18n.characters-under-limit.other="%{count} characters to go" data-i18n.characters-under-limit.one="One character to go"
 data-i18n.characters-at-limit="Zero characters left"
   data-i18n.characters-over-limit.other="%{count} characters too many" data-i18n.characters-over-limit.one="One character too many"

   data-i18n.words-under-limit.other="%{count} words to go" data-i18n.words-under-limit.one="One word to go"
 data-i18n.words-at-limit="Zero words left"
   data-i18n.words-over-limit.other="%{count} words too many" data-i18n.words-over-limit.one="One word too many"
>
  

<div class="govuk-form-group">
  


  <textarea class="govuk-textarea govuk-js-character-count" id="with-translations" name="with-translations" rows="5" aria-describedby="with-translations-info"></textarea>
</div>

  
  <div id="with-translations-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"classes",options:{id:"with-classes",name:"with-classes",maxlength:10,label:{text:"With classes"},classes:"app-character-count--custom-modifier"},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="with-classes">
    With classes
  </label>


  <textarea class="govuk-textarea govuk-js-character-count app-character-count--custom-modifier" id="with-classes" name="with-classes" rows="5" aria-describedby="with-classes-info"></textarea>
</div>

  
  <div id="with-classes-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"attributes",options:{id:"with-attributes",name:"with-attributes",maxlength:10,label:{text:"With attributes"},attributes:{"data-attribute":"my data value"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="with-attributes">
    With attributes
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="with-attributes" name="with-attributes" rows="5" aria-describedby="with-attributes-info" data-attribute="my data value"></textarea>
</div>

  
  <div id="with-attributes-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"formGroup with classes",options:{id:"with-formgroup",name:"with-formgroup",maxlength:10,label:{text:"With formgroup"},formGroup:{classes:"app-character-count--custom-modifier"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group app-character-count--custom-modifier">
  <label class="govuk-label" for="with-formgroup">
    With formgroup
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="with-formgroup" name="with-formgroup" rows="5" aria-describedby="with-formgroup-info"></textarea>
</div>

  
  <div id="with-formgroup-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"custom classes on countMessage",options:{id:"with-custom-countmessage-class",name:"with-custom-countmessage-class",maxlength:10,label:{text:"With custom countMessage class"},countMessage:{classes:"app-custom-count-message"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="with-custom-countmessage-class">
    With custom countMessage class
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="with-custom-countmessage-class" name="with-custom-countmessage-class" rows="5" aria-describedby="with-custom-countmessage-class-info"></textarea>
</div>

  
  <div id="with-custom-countmessage-class-info" class="govuk-hint govuk-character-count__message app-custom-count-message">
  You can enter up to 10 characters
</div>

</div>`},{name:"spellcheck enabled",options:{id:"with-spellcheck",name:"with-spellcheck",maxlength:10,label:{text:"With spellcheck"},spellcheck:!0},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="with-spellcheck">
    With spellcheck
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="with-spellcheck" name="with-spellcheck" rows="5" spellcheck="true" aria-describedby="with-spellcheck-info"></textarea>
</div>

  
  <div id="with-spellcheck-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"spellcheck disabled",options:{id:"without-spellcheck",name:"without-spellcheck",maxlength:10,label:{text:"Without spellcheck"},spellcheck:!1},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="without-spellcheck">
    Without spellcheck
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="without-spellcheck" name="without-spellcheck" rows="5" spellcheck="false" aria-describedby="without-spellcheck-info"></textarea>
</div>

  
  <div id="without-spellcheck-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"custom classes with error message",options:{id:"with-custom-error-class",name:"with-custom-error-class",maxlength:10,label:{text:"With custom error class"},classes:"app-character-count--custom-modifier",errorMessage:{text:"Error message"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="with-custom-error-class">
    With custom error class
  </label>


  
  
  <p id="with-custom-error-class-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <textarea class="govuk-textarea govuk-textarea--error govuk-js-character-count app-character-count--custom-modifier" id="with-custom-error-class" name="with-custom-error-class" rows="5" aria-describedby="with-custom-error-class-info with-custom-error-class-error"></textarea>
</div>

  
  <div id="with-custom-error-class-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with id starting with number",options:{name:"more-detail",id:"1_more-detail",maxlength:10,label:{text:"Can you provide more detail?"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="1_more-detail">
    Can you provide more detail?
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="1_more-detail" name="more-detail" rows="5" aria-describedby="1_more-detail-info"></textarea>
</div>

  
  <div id="1_more-detail-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with id with special characters",options:{id:"user1.profile[address]",name:"address",maxlength:10,label:{text:"Full address"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="user1.profile[address]">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="user1.profile[address]" name="address" rows="5" aria-describedby="user1.profile[address]-info"></textarea>
</div>

  
  <div id="user1.profile[address]-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"with textarea maxlength attribute",options:{id:"maxlength-should-be-removed",name:"address",maxlength:10,attributes:{maxlength:10},label:{text:"Full address"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="maxlength-should-be-removed">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="maxlength-should-be-removed" name="address" rows="5" aria-describedby="maxlength-should-be-removed-info" maxlength="10"></textarea>
</div>

  
  <div id="maxlength-should-be-removed-info" class="govuk-hint govuk-character-count__message">
  You can enter up to 10 characters
</div>

</div>`},{name:"to configure in JavaScript",options:{id:"to-configure-in-javascript",name:"address",label:{text:"Full address"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="to-configure-in-javascript">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="to-configure-in-javascript" name="address" rows="5" aria-describedby="to-configure-in-javascript-info"></textarea>
</div>

  
  <div id="to-configure-in-javascript-info" class="govuk-hint govuk-character-count__message">
  
</div>

</div>`},{name:"when neither maxlength nor maxwords are set",options:{id:"no-maximum",name:"no-maximum",label:{text:"Full address"},textareaDescriptionText:"No more than %{count} characters"},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count"

   data-i18n.textarea-description.other="No more than %{count} characters"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="no-maximum">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="no-maximum" name="no-maximum" rows="5" aria-describedby="no-maximum-info"></textarea>
</div>

  
  <div id="no-maximum-info" class="govuk-hint govuk-character-count__message">
  
</div>

</div>`},{name:"when neither maxlength/maxwords nor textarea description are set",options:{id:"no-maximum",name:"no-maximum",label:{text:"Full address"}},hidden:!0,html:`<div class="govuk-character-count" data-module="govuk-character-count"
>
  

<div class="govuk-form-group">
  <label class="govuk-label" for="no-maximum">
    Full address
  </label>


  <textarea class="govuk-textarea govuk-js-character-count" id="no-maximum" name="no-maximum" rows="5" aria-describedby="no-maximum-info"></textarea>
</div>

  
  <div id="no-maximum-info" class="govuk-hint govuk-character-count__message">
  
</div>

</div>`}],i={component:r,fixtures:s},_={title:"CharacterCount",component:o},c={name:"default"},l={name:"with custom textarea description"},d={name:"with hint"},u={name:"with default value"},h={name:"with default value exceeding limit"},m={name:"with custom rows"},v={name:"with label as page heading"},g={name:"with word count"},k={name:"with threshold"},p={name:"with translations"},e=[];e.push(c);e.push(l);e.push(d);e.push(u);e.push(h);e.push(m);e.push(v);e.push(g);e.push(k);e.push(p);i.fixtures.forEach(a=>{let t=e.find(n=>n.name===a.name.replace(/[^a-z0-9s]/gi,""))||{};t.name===a.name&&(t.args={name:a.options.name,id:a.options.id,maxlength:a.options.maxlength,label:a.options.label,textareaDescriptionText:a.options.textareaDescriptionText,hint:a.options.hint,value:a.options.value,errorMessage:a.options.errorMessage,rows:a.options.rows,maxwords:a.options.maxwords,threshold:a.options.threshold,charactersUnderLimitText:a.options.charactersUnderLimitText,charactersAtLimitText:a.options.charactersAtLimitText,charactersOverLimitText:a.options.charactersOverLimitText,wordsUnderLimitText:a.options.wordsUnderLimitText,wordsAtLimitText:a.options.wordsAtLimitText,wordsOverLimitText:a.options.wordsOverLimitText,classes:a.options.classes,attributes:a.options.attributes,formGroup:a.options.formGroup,countMessage:a.options.countMessage,spellcheck:a.options.spellcheck})});const y=["primary","withCustomTextareaDescription","withHint","withDefaultValue","withDefaultValueExceedingLimit","withCustomRows","withLabelAsPageHeading","withWordCount","withThreshold","withTranslations"];export{y as __namedExportsOrder,_ as default,c as primary,m as withCustomRows,l as withCustomTextareaDescription,u as withDefaultValue,h as withDefaultValueExceedingLimit,d as withHint,v as withLabelAsPageHeading,k as withThreshold,p as withTranslations,g as withWordCount};
//# sourceMappingURL=CharacterCount.stories.2b559bf0.js.map
