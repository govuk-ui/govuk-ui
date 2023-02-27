import{a as i}from"./jsx-runtime-68f49b4e.js";import{S as l}from"./Select-d6e3d713.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./FormGroup-f91b51d3.js";import"./ErrorMessage-07ea8fac.js";const a="select",r=[{name:"default",options:{id:"select-1",name:"select-1",label:{text:"Label text goes here"},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2",selected:!0},{value:3,text:"GOV.UK frontend option 3",disabled:!0}]},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>


  <select class="govuk-select" id="select-1" name="select-1">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2" selected>GOV.UK frontend option 2</option>
    
  
    
      <option value="3" disabled>GOV.UK frontend option 3</option>
    
  
  </select>
</div>`},{name:"with no items",options:{id:"select-1",name:"select-1",label:{text:"Horse with no name"},items:[]},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Horse with no name
  </label>


  <select class="govuk-select" id="select-1" name="select-1">
  
  </select>
</div>`},{name:"with selected value",options:{id:"select-1",name:"select-1",label:{text:"Label text goes here"},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2",selected:!0},{value:3,text:"GOV.UK frontend option 3",disabled:!0}],value:3},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>


  <select class="govuk-select" id="select-1" name="select-1">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2" selected>GOV.UK frontend option 2</option>
    
  
    
      <option value="3" selected disabled>GOV.UK frontend option 3</option>
    
  
  </select>
</div>`},{name:"with hint text and error message",options:{id:"select-2",name:"select-2",label:{text:"Label text goes here"},hint:{text:"Hint text goes here"},errorMessage:{text:"Error message goes here"},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2"},{value:3,text:"GOV.UK frontend option 3"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="select-2">
    Label text goes here
  </label>

  
  
  <div id="select-2-hint" class="govuk-hint">
    Hint text goes here
  </div>


  
  
  <p id="select-2-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>

  <select class="govuk-select govuk-select--error" id="select-2" name="select-2" aria-describedby="select-2-hint select-2-error">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2">GOV.UK frontend option 2</option>
    
  
    
      <option value="3">GOV.UK frontend option 3</option>
    
  
  </select>
</div>`},{name:"with label as page heading",options:{id:"select-3",name:"select-3",label:{text:"Label text goes here",classes:"govuk-label--l",isPageHeading:!0},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2",selected:!0},{value:3,text:"GOV.UK frontend option 3",disabled:!0}]},hidden:!1,html:`<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="select-3">
      Label text goes here
    </label>
    </h1>


  <select class="govuk-select" id="select-3" name="select-3">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2" selected>GOV.UK frontend option 2</option>
    
  
    
      <option value="3" disabled>GOV.UK frontend option 3</option>
    
  
  </select>
</div>`},{name:"with full width override",options:{id:"select-1",name:"select-1",classes:"govuk-!-width-full",label:{text:"Label text goes here"},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2",selected:!0},{value:3,text:"GOV.UK frontend option 3",disabled:!0}]},hidden:!1,html:`<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>


  <select class="govuk-select govuk-!-width-full" id="select-1" name="select-1">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2" selected>GOV.UK frontend option 2</option>
    
  
    
      <option value="3" disabled>GOV.UK frontend option 3</option>
    
  
  </select>
</div>`},{name:"with optional form-group classes",options:{id:"select-1",name:"select-1",classes:"govuk-!-width-full",label:{text:"Label text goes here"},formGroup:{classes:"extra-class"},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2",selected:!0},{value:3,text:"GOV.UK frontend option 3",disabled:!0}]},hidden:!1,html:`<div class="govuk-form-group extra-class">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>


  <select class="govuk-select govuk-!-width-full" id="select-1" name="select-1">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2" selected>GOV.UK frontend option 2</option>
    
  
    
      <option value="3" disabled>GOV.UK frontend option 3</option>
    
  
  </select>
</div>`},{name:"with describedBy",options:{id:"with-describedby",name:"with-describedby",items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2"}],describedBy:"some-id"},hidden:!0,html:`<div class="govuk-form-group">
  


  <select class="govuk-select" id="with-describedby" name="with-describedby" aria-describedby="some-id">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2">GOV.UK frontend option 2</option>
    
  
  </select>
</div>`},{name:"attributes",options:{id:"with-attributes",name:"with-attributes",items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2"}],attributes:{"data-attribute":"my data value"}},hidden:!0,html:`<div class="govuk-form-group">
  


  <select class="govuk-select" id="with-attributes" name="with-attributes" data-attribute="my data value">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2">GOV.UK frontend option 2</option>
    
  
  </select>
</div>`},{name:"attributes on items",options:{id:"with-item-attributes",name:"with-item-attributes",value:2,items:[{text:"Option 1",value:1,attributes:{"data-attribute":"ABC","data-second-attribute":"DEF"}},{text:"Option 2",value:2,attributes:{"data-attribute":"GHI","data-second-attribute":"JKL"}}]},hidden:!0,html:`<div class="govuk-form-group">
  


  <select class="govuk-select" id="with-item-attributes" name="with-item-attributes">
  
    
      <option value="1" data-attribute="ABC" data-second-attribute="DEF">Option 1</option>
    
  
    
      <option value="2" selected data-attribute="GHI" data-second-attribute="JKL">Option 2</option>
    
  
  </select>
</div>`},{name:"with falsey values",options:{id:"with-falsey-values",name:"with-falsey-values",items:[{text:"Option 1",value:1},null,!1,"",{text:"Options 2",value:2}]},hidden:!0,html:`<div class="govuk-form-group">
  


  <select class="govuk-select" id="with-falsey-values" name="with-falsey-values">
  
    
      <option value="1">Option 1</option>
    
  
    
  
    
  
    
  
    
      <option value="2">Options 2</option>
    
  
  </select>
</div>`},{name:"hint",options:{id:"select-with-hint",name:"select-with-hint",hint:{text:"Hint text goes here"}},hidden:!0,html:`<div class="govuk-form-group">
  

  
  
  <div id="select-with-hint-hint" class="govuk-hint">
    Hint text goes here
  </div>


  <select class="govuk-select" id="select-with-hint" name="select-with-hint" aria-describedby="select-with-hint-hint">
  
  </select>
</div>`},{name:"hint and describedBy",options:{id:"select-with-hint",name:"select-with-hint",describedBy:"some-id",hint:{text:"Hint text goes here"},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2"}]},hidden:!0,html:`<div class="govuk-form-group">
  

  
  
  <div id="select-with-hint-hint" class="govuk-hint">
    Hint text goes here
  </div>


  <select class="govuk-select" id="select-with-hint" name="select-with-hint" aria-describedby="some-id select-with-hint-hint">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2">GOV.UK frontend option 2</option>
    
  
  </select>
</div>`},{name:"error",options:{id:"select-with-error",name:"select-with-error",errorMessage:{text:"Error message"},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
  


  
  
  <p id="select-with-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <select class="govuk-select govuk-select--error" id="select-with-error" name="select-with-error" aria-describedby="select-with-error-error">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2">GOV.UK frontend option 2</option>
    
  
  </select>
</div>`},{name:"error and describedBy",options:{id:"select-with-error",name:"select-with-error",describedBy:"some-id",errorMessage:{text:"Error message"},items:[{value:1,text:"GOV.UK frontend option 1"},{value:2,text:"GOV.UK frontend option 2"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
  


  
  
  <p id="select-with-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message
  </p>

  <select class="govuk-select govuk-select--error" id="select-with-error" name="select-with-error" aria-describedby="some-id select-with-error-error">
  
    
      <option value="1">GOV.UK frontend option 1</option>
    
  
    
      <option value="2">GOV.UK frontend option 2</option>
    
  
  </select>
</div>`},{name:"item selected overrides value",options:{name:"colors",id:"colors",items:[{value:"red",text:"Red"},{value:"green",text:"Green",selected:!1},{value:"blue",text:"Blue"}],value:"green"},hidden:!0,html:`<div class="govuk-form-group">
  


  <select class="govuk-select" id="colors" name="colors">
  
    
      <option value="red">Red</option>
    
  
    
      <option value="green">Green</option>
    
  
    
      <option value="blue">Blue</option>
    
  
  </select>
</div>`}],d={component:a,fixtures:r},G={title:"Select",component:l},c={name:"default"},u={name:"with no items"},p={name:"with selected value"},v={name:"with hint text and error message"},h={name:"with label as page heading"},m={name:"with full width override"},g={name:"with optional formgroup classes"},t=[];t.push(c);t.push(u);t.push(p);t.push(v);t.push(h);t.push(m);t.push(g);d.fixtures.forEach(e=>{var s;let o=t.find(n=>n.name===e.name.replace(/[^a-z0-9s]/gi,""))||{};o.name===e.name&&(o.args={id:e.options.id,name:e.options.name,children:(s=e.options.items)==null?void 0:s.map(n=>i("option",{value:n.value,selected:n.selected,disabled:n.disabled,children:n.text})),classes:e.options.classes,describedBy:e.options.describedBy,attributes:e.options.attributes})});const K=["primary","withNoItems","withSelectedValue","withHintTextAndErrorMessage","withLabelAsPageHeading","withFullWidthOverride","withOptionalFormgroupClasses"];export{K as __namedExportsOrder,G as default,c as primary,m as withFullWidthOverride,v as withHintTextAndErrorMessage,h as withLabelAsPageHeading,u as withNoItems,g as withOptionalFormgroupClasses,p as withSelectedValue};
//# sourceMappingURL=Select.stories-f25b7c8e.js.map
