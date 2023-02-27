import{j as c,a as l,F as o}from"./jsx-runtime-68f49b4e.js";import{r as t}from"./index-f1f749bf.js";import"./Accordion-12d9884c.js";import"./BackLink-54564ca1.js";import"./BreadcrumbItem-7e03e4ef.js";import"./Button-791dc627.js";import"./CharacterCount-6c285db3.js";import{F as x}from"./FormGroup-f91b51d3.js";import{E as C}from"./ErrorMessage-07ea8fac.js";import{L as I}from"./Label-3d09487c.js";import{H as L}from"./Hint-47130fa7.js";import"./CookieBanner-5f4494f2.js";import"./DateInput-4b08d3af.js";import"./Details-7a2689db.js";import"./ErrorSummary-d6d61f90.js";import"./FileUpload-b260dab3.js";import"./Footer-aedacc55.js";import"./Header-81057254.js";import"./Input-70154cc0.js";import"./InsetText-39830db6.js";import"./NotificationBanner-b6ddf0d7.js";import"./Pagination-3b973ce5.js";import"./Panel-9db3f9a0.js";import"./PhaseBanner-2999952f.js";import"./Radios-78e6f060.js";import"./Select-d6e3d713.js";import"./SkipLink-0b18f351.js";import{T as S}from"./Table-eacef104.js";import"./Tabs-61739ac7.js";import"./Tag-a86cd5c3.js";import"./Textarea-0f1928d4.js";import"./WarningText-6272bbd9.js";const q=({id:e,name:a,children:s,classes:r,errorMessage:i,value:n,...u})=>{!e&&a?e=a:!a&&e&&(a=e);let d;if(i){const p=e?`${e}-error`:"";d=l(C,{id:p,children:i})}const V=t.Children.toArray(s);return c(x,{error:i,children:[d,l("div",{className:`govuk-checkboxes ${r||""}`,"data-module":"govuk-checkboxes",id:e,...u,children:t.Children.map(V,p=>l(o,{children:t.cloneElement(p,{name:a,data:n})}))})]})};try{q.displayName="Radios",q.__docgenInfo={description:"",displayName:"Radios",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}try{Checkboxes.displayName="Checkboxes",Checkboxes.__docgenInfo={description:"",displayName:"Checkboxes",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const b=({id:e,name:a,children:s,key:r,divider:i,exclusive:n,value:u,data:d,classes:V,...p})=>{const N=t.Children.toArray(s);return c("div",{className:i?"govuk-checkboxes__divider":"govuk-checkboxes__item",children:[!i&&c(o,{children:[l("input",{className:`govuk-checkboxes__input ${V||""}`,id:e,name:a,type:"checkbox",value:u,defaultChecked:Array.isArray(d)&&d.includes(u)||d===u,"data-behaviour":n?"exclusive":null,...p},r),t.Children.map(N,(m,E)=>{if(t.isValidElement(m)&&m.type===I)return l(o,{children:t.cloneElement(m,{classes:"govuk-checkboxes__label"})});if(t.isValidElement(m)&&m.type===L)return l(o,{children:t.cloneElement(m,{classes:"govuk-checkboxes__hint"})})})]}),i&&l(o,{children:s})]})};try{b.displayName="CheckboxesItem",b.__docgenInfo={description:"",displayName:"CheckboxesItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}try{CheckboxItem.displayName="CheckboxItem",CheckboxItem.__docgenInfo={description:"",displayName:"CheckboxItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const y=({id:e,classes:a,children:s,...r})=>{const i=t.Children.toArray(s);return l("div",{className:`govuk-summary-list__row ${a||""}`,id:e,...r,children:t.Children.map(i,(n,u)=>{if(t.isValidElement(n)&&(n.type===f||n.type===_||n.type===g))return l(o,{children:t.cloneElement(n,{})})})})};try{y.displayName="SummaryListItem",y.__docgenInfo={description:"",displayName:"SummaryListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const h=({id:e,classes:a,children:s,field:r,data:i,rowKey:n,href:u,...d})=>!r||!i||!Object.keys(i).includes(r)?null:c(y,{classes:a,id:e,...d,children:[l(f,{children:n||r}),l(_,{children:i[r]}),l(g,{children:c("a",{className:"govuk-link",href:u,children:["Change ",l("span",{className:"govuk-visually-hidden",children:r.toLowerCase()})]})})]});try{h.displayName="SummaryListRow",h.__docgenInfo={description:"",displayName:"SummaryListRow",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},field:{defaultValue:null,description:"",name:"field",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},rowKey:{defaultValue:null,description:"",name:"rowKey",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const k=({id:e,classes:a,children:s,...r})=>{const i=t.Children.toArray(s);return l("dl",{className:`govuk-summary-list ${a||""}`,id:e,...r,children:t.Children.map(i,(n,u)=>{if(t.isValidElement(n)&&(n.type===y||n.type===h))return l(o,{children:t.cloneElement(n,{})})})})};try{k.displayName="SummaryList",k.__docgenInfo={description:"",displayName:"SummaryList",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const f=({id:e,classes:a,children:s,...r})=>l("dt",{className:`govuk-summary-list__key ${a||""}`,id:e,...r,children:s});try{f.displayName="SummaryListKey",f.__docgenInfo={description:"",displayName:"SummaryListKey",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const _=({id:e,classes:a,children:s,...r})=>l("dt",{className:`govuk-summary-list__value ${a||""}`,id:e,...r,children:s});try{_.displayName="SummaryListValue",_.__docgenInfo={description:"",displayName:"SummaryListValue",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const g=({id:e,classes:a,children:s,...r})=>l("dt",{className:`govuk-summary-list__actions ${a||""}`,id:e,...r,children:s});try{g.displayName="SummaryListActions",g.__docgenInfo={description:"",displayName:"SummaryListActions",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const v=({id:e,children:a,caption:s,classes:r,attributes:i})=>{const n=t.Children.toArray(a);return l(o,{children:l("tr",{className:`govuk-table__row ${r||""}`,id:e,...i,children:t.Children.map(n,(u,d)=>{if(t.isValidElement(u)&&u.type===S)return l(o,{children:t.cloneElement(u,{})})})})})};try{v.displayName="TableRow",v.__docgenInfo={description:"",displayName:"TableRow",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}export{b as C,q as R,k as S,y as a,f as b,_ as c,g as d};
//# sourceMappingURL=TableRow-945861b6.js.map
