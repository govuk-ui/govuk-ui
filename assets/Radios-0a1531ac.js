import{a as _,j as t,F as p}from"./jsx-runtime-670450c2.js";import{r as n}from"./index-f1f749bf.js";import{F as C}from"./FormGroup-b495daf4.js";import{F as H}from"./Fieldset-2e55f4ed.js";const b=({children:e,visuallyHiddenText:a,id:l,classes:i,attributes:u})=>{const o=_("span",{className:"govuk-visually-hidden",children:[a||"Error: ",": "]});return _("p",{className:`govuk-error-message ${i||""}`,id:l,...u,children:[o,e]})};try{b.displayName="ErrorMessage",b.__docgenInfo={description:"",displayName:"ErrorMessage",props:{visuallyHiddenText:{defaultValue:null,description:"",name:"visuallyHiddenText",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const I=({children:e,classes:a,isPageHeading:l,...i})=>l?t("legend",{className:`govuk-fieldset__legend${a?` ${a}`:""}`,...i,children:t("h1",{className:"govuk-fieldset__heading",children:e})}):t("legend",{className:`govuk-fieldset__legend${a?` ${a}`:""}`,...i,children:e});try{I.displayName="Legend",I.__docgenInfo={description:"",displayName:"Legend",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},isPageHeading:{defaultValue:null,description:"",name:"isPageHeading",required:!1,type:{name:"boolean"}}}}}catch{}const k=({children:e,id:a,classes:l,htmlFor:i,isPageHeading:u,...o})=>{const c=t("label",{className:`govuk-label ${l||""}`,htmlFor:i,id:a,...o,children:e});return u?t("h1",{className:"govuk-label-wrapper",children:c}):c};try{k.displayName="Label",k.__docgenInfo={description:"",displayName:"Label",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},isPageHeading:{defaultValue:null,description:"",name:"isPageHeading",required:!1,type:{name:"boolean"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const h=({children:e,id:a,classes:l,...i})=>t("div",{className:`govuk-hint ${l||""}`,id:a,...i,children:e});try{h.displayName="Hint",h.__docgenInfo={description:"",displayName:"Hint",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const $=({id:e,name:a,errorMessage:l,classes:i,type:u,value:o,describedBy:c,autocomplete:m,inputmode:V,prefix:f,suffix:y,children:r,...s})=>{!e&&a?e=a:!a&&e&&(a=e);let g=c||"",q;if(l){const d=e?`${e}-error`:"";g+=` ${d}`,q=t(b,{id:d,children:l})}const v=n.Children.toArray(r),x=({children:d})=>f||y?t(p,{children:_("div",{className:"govuk-input__wrapper",children:[f&&t("div",{className:"govuk-input__prefix",children:f}),d,y&&t("div",{className:"govuk-input__suffix",children:y})]})}):d;return t(p,{children:_(C,{error:l,children:[n.Children.map(v,(d,F)=>{if(n.isValidElement(d)&&d.type===k)return t(p,{children:n.cloneElement(d,{htmlFor:e})});if(n.isValidElement(d)&&d.type===h)return g+=` ${e}-hint`,t(p,{children:n.cloneElement(d,{id:`${e}-hint`})})}),q,t(x,{children:t("input",{className:`govuk-input ${i||""} ${l?" govuk-input--error":""}`,id:e,name:a,type:u,defaultValue:o,"aria-describedby":g||"",autoComplete:m,inputMode:V,...s})})]})})};try{$.displayName="Input",$.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"any"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},formGroup:{defaultValue:null,description:"",name:"formGroup",required:!1,type:{name:"any"}},autocomplete:{defaultValue:null,description:"",name:"autocomplete",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"",name:"spellcheck",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"any"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},describedBy:{defaultValue:null,description:"",name:"describedBy",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},inputmode:{defaultValue:null,description:"",name:"inputmode",required:!1,type:{name:"any"}}}}}catch{}const N=({id:e,name:a,children:l,key:i,divider:u,value:o,checked:c,conditional:m,classes:V,...f})=>{!e&&a?e=a:!a&&e&&(a=e);const y=`conditional-${e}`,r=n.Children.toArray(l);return _("div",{className:u?"govuk-radios__divider":"govuk-radios__item",children:[!u&&_(p,{children:[t("input",{className:`govuk-radios__input ${V||""}`,id:e,name:a,type:"radio",value:o,defaultChecked:c,"data-aria-controls":m?y:"",...f},i),n.Children.map(r,(s,g)=>{if(n.isValidElement(s)&&s.type===k)return t(p,{children:n.cloneElement(s,{classes:"govuk-radios__label",htmlFor:e})});if(n.isValidElement(s)&&s.type===h)return t(p,{children:n.cloneElement(s,{classes:"govuk-radios__hint"})})}),m&&t("div",{className:`govuk-radios__conditional${c?"":" govuk-radios__conditional--hidden"}`,id:y,children:m})]}),u&&t(p,{children:l})]})};try{N.displayName="RadioItem",N.__docgenInfo={description:"",displayName:"RadioItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},conditional:{defaultValue:null,description:"",name:"conditional",required:!1,type:{name:"any"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const E=({idPrefix:e,name:a,children:l,classes:i,value:u,errorMessage:o,...c})=>{!e&&a?e=a:!a&&e&&(a=e);let m="",V;if(o){const r=e?`${e}-error`:"";m+=` ${r}`,V=t(b,{id:r,children:o})}const f=n.Children.toArray(l),y=f.filter(r=>r.type===N);return n.Children.map(f,(r,s)=>{n.isValidElement(r)&&r.type===h&&(m+=` ${e}-hint`)}),t(C,{error:o,children:_(H,{describedBy:m,children:[n.Children.map(f,(r,s)=>{if(n.isValidElement(r)&&(r.type===I||r.type===h))return t(p,{children:n.cloneElement(r,{})})}),V,t("div",{className:`govuk-radios ${i||""}`,"data-module":"govuk-radios",...c,children:n.Children.map(y,(r,s)=>{var g,q;if(n.isValidElement(r)&&r.type===N){const v=(g=r==null?void 0:r.props)!=null&&g.id?(q=r==null?void 0:r.props)==null?void 0:q.id:e;return t(p,{children:n.cloneElement(r,{id:s>0?`${v}-${s}`:v,checked:r.props.value===u,name:a})})}})})]})})};try{E.displayName="Radios",E.__docgenInfo={description:"",displayName:"Radios",props:{idPrefix:{defaultValue:null,description:"String to prefix ID for each radio item if no ID is specified on each item. If idPrefix is not passed, fallback to using the name attribute instead.",name:"idPrefix",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name attribute for each radio item.",name:"name",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Classes to add to the radio container.",name:"classes",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value for the radio which should be checked when the page loads. Use this as an alternative to setting the checked option on each individual item.",name:"value",required:!1,type:{name:"any"}},errorMessage:{defaultValue:null,description:"Options for the error message component. The error message component will not display if you use a falsy value for errorMessage, for example false or null.",name:"errorMessage",required:!1,type:{name:"any"}},attributes:{defaultValue:null,description:"HTML attributes (for example data attributes) to add to the radio input tag.",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}export{b as E,h as H,$ as I,k as L,E as R,I as a,N as b};
//# sourceMappingURL=Radios-0a1531ac.js.map
