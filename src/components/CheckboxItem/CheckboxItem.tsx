import React, { Children, cloneElement, isValidElement } from "react";
import Label from '../Label';
import Hint from '../Hint';
import CheckboxItemProps from "./CheckboxItem.types";

export const CheckboxItem = ({
  id,
  name,
  children,
  key,
  divider,
  exclusive,
  conditional,
  value,
  data,
  classes,
  ...attributes }: CheckboxItemProps) => {

  const conditionalId = `conditional-${id}`

  const arrayChildren: any = Children.toArray(children);

  return (
    <div className={ !divider ? 'govuk-checkboxes__item' : 'govuk-checkboxes__divider' }>
      { !divider && (
        <>
          <input
            className={`govuk-checkboxes__input ${classes || ''}`}
            id={id}
            name={name}
            key={key}
            type="checkbox"
            value={value}
            defaultChecked={((Array.isArray(data) && data.includes(value)) || (data === value))}
            data-aria-controls={ conditional ? conditionalId : '' }
            data-behaviour={exclusive ? 'exclusive' : null}
            { ...attributes }
          />
          { Children.map(arrayChildren, (child:any, index) => {
            if (isValidElement(child) && child.type === Label) {
              return (
                <>
                  {
                    cloneElement(child as React.ReactElement<any>, {
                      classes: 'govuk-checkboxes__label',
                      htmlFor: id
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
          { conditional && (
            <div className={`govuk-checkboxes__conditional ${data !== value ? 'govuk-checkboxes__conditional--hidden' : ''}`} id={conditionalId}>
              { conditional }
            </div>
          )}
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

export default CheckboxItem;
