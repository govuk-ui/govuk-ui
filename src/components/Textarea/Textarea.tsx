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
    <>
      <div className="govuk-form-group">
        <label className="govuk-label" htmlFor="more-detail">
          Can you provide more detail?
        </label>

        <textarea className="govuk-textarea" id="more-detail" name="more-detail" rows="5"></textarea>
      </div>
    </>
  );
};

export default Textarea;
