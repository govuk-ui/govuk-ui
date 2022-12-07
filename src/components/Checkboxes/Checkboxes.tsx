import React, { Children, cloneElement } from "react";
import CheckboxesProps from "./Checkboxes.types";

export const Radios = ({
  id,
  name,
  children,
  classes,
  ...attributes
}: CheckboxesProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  const arrayChildren: any = Children.toArray(children);

  return (
    <div className={`govuk-checkboxes ${classes || ''}`} data-module="govuk-checkboxes" id={id} { ...attributes }>
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
