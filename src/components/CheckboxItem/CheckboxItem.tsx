import React, { Children, cloneElement, isValidElement } from "react";
import Label from '../Label';
import Hint from '../Hint';
import CheckboxItemProps from "./CheckboxItem.types";

export const CheckboxesItem = ({ 
  id,
  name,
  children,
  key,
  value,
  classes,
  ...attributes }: CheckboxItemProps) => {

  const arrayChildren:any = Children.toArray(children);

  return (


    <div className="govuk-checkboxes__item">
      <input
        className={`govuk-checkboxes__input ${classes || ''}`}
        id={id}
        name={name}
        key={key}
        type="checkbox"
        value={value}
        { ...attributes }
      />

      { Children.map(arrayChildren, (child:any, index) => {
        if (isValidElement(child) && child.type === Label) {
          return (
            <>
              { 
                cloneElement(child as React.ReactElement<any>, {
                  classes: 'govuk-checkboxes__label'
                })
              }
            </>
          );
        } else if (isValidElement(child) && child.type === Hint) {
          return (
            <>
              { 
                cloneElement(child as React.ReactElement<any>, {
                  classes: 'govuk-checkboxes__hint'
                })
              }
            </>
          );
        }
      })}
    </div>
  );
};

export default CheckboxesItem;
