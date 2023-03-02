import{a as r,F as i,j as o}from"./jsx-runtime-68f49b4e.js";import{r as l}from"./index-f1f749bf.js";import{E as x}from"./ErrorMessage-07ea8fac.js";import{F as N}from"./FormGroup-f91b51d3.js";import{H as k}from"./Hint-47130fa7.js";import{L as E}from"./Label-3d09487c.js";const m=({id:e,name:n,errorMessage:t,classes:f,type:y,value:g,describedBy:_,autocomplete:V,inputmode:q,prefix:u,suffix:s,attributes:I,children:h})=>{!e&&n?e=n:!n&&e&&(n=e);let d=_||"",p;if(t){const a=e?`${e}-error`:"";d+=` ${a}`,p=r(x,{id:a,children:t})}const b=l.Children.toArray(h),v=({children:a})=>u||s?r(i,{children:o("div",{className:"govuk-input__wrapper",children:[u&&r("div",{className:"govuk-input__prefix",children:u}),a,s&&r("div",{className:"govuk-input__suffix",children:s})]})}):a;return r(i,{children:o(N,{error:t,children:[l.Children.map(b,(a,$)=>{if(l.isValidElement(a)&&a.type===E)return r(i,{children:l.cloneElement(a,{htmlFor:e})});if(l.isValidElement(a)&&a.type===k)return d+=` ${e}-hint`,r(i,{children:l.cloneElement(a,{id:`${e}-hint`})})}),p,r(v,{children:r("input",{className:`govuk-input ${f||""} ${t?" govuk-input--error":""}`,id:e,name:n,type:y,defaultValue:g,"aria-describedby":d||"",autoComplete:V,inputMode:q})})]})})};try{m.displayName="Input",m.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"any"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},formGroup:{defaultValue:null,description:"",name:"formGroup",required:!1,type:{name:"any"}},autocomplete:{defaultValue:null,description:"",name:"autocomplete",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"",name:"spellcheck",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"any"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},describedBy:{defaultValue:null,description:"",name:"describedBy",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},inputmode:{defaultValue:null,description:"",name:"inputmode",required:!1,type:{name:"any"}}}}}catch{}const c=({children:e,classes:n,...t})=>r("legend",{className:`govuk-fieldset__legend ${n||""}`,...t,children:e});try{c.displayName="Legend",c.__docgenInfo={description:"",displayName:"Legend",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}export{m as I,c as L};
//# sourceMappingURL=Legend-3f30edf0.js.map
