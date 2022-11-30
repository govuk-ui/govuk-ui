
      import React from 'react';
      import InputProps from './Input.types';
      
      export const Input = ({
    
 label,
 id,
 name,
 hint,
 errorMessage,
 classes,
 formGroup,
 autocomplete,
 type,
 pattern,
 spellcheck,
 prefix,
 suffix,
 value,
 describedBy,
 attributes,
 inputmode,
 }: InputProps) => {
      return (
<div class="govuk-form-group">
  <label class="govuk-label" for="input-example">
    National Insurance number
  </label>

<input class="govuk-input" id="input-example" name="test-name" type="text">

</div>

        );
      }
      
      export default Input;
    