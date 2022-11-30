import React from "react";
import SelectProps from "./Select.types";

export const Select = ({
  id,
  name,
  label,
  items,
  value,
  hint,
  errorMessage,
  classes,
  formGroup,
  describedBy,
  attributes,
}: SelectProps) => {
  return (
    <div class="govuk-form-group">
      <label class="govuk-label" for="select-1">
        Label text goes here
      </label>

      <select class="govuk-select" id="select-1" name="select-1">
        <option value="1">GOV.UK frontend option 1</option>

        <option value="2" selected>
          GOV.UK frontend option 2
        </option>

        <option value="3" disabled>
          GOV.UK frontend option 3
        </option>
      </select>
    </div>
  );
};

export default Select;
