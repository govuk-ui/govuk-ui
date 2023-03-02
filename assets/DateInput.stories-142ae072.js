import{D as o}from"./DateInput-e4c6e0c9.js";import"./jsx-runtime-68f49b4e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./FormGroup-f91b51d3.js";import"./ErrorMessage-07ea8fac.js";import"./Legend-3f30edf0.js";import"./Hint-47130fa7.js";import"./Label-3d09487c.js";import"./Fieldset-cd643f71.js";import"./Typography-3950099a.js";const a="date-input",u=[{name:"default",options:{id:"dob"},hidden:!1,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="dob">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"complete question",options:{id:"dob",namePrefix:"dob",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"},items:[{name:"day",classes:"govuk-input--width-2"},{name:"month",classes:"govuk-input--width-2"},{name:"year",classes:"govuk-input--width-4"}]},hidden:!1,html:`<div class="govuk-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  <div class="govuk-date-input" id="dob">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with errors only",options:{id:"dob-errors",fieldset:{legend:{text:"What is your date of birth?"}},errorMessage:{text:"Error message goes here"},items:[{name:"day",classes:"govuk-input--width-2 govuk-input--error"},{name:"month",classes:"govuk-input--width-2 govuk-input--error"},{name:"year",classes:"govuk-input--width-4 govuk-input--error"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-errors-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <p id="dob-errors-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>

  <div class="govuk-date-input" id="dob-errors">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-errors-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with errors and hint",options:{id:"dob-errors",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"},errorMessage:{text:"Error message goes here"},items:[{name:"day",classes:"govuk-input--width-2 govuk-input--error"},{name:"month",classes:"govuk-input--width-2 govuk-input--error"},{name:"year",classes:"govuk-input--width-4 govuk-input--error"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-errors-hint dob-errors-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-errors-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  
  
  <p id="dob-errors-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>

  <div class="govuk-date-input" id="dob-errors">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-errors-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with error on day input",options:{id:"dob-day-error",namePrefix:"dob-day-error",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"},errorMessage:{text:"Error message goes here"},items:[{name:"day",classes:"govuk-input--width-2 govuk-input--error"},{name:"month",classes:"govuk-input--width-2"},{name:"year",classes:"govuk-input--width-4"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-day-error-hint dob-day-error-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-day-error-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  
  
  <p id="dob-day-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>

  <div class="govuk-date-input" id="dob-day-error">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day-error-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-day-error-day" name="dob-day-error-day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day-error-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day-error-month" name="dob-day-error-month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day-error-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-day-error-year" name="dob-day-error-year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with error on month input",options:{id:"dob-month-error",namePrefix:"dob-month-error",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"},errorMessage:{text:"Error message goes here"},items:[{name:"day",classes:"govuk-input--width-2"},{name:"month",classes:"govuk-input--width-2 govuk-input--error"},{name:"year",classes:"govuk-input--width-4"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-month-error-hint dob-month-error-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-month-error-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  
  
  <p id="dob-month-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>

  <div class="govuk-date-input" id="dob-month-error">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month-error-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month-error-day" name="dob-month-error-day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month-error-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-month-error-month" name="dob-month-error-month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month-error-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-month-error-year" name="dob-month-error-year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with error on year input",options:{id:"dob-year-error",namePrefix:"dob-year-error",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"},errorMessage:{text:"Error message goes here"},items:[{name:"day",classes:"govuk-input--width-2"},{name:"month",classes:"govuk-input--width-2"},{name:"year",classes:"govuk-input--width-4 govuk-input--error"}]},hidden:!1,html:`<div class="govuk-form-group govuk-form-group--error">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-year-error-hint dob-year-error-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-year-error-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  
  
  <p id="dob-year-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>

  <div class="govuk-date-input" id="dob-year-error">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year-error-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-day" name="dob-year-error-day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year-error-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-month" name="dob-year-error-month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year-error-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-year-error-year" name="dob-year-error-year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with default items",options:{id:"dob",namePrefix:"dob",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"}},hidden:!1,html:`<div class="govuk-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  <div class="govuk-date-input" id="dob">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with optional form-group classes",options:{id:"dob",namePrefix:"dob",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"},formGroup:{classes:"extra-class"}},hidden:!1,html:`<div class="govuk-form-group extra-class">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  <div class="govuk-date-input" id="dob">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with autocomplete values",options:{id:"dob-with-autocomplete-attribute",namePrefix:"dob-with-autocomplete",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"},items:[{name:"day",classes:"govuk-input--width-2",autocomplete:"bday-day"},{name:"month",classes:"govuk-input--width-2",autocomplete:"bday-month"},{name:"year",classes:"govuk-input--width-4",autocomplete:"bday-year"}]},hidden:!1,html:`<div class="govuk-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-with-autocomplete-attribute-hint">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-with-autocomplete-attribute-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  <div class="govuk-date-input" id="dob-with-autocomplete-attribute">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-autocomplete-attribute-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-with-autocomplete-attribute-day" name="dob-with-autocomplete-day" type="text" autocomplete="bday-day" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-autocomplete-attribute-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-with-autocomplete-attribute-month" name="dob-with-autocomplete-month" type="text" autocomplete="bday-month" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-autocomplete-attribute-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-with-autocomplete-attribute-year" name="dob-with-autocomplete-year" type="text" autocomplete="bday-year" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with input attributes",options:{id:"dob-with-input-attributes",namePrefix:"dob-with-input-attributes",fieldset:{legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"},items:[{name:"day",classes:"govuk-input--width-2",attributes:{"data-example-day":"day"}},{name:"month",classes:"govuk-input--width-2",attributes:{"data-example-month":"month"}},{name:"year",classes:"govuk-input--width-4",attributes:{"data-example-year":"year"}}]},hidden:!1,html:`<div class="govuk-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="dob-with-input-attributes-hint">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-with-input-attributes-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  <div class="govuk-date-input" id="dob-with-input-attributes">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-input-attributes-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-with-input-attributes-day" name="dob-with-input-attributes-day" type="text" inputmode="numeric" data-example-day="day">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-input-attributes-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-with-input-attributes-month" name="dob-with-input-attributes-month" type="text" inputmode="numeric" data-example-month="month">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-with-input-attributes-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-with-input-attributes-year" name="dob-with-input-attributes-year" type="text" inputmode="numeric" data-example-year="year">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"classes",options:{id:"with-classes",classes:"app-date-input--custom-modifier"},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input app-date-input--custom-modifier" id="with-classes">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-classes-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-classes-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-classes-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-classes-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-classes-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="with-classes-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"attributes",options:{id:"with-attributes",attributes:{"data-attribute":"my data value"}},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" data-attribute="my data value" id="with-attributes">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-attributes-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-attributes-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-attributes-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-attributes-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-attributes-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="with-attributes-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"with empty items",options:{id:"with-empty-items",items:[]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="with-empty-items">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-empty-items-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-empty-items-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-empty-items-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-empty-items-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-empty-items-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="with-empty-items-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"custom pattern",options:{id:"with-custom-pattern",items:[{name:"day",pattern:"[0-8]*"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="with-custom-pattern">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-custom-pattern-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="with-custom-pattern-day" name="day" type="text" pattern="[0-8]*" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"custom inputmode",options:{id:"with-custom-inputmode",items:[{name:"day",pattern:"[0-9X]*",inputmode:"text"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="with-custom-inputmode">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-custom-inputmode-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="with-custom-inputmode-day" name="day" type="text" pattern="[0-9X]*" inputmode="text">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"with nested name",options:{id:"with-nested-name",items:[{name:"day[dd]"},{name:"month[mm]"},{name:"year[yyyy]"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="with-nested-name">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-nested-name-day[dd]">
          Day[dd]
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="with-nested-name-day[dd]" name="day[dd]" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-nested-name-month[mm]">
          Month[mm]
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="with-nested-name-month[mm]" name="month[mm]" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-nested-name-year[yyyy]">
          Year[yyyy]
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="with-nested-name-year[yyyy]" name="year[yyyy]" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"with id on items",options:{id:"with-item-id",items:[{id:"day",name:"day"},{id:"month",name:"month"},{id:"year",name:"year"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="with-item-id">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"suffixed id",options:{id:"my-date-input",items:[{name:"day"},{name:"month"},{name:"year"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="my-date-input">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="my-date-input-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="my-date-input-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="my-date-input-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="my-date-input-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="my-date-input-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="my-date-input-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"with values",options:{id:"with-values",items:[{id:"day",name:"day"},{id:"month",name:"month"},{id:"year",name:"year",value:2018}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="with-values">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="year" name="year" type="text" value="2018" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"with hint and describedBy",options:{id:"dob-errors",fieldset:{describedBy:"some-id",legend:{text:"What is your date of birth?"}},hint:{text:"For example, 31 3 1980"}},hidden:!0,html:`<div class="govuk-form-group">
<fieldset class="govuk-fieldset" role="group" aria-describedby="some-id dob-errors-hint">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <div id="dob-errors-hint" class="govuk-hint">
    For example, 31 3 1980
  </div>


  <div class="govuk-date-input" id="dob-errors">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-errors-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-errors-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-errors-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"with error and describedBy",options:{id:"dob-errors",fieldset:{describedBy:"some-id",legend:{text:"What is your date of birth?"}},errorMessage:{text:"Error message goes here"}},hidden:!0,html:`<div class="govuk-form-group govuk-form-group--error">
<fieldset class="govuk-fieldset" role="group" aria-describedby="some-id dob-errors-error">
  
  <legend class="govuk-fieldset__legend">
  
    What is your date of birth?
  
  </legend>
  

  <p id="dob-errors-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>

  <div class="govuk-date-input" id="dob-errors">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-errors-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-errors-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-errors-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"fieldset html",options:{id:"with-fieldset-html",fieldset:{legend:{html:"What is your <b>date of birth</b>?"}}},hidden:!0,html:`<div class="govuk-form-group">
<fieldset class="govuk-fieldset" role="group">
  
  <legend class="govuk-fieldset__legend">
  
    What is your <b>date of birth</b>?
  
  </legend>
  

  <div class="govuk-date-input" id="with-fieldset-html">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-fieldset-html-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-fieldset-html-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-fieldset-html-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-fieldset-html-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-fieldset-html-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="with-fieldset-html-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>
  

</fieldset>


</div>`},{name:"items with classes",options:{id:"with-item-classes",items:[{name:"day",classes:"app-date-input__day"},{name:"month",classes:"app-date-input__month"},{name:"year",classes:"app-date-input__year"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="with-item-classes">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-item-classes-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input app-date-input__day" id="with-item-classes-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-item-classes-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input app-date-input__month" id="with-item-classes-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="with-item-classes-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input app-date-input__year" id="with-item-classes-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`},{name:"items without classes",options:{id:"without-item-classes",items:[{name:"day"},{name:"month"},{name:"year"}]},hidden:!0,html:`<div class="govuk-form-group">

  <div class="govuk-date-input" id="without-item-classes">
    
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="without-item-classes-day">
          Day
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="without-item-classes-day" name="day" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="without-item-classes-month">
          Month
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="without-item-classes-month" name="month" type="text" inputmode="numeric">
      
      </div>
    </div>
  
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for="without-item-classes-year">
          Year
        </label>
      
      <input class="govuk-input govuk-date-input__input " id="without-item-classes-year" name="year" type="text" inputmode="numeric">
      
      </div>
    </div>
  
  </div>

</div>`}],d={component:a,fixtures:u},I={title:"DateInput",component:o},s={name:"default"},l={name:"complete question"},r={name:"with errors only"},v={name:"with errors and hint"},p={name:"with error on day input"},g={name:"with error on month input"},m={name:"with error on year input"},k={name:"with default items"},c={name:"with optional formgroup classes"},b={name:"with autocomplete values"},h={name:"with input attributes"},n=[];n.push(s);n.push(l);n.push(r);n.push(v);n.push(p);n.push(g);n.push(m);n.push(k);n.push(c);n.push(b);n.push(h);d.fixtures.forEach(t=>{let e=n.find(i=>i.name===t.name.replace(/[^a-z0-9s]/gi,""))||{};e.name===t.name&&(e.args={id:t.options.id,classes:t.options.classes,attributes:t.options.attributes})});const O=["primary","completeQuestion","withErrorsOnly","withErrorsAndHint","withErrorOnDayInput","withErrorOnMonthInput","withErrorOnYearInput","withDefaultItems","withOptionalFormgroupClasses","withAutocompleteValues","withInputAttributes"];export{O as __namedExportsOrder,l as completeQuestion,I as default,s as primary,b as withAutocompleteValues,k as withDefaultItems,p as withErrorOnDayInput,g as withErrorOnMonthInput,m as withErrorOnYearInput,v as withErrorsAndHint,r as withErrorsOnly,h as withInputAttributes,c as withOptionalFormgroupClasses};
//# sourceMappingURL=DateInput.stories-142ae072.js.map
