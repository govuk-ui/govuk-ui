import{j as l,a as o}from"./jsx-runtime-68f49b4e.js";import{C as s,a as c}from"./TabItem-3b5186d7.js";import"./Accordion-12d9884c.js";import"./BackLink-54564ca1.js";import"./BreadcrumbItem-7e03e4ef.js";import"./Button-791dc627.js";import"./CharacterCount-6c285db3.js";import"./CookieBanner-5f4494f2.js";import"./DateInput-e4c6e0c9.js";import"./Details-7a2689db.js";import"./ErrorMessage-07ea8fac.js";import"./ErrorSummary-d6d61f90.js";import"./FileUpload-b260dab3.js";import"./Footer-aedacc55.js";import"./Header-81057254.js";import{H as d}from"./Hint-47130fa7.js";import"./Legend-3f30edf0.js";import"./InsetText-39830db6.js";import{L as u}from"./Label-3d09487c.js";import"./NotificationBanner-b6ddf0d7.js";import"./Pagination-252dd775.js";import"./Panel-9db3f9a0.js";import"./PhaseBanner-b7bf4a2c.js";import"./Radios-79cc87ab.js";import"./Select-d6e3d713.js";import"./SkipLink-0b18f351.js";import"./Textarea-0f1928d4.js";import"./WarningText-7f7d45da.js";import"./Container-67190f80.js";import"./Grid-3db4db30.js";import"./MainWrapper-68156f52.js";import"./FormGroup-f91b51d3.js";import"./Fieldset-cd643f71.js";import"./Typography-3950099a.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const v="checkboxes",r=[{name:"default",options:{name:"nationality",items:[{value:"british",text:"British"},{value:"irish",text:"Irish"},{value:"other",text:"Citizen of another country"}]},hidden:!1,html:`<div class="govuk-form-group">

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

</div>`}],h={component:v,fixtures:r},ye={title:"Checkboxes",component:s},m={name:"default"},k={name:"with prechecked values"},b={name:"with divider and None"},g={name:"with divider None and conditional items"},p={name:"with id and name"},x={name:"with hints on items"},_={name:"with disabled item"},f={name:"with legend as a page heading"},y={name:"with a medium legend"},w={name:"without fieldset"},P={name:"with single option set ariadescribedby on input"},I={name:"with single option and hint set ariadescribedby on input"},E={name:"with fieldset and error message"},W={name:"with error message"},O={name:"with error message and hints on items"},q={name:"with very long option text"},S={name:"with conditional items"},B={name:"with conditional items with special characters"},C={name:"with conditional item checked"},M={name:"with optional formgroup classes showing group error"},A={name:"small"},D={name:"small with long text"},H={name:"small with error"},F={name:"small with hint"},N={name:"small with disabled"},G={name:"small with conditional reveal"},e=[];e.push(m);e.push(k);e.push(b);e.push(g);e.push(p);e.push(x);e.push(_);e.push(f);e.push(y);e.push(w);e.push(P);e.push(I);e.push(E);e.push(W);e.push(O);e.push(q);e.push(S);e.push(B);e.push(C);e.push(M);e.push(A);e.push(D);e.push(H);e.push(F);e.push(N);e.push(G);h.fixtures.forEach(n=>{let t=e.find(a=>a.name===n.name.replace(/[^a-z0-9s]/gi,""))||{};t.name===n.name&&(t.args={name:n.options.name,children:n.options.items.map(a=>{var i;return l(c,{name:n.options.name,value:a.value,children:[o(u,{children:a.text}),((i=n.options.hint)==null?void 0:i.text)&&o(d,{children:n.options.hint.text})]})}),id:n.options.idPrefix,classes:n.options.classes,attributes:n.options.attributes})});const we=["primary","withPrecheckedValues","withDividerAndNone","withDividerNoneAndConditionalItems","withIdAndName","withHintsOnItems","withDisabledItem","withLegendAsAPageHeading","withAMediumLegend","withoutFieldset","withSingleOptionSetariadescribedbyOnInput","withSingleOptionandHintSetariadescribedbyOnInput","withFieldsetAndErrorMessage","withErrorMessage","withErrorMessageAndHintsOnItems","withVeryLongOptionText","withConditionalItems","withConditionalItemsWithSpecialCharacters","withConditionalItemChecked","withOptionalFormgroupClassesShowingGroupError","small","smallWithLongText","smallWithError","smallWithHint","smallWithDisabled","smallWithConditionalReveal"];export{we as __namedExportsOrder,ye as default,m as primary,A as small,G as smallWithConditionalReveal,N as smallWithDisabled,H as smallWithError,F as smallWithHint,D as smallWithLongText,y as withAMediumLegend,C as withConditionalItemChecked,S as withConditionalItems,B as withConditionalItemsWithSpecialCharacters,_ as withDisabledItem,b as withDividerAndNone,g as withDividerNoneAndConditionalItems,W as withErrorMessage,O as withErrorMessageAndHintsOnItems,E as withFieldsetAndErrorMessage,x as withHintsOnItems,p as withIdAndName,f as withLegendAsAPageHeading,M as withOptionalFormgroupClassesShowingGroupError,k as withPrecheckedValues,P as withSingleOptionSetariadescribedbyOnInput,I as withSingleOptionandHintSetariadescribedbyOnInput,q as withVeryLongOptionText,w as withoutFieldset};
//# sourceMappingURL=Checkboxes.stories-5872f2d7.js.map
