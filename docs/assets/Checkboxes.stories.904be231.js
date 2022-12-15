import{r as i}from"./index.ef27e5dc.js";import{j as o,F as d,a as k}from"./jsx-runtime.999029ca.js";import"./Accordion.1b62976d.js";import"./BackLink.48f318ff.js";import"./Breadcrumbs.ef45871c.js";import"./Button.31533094.js";import"./CharacterCount.291a0ce6.js";import{L as b}from"./Label.23a00913.js";import{H as g}from"./Hint.20cb3654.js";import"./CookieBanner.0ab0e43b.js";import"./DateInput.46d20e7b.js";import"./Details.c8ca8231.js";import"./ErrorMessage.a77cea3a.js";import"./ErrorSummary.1975c422.js";import"./Fieldset.d311de9f.js";import"./FileUpload.4ba8eef3.js";import"./Footer.c05f736b.js";import"./Header.04c69ed8.js";import"./Input.9b2b4bae.js";import"./InsetText.45e24f53.js";import"./NotificationBanner.8e1fef54.js";import"./Pagination.6ec622b2.js";import"./Panel.97a850dc.js";import"./PhaseBanner.a1bb581d.js";import"./RadioItem.f6929da0.js";import"./Select.65ff998c.js";import"./SkipLink.68447f01.js";import"./SummaryList.48a5195e.js";import"./Table.877599bd.js";import"./Tabs.bc18cd4b.js";import"./Tag.cf6708bc.js";import"./Textarea.a019ff6f.js";import"./WarningText.356c21f1.js";import"./_commonjsHelpers.712cc82f.js";const u=({id:n,name:a,children:t,classes:l,...c})=>{!n&&a?n=a:!a&&n&&(a=n);const v=i.exports.Children.toArray(t);return o("div",{className:`govuk-checkboxes ${l||""}`,"data-module":"govuk-checkboxes",id:n,...c,children:i.exports.Children.map(v,h=>o(d,{children:i.exports.cloneElement(h,{name:a})}))})};try{u.displayName="Radios",u.__docgenInfo={description:"",displayName:"Radios",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkboxes/Checkboxes.tsx#Radios"]={docgenInfo:u.__docgenInfo,name:"Radios",path:"src/components/Checkboxes/Checkboxes.tsx#Radios"})}catch{}try{Checkboxes.displayName="Checkboxes",Checkboxes.__docgenInfo={description:"",displayName:"Checkboxes",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkboxes/Checkboxes.tsx#Checkboxes"]={docgenInfo:Checkboxes.__docgenInfo,name:"Checkboxes",path:"src/components/Checkboxes/Checkboxes.tsx#Checkboxes"})}catch{}const f="checkboxes",y=[{name:"default",options:{name:"nationality",items:[{value:"british",text:"British"},{value:"irish",text:"Irish"},{value:"other",text:"Citizen of another country"}]},hidden:!1,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british">
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with pre-checked values",options:{name:"nationality",items:[{value:"british",text:"British"},{value:"irish",text:"Irish"},{value:"other",text:"Citizen of another country",conditional:{html:`<div class="govuk-form-group">
  <label class="govuk-label" for="input-example">
    Country
  </label>
<input class="govuk-input" id="other-country" name="other-country" type="text" value="Ravka">
</div>
`}}],values:["british","other"]},hidden:!1,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british" checked>
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other" checked data-aria-controls="conditional-nationality-3">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional" id="conditional-nationality-3">
              <div class="govuk-form-group">
  <label class="govuk-label" for="input-example">
    Country
  </label>
<input class="govuk-input" id="other-country" name="other-country" type="text" value="Ravka">
</div>

            </div>
          
        
      
    
  </div>

</div>`},{name:"with divider and None",options:{name:"with-divider-and-none",fieldset:{legend:{text:"Which types of waste do you transport regularly?",classes:"govuk-fieldset__legend--l",isPageHeading:!0}},items:[{value:"animal",text:"Waste from animal carcasses"},{value:"mines",text:"Waste from mines or quarries"},{value:"farm",text:"Farm or agricultural waste"},{divider:"or"},{value:"none",text:"None of these",behaviour:"exclusive"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      Which types of waste do you transport regularly?
    </h1>
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none" name="with-divider-and-none" type="checkbox" value="animal">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none">
        Waste from animal carcasses
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none-2" name="with-divider-and-none" type="checkbox" value="mines">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-2">
        Waste from mines or quarries
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none-3" name="with-divider-and-none" type="checkbox" value="farm">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-3">
        Farm or agricultural waste
      </label>
            
          </div>
          
        
      
    
      
        
          <div class="govuk-checkboxes__divider">or</div>
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none-5" name="with-divider-and-none" type="checkbox" value="none" data-behaviour="exclusive">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-5">
        None of these
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with divider, None and conditional items",options:{name:"with-divider-and-none-and-conditional-items",fieldset:{legend:{text:"Do you have any access needs?",classes:"govuk-fieldset__legend--l",isPageHeading:!0}},items:[{value:"accessible-toilets",text:"Accessible toilets available"},{value:"braille",text:"Braille translation service available"},{value:"disabled-car-parking",text:"Disabled car parking available"},{value:"another-access-need",text:"Another access need",conditional:{html:`<label class="govuk-label" for="other-access-needs">Other access needs</label>
<textarea class="govuk-textarea govuk-!-width-one-third" name="other-access-needs" id="other-access-needs"></textarea>
`}},{divider:"or"},{value:"none",text:"None of these",behaviour:"exclusive"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      Do you have any access needs?
    </h1>
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items" name="with-divider-and-none-and-conditional-items" type="checkbox" value="accessible-toilets">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items">
        Accessible toilets available
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-2" name="with-divider-and-none-and-conditional-items" type="checkbox" value="braille">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-2">
        Braille translation service available
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-3" name="with-divider-and-none-and-conditional-items" type="checkbox" value="disabled-car-parking">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-3">
        Disabled car parking available
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-4" name="with-divider-and-none-and-conditional-items" type="checkbox" value="another-access-need" data-aria-controls="conditional-with-divider-and-none-and-conditional-items-4">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-4">
        Another access need
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-with-divider-and-none-and-conditional-items-4">
              <label class="govuk-label" for="other-access-needs">Other access needs</label>
<textarea class="govuk-textarea govuk-!-width-one-third" name="other-access-needs" id="other-access-needs"></textarea>

            </div>
          
        
      
    
      
        
          <div class="govuk-checkboxes__divider">or</div>
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-6" name="with-divider-and-none-and-conditional-items" type="checkbox" value="none" data-behaviour="exclusive">
            <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-6">
        None of these
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with id and name",options:{name:"with-id-and-name",fieldset:{legend:{text:"What is your nationality?"}},hint:{text:"If you have dual nationality, select all options that are relevant to you."},items:[{name:"british",id:"item_british",value:"yes",text:"British"},{name:"irish",id:"item_irish",value:"irish",text:"Irish"},{name:"custom-name-scottish",text:"Scottish",value:"scottish"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="with-id-and-name-hint">
  
  <legend class="govuk-fieldset__legend">
  
    What is your nationality?
  
  </legend>
  

  <div id="with-id-and-name-hint" class="govuk-hint">
    If you have dual nationality, select all options that are relevant to you.
  </div>


  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="item_british" name="british" type="checkbox" value="yes">
            <label class="govuk-label govuk-checkboxes__label" for="item_british">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="item_irish" name="irish" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="item_irish">
        Irish
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="with-id-and-name-3" name="custom-name-scottish" type="checkbox" value="scottish">
            <label class="govuk-label govuk-checkboxes__label" for="with-id-and-name-3">
        Scottish
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with hints on items",options:{name:"with-hints-on-items",fieldset:{legend:{text:"How do you want to sign in?",classes:"govuk-fieldset__legend--l",isPageHeading:!0}},items:[{name:"gateway",id:"government-gateway",value:"gov-gateway",text:"Sign in with Government Gateway",hint:{text:"You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."}},{name:"verify",id:"govuk-verify",value:"gov-verify",text:"Sign in with GOV.UK Verify",hint:{text:"You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."}}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      How do you want to sign in?
    </h1>
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="government-gateway" name="gateway" type="checkbox" value="gov-gateway" aria-describedby="government-gateway-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="government-gateway">
        Sign in with Government Gateway
      </label>
            
            <div id="government-gateway-item-hint" class="govuk-hint govuk-checkboxes__hint">
        You&#39;ll have a user ID if you&#39;ve registered for Self Assessment or filed a tax return online before.
      </div>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="govuk-verify" name="verify" type="checkbox" value="gov-verify" aria-describedby="govuk-verify-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="govuk-verify">
        Sign in with GOV.UK Verify
      </label>
            
            <div id="govuk-verify-item-hint" class="govuk-hint govuk-checkboxes__hint">
        You&#39;ll have an account if you&#39;ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </div>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with disabled item",options:{name:"sign-in",fieldset:{legend:{text:"How do you want to sign in?",classes:"govuk-fieldset__legend--l",isPageHeading:!0}},items:[{name:"gateway",id:"government-gateway",value:"gov-gateway",text:"Sign in with Government Gateway",hint:{text:"You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."}},{name:"verify",id:"govuk-verify",value:"gov-verify",text:"Sign in with GOV.UK Verify",hint:{text:"You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."},disabled:!0}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      How do you want to sign in?
    </h1>
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="government-gateway" name="gateway" type="checkbox" value="gov-gateway" aria-describedby="government-gateway-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="government-gateway">
        Sign in with Government Gateway
      </label>
            
            <div id="government-gateway-item-hint" class="govuk-hint govuk-checkboxes__hint">
        You&#39;ll have a user ID if you&#39;ve registered for Self Assessment or filed a tax return online before.
      </div>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="govuk-verify" name="verify" type="checkbox" value="gov-verify" disabled aria-describedby="govuk-verify-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="govuk-verify">
        Sign in with GOV.UK Verify
      </label>
            
            <div id="govuk-verify-item-hint" class="govuk-hint govuk-checkboxes__hint">
        You&#39;ll have an account if you&#39;ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </div>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with legend as a page heading",options:{name:"waste",fieldset:{legend:{text:"Which types of waste do you transport regularly?",classes:"govuk-fieldset__legend--l",isPageHeading:!0}},hint:{text:"Select all that apply"},items:[{value:"animal",text:"Waste from animal carcasses"},{value:"mines",text:"Waste from mines or quarries"},{value:"farm",text:"Farm or agricultural waste"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      Which types of waste do you transport regularly?
    </h1>
  
  </legend>
  

  <div id="waste-hint" class="govuk-hint">
    Select all that apply
  </div>


  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal">
            <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
            <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
            <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with a medium legend",options:{name:"waste",fieldset:{legend:{text:"Which types of waste do you transport regularly?",classes:"govuk-fieldset__legend--m"}},hint:{text:"Select all that apply"},errorMessage:{text:"Select which types of waste you transport regularly"},items:[{value:"animal",text:"Waste from animal carcasses"},{value:"mines",text:"Waste from mines or quarries"},{value:"farm",text:"Farm or agricultural waste"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="waste-hint waste-error">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
  
    Which types of waste do you transport regularly?
  
  </legend>
  

  <div id="waste-hint" class="govuk-hint">
    Select all that apply
  </div>


  
  
  <p id="waste-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select which types of waste you transport regularly
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal">
            <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
            <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
            <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"without fieldset",options:{name:"colours",items:[{value:"red",text:"Red"},{value:"green",text:"Green"},{value:"blue",text:"Blue"}]},hidden:!1,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="colours" name="colours" type="checkbox" value="red">
            <label class="govuk-label govuk-checkboxes__label" for="colours">
        Red
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="colours-2" name="colours" type="checkbox" value="green">
            <label class="govuk-label govuk-checkboxes__label" for="colours-2">
        Green
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="colours-3" name="colours" type="checkbox" value="blue">
            <label class="govuk-label govuk-checkboxes__label" for="colours-3">
        Blue
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with single option set 'aria-describedby' on input",options:{name:"t-and-c",errorMessage:{text:"Please accept the terms and conditions"},items:[{value:"yes",text:"I agree to the terms and conditions"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <p id="t-and-c-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please accept the terms and conditions
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="t-and-c" name="t-and-c" type="checkbox" value="yes" aria-describedby="t-and-c-error">
            <label class="govuk-label govuk-checkboxes__label" for="t-and-c">
        I agree to the terms and conditions
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with single option (and hint) set 'aria-describedby' on input",options:{name:"t-and-c-with-hint",errorMessage:{text:"Please accept the terms and conditions"},items:[{value:"yes",text:"I agree to the terms and conditions",hint:{text:"Go on, you know you want to!"}}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <p id="t-and-c-with-hint-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please accept the terms and conditions
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="t-and-c-with-hint" name="t-and-c-with-hint" type="checkbox" value="yes" aria-describedby="t-and-c-with-hint-error t-and-c-with-hint-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="t-and-c-with-hint">
        I agree to the terms and conditions
      </label>
            
            <div id="t-and-c-with-hint-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Go on, you know you want to!
      </div>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with fieldset and error message",options:{name:"nationality",errorMessage:{text:"Please accept the terms and conditions"},fieldset:{legend:{text:"What is your nationality?"}},items:[{value:"british",text:"British"},{value:"irish",text:"Irish"},{value:"other",text:"Citizen of another country"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="nationality-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your nationality?
  
  </legend>
  

  <p id="nationality-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please accept the terms and conditions
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british">
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with error message",options:{name:"waste",errorMessage:{text:"Please select an option"},fieldset:{legend:{text:"Which types of waste do you transport regularly?"}},items:[{value:"animal",text:"Waste from animal carcasses"},{value:"mines",text:"Waste from mines or quarries"},{value:"farm",text:"Farm or agricultural waste"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="waste-error">
  
  <legend class="govuk-fieldset__legend">
  
    Which types of waste do you transport regularly?
  
  </legend>
  

  <p id="waste-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal">
            <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
            <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
            <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with error message and hints on items",options:{name:"waste",errorMessage:{text:"Please select an option"},fieldset:{legend:{text:"Which types of waste do you transport regularly?"}},items:[{value:"animal",text:"Waste from animal carcasses",hint:{text:"Nullam id dolor id nibh ultricies vehicula ut id elit."}},{value:"mines",text:"Waste from mines or quarries",hint:{text:"Nullam id dolor id nibh ultricies vehicula ut id elit."}},{value:"farm",text:"Farm or agricultural waste",hint:{text:"Nullam id dolor id nibh ultricies vehicula ut id elit."}}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="waste-error">
  
  <legend class="govuk-fieldset__legend">
  
    Which types of waste do you transport regularly?
  
  </legend>
  

  <p id="waste-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal" aria-describedby="waste-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
            
            <div id="waste-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines" aria-describedby="waste-2-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
            
            <div id="waste-2-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm" aria-describedby="waste-3-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
            
            <div id="waste-3-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with very long option text",options:{name:"waste",hint:{text:"Nullam id dolor id nibh ultricies vehicula ut id elit."},errorMessage:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},fieldset:{legend:{text:"Maecenas faucibus mollis interdum?"}},items:[{value:"nullam",text:"Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus."},{value:"aenean",text:"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum."},{value:"fusce",text:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis."}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="waste-hint waste-error">
  
  <legend class="govuk-fieldset__legend">
  
    Maecenas faucibus mollis interdum?
  
  </legend>
  

  <div id="waste-hint" class="govuk-hint">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
  </div>


  
  
  <p id="waste-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="nullam">
            <label class="govuk-label govuk-checkboxes__label" for="waste">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="aenean">
            <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="fusce">
            <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with conditional items",options:{name:"with-conditional-items",idPrefix:"how-contacted",fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",conditional:{html:`<label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
`}},{value:"phone",text:"Phone",conditional:{html:`<label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
`}},{value:"text",text:"Text message",conditional:{html:`<label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
`}}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted" name="with-conditional-items" type="checkbox" value="email" data-aria-controls="conditional-how-contacted">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
        Email
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted">
              <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-2" name="with-conditional-items" type="checkbox" value="phone" data-aria-controls="conditional-how-contacted-2">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-2">
        Phone
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-2">
              <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-3" name="with-conditional-items" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-3">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-3">
        Text message
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-3">
              <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

            </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with conditional items with special characters",options:{name:"contact-prefs",idPrefix:"user.profile[contact-prefs]",fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",conditional:{html:`<label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
`}},{value:"phone",text:"Phone",conditional:{html:`<label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
`}},{value:"text",text:"Text message",conditional:{html:`<label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
`}}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="user.profile[contact-prefs]" name="contact-prefs" type="checkbox" value="email" data-aria-controls="conditional-user.profile[contact-prefs]">
            <label class="govuk-label govuk-checkboxes__label" for="user.profile[contact-prefs]">
        Email
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-user.profile[contact-prefs]">
              <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="user.profile[contact-prefs]-2" name="contact-prefs" type="checkbox" value="phone" data-aria-controls="conditional-user.profile[contact-prefs]-2">
            <label class="govuk-label govuk-checkboxes__label" for="user.profile[contact-prefs]-2">
        Phone
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-user.profile[contact-prefs]-2">
              <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="user.profile[contact-prefs]-3" name="contact-prefs" type="checkbox" value="text" data-aria-controls="conditional-user.profile[contact-prefs]-3">
            <label class="govuk-label govuk-checkboxes__label" for="user.profile[contact-prefs]-3">
        Text message
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-user.profile[contact-prefs]-3">
              <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

            </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with conditional item checked",options:{name:"how-contacted-checked",idPrefix:"how-contacted-checked",fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",checked:!0,conditional:{html:`<label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
`}},{value:"phone",text:"Phone",conditional:{html:`<label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
`}},{value:"text",text:"Text message",conditional:{html:`<label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
`}}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-checked" name="how-contacted-checked" type="checkbox" value="email" checked data-aria-controls="conditional-how-contacted-checked">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked">
        Email
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked">
              <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-checked-2" name="how-contacted-checked" type="checkbox" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-2">
        Phone
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-2">
              <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-checked-3" name="how-contacted-checked" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-checked-3">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-3">
        Text message
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-3">
              <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

            </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with optional form-group classes showing group error",options:{name:"how-contacted-checked",idPrefix:"how-contacted-checked",formGroup:{classes:"govuk-form-group--error"},fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",conditional:{html:`<label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
`}},{value:"phone",text:"Phone",checked:!0,conditional:{html:`<label class="govuk-label" for="contact-phone">Phone number</label>
<span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
<input class="govuk-input govuk-input--error govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" aria-describedby="contact-phone-error">
`}},{value:"text",text:"Text message",conditional:{html:`<label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
`}}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-checked" name="how-contacted-checked" type="checkbox" value="email" data-aria-controls="conditional-how-contacted-checked">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked">
        Email
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked">
              <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-checked-2" name="how-contacted-checked" type="checkbox" value="phone" checked data-aria-controls="conditional-how-contacted-checked-2">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-2">
        Phone
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked-2">
              <label class="govuk-label" for="contact-phone">Phone number</label>
<span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
<input class="govuk-input govuk-input--error govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" aria-describedby="contact-phone-error">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-checked-3" name="how-contacted-checked" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-checked-3">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-3">
        Text message
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-3">
              <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

            </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small",options:{idPrefix:"nationality",name:"nationality",classes:"govuk-checkboxes--small",fieldset:{legend:{text:"Filter by"}},items:[{value:"a",text:"a thing"},{value:"b",text:"another thing"},{value:"c",text:"this thing"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    Filter by
  
  </legend>
  

  <div class="govuk-checkboxes govuk-checkboxes--small"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a">
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with long text",options:{idPrefix:"nationality",name:"nationality",classes:"govuk-checkboxes--small",fieldset:{legend:{text:"Filter by"}},items:[{value:"nullam",text:"Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus."},{value:"aenean",text:"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum."},{value:"fusce",text:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis."}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    Filter by
  
  </legend>
  

  <div class="govuk-checkboxes govuk-checkboxes--small"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="nullam">
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="aenean">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="fusce">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with error",options:{idPrefix:"nationality",name:"nationality",classes:"govuk-checkboxes--small",errorMessage:{text:"Select a thing"},fieldset:{legend:{text:"Filter by"}},items:[{value:"a",text:"a thing"},{value:"b",text:"another thing"},{value:"c",text:"this thing"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="nationality-error">
  
  <legend class="govuk-fieldset__legend">
  
    Filter by
  
  </legend>
  

  <p id="nationality-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a thing
  </p>

  <div class="govuk-checkboxes govuk-checkboxes--small"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a">
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with hint",options:{idPrefix:"nationality",name:"nationality",classes:"govuk-checkboxes--small",fieldset:{legend:{text:"Filter by"}},items:[{value:"a",text:"a thing",hint:{text:"hint for a thing"}},{value:"b",text:"another thing"},{value:"c",text:"this thing"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    Filter by
  
  </legend>
  

  <div class="govuk-checkboxes govuk-checkboxes--small"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a" aria-describedby="nationality-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
            
            <div id="nationality-item-hint" class="govuk-hint govuk-checkboxes__hint">
        hint for a thing
      </div>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with disabled",options:{idPrefix:"nationality",name:"nationality",classes:"govuk-checkboxes--small",fieldset:{legend:{text:"Filter by"}},items:[{value:"a",text:"a thing"},{value:"b",text:"another thing"},{value:"c",text:"this thing",disabled:!0}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    Filter by
  
  </legend>
  

  <div class="govuk-checkboxes govuk-checkboxes--small"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a">
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c" disabled>
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with conditional reveal",options:{name:"how-contacted",idPrefix:"how-contacted",classes:"govuk-checkboxes--small",fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"a",text:"a thing",conditional:{html:`<label class="govuk-label" for="context-email">Foo</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
`}},{value:"b",text:"another thing"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-checkboxes govuk-checkboxes--small"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted" name="how-contacted" type="checkbox" value="a" data-aria-controls="conditional-how-contacted">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
        a thing
      </label>
            
          </div>
          
            <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted">
              <label class="govuk-label" for="context-email">Foo</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

            </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="how-contacted-2" name="how-contacted" type="checkbox" value="b">
            <label class="govuk-label govuk-checkboxes__label" for="how-contacted-2">
        another thing
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with idPrefix",options:{name:"example-name",idPrefix:"nationality",items:[{value:1,text:"Option 1"},{value:2,text:"Option 2"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="example-name" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        Option 1
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="example-name" type="checkbox" value="2">
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Option 2
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with falsey values",options:{name:"example-name",items:[{value:1,text:"Option 1"},!1,null,"",{value:2,text:"Option 2"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="example-name">
        Option 1
      </label>
            
          </div>
          
        
      
    
      
    
      
    
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-5" name="example-name" type="checkbox" value="2">
            <label class="govuk-label govuk-checkboxes__label" for="example-name-5">
        Option 2
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"classes",options:{name:"example-name",classes:"app-checkboxes--custom-modifier",items:[{value:1,text:"Option 1"},{value:2,text:"Option 2"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes app-checkboxes--custom-modifier"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="example-name">
        Option 1
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-2" name="example-name" type="checkbox" value="2">
            <label class="govuk-label govuk-checkboxes__label" for="example-name-2">
        Option 2
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with fieldset describedBy",options:{name:"example-name",fieldset:{describedBy:"some-id",legend:{text:"Which option?"}},items:[{value:1,text:"Option 1"},{value:2,text:"Option 2"}],hint:{text:"If you have dual nationality, select all options that are relevant to you."}},hidden:!0,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="some-id example-name-hint">
  
  <legend class="govuk-fieldset__legend">
  
    Which option?
  
  </legend>
  

  <div id="example-name-hint" class="govuk-hint">
    If you have dual nationality, select all options that are relevant to you.
  </div>


  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="example-name">
        Option 1
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-2" name="example-name" type="checkbox" value="2">
            <label class="govuk-label govuk-checkboxes__label" for="example-name-2">
        Option 2
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"attributes",options:{name:"example-name",attributes:{"data-attribute":"value","data-second-attribute":"second-value"},items:[{value:1,text:"Option 1"},{value:2,text:"Option 2"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes" data-attribute="value" data-second-attribute="second-value"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="example-name">
        Option 1
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-2" name="example-name" type="checkbox" value="2">
            <label class="govuk-label govuk-checkboxes__label" for="example-name-2">
        Option 2
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with checked item",options:{name:"example-name",items:[{value:1,text:"Option 1"},{value:2,text:"Option 2",checked:!0},{value:3,text:"Option 3",checked:!0}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="example-name">
        Option 1
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-2" name="example-name" type="checkbox" value="2" checked>
            <label class="govuk-label govuk-checkboxes__label" for="example-name-2">
        Option 2
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-3" name="example-name" type="checkbox" value="3" checked>
            <label class="govuk-label govuk-checkboxes__label" for="example-name-3">
        Option 3
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"items with attributes",options:{name:"example-name",items:[{value:1,text:"Option 1",attributes:{"data-attribute":"ABC","data-second-attribute":"DEF"}},{value:2,text:"Option 2",attributes:{"data-attribute":"GHI","data-second-attribute":"JKL"}}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="1" data-attribute="ABC" data-second-attribute="DEF">
            <label class="govuk-label govuk-checkboxes__label" for="example-name">
        Option 1
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-2" name="example-name" type="checkbox" value="2" data-attribute="GHI" data-second-attribute="JKL">
            <label class="govuk-label govuk-checkboxes__label" for="example-name-2">
        Option 2
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"empty conditional",options:{name:"example-conditional",items:[{value:"foo",text:"Foo",conditional:{html:!1}}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-conditional" name="example-conditional" type="checkbox" value="foo">
            <label class="govuk-label govuk-checkboxes__label" for="example-conditional">
        Foo
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with label classes",options:{name:"example-label-classes",items:[{value:"yes",text:"Yes",label:{classes:"bold"}}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-label-classes" name="example-label-classes" type="checkbox" value="yes">
            <label class="govuk-label govuk-checkboxes__label bold" for="example-label-classes">
        Yes
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"multiple hints",options:{name:"example-multiple-hints",hint:{text:"If you have dual nationality, select all options that are relevant to you."},items:[{value:"british",text:"British",hint:{text:"Hint for british option here"}},{value:"irish",text:"Irish"},{value:"other",hint:{text:"Hint for other option here"}}]},hidden:!0,html:`<div class="govuk-form-group">

  <div id="example-multiple-hints-hint" class="govuk-hint">
    If you have dual nationality, select all options that are relevant to you.
  </div>


  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-multiple-hints" name="example-multiple-hints" type="checkbox" value="british" aria-describedby="example-multiple-hints-hint example-multiple-hints-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="example-multiple-hints">
        British
      </label>
            
            <div id="example-multiple-hints-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Hint for british option here
      </div>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-multiple-hints-2" name="example-multiple-hints" type="checkbox" value="irish" aria-describedby="example-multiple-hints-hint">
            <label class="govuk-label govuk-checkboxes__label" for="example-multiple-hints-2">
        Irish
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-multiple-hints-3" name="example-multiple-hints" type="checkbox" value="other" aria-describedby="example-multiple-hints-hint example-multiple-hints-3-item-hint">
            
            
            <div id="example-multiple-hints-3-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Hint for other option here
      </div>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with error message and hint",options:{name:"example",items:[{value:"british",text:"British"},{value:"irish",text:"Irish"}],errorMessage:{text:"Please select an option"},fieldset:{legend:{text:"What is your nationality?"}},hint:{text:"If you have dual nationality, select all options that are relevant to you."}},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="example-hint example-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your nationality?
  
  </legend>
  

  <div id="example-hint" class="govuk-hint">
    If you have dual nationality, select all options that are relevant to you.
  </div>


  
  
  <p id="example-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example" name="example" type="checkbox" value="british">
            <label class="govuk-label govuk-checkboxes__label" for="example">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-2" name="example" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="example-2">
        Irish
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with error, hint and fieldset describedBy",options:{name:"example",errorMessage:{text:"Please select an option"},fieldset:{describedBy:"some-id",legend:{text:"What is your nationality?"}},hint:{text:"If you have dual nationality, select all options that are relevant to you."},items:[{value:"british",text:"British"},{value:"irish",text:"Irish"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="some-id example-hint example-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your nationality?
  
  </legend>
  

  <div id="example-hint" class="govuk-hint">
    If you have dual nationality, select all options that are relevant to you.
  </div>


  
  
  <p id="example-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example" name="example" type="checkbox" value="british">
            <label class="govuk-label govuk-checkboxes__label" for="example">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-2" name="example" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="example-2">
        Irish
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"label with attributes",options:{name:"example-name",items:[{value:1,html:"<b>Option 1</b>",label:{attributes:{"data-attribute":"value","data-second-attribute":"second-value"}}}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" data-attribute="value" data-second-attribute="second-value" for="example-name">
        <b>Option 1</b>
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"fieldset params",options:{name:"example-name",errorMessage:{text:"Please select an option"},fieldset:{legend:{text:"What is your nationality?"},classes:"app-fieldset--custom-modifier",attributes:{"data-attribute":"value","data-second-attribute":"second-value"}},items:[{value:"british",text:"British"},{value:"irish",text:"Irish"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset app-fieldset--custom-modifier" aria-describedby="example-name-error" data-attribute="value" data-second-attribute="second-value">
  
  <legend class="govuk-fieldset__legend">
  
    What is your nationality?
  
  </legend>
  

  <p id="example-name-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="british">
            <label class="govuk-label govuk-checkboxes__label" for="example-name">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-2" name="example-name" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="example-name-2">
        Irish
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"fieldset html params",options:{name:"example-name",fieldset:{legend:{html:"What is your <b>nationality</b>?"}},items:[{value:"british",text:"British"},{value:"irish",text:"Irish"}]},hidden:!0,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    What is your <b>nationality</b>?
  
  </legend>
  

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name" name="example-name" type="checkbox" value="british">
            <label class="govuk-label govuk-checkboxes__label" for="example-name">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-name-2" name="example-name" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="example-name-2">
        Irish
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with single option set 'aria-describedby' on input, and describedBy",options:{describedBy:"some-id",name:"t-and-c",errorMessage:{text:"Please accept the terms and conditions"},items:[{value:"yes",text:"I agree to the terms and conditions"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <p id="t-and-c-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please accept the terms and conditions
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="t-and-c" name="t-and-c" type="checkbox" value="yes" aria-describedby="some-id t-and-c-error">
            <label class="govuk-label govuk-checkboxes__label" for="t-and-c">
        I agree to the terms and conditions
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with single option (and hint) set 'aria-describedby' on input, and describedBy",options:{describedBy:"some-id",name:"t-and-c-with-hint",errorMessage:{text:"Please accept the terms and conditions"},items:[{value:"yes",text:"I agree to the terms and conditions",hint:{text:"Go on, you know you want to!"}}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <p id="t-and-c-with-hint-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please accept the terms and conditions
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="t-and-c-with-hint" name="t-and-c-with-hint" type="checkbox" value="yes" aria-describedby="some-id t-and-c-with-hint-error t-and-c-with-hint-item-hint">
            <label class="govuk-label govuk-checkboxes__label" for="t-and-c-with-hint">
        I agree to the terms and conditions
      </label>
            
            <div id="t-and-c-with-hint-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Go on, you know you want to!
      </div>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with error and idPrefix",options:{name:"name-of-checkboxes",errorMessage:{text:"Please select an option"},idPrefix:"id-prefix",items:[{value:"animal",text:"Waste from animal carcasses"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <p id="id-prefix-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="id-prefix" name="name-of-checkboxes" type="checkbox" value="animal" aria-describedby="id-prefix-error">
            <label class="govuk-label govuk-checkboxes__label" for="id-prefix">
        Waste from animal carcasses
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`},{name:"with error message and fieldset describedBy",options:{name:"example",errorMessage:{text:"Please select an option"},fieldset:{describedBy:"some-id",legend:{text:"What is your nationality?"}},items:[{value:"british",text:"British"},{value:"irish",text:"Irish"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="some-id example-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your nationality?
  
  </legend>
  

  <p id="example-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example" name="example" type="checkbox" value="british">
            <label class="govuk-label govuk-checkboxes__label" for="example">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="example-2" name="example" type="checkbox" value="irish">
            <label class="govuk-label govuk-checkboxes__label" for="example-2">
        Irish
      </label>
            
          </div>
          
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"item checked overrides values",options:{name:"colors",items:[{value:"red",text:"Red"},{value:"green",text:"Green",checked:!1},{value:"blue",text:"Blue"}],values:["red","green"]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="colors" name="colors" type="checkbox" value="red" checked>
            <label class="govuk-label govuk-checkboxes__label" for="colors">
        Red
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="colors-2" name="colors" type="checkbox" value="green">
            <label class="govuk-label govuk-checkboxes__label" for="colors-2">
        Green
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="colors-3" name="colors" type="checkbox" value="blue">
            <label class="govuk-label govuk-checkboxes__label" for="colors-3">
        Blue
      </label>
            
          </div>
          
        
      
    
  </div>

</div>`}],w={component:f,fixtures:y},m=({key:n,children:a})=>o("li",{className:"govuk-breadcrumbs__list-item","aria-current":"page",children:a},n);try{m.displayName="BreadcrumbItem",m.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/BreadcrumbItem/BreadcrumbItem.tsx#BreadcrumbItem"]={docgenInfo:m.__docgenInfo,name:"BreadcrumbItem",path:"src/components/BreadcrumbItem/BreadcrumbItem.tsx#BreadcrumbItem"})}catch{}const r=({id:n,name:a,children:t,key:l,divider:c,exclusive:v,value:h,classes:p,...x})=>{const _=i.exports.Children.toArray(t);return k("div",{className:c?"govuk-checkboxes__divider":"govuk-checkboxes__item",children:[!c&&k(d,{children:[o("input",{className:`govuk-checkboxes__input ${p||""}`,id:n,name:a,type:"checkbox",value:h,"data-behaviour":v?"exclusive":null,...x},l),i.exports.Children.map(_,(s,J)=>{if(i.exports.isValidElement(s)&&s.type===b)return o(d,{children:i.exports.cloneElement(s,{classes:"govuk-checkboxes__label"})});if(i.exports.isValidElement(s)&&s.type===g)return o(d,{children:i.exports.cloneElement(s,{classes:"govuk-checkboxes__hint"})})})]}),c&&o(d,{children:t})]})};try{r.displayName="CheckboxesItem",r.__docgenInfo={description:"",displayName:"CheckboxesItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxItem/CheckboxItem.tsx#CheckboxesItem"]={docgenInfo:r.__docgenInfo,name:"CheckboxesItem",path:"src/components/CheckboxItem/CheckboxItem.tsx#CheckboxesItem"})}catch{}try{CheckboxItem.displayName="CheckboxItem",CheckboxItem.__docgenInfo={description:"",displayName:"CheckboxItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxItem/CheckboxItem.tsx#CheckboxItem"]={docgenInfo:CheckboxItem.__docgenInfo,name:"CheckboxItem",path:"src/components/CheckboxItem/CheckboxItem.tsx#CheckboxItem"})}catch{}const Be={title:"Checkboxes",component:u},I={name:"default"},C={name:"with prechecked values"},O={name:"with divider and None"},E={name:"with divider None and conditional items"},P={name:"with id and name"},S={name:"with hints on items"},q={name:"with disabled item"},B={name:"with legend as a page heading"},A={name:"with a medium legend"},W={name:"without fieldset"},V={name:"with single option set ariadescribedby on input"},M={name:"with single option and hint set ariadescribedby on input"},N={name:"with fieldset and error message"},D={name:"with error message"},F={name:"with error message and hints on items"},R={name:"with very long option text"},H={name:"with conditional items"},T={name:"with conditional items with special characters"},G={name:"with conditional item checked"},L={name:"with optional formgroup classes showing group error"},Y={name:"small"},K={name:"small with long text"},z={name:"small with error"},j={name:"small with hint"},U={name:"small with disabled"},$={name:"small with conditional reveal"},e=[];e.push(I);e.push(C);e.push(O);e.push(E);e.push(P);e.push(S);e.push(q);e.push(B);e.push(A);e.push(W);e.push(V);e.push(M);e.push(N);e.push(D);e.push(F);e.push(R);e.push(H);e.push(T);e.push(G);e.push(L);e.push(Y);e.push(K);e.push(z);e.push(j);e.push(U);e.push($);w.fixtures.forEach(n=>{let a=e.find(t=>t.name===n.name.replace(/[^a-z0-9s]/gi,""))||{};a.name===n.name&&(a.args={name:n.options.name,children:n.options.items.map(t=>{var l;return k(r,{name:n.options.name,value:t.value,children:[o(b,{children:t.text}),((l=n.options.hint)==null?void 0:l.text)&&o(g,{children:n.options.hint.text})]})}),id:n.options.idPrefix,classes:n.options.classes,attributes:n.options.attributes})});const Ae=["primary","withPrecheckedValues","withDividerAndNone","withDividerNoneAndConditionalItems","withIdAndName","withHintsOnItems","withDisabledItem","withLegendAsAPageHeading","withAMediumLegend","withoutFieldset","withSingleOptionSetariadescribedbyOnInput","withSingleOptionandHintSetariadescribedbyOnInput","withFieldsetAndErrorMessage","withErrorMessage","withErrorMessageAndHintsOnItems","withVeryLongOptionText","withConditionalItems","withConditionalItemsWithSpecialCharacters","withConditionalItemChecked","withOptionalFormgroupClassesShowingGroupError","small","smallWithLongText","smallWithError","smallWithHint","smallWithDisabled","smallWithConditionalReveal"];export{Ae as __namedExportsOrder,Be as default,I as primary,Y as small,$ as smallWithConditionalReveal,U as smallWithDisabled,z as smallWithError,j as smallWithHint,K as smallWithLongText,A as withAMediumLegend,G as withConditionalItemChecked,H as withConditionalItems,T as withConditionalItemsWithSpecialCharacters,q as withDisabledItem,O as withDividerAndNone,E as withDividerNoneAndConditionalItems,D as withErrorMessage,F as withErrorMessageAndHintsOnItems,N as withFieldsetAndErrorMessage,S as withHintsOnItems,P as withIdAndName,B as withLegendAsAPageHeading,L as withOptionalFormgroupClassesShowingGroupError,C as withPrecheckedValues,V as withSingleOptionSetariadescribedbyOnInput,M as withSingleOptionandHintSetariadescribedbyOnInput,R as withVeryLongOptionText,W as withoutFieldset};
//# sourceMappingURL=Checkboxes.stories.904be231.js.map
