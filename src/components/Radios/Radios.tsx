import React, { Children, cloneElement } from "react";
import RadiosProps from "./Radios.types";

export const Radios = ({
  id,
  name,
  children,
  classes,
  ...attributes
}: RadiosProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  const arrayChildren: any = Children.toArray(children);

  return (
    <div className={`govuk-radios ${classes || ''}`} data-module="govuk-radios" id={id} { ...attributes }>
      { Children.map(arrayChildren, (child) => {
        return (
          <>
            { 
              cloneElement(child, {
                name: name,
              })
            }
          </>
        );
      })}
    </div>
  );
};

export default Radios;
