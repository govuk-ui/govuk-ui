import{B as a}from"./Button.31533094.js";import"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const u="button",s=[{name:"default",options:{text:"Save and continue"},hidden:!1,html:`<button class="govuk-button" data-module="govuk-button">
  Save and continue
</button>`},{name:"disabled",options:{text:"Disabled button",disabled:!0},hidden:!1,html:`<button disabled="disabled" aria-disabled="true" class="govuk-button govuk-button--disabled" data-module="govuk-button">
  Disabled button
</button>`},{name:"link",options:{text:"Link button",href:"/"},hidden:!1,html:`<a href="/" role="button" draggable="false" class="govuk-button" data-module="govuk-button">
  Link button
</a>`},{name:"link disabled",options:{text:"Disabled link button",href:"/",disabled:!0},hidden:!1,html:`<a href="/" role="button" draggable="false" class="govuk-button govuk-button--disabled" data-module="govuk-button">
  Disabled link button
</a>`},{name:"start",options:{text:"Start now button",isStartButton:!0},hidden:!1,html:`<button class="govuk-button govuk-button--start" data-module="govuk-button">
  Start now button
  <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
  </svg></button>`},{name:"start link",options:{text:"Start now link button",href:"/",isStartButton:!0},hidden:!1,html:`<a href="/" role="button" draggable="false" class="govuk-button govuk-button--start" data-module="govuk-button">
  Start now link button
  <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
  </svg></a>`},{name:"input",options:{element:"input",name:"start-now",text:"Start now"},hidden:!1,html:'<input value="Start now" type="submit" name="start-now" class="govuk-button" data-module="govuk-button">'},{name:"input disabled",options:{element:"input",text:"Explicit input button disabled",disabled:!0},hidden:!1,html:'<input value="Explicit input button disabled" type="submit" disabled="disabled" aria-disabled="true" class="govuk-button govuk-button--disabled" data-module="govuk-button">'},{name:"prevent double click",options:{text:"Submit",preventDoubleClick:!0},hidden:!1,html:`<button data-prevent-double-click="true" class="govuk-button" data-module="govuk-button">
  Submit
</button>`},{name:"with active state",options:{name:"active",text:"Active",classes:":active"},hidden:!1,html:`<button name="active" class="govuk-button :active" data-module="govuk-button">
  Active
</button>`},{name:"with hover state",options:{name:"hover",text:"Hovered",classes:":hover"},hidden:!1,html:`<button name="hover" class="govuk-button :hover" data-module="govuk-button">
  Hovered
</button>`},{name:"with focus state",options:{name:"focus",text:"Focussed",classes:":focus"},hidden:!1,html:`<button name="focus" class="govuk-button :focus" data-module="govuk-button">
  Focussed
</button>`},{name:"Secondary",options:{name:"secondary",text:"Secondary button",classes:"govuk-button--secondary"},hidden:!1,html:`<button name="secondary" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Secondary button
</button>`},{name:"Secondary disabled",options:{name:"secondary",text:"Secondary button disabled",classes:"govuk-button--secondary",disabled:!0},hidden:!1,html:`<button name="secondary" disabled="disabled" aria-disabled="true" class="govuk-button govuk-button--secondary govuk-button--disabled" data-module="govuk-button">
  Secondary button disabled
</button>`},{name:"Secondary link",options:{name:"secondary",text:"Secondary button",href:"/",classes:"govuk-button--secondary"},hidden:!1,html:`<a href="/" role="button" draggable="false" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Secondary button
</a>`},{name:"Warning",options:{name:"Warning",text:"Warning button",classes:"govuk-button--warning"},hidden:!1,html:`<button name="Warning" class="govuk-button govuk-button--warning" data-module="govuk-button">
  Warning button
</button>`},{name:"Warning disabled",options:{name:"warning",text:"Warning button disabled",classes:"govuk-button--warning",disabled:!0},hidden:!1,html:`<button name="warning" disabled="disabled" aria-disabled="true" class="govuk-button govuk-button--warning govuk-button--disabled" data-module="govuk-button">
  Warning button disabled
</button>`},{name:"Warning link",options:{name:"Warning",text:"Warning button",href:"/",classes:"govuk-button--warning"},hidden:!1,html:`<a href="/" role="button" draggable="false" class="govuk-button govuk-button--warning" data-module="govuk-button">
  Warning button
</a>`},{name:"attributes",options:{element:"button",text:"Submit",attributes:{"aria-controls":"example-id","data-tracking-dimension":123}},hidden:!0,html:`<button class="govuk-button" data-module="govuk-button" aria-controls="example-id" data-tracking-dimension="123">
  Submit
</button>`},{name:"link attributes",options:{element:"a",text:"Submit",attributes:{"aria-controls":"example-id","data-tracking-dimension":123}},hidden:!0,html:`<a href="#" role="button" draggable="false" class="govuk-button" data-module="govuk-button" aria-controls="example-id" data-tracking-dimension="123">
  Submit
