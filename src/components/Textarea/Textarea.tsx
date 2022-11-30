import React from "react";
import TextareaProps from "./Textarea.types";

export const Textarea = ({
  name,
  id,
  label,
  hint,
  errorMessage,
  value,
  rows,
  formGroup,
  autocomplete,
  spellcheck,
  classes,
  attributes,
  describedBy,
}: TextareaProps) => {
  return (
    <div class="govuk-form-group">
      <label class="govuk-label" for="more-detail">
        Can you provide more detail?
      </label>

      <textarea class="govuk-textarea" id="more-detail" name="more-detail" rows="5"></textarea>
    </div>
  );
};

export default Textarea;
