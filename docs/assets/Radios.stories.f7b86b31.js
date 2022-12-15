import{R as t,a as s}from"./RadioItem.f6929da0.js";import{L as d}from"./Label.23a00913.js";import{H as u}from"./Hint.20cb3654.js";import{a as r,j as l}from"./jsx-runtime.999029ca.js";import"./index.ef27e5dc.js";import"./_commonjsHelpers.712cc82f.js";const c="radios",v=[{name:"default",options:{name:"example-default",hint:{text:"This includes changing your last name or spelling your name differently."},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!1,html:`<div class="govuk-form-group">

  <div id="example-default-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>


  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-default" name="example-default" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-default">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-default-2" name="example-default" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-default-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"inline",options:{idPrefix:"example",classes:"govuk-radios--inline",name:"example",fieldset:{legend:{text:"Have you changed your name?"}},hint:{text:"This includes changing your last name or spelling your name differently."},items:[{value:"yes",text:"Yes"},{value:"no",text:"No",checked:!0}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="example-hint">
  
  <legend class="govuk-fieldset__legend">
  
    Have you changed your name?
  
  </legend>
  

  <div id="example-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>


  <div class="govuk-radios govuk-radios--inline"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example" name="example" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
          <label class="govuk-label govuk-radios__label" for="example-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with disabled",options:{idPrefix:"gov",name:"gov",fieldset:{legend:{text:"How do you want to sign in?",classes:"govuk-fieldset__legend--l",isPageHeading:!0}},items:[{value:"gateway",text:"Sign in with Government Gateway",id:"gateway",hint:{text:"You\u2019ll have a user ID if you\u2019ve registered for Self Assessment or filed a tax return online before."}},{value:"verify",text:"Sign in with GOV.UK Verify",id:"verify",hint:{text:"You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."},disabled:!0}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      How do you want to sign in?
    </h1>
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="gateway" name="gov" type="radio" value="gateway" aria-describedby="gateway-item-hint">
          <label class="govuk-label govuk-radios__label" for="gateway">
        Sign in with Government Gateway
      </label>
          
          <div id="gateway-item-hint" class="govuk-hint govuk-radios__hint">
        You\u2019ll have a user ID if you\u2019ve registered for Self Assessment or filed a tax return online before.
      </div>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="verify" name="gov" type="radio" value="verify" disabled aria-describedby="verify-item-hint">
          <label class="govuk-label govuk-radios__label" for="verify">
        Sign in with GOV.UK Verify
      </label>
          
          <div id="verify-item-hint" class="govuk-hint govuk-radios__hint">
        You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </div>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with legend as page heading",options:{idPrefix:"housing-act",name:"housing-act",fieldset:{legend:{text:"Which part of the Housing Act was your licence issued under?",classes:"govuk-fieldset__legend--l",isPageHeading:!0}},hint:{text:"Select one of the options below."},items:[{value:"part-2",html:'<span class="govuk-heading-s govuk-!-margin-bottom-1">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people'},{value:"part-3",html:'<span class="govuk-heading-s govuk-!-margin-bottom-1">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council'}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="housing-act-hint">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      Which part of the Housing Act was your licence issued under?
    </h1>
  
  </legend>
  

  <div id="housing-act-hint" class="govuk-hint">
    Select one of the options below.
  </div>


  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="housing-act" name="housing-act" type="radio" value="part-2">
          <label class="govuk-label govuk-radios__label" for="housing-act">
        <span class="govuk-heading-s govuk-!-margin-bottom-1">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="housing-act-2" name="housing-act" type="radio" value="part-3">
          <label class="govuk-label govuk-radios__label" for="housing-act-2">
        <span class="govuk-heading-s govuk-!-margin-bottom-1">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with a medium legend",options:{idPrefix:"housing-act",name:"housing-act",fieldset:{legend:{text:"Which part of the Housing Act was your licence issued under?",classes:"govuk-fieldset__legend--m"}},hint:{text:"Select one of the options below."},items:[{value:"part-2",html:'<span class="govuk-heading-s govuk-!-margin-bottom-1">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people'},{value:"part-3",html:'<span class="govuk-heading-s govuk-!-margin-bottom-1">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council'}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="housing-act-hint">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
  
    Which part of the Housing Act was your licence issued under?
  
  </legend>
  

  <div id="housing-act-hint" class="govuk-hint">
    Select one of the options below.
  </div>


  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="housing-act" name="housing-act" type="radio" value="part-2">
          <label class="govuk-label govuk-radios__label" for="housing-act">
        <span class="govuk-heading-s govuk-!-margin-bottom-1">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="housing-act-2" name="housing-act" type="radio" value="part-3">
          <label class="govuk-label govuk-radios__label" for="housing-act-2">
        <span class="govuk-heading-s govuk-!-margin-bottom-1">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with a divider",options:{idPrefix:"example-divider",name:"example",fieldset:{legend:{text:"How do you want to sign in?"}},items:[{value:"governement-gateway",text:"Use Government Gateway"},{value:"govuk-verify",text:"Use GOV.UK Verify"},{divider:"or"},{value:"create-account",text:"Create an account"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to sign in?
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-divider" name="example" type="radio" value="governement-gateway">
          <label class="govuk-label govuk-radios__label" for="example-divider">
        Use Government Gateway
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-divider-2" name="example" type="radio" value="govuk-verify">
          <label class="govuk-label govuk-radios__label" for="example-divider-2">
        Use GOV.UK Verify
      </label>
          
        </div>
        
        
      
    
      
        <div class="govuk-radios__divider">or</div>
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-divider-4" name="example" type="radio" value="create-account">
          <label class="govuk-label govuk-radios__label" for="example-divider-4">
        Create an account
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with hints on items",options:{idPrefix:"gov",name:"gov",fieldset:{legend:{text:"How do you want to sign in?",classes:"govuk-fieldset__legend--l",isPageHeading:!0}},items:[{value:"gateway",text:"Sign in with Government Gateway",id:"gateway",hint:{text:"You\u2019ll have a user ID if you\u2019ve registered for Self Assessment or filed a tax return online before."}},{value:"verify",text:"Sign in with GOV.UK Verify",id:"verify",hint:{text:"You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."}}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      How do you want to sign in?
    </h1>
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="gateway" name="gov" type="radio" value="gateway" aria-describedby="gateway-item-hint">
          <label class="govuk-label govuk-radios__label" for="gateway">
        Sign in with Government Gateway
      </label>
          
          <div id="gateway-item-hint" class="govuk-hint govuk-radios__hint">
        You\u2019ll have a user ID if you\u2019ve registered for Self Assessment or filed a tax return online before.
      </div>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="verify" name="gov" type="radio" value="verify" aria-describedby="verify-item-hint">
          <label class="govuk-label govuk-radios__label" for="verify">
        Sign in with GOV.UK Verify
      </label>
          
          <div id="verify-item-hint" class="govuk-hint govuk-radios__hint">
        You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </div>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"without fieldset",options:{name:"colours",items:[{value:"red",text:"Red"},{value:"green",text:"Green"},{value:"blue",text:"Blue"}]},hidden:!1,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="colours" name="colours" type="radio" value="red">
          <label class="govuk-label govuk-radios__label" for="colours">
        Red
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="colours-2" name="colours" type="radio" value="green">
          <label class="govuk-label govuk-radios__label" for="colours-2">
        Green
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="colours-3" name="colours" type="radio" value="blue">
          <label class="govuk-label govuk-radios__label" for="colours-3">
        Blue
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"with fieldset and error message",options:{idPrefix:"example",name:"example",errorMessage:{text:"Please select an option"},fieldset:{legend:{text:"Have you changed your name?"}},items:[{value:"yes",text:"Yes"},{value:"no",text:"No",checked:!0}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="example-error">
  
  <legend class="govuk-fieldset__legend">
  
    Have you changed your name?
  
  </legend>
  

  <p id="example-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example" name="example" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
          <label class="govuk-label govuk-radios__label" for="example-2">
        No
      </label>
          
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

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="waste" name="waste" type="radio" value="nullam">
          <label class="govuk-label govuk-radios__label" for="waste">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="waste-2" name="waste" type="radio" value="aenean">
          <label class="govuk-label govuk-radios__label" for="waste-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="waste-3" name="waste" type="radio" value="fusce">
          <label class="govuk-label govuk-radios__label" for="waste-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with conditional items",options:{idPrefix:"how-contacted",name:"how-contacted",fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",conditional:{html:`<label class="govuk-label" for="context-email">Email address</label>
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
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted" name="how-contacted" type="radio" value="email" data-aria-controls="conditional-how-contacted">
          <label class="govuk-label govuk-radios__label" for="how-contacted">
        Email
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted">
            <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted" type="radio" value="phone" data-aria-controls="conditional-how-contacted-2">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Phone
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
            <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-3" name="how-contacted" type="radio" value="text" data-aria-controls="conditional-how-contacted-3">
          <label class="govuk-label govuk-radios__label" for="how-contacted-3">
        Text message
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-3">
            <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

          </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with conditional items with special characters",options:{idPrefix:"user.profile[contact-prefs]",name:"contact-prefs",fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",conditional:{html:`<label class="govuk-label" for="context-email">Email address</label>
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
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="user.profile[contact-prefs]" name="contact-prefs" type="radio" value="email" data-aria-controls="conditional-user.profile[contact-prefs]">
          <label class="govuk-label govuk-radios__label" for="user.profile[contact-prefs]">
        Email
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-user.profile[contact-prefs]">
            <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="user.profile[contact-prefs]-2" name="contact-prefs" type="radio" value="phone" data-aria-controls="conditional-user.profile[contact-prefs]-2">
          <label class="govuk-label govuk-radios__label" for="user.profile[contact-prefs]-2">
        Phone
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-user.profile[contact-prefs]-2">
            <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="user.profile[contact-prefs]-3" name="contact-prefs" type="radio" value="text" data-aria-controls="conditional-user.profile[contact-prefs]-3">
          <label class="govuk-label govuk-radios__label" for="user.profile[contact-prefs]-3">
        Text message
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-user.profile[contact-prefs]-3">
            <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

          </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with conditional item checked",options:{idPrefix:"how-contacted-checked",name:"how-contacted-checked",fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",checked:!0,conditional:{html:`<label class="govuk-label" for="context-email">Email</label>
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
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-checked" name="how-contacted-checked" type="radio" value="email" checked data-aria-controls="conditional-how-contacted-checked">
          <label class="govuk-label govuk-radios__label" for="how-contacted-checked">
        Email
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional" id="conditional-how-contacted-checked">
            <label class="govuk-label" for="context-email">Email</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-checked-2" name="how-contacted-checked" type="radio" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
          <label class="govuk-label govuk-radios__label" for="how-contacted-checked-2">
        Phone
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-2">
            <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-checked-3" name="how-contacted-checked" type="radio" value="text" data-aria-controls="conditional-how-contacted-checked-3">
          <label class="govuk-label govuk-radios__label" for="how-contacted-checked-3">
        Text message
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-3">
            <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

          </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"prechecked",options:{name:"example-default",hint:{text:"This includes changing your last name or spelling your name differently."},items:[{value:"yes",text:"Yes"},{value:"no",text:"No",checked:!0}]},hidden:!1,html:`<div class="govuk-form-group">

  <div id="example-default-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>


  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-default" name="example-default" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-default">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-default-2" name="example-default" type="radio" value="no" checked>
          <label class="govuk-label govuk-radios__label" for="example-default-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"prechecked using value",options:{name:"example-default",items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}],value:"no"},hidden:!1,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-default" name="example-default" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-default">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-default-2" name="example-default" type="radio" value="no" checked>
          <label class="govuk-label govuk-radios__label" for="example-default-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"with conditional items and pre-checked value",options:{idPrefix:"how-contacted-checked",name:"how-contacted-checked",fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",conditional:{html:`<label class="govuk-label" for="context-email">Email</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
`}},{value:"phone",text:"Phone",conditional:{html:`<label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
`}},{value:"text",text:"Text message",conditional:{html:`<label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
`}}],value:"text"},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-checked" name="how-contacted-checked" type="radio" value="email" data-aria-controls="conditional-how-contacted-checked">
          <label class="govuk-label govuk-radios__label" for="how-contacted-checked">
        Email
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked">
            <label class="govuk-label" for="context-email">Email</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-checked-2" name="how-contacted-checked" type="radio" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
          <label class="govuk-label govuk-radios__label" for="how-contacted-checked-2">
        Phone
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-2">
            <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-checked-3" name="how-contacted-checked" type="radio" value="text" checked data-aria-controls="conditional-how-contacted-checked-3">
          <label class="govuk-label govuk-radios__label" for="how-contacted-checked-3">
        Text message
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional" id="conditional-how-contacted-checked-3">
            <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

          </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with optional form-group classes showing group error",options:{idPrefix:"how-contacted-2",name:"how-contacted-2",formGroup:{classes:"govuk-form-group--error"},fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",conditional:{html:`<label class="govuk-label" for="context-email">Email address</label>
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
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" data-aria-controls="conditional-how-contacted-2">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
            <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone" checked data-aria-controls="conditional-how-contacted-2-2">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional" id="conditional-how-contacted-2-2">
            <label class="govuk-label" for="contact-phone">Phone number</label>
<span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
<input class="govuk-input govuk-input--error govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" aria-describedby="contact-phone-error">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text" data-aria-controls="conditional-how-contacted-2-3">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2-3">
            <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">

          </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small",options:{idPrefix:"how-contacted-2",name:"how-contacted-2",formGroup:{classes:"govuk-radios--small"},fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email"},{value:"phone",text:"Phone"},{value:"text",text:"Text message"}]},hidden:!1,html:`<div class="govuk-form-group govuk-radios--small">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with long text",options:{idPrefix:"foo",name:"foo",classes:"govuk-radios--small",fieldset:{legend:{text:"Venenatis Condimentum"}},items:[{value:"nullam",text:"Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus."},{value:"aenean",text:"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum."},{value:"fusce",text:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis."}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    Venenatis Condimentum
  
  </legend>
  

  <div class="govuk-radios govuk-radios--small"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="foo" name="foo" type="radio" value="nullam">
          <label class="govuk-label govuk-radios__label" for="foo">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="foo-2" name="foo" type="radio" value="aenean">
          <label class="govuk-label govuk-radios__label" for="foo-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="foo-3" name="foo" type="radio" value="fusce">
          <label class="govuk-label govuk-radios__label" for="foo-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with error",options:{idPrefix:"how-contacted-2",name:"how-contacted-2",formGroup:{classes:"govuk-radios--small"},fieldset:{legend:{text:"How do you want to be contacted?"}},errorMessage:{text:"Select a thing"},items:[{value:"email",text:"Email"},{value:"phone",text:"Phone"},{value:"text",text:"Text message"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error govuk-radios--small">

  <fieldset class="govuk-fieldset" aria-describedby="how-contacted-2-error">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <p id="how-contacted-2-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a thing
  </p>

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with hint",options:{idPrefix:"how-contacted-2",name:"how-contacted-2",formGroup:{classes:"govuk-radios--small"},fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",hint:{text:"Hint for email address"}},{value:"phone",text:"Phone"},{value:"text",text:"Text message"}]},hidden:!1,html:`<div class="govuk-form-group govuk-radios--small">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" aria-describedby="how-contacted-2-item-hint">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
          
          <div id="how-contacted-2-item-hint" class="govuk-hint govuk-radios__hint">
        Hint for email address
      </div>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with disabled",options:{idPrefix:"how-contacted-2",name:"how-contacted-2",formGroup:{classes:"govuk-radios--small"},fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email"},{value:"phone",text:"Phone"},{value:"text",text:"Text message",disabled:!0}]},hidden:!1,html:`<div class="govuk-form-group govuk-radios--small">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text" disabled>
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with conditional reveal",options:{idPrefix:"how-contacted-2",name:"how-contacted-2",formGroup:{classes:"govuk-radios--small"},fieldset:{legend:{text:"How do you want to be contacted?"}},items:[{value:"email",text:"Email",conditional:{html:`<label class="govuk-label" for="context-email">Foo</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
`}},{value:"phone",text:"Phone"},{value:"text",text:"Text message"}]},hidden:!1,html:`<div class="govuk-form-group govuk-radios--small">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to be contacted?
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" data-aria-controls="conditional-how-contacted-2">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
          
        </div>
        
          <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
            <label class="govuk-label" for="context-email">Foo</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">

          </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
          <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small inline",options:{idPrefix:"sort",classes:"govuk-radios--small govuk-radios--inline",name:"example",fieldset:{legend:{text:"Sort by"}},items:[{value:"relevance",text:"relevance"},{value:"title",text:"title"},{value:"created",text:"created"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    Sort by
  
  </legend>
  

  <div class="govuk-radios govuk-radios--small govuk-radios--inline"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort" name="example" type="radio" value="relevance">
          <label class="govuk-label govuk-radios__label" for="sort">
        relevance
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-2" name="example" type="radio" value="title">
          <label class="govuk-label govuk-radios__label" for="sort-2">
        title
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-3" name="example" type="radio" value="created">
          <label class="govuk-label govuk-radios__label" for="sort-3">
        created
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small inline extreme",options:{idPrefix:"sort",classes:"govuk-radios--small govuk-radios--inline",name:"example",fieldset:{legend:{text:"Sort by"}},items:[{value:"relevance",text:"relevance"},{value:"title",text:"title"},{value:"created",text:"created"},{value:"modified",text:"modified"},{value:"category",text:"category"},{value:"votes",text:"votes"},{value:"flavour",text:"flavour"},{value:"hue",text:"hue"},{value:"happiness",text:"happiness"},{value:"funkiness",text:"funkiness"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    Sort by
  
  </legend>
  

  <div class="govuk-radios govuk-radios--small govuk-radios--inline"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort" name="example" type="radio" value="relevance">
          <label class="govuk-label govuk-radios__label" for="sort">
        relevance
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-2" name="example" type="radio" value="title">
          <label class="govuk-label govuk-radios__label" for="sort-2">
        title
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-3" name="example" type="radio" value="created">
          <label class="govuk-label govuk-radios__label" for="sort-3">
        created
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-4" name="example" type="radio" value="modified">
          <label class="govuk-label govuk-radios__label" for="sort-4">
        modified
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-5" name="example" type="radio" value="category">
          <label class="govuk-label govuk-radios__label" for="sort-5">
        category
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-6" name="example" type="radio" value="votes">
          <label class="govuk-label govuk-radios__label" for="sort-6">
        votes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-7" name="example" type="radio" value="flavour">
          <label class="govuk-label govuk-radios__label" for="sort-7">
        flavour
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-8" name="example" type="radio" value="hue">
          <label class="govuk-label govuk-radios__label" for="sort-8">
        hue
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-9" name="example" type="radio" value="happiness">
          <label class="govuk-label govuk-radios__label" for="sort-9">
        happiness
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="sort-10" name="example" type="radio" value="funkiness">
          <label class="govuk-label govuk-radios__label" for="sort-10">
        funkiness
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"small with a divider",options:{idPrefix:"example-small-divider",name:"example",fieldset:{legend:{text:"How do you want to sign in?"}},classes:"govuk-radios--small",items:[{value:"governement-gateway",text:"Use Government Gateway"},{value:"govuk-verify",text:"Use GOV.UK Verify"},{divider:"or"},{value:"create-account",text:"Create an account"}]},hidden:!1,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    How do you want to sign in?
  
  </legend>
  

  <div class="govuk-radios govuk-radios--small"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-small-divider" name="example" type="radio" value="governement-gateway">
          <label class="govuk-label govuk-radios__label" for="example-small-divider">
        Use Government Gateway
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-small-divider-2" name="example" type="radio" value="govuk-verify">
          <label class="govuk-label govuk-radios__label" for="example-small-divider-2">
        Use GOV.UK Verify
      </label>
          
        </div>
        
        
      
    
      
        <div class="govuk-radios__divider">or</div>
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-small-divider-4" name="example" type="radio" value="create-account">
          <label class="govuk-label govuk-radios__label" for="example-small-divider-4">
        Create an account
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with idPrefix",options:{name:"example-radio",idPrefix:"example-id-prefix",items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!1,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-id-prefix" name="example-radio" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-id-prefix">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-id-prefix-2" name="example-radio" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-id-prefix-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"minimal items and name",options:{name:"example-name",items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name" name="example-name" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-name">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name-2" name="example-name" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-name-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"with falsey items",options:{name:"example-name",items:[{value:"yes",text:"Yes"},null,!1,{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name" name="example-name" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-name">
        Yes
      </label>
          
        </div>
        
        
      
    
      
    
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name-4" name="example-name" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-name-4">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"fieldset with describedBy",options:{name:"example-name",fieldset:{describedBy:"some-id",legend:{text:"Which option?"}},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="some-id">
  
  <legend class="govuk-fieldset__legend">
  
    Which option?
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name" name="example-name" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-name">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name-2" name="example-name" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-name-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"attributes",options:{name:"example-name",attributes:{"data-attribute":"value","data-second-attribute":"second-value"},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-radios" data-attribute="value" data-second-attribute="second-value"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name" name="example-name" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-name">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name-2" name="example-name" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-name-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"items with attributes",options:{name:"example-name",items:[{value:"yes",text:"Yes",attributes:{"data-attribute":"ABC","data-second-attribute":"DEF"}},{value:"no",text:"No",attributes:{"data-attribute":"GHI","data-second-attribute":"JKL"}}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name" name="example-name" type="radio" value="yes" data-attribute="ABC" data-second-attribute="DEF">
          <label class="govuk-label govuk-radios__label" for="example-name">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-name-2" name="example-name" type="radio" value="no" data-attribute="GHI" data-second-attribute="JKL">
          <label class="govuk-label govuk-radios__label" for="example-name-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"with empty conditional",options:{name:"example-conditional",items:[{value:"yes",text:"Yes",conditional:{html:!1}},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-conditional" name="example-conditional" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-conditional">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-conditional-2" name="example-conditional" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-conditional-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"label with classes",options:{name:"example-label-classes",items:[{value:"yes",text:"Yes",label:{classes:"bold"}}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-label-classes" name="example-label-classes" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label bold" for="example-label-classes">
        Yes
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"with hints on parent and items",options:{name:"example-multiple-hints",fieldset:{legend:{text:"Have you changed your name?"}},hint:{text:"This includes changing your last name or spelling your name differently."},items:[{value:"yes",text:"Yes",hint:{text:"Hint for yes option here"}},{value:"no",text:"No",hint:{text:"Hint for no option here"}}]},hidden:!0,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="example-multiple-hints-hint">
  
  <legend class="govuk-fieldset__legend">
  
    Have you changed your name?
  
  </legend>
  

  <div id="example-multiple-hints-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>


  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-multiple-hints" name="example-multiple-hints" type="radio" value="yes" aria-describedby="example-multiple-hints-item-hint">
          <label class="govuk-label govuk-radios__label" for="example-multiple-hints">
        Yes
      </label>
          
          <div id="example-multiple-hints-item-hint" class="govuk-hint govuk-radios__hint">
        Hint for yes option here
      </div>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-multiple-hints-2" name="example-multiple-hints" type="radio" value="no" aria-describedby="example-multiple-hints-2-item-hint">
          <label class="govuk-label govuk-radios__label" for="example-multiple-hints-2">
        No
      </label>
          
          <div id="example-multiple-hints-2-item-hint" class="govuk-hint govuk-radios__hint">
        Hint for no option here
      </div>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with describedBy and hint",options:{name:"example-hint-describedby",fieldset:{describedBy:"some-id",legend:{text:"Have you changed your name?"}},hint:{text:"This includes changing your last name or spelling your name differently."},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="some-id example-hint-describedby-hint">
  
  <legend class="govuk-fieldset__legend">
  
    Have you changed your name?
  
  </legend>
  

  <div id="example-hint-describedby-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>


  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-hint-describedby" name="example-hint-describedby" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-hint-describedby">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-hint-describedby-2" name="example-hint-describedby" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-hint-describedby-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with error message",options:{name:"example-error-message",errorMessage:{text:"Please select an option"},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <p id="example-error-message-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-error-message" name="example-error-message" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-error-message">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-error-message-2" name="example-error-message" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-error-message-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"with error message and idPrefix",options:{name:"example-error-message",idPrefix:"id-prefix",errorMessage:{text:"Please select an option"},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <p id="id-prefix-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="id-prefix" name="example-error-message" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="id-prefix">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="id-prefix-2" name="example-error-message" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="id-prefix-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"with hint and error message",options:{name:"example-error-message-hint",errorMessage:{text:"Please select an option"},fieldset:{legend:{text:"Have you changed your name?"}},hint:{text:"This includes changing your last name or spelling your name differently."},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="example-error-message-hint-hint example-error-message-hint-error">
  
  <legend class="govuk-fieldset__legend">
  
    Have you changed your name?
  
  </legend>
  

  <div id="example-error-message-hint-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>


  
  
  <p id="example-error-message-hint-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-error-message-hint" name="example-error-message-hint" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-error-message-hint">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-error-message-hint-2" name="example-error-message-hint" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-error-message-hint-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with hint, error message and describedBy",options:{name:"example-error-message-hint",errorMessage:{text:"Please select an option"},fieldset:{describedBy:"some-id",legend:{text:"Have you changed your name?"}},hint:{text:"This includes changing your last name or spelling your name differently."},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="some-id example-error-message-hint-hint example-error-message-hint-error">
  
  <legend class="govuk-fieldset__legend">
  
    Have you changed your name?
  
  </legend>
  

  <div id="example-error-message-hint-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>


  
  
  <p id="example-error-message-hint-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-error-message-hint" name="example-error-message-hint" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-error-message-hint">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-error-message-hint-2" name="example-error-message-hint" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-error-message-hint-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"label with attributes",options:{name:"with-label-attributes",items:[{value:"yes",text:"Yes",label:{attributes:{"data-attribute":"value","data-second-attribute":"second-value"}}}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="with-label-attributes" name="with-label-attributes" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" data-attribute="value" data-second-attribute="second-value" for="with-label-attributes">
        Yes
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`},{name:"fieldset params",options:{name:"example-fieldset-params",fieldset:{classes:"app-fieldset--custom-modifier",legend:{text:"Have you changed your name?"},attributes:{"data-attribute":"value","data-second-attribute":"second-value"}},hint:{text:"This includes changing your last name or spelling your name differently."},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset app-fieldset--custom-modifier" aria-describedby="example-fieldset-params-hint" data-attribute="value" data-second-attribute="second-value">
  
  <legend class="govuk-fieldset__legend">
  
    Have you changed your name?
  
  </legend>
  

  <div id="example-fieldset-params-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>


  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-fieldset-params" name="example-fieldset-params" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example-fieldset-params">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-fieldset-params-2" name="example-fieldset-params" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="example-fieldset-params-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"fieldset with html",options:{name:"with-fieldset-html",fieldset:{legend:{html:"Have <b>you</b> changed your name?"}},items:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},hidden:!0,html:`<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend">
  
    Have <b>you</b> changed your name?
  
  </legend>
  

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="with-fieldset-html" name="with-fieldset-html" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="with-fieldset-html">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="with-fieldset-html-2" name="with-fieldset-html" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="with-fieldset-html-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"with fieldset, error message and describedBy",options:{idPrefix:"example",name:"example",errorMessage:{text:"Please select an option"},fieldset:{describedBy:"some-id",legend:{text:"Have you changed your name?"}},items:[{value:"yes",text:"Yes"},{value:"no",text:"No",checked:!0}]},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" aria-describedby="some-id example-error">
  
  <legend class="govuk-fieldset__legend">
  
    Have you changed your name?
  
  </legend>
  

  <p id="example-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example" name="example" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="example">
        Yes
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
          <label class="govuk-label govuk-radios__label" for="example-2">
        No
      </label>
          
        </div>
        
        
      
    
  </div>
  

</fieldset>


</div>`},{name:"item checked overrides value",options:{name:"colors",items:[{value:"red",text:"Red"},{value:"green",text:"Green",checked:!1},{value:"blue",text:"Blue"}],value:"green"},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-radios"
    data-module="govuk-radios">
    
      
          
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="colors" name="colors" type="radio" value="red">
          <label class="govuk-label govuk-radios__label" for="colors">
        Red
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="colors-2" name="colors" type="radio" value="green">
          <label class="govuk-label govuk-radios__label" for="colors-2">
        Green
      </label>
          
        </div>
        
        
      
    
      
        
        
        
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="colors-3" name="colors" type="radio" value="blue">
          <label class="govuk-label govuk-radios__label" for="colors-3">
        Blue
      </label>
          
        </div>
        
        
      
    
  </div>

</div>`}],m={component:c,fixtures:v},j={title:"Radios",component:t},g={name:"default"},p={name:"inline"},h={name:"with disabled"},k={name:"with legend as page heading"},_={name:"with a medium legend"},b={name:"with a divider"},f={name:"with hints on items"},x={name:"without fieldset"},y={name:"with fieldset and error message"},w={name:"with very long option text"},P={name:"with conditional items"},H={name:"with conditional items with special characters"},E={name:"with conditional item checked"},Y={name:"prechecked"},N={name:"prechecked using value"},q={name:"with conditional items and prechecked value"},A={name:"with optional formgroup classes showing group error"},T={name:"small"},G={name:"small with long text"},S={name:"small with error"},C={name:"small with hint"},D={name:"small with disabled"},M={name:"small with conditional reveal"},I={name:"small inline"},V={name:"small inline extreme"},F={name:"small with a divider"},W={name:"with idPrefix"},e=[];e.push(g);e.push(p);e.push(h);e.push(k);e.push(_);e.push(b);e.push(f);e.push(x);e.push(y);e.push(w);e.push(P);e.push(H);e.push(E);e.push(Y);e.push(N);e.push(q);e.push(A);e.push(T);e.push(G);e.push(S);e.push(C);e.push(D);e.push(M);e.push(I);e.push(V);e.push(F);e.push(W);m.fixtures.forEach(n=>{let o=e.find(a=>a.name===n.name.replace(/[^a-z0-9s]/gi,""))||{};o.name===n.name&&(o.args={name:n.options.name,children:n.options.items.map(a=>{var i;return r(s,{name:n.options.name,value:a.value,children:[l(d,{children:a.text}),((i=n.options.hint)==null?void 0:i.text)&&l(u,{children:n.options.hint.text})]})}),id:n.options.idPrefix,classes:n.options.classes,attributes:n.options.attributes})});const z=["primary","inline","withDisabled","withLegendAsPageHeading","withAMediumLegend","withADivider","withHintsOnItems","withoutFieldset","withFieldsetAndErrorMessage","withVeryLongOptionText","withConditionalItems","withConditionalItemsWithSpecialCharacters","withConditionalItemChecked","prechecked","precheckedUsingValue","withConditionalItemsAndPrecheckedValue","withOptionalFormgroupClassesShowingGroupError","small","smallWithLongText","smallWithError","smallWithHint","smallWithDisabled","smallWithConditionalReveal","smallInline","smallInlineExtreme","smallWithADivider","withIdPrefix"];export{z as __namedExportsOrder,j as default,p as inline,Y as prechecked,N as precheckedUsingValue,g as primary,T as small,I as smallInline,V as smallInlineExtreme,F as smallWithADivider,M as smallWithConditionalReveal,D as smallWithDisabled,S as smallWithError,C as smallWithHint,G as smallWithLongText,b as withADivider,_ as withAMediumLegend,E as withConditionalItemChecked,P as withConditionalItems,q as withConditionalItemsAndPrecheckedValue,H as withConditionalItemsWithSpecialCharacters,h as withDisabled,y as withFieldsetAndErrorMessage,f as withHintsOnItems,W as withIdPrefix,k as withLegendAsPageHeading,A as withOptionalFormgroupClassesShowingGroupError,w as withVeryLongOptionText,x as withoutFieldset};
//# sourceMappingURL=Radios.stories.f7b86b31.js.map
