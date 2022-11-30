
      import React from 'react';
      import DateInputProps from './DateInput.types';
      
      export const DateInput = ({
    
 id,
 namePrefix,
 fieldset,
 hint,
 items,
 errorMessage,
 formGroup,
 classes,
 attributes,
 }: DateInputProps) => {
      return (
<div class="govuk-form-group">

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

</div>

        );
      }
      
      export default DateInput;
    