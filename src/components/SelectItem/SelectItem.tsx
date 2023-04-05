import React from "react";
import SelectItemProps from "./SelectItem.types";

export const SelectItem = ({
  value,
  data,
  selected,
  disabled,
  children,
  ...attributes
}: SelectItemProps) => {
  const optionalAttributes = {
    selected: selected ? selected : value === data,
    disabled
  };

  return (
    <option
      value={value}
      { ...optionalAttributes }
      { ...attributes }
    >
      { children }
    </option>
  );
};

export default SelectItem;
