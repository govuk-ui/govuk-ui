import React from "react";
import DateInputProps from "./DateInput.types";
import FormGroup from "../../layout/FormGroup";
import ErrorMessage from "../ErrorMessage";

export const DateInput = ({
  id,
  name,
  classes,
  dayLabel,
  monthLabel,
  yearLabel,
  errorMessage,
  value,
  ...attributes
}: DateInputProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  let errorMessageComponent;

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  return (
    <FormGroup error={errorMessage}>
      <div className={`govuk-date-input ${classes || ''}`} id={id} {...attributes}>
        { errorMessageComponent }
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
            defaultValue={value ? value[`${id}-day`] : null}
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
              defaultValue={value ? value[`${id}-month`] : null}
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
              defaultValue={value ? value[`${id}-year`] : null}
            />
          </div>
        </div>
      </div>
    </FormGroup>
  );
};

export default DateInput;
