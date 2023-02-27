import{F as i}from"./FileUpload-b260dab3.js";import"./jsx-runtime-68f49b4e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const r="file-upload",d=[{name:"default",options:{id:"file-upload-1",name:"file-upload-1",label:{text:"Upload a file"}},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>


  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>`},{name:"with hint text",options:{id:"file-upload-2",name:"file-upload-2",label:{text:"Upload your photo"},hint:{text:"Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."}},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-2">
    Upload your photo
  </label>

  
  
  <div id="file-upload-2-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>


  <input class="govuk-file-upload" id="file-upload-2" name="file-upload-2" type="file" aria-describedby="file-upload-2-hint">
</div>`},{name:"with error message and hint",options:{id:"file-upload-3",name:"file-upload-3",label:{text:"Upload a file"},hint:{text:"Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."},errorMessage:{text:"Error message goes here"}},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-3">
    Upload a file
  </label>

  
  
  <div id="file-upload-3-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>


  
  
  <p id="file-upload-3-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>

  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-3" name="file-upload-3" type="file" aria-describedby="file-upload-3-hint file-upload-3-error">
</div>`},{name:"with value",options:{id:"file-upload-4",name:"file-upload-4",value:"C:\\fakepath\\myphoto.jpg",label:{text:"Upload a photo"}},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-4">
    Upload a photo
  </label>


  <input class="govuk-file-upload" id="file-upload-4" name="file-upload-4" type="file" value="C:\\fakepath\\myphoto.jpg">
</div>`},{name:"with label as page heading",options:{id:"file-upload-1",name:"file-upload-1",label:{text:"Upload a file",classes:"govuk-label--l",isPageHeading:!0}},hidden:!1,html:`<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="file-upload-1">
      Upload a file
    </label>
    </h1>


  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>`},{name:"with optional form-group classes",options:{id:"file-upload-1",name:"file-upload-1",label:{text:"Upload a file"},formGroup:{classes:"extra-class"}},hidden:!1,html:`<div class="govuk-form-group extra-class">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>


  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>`},{name:"attributes",options:{id:"file-upload-attributes",name:"file-upload-attributes",label:{text:"Upload a file"},attributes:{accept:".jpg, .jpeg, .png"}},hidden:!0,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-attributes">
    Upload a file
  </label>


  <input class="govuk-file-upload" id="file-upload-attributes" name="file-upload-attributes" type="file" accept=".jpg, .jpeg, .png">
</div>`},{name:"classes",options:{id:"file-upload-classes",name:"file-upload-classes",label:{text:"Upload a file"},classes:"app-file-upload--custom-modifier"},hidden:!0,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-classes">
    Upload a file
  </label>


  <input class="govuk-file-upload app-file-upload--custom-modifier" id="file-upload-classes" name="file-upload-classes" type="file">
</div>`},{name:"with describedBy",options:{id:"file-upload-describedby",name:"file-upload-describedby",label:{text:"Upload a file"},describedBy:"some-id"},hidden:!0,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-describedby">
    Upload a file
  </label>


  <input class="govuk-file-upload" id="file-upload-describedby" name="file-upload-describedby" type="file" aria-describedby="some-id">
</div>`},{name:"with hint and describedBy",options:{id:"file-upload-hint-describedby",name:"file-upload-hint-describedby",label:{text:"Upload a file"},describedBy:"some-id",hint:{text:"Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."}},hidden:!0,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-hint-describedby">
    Upload a file
  </label>

  
  
  <div id="file-upload-hint-describedby-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>


  <input class="govuk-file-upload" id="file-upload-hint-describedby" name="file-upload-hint-describedby" type="file" aria-describedby="some-id file-upload-hint-describedby-hint">
</div>`},{name:"error",options:{id:"file-upload-with-error",name:"file-upload-with-error",label:{text:"Upload a file"},errorMessage:{text:"Error message"}},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-with-error">
    Upload a file
  </label>


  
  
  <p id="file-upload-with-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-with-error" name="file-upload-with-error" type="file" aria-describedby="file-upload-with-error-error">
</div>`},{name:"with error and describedBy",options:{id:"file-upload-error-describedby",name:"file-upload-error-describedby",label:{text:"Upload a file"},describedBy:"some-id",errorMessage:{text:"Error message"}},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-error-describedby">
    Upload a file
  </label>


  
  
  <p id="file-upload-error-describedby-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-error-describedby" name="file-upload-error-describedby" type="file" aria-describedby="some-id file-upload-error-describedby-error">
</div>`},{name:"with error, describedBy and hint",options:{id:"file-upload-error-describedby-hint",name:"file-upload-error-describedby-hint",label:{text:"Upload a file"},describedBy:"some-id",errorMessage:{text:"Error message"},hint:{text:"hint"}},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-error-describedby-hint">
    Upload a file
  </label>

  
  
  <div id="file-upload-error-describedby-hint-hint" class="govuk-hint">
    hint
  </div>


  
  
  <p id="file-upload-error-describedby-hint-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-error-describedby-hint" name="file-upload-error-describedby-hint" type="file" aria-describedby="some-id file-upload-error-describedby-hint-hint file-upload-error-describedby-hint-error">
</div>`}],s={component:r,fixtures:d},v={title:"FileUpload",component:i},n={name:"default"},t={name:"with hint text"},p={name:"with error message and hint"},u={name:"with value"},f={name:"with label as page heading"},b={name:"with optional formgroup classes"},l=[];l.push(n);l.push(t);l.push(p);l.push(u);l.push(f);l.push(b);s.fixtures.forEach(e=>{let o=l.find(a=>a.name===e.name.replace(/[^a-z0-9s]/gi,""))||{};o.name===e.name&&(o.args={id:e.options.id,name:e.options.name,label:e.options.label,hint:e.options.hint,errorMessage:e.options.errorMessage,value:e.options.value,formGroup:e.options.formGroup,attributes:e.options.attributes,classes:e.options.classes,describedBy:e.options.describedBy})});const y=["primary","withHintText","withErrorMessageAndHint","withValue","withLabelAsPageHeading","withOptionalFormgroupClasses"];export{y as __namedExportsOrder,v as default,n as primary,p as withErrorMessageAndHint,t as withHintText,f as withLabelAsPageHeading,b as withOptionalFormgroupClasses,u as withValue};
//# sourceMappingURL=FileUpload.stories-04768ead.js.map
