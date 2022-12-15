import{B as a}from"./Breadcrumbs.ef45871c.js";import"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const t="breadcrumbs",l=[{name:"default",options:{items:[{text:"Section",href:"/section"},{text:"Sub-section",href:"/section/sub-section"}]},hidden:!1,html:`<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section">Sub-section</a>
    </li>
    
  
  </ol>
</div>`},{name:"with one level",options:{items:[{text:"Section",href:"/section"}]},hidden:!1,html:`<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
    
  
  </ol>
</div>`},{name:"with multiple levels",options:{items:[{text:"Home",href:"/"},{text:"Section",href:"/section"},{text:"Sub-section",href:"/section/sub-section"},{text:"Sub Sub-section",href:"/section/sub-section/sub-sub-section"}]},hidden:!1,html:`<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section">Sub-section</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section/sub-sub-section">Sub Sub-section</a>
    </li>
    
  
  </ol>
</div>`},{name:"without the home section",options:{items:[{text:"Service Manual",href:"/service-manual"},{text:"Agile Delivery",href:"/service-manual/agile-delivery"}]},hidden:!1,html:`<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/service-manual">Service Manual</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/service-manual/agile-delivery">Agile Delivery</a>
    </li>
    
  
  </ol>
</div>`},{name:"with last breadcrumb as current page",options:{items:[{text:"Home",href:"/"},{text:"Passports, travel and living abroad",href:"/browse/abroad"},{text:"Travel abroad"}]},hidden:!1,html:`<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/browse/abroad">Passports, travel and living abroad</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item" aria-current="page">Travel abroad</li>
    
  
  </ol>
</div>`},{name:"with collapse on mobile",options:{collapseOnMobile:!0,items:[{text:"Home",href:"/"},{text:"Education, training and skills",href:"/education"},{text:"Special educational needs and disability (SEND) and high needs",href:"/education/special-educational-needs-and-disability-send-and-high-needs"}]},hidden:!1,html:`<div class="govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/education">Education, training and skills</a>
    </li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/education/special-educational-needs-and-disability-send-and-high-needs">Special educational needs and disability (SEND) and high needs</a>
    </li>
    
  
  </ol>
</div>`},{name:"classes",options:{classes:"app-breadcrumbs--custom-modifier",items:[{text:"Home"}]},hidden:!0,html:`<div class="govuk-breadcrumbs app-breadcrumbs--custom-modifier">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item" aria-current="page">Home</li>
    
  
  </ol>
</div>`},{name:"attributes",options:{attributes:{id:"my-navigation",role:"navigation"},items:[{text:"Home"}]},hidden:!0,html:`<div class="govuk-breadcrumbs" id="my-navigation" role="navigation">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item" aria-current="page">Home</li>
    
  
  </ol>
</div>`},{name:"item attributes",options:{items:[{text:"Section 1",href:"/section",attributes:{"data-attribute":"my-attribute","data-attribute-2":"my-attribute-2"}}]},hidden:!0,html:`<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section" data-attribute="my-attribute" data-attribute-2="my-attribute-2">Section 1</a>
    </li>
    
  
  </ol>
</div>`},{name:"html as text",options:{items:[{text:"<span>Section 1</span>"}]},hidden:!0,html:`<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item" aria-current="page">&lt;span&gt;Section 1&lt;/span&gt;</li>
    
  
  </ol>
</div>`},{name:"html",options:{items:[{html:"<em>Section 1</em>"},{html:"<em>Section 2</em>",href:"/section-2"}]},hidden:!0,html:`<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
  
    
    <li class="govuk-breadcrumbs__list-item" aria-current="page"><em>Section 1</em></li>
    
  
    
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section-2"><em>Section 2</em></a>
    </li>
    
  
  </ol>
</div>`}],r={component:t,fixtures:l},k={title:"Breadcrumbs",component:a},o={name:"default"},c={name:"with one level"},u={name:"with multiple levels"},m={name:"without the home section"},b={name:"with last breadcrumb as current page"},d={name:"with collapse on mobile"},e=[];e.push(o);e.push(c);e.push(u);e.push(m);e.push(b);e.push(d);r.fixtures.forEach(s=>{let i=e.find(n=>n.name===s.name.replace(/[^a-z0-9s]/gi,""))||{};i.name===s.name&&(i.args={children:s.options.items.map(n=>({children:n==null?void 0:n.text})),collapseOnMobile:s.options.collapseOnMobile,classes:s.options.classes,attributes:s.options.attributes})});const p=["primary","withOneLevel","withMultipleLevels","withoutTheHomeSection","withLastBreadcrumbAsCurrentPage","withCollapseOnMobile"];export{p as __namedExportsOrder,k as default,o as primary,d as withCollapseOnMobile,b as withLastBreadcrumbAsCurrentPage,u as withMultipleLevels,c as withOneLevel,m as withoutTheHomeSection};
//# sourceMappingURL=Breadcrumbs.stories.499df306.js.map
