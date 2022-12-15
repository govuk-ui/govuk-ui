import{P as o}from"./PhaseBanner.a1bb581d.js";import"./Tag.cf6708bc.js";import"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const i="phase-banner",r=[{name:"default",options:{tag:{text:"alpha"},html:'This is a new service - your <a href="#" class="govuk-link">feedback</a> will help us to improve it.'},hidden:!1,html:`<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      alpha
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service - your <a href="#" class="govuk-link">feedback</a> will help us to improve it.
    </span>
  </p>
</div>`},{name:"classes",options:{text:"This is a new service \u2013 your feedback will help us to improve it",classes:"extra-class one-more-class"},hidden:!0,html:`<div class="govuk-phase-banner extra-class one-more-class">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service \u2013 your feedback will help us to improve it
    </span>
  </p>
</div>`},{name:"text",options:{text:"This is a new service \u2013 your feedback will help us to improve it"},hidden:!0,html:`<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service \u2013 your feedback will help us to improve it
    </span>
  </p>
</div>`},{name:"html as text",options:{text:'This is a new service - your <a href="#" class="govuk-link">feedback</a> will help us to improve it.'},hidden:!0,html:`<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service - your &lt;a href=&quot;#&quot; class=&quot;govuk-link&quot;&gt;feedback&lt;/a&gt; will help us to improve it.
    </span>
  </p>
</div>`},{name:"attributes",options:{text:"This is a new service \u2013 your feedback will help us to improve it",attributes:{"first-attribute":"foo","second-attribute":"bar"}},hidden:!0,html:`<div class="govuk-phase-banner" first-attribute="foo" second-attribute="bar">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service \u2013 your feedback will help us to improve it
    </span>
  </p>
</div>`},{name:"tag html",options:{text:"This is a new service \u2013 your feedback will help us to improve it",tag:{html:"<em>alpha</em>"}},hidden:!0,html:`<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      <em>alpha</em>
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service \u2013 your feedback will help us to improve it
    </span>
  </p>
</div>`},{name:"tag classes",options:{text:"This is a new service \u2013 your feedback will help us to improve it",tag:{classes:"govuk-tag--grey",text:"alpha"}},hidden:!0,html:`<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag govuk-tag--grey">
      alpha
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service \u2013 your feedback will help us to improve it
    </span>
  </p>
</div>`}],p={component:i,fixtures:r},k={title:"PhaseBanner",component:o},l={name:"default"},a=[];a.push(l);p.fixtures.forEach(e=>{var s;let n=a.find(t=>t.name===e.name.replace(/[^a-z0-9s]/gi,""))||{};n.name===e.name&&(n.args={children:e.options.html,className:e.options.classes,phase:(s=e.options.tag)==null?void 0:s.text,attributes:e.options.attributes})});const m=["primary"];export{m as __namedExportsOrder,k as default,l as primary};
//# sourceMappingURL=PhaseBanner.stories.f63123df.js.map
