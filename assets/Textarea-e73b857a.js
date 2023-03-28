import{j as a,F as n,a as p}from"./jsx-runtime-670450c2.js";import{r as t}from"./index-f1f749bf.js";import{E as v}from"./ErrorMessage-5eec86f5.js";import{F as k}from"./FormGroup-df38f41d.js";import{H as E}from"./Hint-44397457.js";import{L as C}from"./Label-8f102d27.js";const m=({name:l,id:r,rows:c,autocomplete:f,spellcheck:y,classes:g,errorMessage:i,attributes:V,children:h,prefix:s,suffix:u,describedBy:_,value:x})=>{!r&&l?r=l:!l&&r&&(l=r);let o=_||"",d;if(i){const e=r?`${r}-error`:"";o+=` ${e}`,d=a(v,{id:e,children:i})}const q=t.Children.toArray(h),b=({children:e})=>s||u?a(n,{children:p("div",{className:"govuk-input__wrapper",children:[s&&a("div",{className:"govuk-input__prefix",children:s}),e,u&&a("div",{className:"govuk-input__suffix",children:u})]})}):e;return a(n,{children:p(k,{error:i,children:[t.Children.map(q,(e,N)=>{if(t.isValidElement(e)&&e.type===C)return a(n,{children:t.cloneElement(e,{htmlFor:r})});if(t.isValidElement(e)&&e.type===E)return o+=` ${r}-hint`,a(n,{children:t.cloneElement(e,{id:`${r}-hint`})})}),d,a(b,{children:a("textarea",{className:`govuk-textarea ${g}`,id:r,name:l,rows:c||5,autoComplete:f,spellCheck:y,"aria-describedby":o||"",defaultValue:x,...V})})]})})};try{m.displayName="Textarea",m.__docgenInfo={description:"",displayName:"Textarea",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},autocomplete:{defaultValue:null,description:"",name:"autocomplete",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"",name:"spellcheck",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},describedBy:{defaultValue:null,description:"",name:"describedBy",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}}}catch{}export{m as T};
//# sourceMappingURL=Textarea-e73b857a.js.map
