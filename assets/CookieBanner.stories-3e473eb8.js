import{C as s}from"./CookieBanner-0021e8bc.js";import"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const t="cookie-banner",a=[{name:"default",options:{messages:[{headingText:"Cookies on this government service",text:"We use analytics cookies to help understand how users use our service.",actions:[{text:"Accept analytics cookies",type:"submit",name:"cookies",value:"accept"},{text:"Reject analytics cookies",type:"submit",name:"cookies",value:"reject"},{text:"View cookie preferences",href:"/cookie-preferences"}]}]},hidden:!1,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on this government service</h2>
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">We use analytics cookies to help understand how users use our service.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button value="accept" type="submit" name="cookies" class="govuk-button" data-module="govuk-button">
              Accept analytics cookies
            </button>
          
        
          
            <button value="reject" type="submit" name="cookies" class="govuk-button" data-module="govuk-button">
              Reject analytics cookies
            </button>
          
        
          
            
              
              
              <a class="govuk-link" href="/cookie-preferences">View cookie preferences</a>
            
          
        
      </div>
      
    </div>
  
</div>`},{name:"accepted confirmation banner",options:{messages:[{text:"Your cookie preferences have been saved. You have accepted cookies.",role:"alert",actions:[{text:"Hide cookie message",type:"button"}]}]},hidden:!1,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container" role="alert">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">Your cookie preferences have been saved. You have accepted cookies.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button type="button" class="govuk-button" data-module="govuk-button">
              Hide cookie message
            </button>
          
        
      </div>
      
    </div>
  
</div>`},{name:"rejected confirmation banner",options:{messages:[{text:"Your cookie preferences have been saved. You have rejected cookies.",role:"alert",actions:[{text:"Hide cookie message",type:"button"}]}]},hidden:!1,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container" role="alert">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">Your cookie preferences have been saved. You have rejected cookies.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button type="button" class="govuk-button" data-module="govuk-button">
              Hide cookie message
            </button>
          
        
      </div>
      
    </div>
  
</div>`},{name:"client-side implementation",options:{messages:[{headingText:"Cookies on this service",text:"We use cookies to help understand how users use our service.",actions:[{text:"Accept analytics cookies",type:"submit",name:"cookies",value:"accept"},{text:"Reject analytics cookies",type:"submit",name:"cookies",value:"reject"},{text:"View cookie preferences",href:"/cookie-preferences"}]},{text:"Your cookie preferences have been saved. You have accepted cookies.",role:"alert",hidden:!0,actions:[{text:"Hide cookie message",type:"button"}]},{text:"Your cookie preferences have been saved. You have rejected cookies.",role:"alert",hidden:!0,actions:[{text:"Hide cookie message",type:"button"}]}]},hidden:!1,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on this service</h2>
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">We use cookies to help understand how users use our service.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button value="accept" type="submit" name="cookies" class="govuk-button" data-module="govuk-button">
              Accept analytics cookies
            </button>
          
        
          
            <button value="reject" type="submit" name="cookies" class="govuk-button" data-module="govuk-button">
              Reject analytics cookies
            </button>
          
        
          
            
              
              
              <a class="govuk-link" href="/cookie-preferences">View cookie preferences</a>
            
          
        
      </div>
      
    </div>
  
    
    

    <div class="govuk-cookie-banner__message govuk-width-container" role="alert" hidden>

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">Your cookie preferences have been saved. You have accepted cookies.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button type="button" class="govuk-button" data-module="govuk-button">
              Hide cookie message
            </button>
          
        
      </div>
      
    </div>
  
    
    

    <div class="govuk-cookie-banner__message govuk-width-container" role="alert" hidden>

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">Your cookie preferences have been saved. You have rejected cookies.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button type="button" class="govuk-button" data-module="govuk-button">
              Hide cookie message
            </button>
          
        
      </div>
      
    </div>
  
</div>`},{name:"with html",options:{messages:[{headingHtml:"Cookies on <span>my service</span>",html:'<p class="govuk-body">We use cookies in <span>our service</span>.</p><p class="govuk-body">We’d like to use analytics cookies so we can understand how you use the Design System and make improvements.</p>',actions:[{text:"Accept analytics cookies",type:"submit",name:"cookies",value:"accept"},{text:"Reject analytics cookies",type:"submit",name:"cookies",value:"reject"},{text:"View cookie preferences",href:"/cookie-preferences"}]}]},hidden:!1,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on <span>my service</span></h2>
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">We use cookies in <span>our service</span>.</p><p class="govuk-body">We’d like to use analytics cookies so we can understand how you use the Design System and make improvements.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button value="accept" type="submit" name="cookies" class="govuk-button" data-module="govuk-button">
              Accept analytics cookies
            </button>
          
        
          
            <button value="reject" type="submit" name="cookies" class="govuk-button" data-module="govuk-button">
              Reject analytics cookies
            </button>
          
        
          
            
              
              
              <a class="govuk-link" href="/cookie-preferences">View cookie preferences</a>
            
          
        
      </div>
      
    </div>
  
</div>`},{name:"heading html",options:{messages:[{headingHtml:"Cookies on <span>my service</span>"}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on <span>my service</span></h2>
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
    </div>
  
</div>`},{name:"heading html as text",options:{messages:[{headingText:"Cookies on <span>my service</span>"}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on &lt;span&gt;my service&lt;/span&gt;</h2>
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
    </div>
  
</div>`},{name:"html",options:{messages:[{html:'<p class="govuk-body">We use cookies in <span>our service</span>.</p>'}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">We use cookies in <span>our service</span>.</p></div>
      </div>
    </div>

      
    </div>
  
</div>`},{name:"classes",options:{messages:[{classes:"app-my-class"}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    
      
    

    <div class="govuk-cookie-banner__message govuk-width-container app-my-class">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
    </div>
  
</div>`},{name:"attributes",options:{messages:[{attributes:{"data-attribute":"my-value"}}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container" data-attribute="my-value">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
    </div>
  
</div>`},{name:"custom aria label",options:{ariaLabel:"Cookies on GOV.UK",messages:[{text:"We use cookies on GOV.UK"}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookies on GOV.UK">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">We use cookies on GOV.UK</p></div>
      </div>
    </div>

      
    </div>
  
</div>`},{name:"hidden",options:{messages:[{hidden:!0}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container" hidden>

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
    </div>
  
</div>`},{name:"hidden false",options:{messages:[{hidden:!1}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
    </div>
  
</div>`},{name:"default action",options:{messages:[{actions:[{text:"This is a button"}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button class="govuk-button" data-module="govuk-button">
              This is a button
            </button>
          
        
      </div>
      
    </div>
  
</div>`},{name:"link",options:{messages:[{actions:[{text:"This is a link",href:"/link"}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            
              
              
              <a class="govuk-link" href="/link">This is a link</a>
            
          
        
      </div>
      
    </div>
  
</div>`},{name:"link with false button options",options:{messages:[{actions:[{text:"This is a link",href:"/link",value:"cookies",name:"link"}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            
              
              
              <a class="govuk-link" href="/link">This is a link</a>
            
          
        
      </div>
      
    </div>
  
</div>`},{name:"link as a button",options:{messages:[{actions:[{text:"This is a link",href:"/link",type:"button"}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            
              <a href="/link" role="button" draggable="false" class="govuk-button" data-module="govuk-button">
              This is a link
            </a>
            
          
        
      </div>
      
    </div>
  
</div>`},{name:"type",options:{messages:[{actions:[{text:"Button",type:"button"}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button type="button" class="govuk-button" data-module="govuk-button">
              Button
            </button>
          
        
      </div>
      
    </div>
  
</div>`},{name:"button classes",options:{messages:[{actions:[{text:"Button with custom classes",classes:"my-button-class app-button-class"}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button class="govuk-button my-button-class app-button-class" data-module="govuk-button">
              Button with custom classes
            </button>
          
        
      </div>
      
    </div>
  
</div>`},{name:"button attributes",options:{messages:[{actions:[{text:"Button with attributes",attributes:{"data-button-attribute":"my-value"}}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button class="govuk-button" data-module="govuk-button" data-button-attribute="my-value">
              Button with attributes
            </button>
          
        
      </div>
      
    </div>
  
</div>`},{name:"link classes",options:{messages:[{actions:[{text:"Link with custom classes",href:"/my-link",classes:"my-link-class app-link-class"}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            
              
              
                
              
              <a class="govuk-link my-link-class app-link-class" href="/my-link">Link with custom classes</a>
            
          
        
      </div>
      
    </div>
  
</div>`},{name:"link attributes",options:{messages:[{actions:[{text:"Link with attributes",href:"/link",attributes:{"data-link-attribute":"my-value"}}]}]},hidden:!0,html:`<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookie banner">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            
              
              
              <a class="govuk-link" href="/link" data-link-attribute="my-value">Link with attributes</a>
            
          
        
      </div>
      
    </div>
  
</div>`},{name:"full banner hidden",options:{hidden:!0,classes:"hide-cookie-banner",attributes:{"data-hide-cookie-banner":"true"},messages:[{headingText:"Cookies on this service",text:"We use cookies to help understand how users use our service.",actions:[{text:"Accept analytics cookies",type:"submit",name:"cookies",value:"accept"},{text:"Reject analytics cookies",type:"submit",name:"cookies",value:"reject"},{text:"View cookie preferences",href:"/cookie-preferences"}]},{text:"Your cookie preferences have been saved. You have accepted cookies.",role:"alert",actions:[{text:"Hide cookie message",type:"button"}]},{text:"Your cookie preferences have been saved. You have rejected cookies.",role:"alert",actions:[{text:"Hide cookie message",type:"button"}]}]},hidden:!0,html:`<div class="govuk-cookie-banner hide-cookie-banner" data-nosnippet role="region" aria-label="Cookie banner" hidden data-hide-cookie-banner="true">
    
    

    <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on this service</h2>
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">We use cookies to help understand how users use our service.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button value="accept" type="submit" name="cookies" class="govuk-button" data-module="govuk-button">
              Accept analytics cookies
            </button>
          
        
          
            <button value="reject" type="submit" name="cookies" class="govuk-button" data-module="govuk-button">
              Reject analytics cookies
            </button>
          
        
          
            
              
              
              <a class="govuk-link" href="/cookie-preferences">View cookie preferences</a>
            
          
        
      </div>
      
    </div>
  
    
    

    <div class="govuk-cookie-banner__message govuk-width-container" role="alert">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">Your cookie preferences have been saved. You have accepted cookies.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button type="button" class="govuk-button" data-module="govuk-button">
              Hide cookie message
            </button>
          
        
      </div>
      
    </div>
  
    
    

    <div class="govuk-cookie-banner__message govuk-width-container" role="alert">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        

        <div class="govuk-cookie-banner__content"><p class="govuk-body">Your cookie preferences have been saved. You have rejected cookies.</p></div>
      </div>
    </div>

      
      <div class="govuk-button-group">
        
          
            <button type="button" class="govuk-button" data-module="govuk-button">
              Hide cookie message
            </button>
          
        
      </div>
      
    </div>
  
</div>`}],c={component:t,fixtures:a},p={title:"CookieBanner",component:s},d={name:"default"},v={name:"accepted confirmation banner"},u={name:"rejected confirmation banner"},r={name:"clientside implementation"},k={name:"with html"},e=[];e.push(d);e.push(v);e.push(u);e.push(r);e.push(k);c.fixtures.forEach(n=>{let o=e.find(i=>i.name===n.name.replace(/[^a-z0-9s]/gi,""))||{};o.name===n.name&&(o.args={messages:n.options.messages,ariaLabel:n.options.ariaLabel,hidden:n.options.hidden,classes:n.options.classes,attributes:n.options.attributes})});const h=["primary","acceptedConfirmationBanner","rejectedConfirmationBanner","clientsideImplementation","withHtml"];export{h as __namedExportsOrder,v as acceptedConfirmationBanner,r as clientsideImplementation,p as default,d as primary,u as rejectedConfirmationBanner,k as withHtml};
//# sourceMappingURL=CookieBanner.stories-3e473eb8.js.map
