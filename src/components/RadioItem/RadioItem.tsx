import React, { Children, cloneElement } from "react";
import RadioItemProps from "./RadioItem.types";

export const RadioItem = ({ 
  id,
  name,
  children,
  key,
  value,
  classes,
  attributes }: RadioItemProps) => {

  const arrayChildren:any = Children.toArray(children);

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
      { Children.map(arrayChildren, (child, index) => {
        return (
          <>
            { 
              cloneElement(child, {
                classes: 'govuk-radios__label'
              })
            }
          </>
        );
      })}
    </div>
  );
};

export default RadioItem;
