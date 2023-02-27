import{a as r,F as t,j as _}from"./jsx-runtime-68f49b4e.js";import{r as e}from"./index-f1f749bf.js";const c=({id:l,children:n,classes:s,attributes:i})=>r(t,{children:r("td",{className:`govuk-table__cell ${s||""}`,id:l,...i,children:n})});try{c.displayName="TableCell",c.__docgenInfo={description:"",displayName:"TableCell",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const u=({id:l,children:n,classes:s,attributes:i})=>{const d=e.Children.toArray(n);return r(t,{children:r("thead",{className:`govuk-table__head ${s||""}`,id:l,...i,children:r("tr",{className:"govuk-table__row",children:e.Children.map(d,(a,o)=>{if(e.isValidElement(a)&&a.type===c)return r(t,{children:e.cloneElement(a,{})})})})})})};try{u.displayName="TableHeader",u.__docgenInfo={description:"",displayName:"TableHeader",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const p=({id:l,children:n,caption:s,classes:i,attributes:d})=>{const a=e.Children.toArray(n);return r(t,{children:r("tr",{className:`govuk-table__row ${i||""}`,id:l,...d,children:e.Children.map(a,(o,y)=>{if(e.isValidElement(o)&&o.type===c)return r(t,{children:e.cloneElement(o,{})})})})})};try{p.displayName="TableRow",p.__docgenInfo={description:"",displayName:"TableRow",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}const m=({id:l,children:n,classes:s,attributes:i})=>{const d=e.Children.toArray(n);return r(t,{children:_("table",{className:`govuk-table ${s||""}`,id:l,...i,children:[e.Children.map(d,(a,o)=>{if(e.isValidElement(a)&&a.type===u)return r(t,{children:e.cloneElement(a,{})})}),r("tbody",{className:"govuk-table__body",children:e.Children.map(d,(a,o)=>{if(e.isValidElement(a)&&a.type===p)return r(t,{children:e.cloneElement(a,{})})})})]})})};try{m.displayName="Table",m.__docgenInfo={description:"",displayName:"Table",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}}}catch{}export{m as T};
//# sourceMappingURL=Table-2fe37431.js.map
