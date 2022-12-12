import React from "react";
import TextareaProps from "./Textarea.types";

export const Textarea = ({
  name,
  id,
  rows,
  autocomplete,
  spellcheck,
  classes,
  attributes,
  children,
  describedBy,
}: TextareaProps) => {
  return (
    <textarea 
      className={`govuk-textarea ${classes}`}
      id={id}
      name={name}
      rows={rows}
      autocomplete={autocomplete}
      spellCheck={spellcheck}
      aria-describedby={describedBy}
      {...attributes}
    >{children}</textarea>
  );
};

export default Textarea;
