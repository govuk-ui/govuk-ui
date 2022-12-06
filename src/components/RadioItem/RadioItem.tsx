import React from "react";
import RadioItemProps from "./RadioItem.types";
import Tag from "../Tag";

export const RadioItem = ({ 
  id,
  name,
  children,
  key,
  value,
  classes,
  attributes }: RadioItemProps) => {
  return (
    <div className="govuk-radios__item">
      <input
        className="govuk-radios__input"
        id={id}
        name={name}
        key={key}
        type="radio"
        value={value}
      />
      { children }
    </div>
  );
};

export default RadioItem;
