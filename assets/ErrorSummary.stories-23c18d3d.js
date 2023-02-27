import{a as o}from"./jsx-runtime-68f49b4e.js";import{E as i,a}from"./ErrorSummary-d6d61f90.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const l="error-summary",m=[{name:"default",options:{titleText:"There is a problem",errorList:[{text:"The date your passport was issued must be in the past",href:"#example-error-1"},{text:"Enter a postcode, like AA1 1AA",href:"#example-error-2"}]},hidden:!1,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            <a href="#example-error-1">The date your passport was issued must be in the past</a>
          
          </li>
        
          <li>
          
            <a href="#example-error-2">Enter a postcode, like AA1 1AA</a>
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"without links",options:{titleText:"There is a problem",errorList:[{text:"Invalid username or password"}]},hidden:!1,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"mixed with and without links",options:{titleText:"There is a problem",errorList:[{text:"Invalid username or password"},{text:"Agree to the terms of service to log in",href:"#example-error-1"}]},hidden:!1,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
          <li>
          
            <a href="#example-error-1">Agree to the terms of service to log in</a>
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"with everything",options:{titleText:"There is a problem",descriptionText:"Please fix the errors below.",errorList:[{text:"Invalid username or password"},{text:"Agree to the terms of service to log in",href:"#example-error-1"}]},hidden:!1,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
        <p>
          Please fix the errors below.
        </p>
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
          <li>
          
            <a href="#example-error-1">Agree to the terms of service to log in</a>
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"html as titleText",options:{titleText:"Alert, <em>alert</em>",errorList:[{text:"Invalid username or password"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      Alert, &lt;em&gt;alert&lt;/em&gt;
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"title html",options:{titleHtml:"Alert, <em>alert</em>",errorList:[{text:"Invalid username or password"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      Alert, <em>alert</em>
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"description",options:{titleText:"There is a problem",descriptionText:"Lorem ipsum",errorList:[{text:"Invalid username or password"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
        <p>
          Lorem ipsum
        </p>
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"html as descriptionText",options:{titleText:"There is a problem",descriptionText:"See errors below (>)",errorList:[{text:"Invalid username or password"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
        <p>
          See errors below (&gt;)
        </p>
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"description html",options:{titleText:"There is a problem",descriptionHtml:"See <span>errors</span> below",errorList:[{text:"Invalid username or password"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
        <p>
          See <span>errors</span> below
        </p>
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"classes",options:{titleText:"There is a problem",classes:"extra-class one-more-class",errorList:[{text:"Invalid username or password"}]},hidden:!0,html:`<div class="govuk-error-summary extra-class one-more-class" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"attributes",options:{titleText:"There is a problem",attributes:{"first-attribute":"foo","second-attribute":"bar"},errorList:[{text:"Invalid username or password"}]},hidden:!0,html:`<div class="govuk-error-summary" first-attribute="foo" second-attribute="bar" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Invalid username or password
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"error list with attributes",options:{titleText:"There is a problem",errorList:[{text:"Error-1",href:"#item",attributes:{"data-attribute":"my-attribute","data-attribute-2":"my-attribute-2"}}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            <a href="#item" data-attribute="my-attribute" data-attribute-2="my-attribute-2">Error-1</a>
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"error list with html as text",options:{titleText:"There is a problem",errorList:[{text:"Descriptive link to the <b>question</b> with an error"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            Descriptive link to the &lt;b&gt;question&lt;/b&gt; with an error
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"error list with html",options:{titleText:"There is a problem",errorList:[{html:"The date your passport was issued <b>must</b> be in the past"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            The date your passport was issued <b>must</b> be in the past
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"error list with html link",options:{titleText:"There is a problem",errorList:[{html:"Descriptive link to the <b>question</b> with an error",href:"#error-1"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            <a href="#error-1">Descriptive link to the <b>question</b> with an error</a>
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"error list with html as text link",options:{titleText:"There is a problem",errorList:[{text:"Descriptive link to the <b>question</b> with an error",href:"#error-1"}]},hidden:!0,html:`<div class="govuk-error-summary" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            <a href="#error-1">Descriptive link to the &lt;b&gt;question&lt;/b&gt; with an error</a>
          
          </li>
        
      </ul>
    </div>
  </div>
</div>`},{name:"autofocus disabled",options:{titleText:"There is a problem",disableAutoFocus:!0},hidden:!0,html:`<div class="govuk-error-summary" data-disable-auto-focus="true" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
      </ul>
    </div>
  </div>
</div>`},{name:"autofocus explicitly enabled",options:{titleText:"There is a problem",disableAutoFocus:!1},hidden:!0,html:`<div class="govuk-error-summary" data-disable-auto-focus="false" data-module="govuk-error-summary">
  
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      <ul class="govuk-list govuk-error-summary__list">
        
      </ul>
    </div>
  </div>
</div>`}],u={component:l,fixtures:m},_={title:"ErrorSummary",component:i},d={name:"default"},v={name:"without links"},h={name:"mixed with and without links"},p={name:"with everything"},e=[];e.push(d);e.push(v);e.push(h);e.push(p);u.fixtures.forEach(r=>{var t;let n=e.find(s=>s.name===r.name.replace(/[^a-z0-9s]/gi,""))||{};n.name===r.name&&(n.args={titleText:r.options.titleText,children:(t=r.options.errorList)==null?void 0:t.map(s=>o(a,{id:s.href,children:s.text})),classes:r.options.classes,attributes:r.options.attributes,disableAutoFocus:r.options.disableAutoFocus})});const b=["primary","withoutLinks","mixedWithAndWithoutLinks","withEverything"];export{b as __namedExportsOrder,_ as default,h as mixedWithAndWithoutLinks,d as primary,p as withEverything,v as withoutLinks};
//# sourceMappingURL=ErrorSummary.stories-23c18d3d.js.map
