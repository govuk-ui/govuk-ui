import React from "react";
import RadiosProps from "./Radios.types";

export const Radios = ({
  id,
  name,
  items,
  classes,
  ...attributes
}: RadiosProps) => {
  return (
    <div className={`govuk-radios ${classes || ''}`} data-module="govuk-radios" { ...attributes }>
      { items?.map((item, index) => {
        return (
          <div className="govuk-radios__item">
            <input
              className="govuk-radios__input"
              id={item.id || `${name}-${index}`}
              name={name}
              key={index}
              type="radio"
              value={item.value}
            />
            <label className="govuk-label govuk-radios__label" htmlFor={item.id}>
              {item.text}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radios;
