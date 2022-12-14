import React, { Children, cloneElement, isValidElement } from "react";
import Label from '../Label';
import Hint from '../Hint';
import RadioItemProps from "./RadioItem.types";

export const RadioItem = ({ 
  id,
  name,
  children,
  key,
  divider,
  value,
  classes,
  ...attributes }: RadioItemProps) => {

  const arrayChildren: any = Children.toArray(children);

  return (
    <div className={ !divider ? 'govuk-radios__item' : 'govuk-radios__divider' }>
      { !divider && (
        <>
          <input
            className={`govuk-radios__input ${classes || ''}`}
            id={id}
            name={name}
            key={key}
            type="radio"
            value={value}
            { ...attributes }
          />
          { Children.map(arrayChildren, (child:any, index) => {
            if (isValidElement(child) && child.type === Label) {
              return (
                <>
                  { 
                    cloneElement(child as React.ReactElement<any>, {
                      classes: 'govuk-radios__label'
                    })
                  }
                </>
              );
            } else if (isValidElement(child) && child.type === Hint) {
              return (
                <>
                  { 
                    cloneElement(child as React.ReactElement<any>, {
                      classes: 'govuk-radios__hint'
                    })
                  }
                </>
              );
            }
          })}
        </>
      )}
      { divider && (
        <>
          { children }
        </>
      )}
    </div>
  );
};

export default RadioItem;
