import{a as d,j as r}from"./jsx-runtime-29545a09.js";const p=({element:e,name:m,type:t,value:c,disabled:a,href:l,classes:f,preventDoubleClick:b,isStartButton:i,children:s,...v})=>{l&&(e="a");const n={className:`govuk-button ${f||""}${a?" govuk-button--disabled":""}${i?" govuk-button--start":""}`,"data-module":"govuk-button",...v},o={name:m,disabled:a,"aria-disabled":a,"data-prevent-double-click":b};let u;return i&&(u=r("svg",{className:"govuk-button__start-icon",xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40","aria-hidden":"true",focusable:"false",children:r("path",{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"})})),e==="a"?d("a",{href:l||"#",role:"button",draggable:!1,...n,children:[s,u]}):e==="input"?r("input",{type:t||"submit",...o,...n}):d("button",{value:c,type:t,...o,...n,children:[s,u]})};try{p.displayName="Button",p.__docgenInfo={description:"",displayName:"Button",props:{element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"button"'},{value:'"a"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},isStartButton:{defaultValue:null,description:"",name:"isStartButton",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},preventDoubleClick:{defaultValue:null,description:"",name:"preventDoubleClick",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}export{p as B};
//# sourceMappingURL=Button-e9eb043b.js.map