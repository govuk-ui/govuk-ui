import React from "react";
import DateInputProps from "./DateInput.types";

export const DateInput = ({
  id,
  name,
  classes,
  dayLabel,
  monthLabel,
  yearLabel,
  ...attributes
}: DateInputProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  return (
    <>
      <div className={`govuk-date-input ${classes || ''}`} id={id} {...attributes}>
        <div className="govuk-date-input__item">
          <label className="govuk-label govuk-date-input__label" htmlFor={`${id}-day`}>
            {dayLabel || 'Day'}
          </label>
          <input
            className="govuk-input govuk-date-input__input govuk-input--width-2"
            id={`${id}-day`}
            name={`${name}-day`}
            type="text"
            inputMode="numeric"
          />
        </div>

        <div className="govuk-date-input__item">
          <div className="govuk-form-group">
            <label className="govuk-label govuk-date-input__label" htmlFor={`${id}-month`}>
              {monthLabel || 'Month'}
            </label>
            <input
              className="govuk-input govuk-date-input__input govuk-input--width-2"
              id={`${id}-month`}
              name={`${name}-month`}
              type="text"
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="govuk-date-input__item">
          <div className="govuk-form-group">
            <label className="govuk-label govuk-date-input__label" htmlFor={`${id}-year`}>
              {yearLabel || 'Year'}
            </label>
            <input
              className="govuk-input govuk-date-input__input govuk-input--width-4"
              id={`${id}-year`}
              name={`${name}-year`}
              type="text"
              inputMode="numeric"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateInput;
