import React from "react";
import SelectProps from "./Select.types";

export const Select = ({
  id,
  name,
  classes,
  children,
  describedBy,
  ...attributes
}: SelectProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  return (
    <>
      <select className={`govuk-select ${classes || ''}`} id={id} name={name} aria-describedby={describedBy} {...attributes}>
        { children }
      </select>
    </>
  );
};

export default Select;