</a>`},{name:"input attributes",options:{element:"input",text:"Submit",attributes:{"aria-controls":"example-id","data-tracking-dimension":123}},hidden:!0,html:'<input value="Submit" type="submit" class="govuk-button" data-module="govuk-button" aria-controls="example-id" data-tracking-dimension="123">'},{name:"classes",options:{text:"Submit",element:"button",classes:"app-button--custom-modifier"},hidden:!0,html:`<button class="govuk-button app-button--custom-modifier" data-module="govuk-button">
  Submit
</button>`},{name:"link classes",options:{text:"Submit",element:"a",classes:"app-button--custom-modifier"},hidden:!0,html:`<a href="#" role="button" draggable="false" class="govuk-button app-button--custom-modifier" data-module="govuk-button">
  Submit
</a>`},{name:"input classes",options:{text:"Submit",element:"input",classes:"app-button--custom-modifier"},hidden:!0,html:'<input value="Submit" type="submit" class="govuk-button app-button--custom-modifier" data-module="govuk-button">'},{name:"name",options:{text:"Submit",element:"button",name:"start-now"},hidden:!0,html:`<button name="start-now" class="govuk-button" data-module="govuk-button">
  Submit
</button>`},{name:"type",options:{text:"Submit",element:"button",type:"button"},hidden:!0,html:`<button type="button" class="govuk-button" data-module="govuk-button">
  Submit
</button>`},{name:"input type",options:{text:"Submit",element:"input",type:"button"},hidden:!0,html:'<input value="Submit" type="button" class="govuk-button" data-module="govuk-button">'},{name:"explicit link",options:{element:"a",href:"/",text:"Continue"},hidden:!0,html:`<a href="/" role="button" draggable="false" class="govuk-button" data-module="govuk-button">
  Continue
</a>`},{name:"no href",options:{text:"Submit",element:"a"},hidden:!0,html:`<a href="#" role="button" draggable="false" class="govuk-button" data-module="govuk-button">
  Submit
</a>`},{name:"value",options:{text:"Submit",element:"button",value:"start"},hidden:!0,html:`<button value="start" class="govuk-button" data-module="govuk-button">
  Submit
</button>`},{name:"html",options:{text:"Submit",element:"button",html:"Start <em>now</em>"},hidden:!0,html:`<button class="govuk-button" data-module="govuk-button">
  Start <em>now</em>
</button>`},{name:"no type",options:{text:"Button!"},hidden:!0,html:`<button class="govuk-button" data-module="govuk-button">
  Button!
</button>`},{name:"no data-prevent-double-click",options:{text:"Submit"},hidden:!0,html:`<button class="govuk-button" data-module="govuk-button">
  Submit
</button>`},{name:"don't prevent double click",options:{text:"Submit",preventDoubleClick:!1},hidden:!0,html:`<button data-prevent-double-click="false" class="govuk-button" data-module="govuk-button">
  Submit
</button>`}],i={component:u,fixtures:s},_={title:"Button",component:a},l={name:"default"},d={name:"disabled"},b={name:"link"},m={name:"link disabled"},r={name:"start"},c={name:"start link"},g={name:"input"},p={name:"input disabled"},h={name:"prevent double click"},v={name:"with active state"},k={name:"with hover state"},f={name:"with focus state"},S={name:"Secondary"},w={name:"Secondary disabled"},x={name:"Secondary link"},y={name:"Warning"},D={name:"Warning disabled"},W={name:"Warning link"},t=[];t.push(l);t.push(d);t.push(b);t.push(m);t.push(r);t.push(c);t.push(g);t.push(p);t.push(h);t.push(v);t.push(k);t.push(f);t.push(S);t.push(w);t.push(x);t.push(y);t.push(D);t.push(W);i.fixtures.forEach(n=>{let e=t.find(o=>o.name===n.name)||{};e.name===n.name&&(e.args={children:n.options.text,href:n.options.href,isStartButton:n.options.isStartButton,disabled:n.options.disabled,preventDoubleClick:n.options.preventDoubleClick,type:n.options.element==="input"?"input":"button",classes:n.options.classes})});const A=["primary","disabled","link","linkDisabled","start","startLink","input","inputDisabled","preventDoubleClick","withActiveState","withHoverState","withFocusState","secondary","secondaryDisabled","secondaryLink","warning","warningDisabled","warningLink"];export{A as __namedExportsOrder,_ as default,d as disabled,g as input,p as inputDisabled,b as link,m as linkDisabled,h as preventDoubleClick,l as primary,S as secondary,w as secondaryDisabled,x as secondaryLink,r as start,c as startLink,y as warning,D as warningDisabled,W as warningLink,v as withActiveState,f as withFocusState,k as withHoverState};
//# sourceMappingURL=Button.stories.470ffc3c.js.map
