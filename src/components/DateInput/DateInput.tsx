import React from "react";
import DateInputProps from "./DateInput.types";

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
    <>
      <div className="govuk-form-group">
        <div className="govuk-date-input" id="dob">
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor="dob-day">
                Day
              </label>

              <input
                className="govuk-input govuk-date-input__input govuk-input--width-2"
                id="dob-day"
                name="day"
                type="text"
                inputmode="numeric"
              />
            </div>
          </div>

          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor="dob-month">
                Month
              </label>

              <input
                className="govuk-input govuk-date-input__input govuk-input--width-2"
                id="dob-month"
                name="month"
                type="text"
                inputmode="numeric"
              />
            </div>
          </div>

          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor="dob-year">
                Year
              </label>

              <input
                className="govuk-input govuk-date-input__input govuk-input--width-4"
                id="dob-year"
                name="year"
                type="text"
                inputmode="numeric"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateInput;
