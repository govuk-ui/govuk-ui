import{a as V,F as m,j as a}from"./jsx-runtime-670450c2.js";import"./Accordion-b094a9f4.js";import"./BackLink-5d9697e5.js";import"./BreadcrumbItem-5d1e14c2.js";import"./Button-232179fb.js";import{r}from"./index-f1f749bf.js";import{F as O}from"./FormGroup-b495daf4.js";import{E as j}from"./ErrorMessage-5eec86f5.js";import{L as x,H as v,a as J,I as S}from"./Radios-17bf4bdd.js";import{F as P}from"./Fieldset-2e55f4ed.js";import"./CookieBanner-0021e8bc.js";import"./Details-ea8c166a.js";import"./FileUpload-a04d48dc.js";import"./Footer-f36a6c81.js";import"./Header-357af313.js";import"./InsetText-5be58372.js";import"./NotificationBanner-9be16c78.js";import"./Pagination-1429ab7b.js";import"./PhaseBanner-e4ef22fe.js";import"./Select-0fca9528.js";import"./SkipLink-6f274826.js";import"./Tabs-8973fdcc.js";import"./WarningText-53f07e98.js";import"./Container-c2a0e93b.js";import"./Grid-c05eecf9.js";import{T as ee}from"./Typography-a2bc044e.js";const C=({id:e,name:t,children:l,key:s,divider:u,exclusive:n,conditional:d,value:o,data:_,classes:p,...y})=>{const i=`conditional-${e}`,g=r.Children.toArray(l);return V("div",{className:u?"govuk-checkboxes__divider":"govuk-checkboxes__item",children:[!u&&V(m,{children:[a("input",{className:`govuk-checkboxes__input ${p||""}`,id:e,name:t,type:"checkbox",value:o,defaultChecked:Array.isArray(_)&&_.includes(o)||_===o,"data-aria-controls":d?i:"","data-behaviour":n?"exclusive":null,...y},s),r.Children.map(g,(f,h)=>{if(r.isValidElement(f)&&f.type===x)return a(m,{children:r.cloneElement(f,{classes:"govuk-checkboxes__label"})});if(r.isValidElement(f)&&f.type===v)return a(m,{children:r.cloneElement(f,{classes:"govuk-checkboxes__hint"})})}),d&&a("div",{className:`govuk-checkboxes__conditional ${_!==o?"govuk-checkboxes__conditional--hidden":""}`,id:i,children:d})]}),u&&a(m,{children:l})]})};try{C.displayName="CheckboxItem",C.__docgenInfo={description:"",displayName:"CheckboxItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"boolean"}},conditional:{defaultValue:null,description:"",name:"conditional",required:!1,type:{name:"any"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const R=({idPrefix:e,name:t,children:l,classes:s,errorMessage:u,value:n,...d})=>{!e&&t?e=t:!t&&e&&(t=e);let o="",_;if(u){const i=e?`${e}-error`:"";o+=` ${i}`,_=a(j,{id:i,children:u})}const p=r.Children.toArray(l),y=p.filter(i=>i.type===C);return r.Children.map(p,(i,g)=>{r.isValidElement(i)&&i.type===v&&(o+=` ${e}-hint`)}),a(O,{error:u,children:V(P,{describedBy:o,children:[r.Children.map(p,(i,g)=>{if(r.isValidElement(i)&&i.type===J)return a(m,{children:r.cloneElement(i,{})})}),r.Children.map(p,(i,g)=>{if(r.isValidElement(i)&&i.type===v)return a(m,{children:r.cloneElement(i,{})})}),_,a("div",{className:`govuk-checkboxes ${s||""}`,"data-module":"govuk-checkboxes",...d,children:r.Children.map(y,(i,g)=>{var f,h;if(r.isValidElement(i)&&i.type===C){const q=(f=i==null?void 0:i.props)!=null&&f.id?(h=i==null?void 0:i.props)==null?void 0:h.id:e;return a(m,{children:r.cloneElement(i,{id:g>0?`${q}-${g}`:q,data:n,name:t})})}})})]})})};try{R.displayName="Checkboxes",R.__docgenInfo={description:"",displayName:"Checkboxes",props:{idPrefix:{defaultValue:null,description:"",name:"idPrefix",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const U=({id:e,name:t,classes:l,dayLabel:s,monthLabel:u,yearLabel:n,autocompleteDay:d,autocompleteMonth:o,autocompleteYear:_,errorMessage:p,errorDay:y,errorMonth:i,errorYear:g,children:f,value:h,...q})=>{!e&&t?e=t:!t&&e&&(t=e);let k,c="";if(p){const b=e?`${e}-error`:"";c+=` ${b}`,k=a(j,{id:b,children:p}),!y&&!i&&!g&&(y=!0,i=!0,g=!0)}const N=r.Children.toArray(f);return r.Children.map(N,(b,w)=>{r.isValidElement(b)&&b.type===v&&(c+=` ${e}-hint`)}),a(O,{error:p,children:V(P,{role:"group",describedBy:c,children:[r.Children.map(N,(b,w)=>{if(r.isValidElement(b)&&(b.type===J||b.type===v))return a(m,{children:r.cloneElement(b,{})})}),k,V("div",{className:`govuk-date-input ${l||""}`,id:e,...q,children:[a("div",{className:"govuk-date-input__item",children:a(S,{classes:`govuk-input govuk-date-input__input govuk-input--width-2${y?" govuk-input--error":""}`,id:`${e}-day`,name:`${t}-day`,type:"text",inputmode:"numeric",autocomplete:d||"",value:h?h[`${e}-day`]:null,children:a(x,{children:s||"Day"})})}),a("div",{className:"govuk-date-input__item",children:a(S,{classes:`govuk-input govuk-date-input__input govuk-input--width-2${i?" govuk-input--error":""}`,id:`${e}-month`,name:`${t}-month`,type:"text",inputmode:"numeric",autocomplete:o||"",value:h?h[`${e}-month`]:null,children:a(x,{children:u||"Month"})})}),a("div",{className:"govuk-date-input__item",children:a(S,{classes:`govuk-input govuk-date-input__input govuk-input--width-4${g?" govuk-input--error":""}`,id:`${e}-year`,name:`${t}-year`,type:"text",inputmode:"numeric",autocomplete:_||"",value:h?h[`${e}-year`]:null,children:a(x,{children:n||"Year"})})})]})]})})};try{U.displayName="DateInput",U.__docgenInfo={description:"",displayName:"DateInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},dayLabel:{defaultValue:null,description:"",name:"dayLabel",required:!1,type:{name:"string"}},monthLabel:{defaultValue:null,description:"",name:"monthLabel",required:!1,type:{name:"string"}},yearLabel:{defaultValue:null,description:"",name:"yearLabel",required:!1,type:{name:"string"}},autocompleteDay:{defaultValue:null,description:"",name:"autocompleteDay",required:!1,type:{name:"string"}},autocompleteMonth:{defaultValue:null,description:"",name:"autocompleteMonth",required:!1,type:{name:"string"}},autocompleteYear:{defaultValue:null,description:"",name:"autocompleteYear",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},errorDay:{defaultValue:null,description:"",name:"errorDay",required:!1,type:{name:"boolean"}},errorMonth:{defaultValue:null,description:"",name:"errorMonth",required:!1,type:{name:"boolean"}},errorYear:{defaultValue:null,description:"",name:"errorYear",required:!1,type:{name:"boolean"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const A=({id:e,children:t,...l})=>a(m,{children:a("li",{...l,children:a("a",{href:`#${e}`,children:t})})});try{A.displayName="ErrorSummaryMessage",A.__docgenInfo={description:"",displayName:"ErrorSummaryMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const H=({titleText:e,classes:t,disableAutoFocus:l,children:s,...u})=>{const n=r.Children.toArray(s);return a(m,{children:a("div",{className:`govuk-error-summary ${t||""}`,"data-module":"govuk-error-summary","data-disable-auto-focus":l,...u,children:V("div",{role:"alert",children:[a("h2",{className:"govuk-error-summary__title",children:e||"There is a problem"}),a("div",{className:"govuk-error-summary__body",children:a("ul",{className:"govuk-list govuk-error-summary__list",children:r.Children.map(n,d=>{if(r.isValidElement(d)&&d.type===A)return r.cloneElement(d,{})})})})]})})})};try{H.displayName="ErrorSummary",H.__docgenInfo={description:"",displayName:"ErrorSummary",props:{titleText:{defaultValue:null,description:"",name:"titleText",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},disableAutoFocus:{defaultValue:null,description:"",name:"disableAutoFocus",required:!1,type:{name:"boolean"}}}}}catch{}const G=({children:e,classes:t,...l})=>a("div",{className:`govuk-main-wrapper ${t||""}`,...l,children:e});try{G.displayName="MainWrapper",G.__docgenInfo={description:"",displayName:"MainWrapper",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const K=({id:e,name:t,classes:l,children:s,...u})=>{!e&&t?e=t:!t&&e&&(t=e);const n=r.Children.toArray(s),d=["xl","l","m","s"];return a("div",{className:`govuk-panel govuk-panel--confirmation${l?` ${l}`:""}`,...u,children:r.Children.map(n,(o,_)=>{var p,y,i;if(r.isValidElement(o)&&o.type===ee)return a(m,{children:r.cloneElement(o,{classes:d.includes((p=o==null?void 0:o.props)==null?void 0:p.variant)?`govuk-panel__title ${(y=o==null?void 0:o.props)==null?void 0:y.classes}`:`govuk-panel__body ${(i=o==null?void 0:o.props)==null?void 0:i.classes}`})})})})};try{K.displayName="Panel",K.__docgenInfo={description:"",displayName:"Panel",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const $=({id:e,classes:t,children:l,...s})=>{const u=r.Children.toArray(l);return a("div",{className:`govuk-summary-list__row ${t||""}`,id:e,...s,children:r.Children.map(u,(n,d)=>{if(r.isValidElement(n)&&(n.type===L||n.type===E||n.type===T))return a(m,{children:r.cloneElement(n,{})})})})};try{$.displayName="SummaryListItem",$.__docgenInfo={description:"",displayName:"SummaryListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const M=({id:e,classes:t,children:l,field:s,data:u,rowKey:n,href:d,...o})=>!s||!u||!Object.keys(u).includes(s)?null:V($,{classes:t,id:e,...o,children:[a(L,{children:n||s}),a(E,{children:u[s]}),a(T,{children:V("a",{className:"govuk-link",href:d,children:["Change ",a("span",{className:"govuk-visually-hidden",children:s.toLowerCase()})]})})]});try{M.displayName="SummaryListRow",M.__docgenInfo={description:"",displayName:"SummaryListRow",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},field:{defaultValue:null,description:"",name:"field",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},rowKey:{defaultValue:null,description:"",name:"rowKey",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const W=({id:e,classes:t,children:l,...s})=>{const u=r.Children.toArray(l);return a("dl",{className:`govuk-summary-list ${t||""}`,id:e,...s,children:r.Children.map(u,(n,d)=>{if(r.isValidElement(n)&&(n.type===$||n.type===M))return a(m,{children:r.cloneElement(n,{})})})})};try{W.displayName="SummaryList",W.__docgenInfo={description:"",displayName:"SummaryList",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const L=({id:e,classes:t,children:l,...s})=>a("dt",{className:`govuk-summary-list__key ${t||""}`,id:e,...s,children:l});try{L.displayName="SummaryListKey",L.__docgenInfo={description:"",displayName:"SummaryListKey",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const E=({id:e,classes:t,children:l,...s})=>a("dt",{className:`govuk-summary-list__value ${t||""}`,id:e,...s,children:l});try{E.displayName="SummaryListValue",E.__docgenInfo={description:"",displayName:"SummaryListValue",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const T=({id:e,classes:t,children:l,...s})=>a("dt",{className:`govuk-summary-list__actions ${t||""}`,id:e,...s,children:l});try{T.displayName="SummaryListActions",T.__docgenInfo={description:"",displayName:"SummaryListActions",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const I=({id:e,children:t,classes:l,attributes:s})=>a(m,{children:a("td",{className:`govuk-table__cell ${l||""}`,id:e,...s,children:t})});try{I.displayName="TableCell",I.__docgenInfo={description:"",displayName:"TableCell",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const B=({id:e,children:t,classes:l,attributes:s})=>{const u=r.Children.toArray(t);return a(m,{children:a("thead",{className:`govuk-table__head ${l||""}`,id:e,...s,children:a("tr",{className:"govuk-table__row",children:r.Children.map(u,(n,d)=>{if(r.isValidElement(n)&&n.type===I)return a(m,{children:r.cloneElement(n,{})})})})})})};try{B.displayName="TableHeader",B.__docgenInfo={description:"",displayName:"TableHeader",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const D=({id:e,children:t,caption:l,classes:s,attributes:u})=>{const n=r.Children.toArray(t);return a(m,{children:a("tr",{className:`govuk-table__row ${s||""}`,id:e,...u,children:r.Children.map(n,(d,o)=>{if(r.isValidElement(d)&&d.type===I)return a(m,{children:r.cloneElement(d,{})})})})})};try{D.displayName="TableRow",D.__docgenInfo={description:"",displayName:"TableRow",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const Y=({id:e,children:t,classes:l,attributes:s})=>{const u=r.Children.toArray(t);return a(m,{children:V("table",{className:`govuk-table ${l||""}`,id:e,...s,children:[r.Children.map(u,(n,d)=>{if(r.isValidElement(n)&&n.type===B)return a(m,{children:r.cloneElement(n,{})})}),a("tbody",{className:"govuk-table__body",children:r.Children.map(u,(n,d)=>{if(r.isValidElement(n)&&n.type===D)return a(m,{children:r.cloneElement(n,{})})})})]})})};try{Y.displayName="Table",Y.__docgenInfo={description:"",displayName:"Table",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const F=({name:e,id:t,rows:l,autocomplete:s,spellcheck:u,classes:n,errorMessage:d,attributes:o,children:_,prefix:p,suffix:y,describedBy:i,value:g})=>{!t&&e?t=e:!e&&t&&(e=t);let f=i||"",h;if(d){const c=t?`${t}-error`:"";f+=` ${c}`,h=a(j,{id:c,children:d})}const q=r.Children.toArray(_),k=({children:c})=>p||y?a(m,{children:V("div",{className:"govuk-input__wrapper",children:[p&&a("div",{className:"govuk-input__prefix",children:p}),c,y&&a("div",{className:"govuk-input__suffix",children:y})]})}):c;return a(m,{children:V(O,{error:d,children:[r.Children.map(q,(c,N)=>{if(r.isValidElement(c)&&c.type===x)return a(m,{children:r.cloneElement(c,{htmlFor:t})});if(r.isValidElement(c)&&c.type===v)return f+=` ${t}-hint`,a(m,{children:r.cloneElement(c,{id:`${t}-hint`})})}),h,a(k,{children:a("textarea",{className:`govuk-textarea${n?` ${n}`:""}${d?" govuk-textarea--error":""}`,id:t,name:e,rows:l||5,autoComplete:s,spellCheck:u,"aria-describedby":f||"",defaultValue:g,...o})})]})})};try{F.displayName="Textarea",F.__docgenInfo={description:"",displayName:"Textarea",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},autocomplete:{defaultValue:null,description:"",name:"autocomplete",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"",name:"spellcheck",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},describedBy:{defaultValue:null,description:"",name:"describedBy",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const z=({name:e,id:t,maxLength:l,textareaDescriptionText:s,value:u,errorMessage:n,rows:d,autocomplete:o,children:_,maxWords:p,threshold:y,charactersUnderLimitText:i,charactersAtLimitText:g,charactersOverLimitText:f,wordsUnderLimitText:h,wordsAtLimitText:q,wordsOverLimitText:k,classes:c,formGroup:N,countMessage:b,spellcheck:w,describedBy:Q,...X})=>{const Z=`You can enter up to ${p?`${p} words`:`${l} characters`}`;return V("div",{className:`govuk-character-count${c?` ${c}`:""}`,"data-module":"govuk-character-count","data-maxlength":`${l||""}`,"data-maxwords":`${p||""}`,"data-threshold":`${y||""}`,children:[a(F,{classes:"govuk-textarea govuk-js-character-count",id:t,name:e,rows:d,autocomplete:o,spellcheck:w,describedBy:Q||"",value:u||"",errorMessage:n||"",...X,children:_}),a("div",{id:`${t}-info`,className:"govuk-hint govuk-character-count__message",children:Z})]})};try{z.displayName="CharacterCount",z.__docgenInfo={description:"",displayName:"CharacterCount",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},autocomplete:{defaultValue:null,description:"",name:"autocomplete",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},textareaDescriptionText:{defaultValue:null,description:"",name:"textareaDescriptionText",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},maxWords:{defaultValue:null,description:"",name:"maxWords",required:!1,type:{name:"number"}},threshold:{defaultValue:null,description:"",name:"threshold",required:!1,type:{name:"number"}},charactersUnderLimitText:{defaultValue:null,description:"",name:"charactersUnderLimitText",required:!1,type:{name:"any"}},charactersAtLimitText:{defaultValue:null,description:"",name:"charactersAtLimitText",required:!1,type:{name:"string"}},charactersOverLimitText:{defaultValue:null,description:"",name:"charactersOverLimitText",required:!1,type:{name:"any"}},wordsUnderLimitText:{defaultValue:null,description:"",name:"wordsUnderLimitText",required:!1,type:{name:"any"}},wordsAtLimitText:{defaultValue:null,description:"",name:"wordsAtLimitText",required:!1,type:{name:"string"}},wordsOverLimitText:{defaultValue:null,description:"",name:"wordsOverLimitText",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},formGroup:{defaultValue:null,description:"",name:"formGroup",required:!1,type:{name:"any"}},countMessage:{defaultValue:null,description:"",name:"countMessage",required:!1,type:{name:"any"}},spellcheck:{defaultValue:null,description:"",name:"spellcheck",required:!1,type:{name:"boolean"}},describedBy:{defaultValue:null,description:"",name:"describedBy",required:!1,type:{name:"string"}}}}}catch{}export{z as C,U as D,H as E,G as M,K as P,W as S,Y as T,R as a,C as b,A as c,$ as d,L as e,E as f,T as g,B as h,I as i,D as j,F as k};
//# sourceMappingURL=CharacterCount-7adc4d81.js.map