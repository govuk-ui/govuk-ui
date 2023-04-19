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
  checked,
  conditional,
  classes,
  ...attributes }: RadioItemProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  const conditionalId = `conditional-${id}`

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
            defaultChecked={checked}
            data-aria-controls={ conditional ? conditionalId : '' }
            { ...attributes }
          />
          { Children.map(arrayChildren, (child:any, _index) => {
            if (isValidElement(child) && child.type === Label) {
              return (
                <>
                  {
                    cloneElement(child as React.ReactElement<any>, {
                      classes: 'govuk-radios__label',
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
                      classes: 'govuk-radios__hint'
                    })
                  }
                </>
              );
            }
          })}
          { conditional && (
            <div className={`govuk-radios__conditional${!checked ? ' govuk-radios__conditional--hidden' : ''}`} id={conditionalId}>
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

export default RadioItem;
