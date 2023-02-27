import{j as c,a as t,F as m}from"./jsx-runtime-68f49b4e.js";import{r as n}from"./index-f1f749bf.js";import"./Accordion-12d9884c.js";import"./BackLink-54564ca1.js";import"./BreadcrumbItem-7e03e4ef.js";import"./Button-791dc627.js";import"./CharacterCount-6c285db3.js";import{F as x}from"./FormGroup-f91b51d3.js";import{E as N}from"./ErrorMessage-07ea8fac.js";import{L as C}from"./Label-3d09487c.js";import{H as I}from"./Hint-47130fa7.js";import"./CookieBanner-5f4494f2.js";import"./DateInput-4b08d3af.js";import"./Details-7a2689db.js";import"./ErrorSummary-d6d61f90.js";import"./FileUpload-b260dab3.js";import"./Footer-aedacc55.js";import"./Header-81057254.js";import"./Input-70154cc0.js";import"./InsetText-39830db6.js";import"./NotificationBanner-b6ddf0d7.js";import"./Pagination-3b973ce5.js";import"./Panel-9db3f9a0.js";import"./PhaseBanner-2999952f.js";import"./Radios-78e6f060.js";import"./Select-d6e3d713.js";import"./SkipLink-0b18f351.js";import"./Table-aec54a4c.js";import"./Tabs-61739ac7.js";import"./Tag-a86cd5c3.js";import"./Textarea-0f1928d4.js";import"./WarningText-6272bbd9.js";const q=({id:e,name:a,children:i,classes:r,errorMessage:s,value:l,...u})=>{!e&&a?e=a:!a&&e&&(a=e);let d;if(s){const p=e?`${e}-error`:"";d=t(N,{id:p,children:s})}const V=n.Children.toArray(i);return c(x,{error:s,children:[d,t("div",{className:`govuk-checkboxes ${r||""}`,"data-module":"govuk-checkboxes",id:e,...u,children:n.Children.map(V,p=>t(m,{children:n.cloneElement(p,{name:a,data:l})}))})]})};try{q.displayName="Radios",q.__docgenInfo={description:"",displayName:"Radios",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}try{Checkboxes.displayName="Checkboxes",Checkboxes.__docgenInfo={description:"",displayName:"Checkboxes",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"any"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const b=({id:e,name:a,children:i,key:r,divider:s,exclusive:l,value:u,data:d,classes:V,...p})=>{const v=n.Children.toArray(i);return c("div",{className:s?"govuk-checkboxes__divider":"govuk-checkboxes__item",children:[!s&&c(m,{children:[t("input",{className:`govuk-checkboxes__input ${V||""}`,id:e,name:a,type:"checkbox",value:u,defaultChecked:Array.isArray(d)&&d.includes(u)||d===u,"data-behaviour":l?"exclusive":null,...p},r),n.Children.map(v,(o,L)=>{if(n.isValidElement(o)&&o.type===C)return t(m,{children:n.cloneElement(o,{classes:"govuk-checkboxes__label"})});if(n.isValidElement(o)&&o.type===I)return t(m,{children:n.cloneElement(o,{classes:"govuk-checkboxes__hint"})})})]}),s&&t(m,{children:i})]})};try{b.displayName="CheckboxesItem",b.__docgenInfo={description:"",displayName:"CheckboxesItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}try{CheckboxItem.displayName="CheckboxItem",CheckboxItem.__docgenInfo={description:"",displayName:"CheckboxItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const y=({id:e,classes:a,children:i,...r})=>{const s=n.Children.toArray(i);return t("div",{className:`govuk-summary-list__row ${a||""}`,id:e,...r,children:n.Children.map(s,(l,u)=>{if(n.isValidElement(l)&&(l.type===f||l.type===_||l.type===g))return t(m,{children:n.cloneElement(l,{})})})})};try{y.displayName="SummaryListItem",y.__docgenInfo={description:"",displayName:"SummaryListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const h=({id:e,classes:a,children:i,field:r,data:s,rowKey:l,href:u,...d})=>!r||!s||!Object.keys(s).includes(r)?null:c(y,{classes:a,id:e,...d,children:[t(f,{children:l||r}),t(_,{children:s[r]}),t(g,{children:c("a",{className:"govuk-link",href:u,children:["Change ",t("span",{className:"govuk-visually-hidden",children:r.toLowerCase()})]})})]});try{h.displayName="SummaryListRow",h.__docgenInfo={description:"",displayName:"SummaryListRow",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}},field:{defaultValue:null,description:"",name:"field",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},rowKey:{defaultValue:null,description:"",name:"rowKey",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const k=({id:e,classes:a,children:i,...r})=>{const s=n.Children.toArray(i);return t("dl",{className:`govuk-summary-list ${a||""}`,id:e,...r,children:n.Children.map(s,(l,u)=>{if(n.isValidElement(l)&&(l.type===y||l.type===h))return t(m,{children:n.cloneElement(l,{})})})})};try{k.displayName="SummaryList",k.__docgenInfo={description:"",displayName:"SummaryList",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const f=({id:e,classes:a,children:i,...r})=>t("dt",{className:`govuk-summary-list__key ${a||""}`,id:e,...r,children:i});try{f.displayName="SummaryListKey",f.__docgenInfo={description:"",displayName:"SummaryListKey",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const _=({id:e,classes:a,children:i,...r})=>t("dt",{className:`govuk-summary-list__value ${a||""}`,id:e,...r,children:i});try{_.displayName="SummaryListValue",_.__docgenInfo={description:"",displayName:"SummaryListValue",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const g=({id:e,classes:a,children:i,...r})=>t("dt",{className:`govuk-summary-list__actions ${a||""}`,id:e,...r,children:i});try{g.displayName="SummaryListActions",g.__docgenInfo={description:"",displayName:"SummaryListActions",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}export{b as C,q as R,k as S,y as a,f as b,_ as c,g as d};
//# sourceMappingURL=SummaryListActions-a5976956.js.map
