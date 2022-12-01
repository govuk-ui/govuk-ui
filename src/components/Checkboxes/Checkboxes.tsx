import React from "react";
import CheckboxesProps from "./Checkboxes.types";

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
    <>
      <div className="govuk-form-group">
        <div className="govuk-checkboxes" data-module="govuk-checkboxes">
          <div className="govuk-checkboxes__item">
            <input
              className="govuk-checkboxes__input"
              id="nationality"
              name="nationality"
              type="checkbox"
              value="british"
            />
            <label className="govuk-label govuk-checkboxes__label" htmlFor="nationality">
              British
            </label>
          </div>

          <div className="govuk-checkboxes__item">
            <input
              className="govuk-checkboxes__input"
              id="nationality-2"
              name="nationality"
              type="checkbox"
              value="irish"
            />
            <label className="govuk-label govuk-checkboxes__label" htmlFor="nationality-2">
              Irish
            </label>
          </div>

          <div className="govuk-checkboxes__item">
            <input
              className="govuk-checkboxes__input"
              id="nationality-3"
              name="nationality"
              type="checkbox"
              value="other"
            />
            <label className="govuk-label govuk-checkboxes__label" htmlFor="nationality-3">
              Citizen of another country
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkboxes;
