import React from "react";
import RadiosProps from "./Radios.types";

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
    <>
      <div className="govuk-form-group">
        <div id="example-default-hint" className="govuk-hint">
          This includes changing your last name or spelling your name differently.
        </div>

        <div className="govuk-radios" data-module="govuk-radios">
          <div className="govuk-radios__item">
            <input
              className="govuk-radios__input"
              id="example-default"
              name="example-default"
              type="radio"
              value="yes"
            />
            <label className="govuk-label govuk-radios__label" htmlFor="example-default">
              Yes
            </label>
          </div>

          <div className="govuk-radios__item">
            <input
              className="govuk-radios__input"
              id="example-default-2"
              name="example-default"
              type="radio"
              value="no"
            />
            <label className="govuk-label govuk-radios__label" htmlFor="example-default-2">
              No
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Radios;
