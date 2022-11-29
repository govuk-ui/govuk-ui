
    import React from 'react';
    import CheckboxesProps from './Checkboxes.types';
    
    export const Checkboxes = ({
      name,
      items,
      values,
      fieldset,
      hint,
      errorMessage,
      idPrefix,
      formGroup,
      classes,
      attributes,
      describedBy,
    }: CheckboxesProps) => {
      return (
<div class="govuk-form-group">

  <div class="govuk-checkboxes"
    data-module="govuk-checkboxes">
    
      
          
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british" />
            <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish" />
            <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
            
          </div>
          
        
      
    
      
        
          
          
          
          
          
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other" />
            <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
            
          </div>
          
        
      
    
  </div>

</div>
  );
    }
    
    export default Checkboxes;