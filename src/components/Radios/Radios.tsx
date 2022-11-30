
      import React from 'react';
      import RadiosProps from './Radios.types';
      
      export const Radios = ({
    
 name,
 hint,
 items,
 idPrefix,
 classes,
 fieldset,
 errorMessage,
 value,
 formGroup,
 attributes,
 }: RadiosProps) => {
      return (
<div class="govuk-form-group">

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

</div>

        );
      }
      
      export default Radios;
    