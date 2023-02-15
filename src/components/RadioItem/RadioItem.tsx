import React, { Children, cloneElement, isValidElement } from "react";
import Label from '../Label';
import Hint from '../Hint';
import RadioItemProps from "./RadioItem.types";

export const RadioItem = ({
  idPrefix,
  id,
  name,
  children,
  key,
  divider,
  value,
  data,
  classes,
  ...attributes }: RadioItemProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  const arrayChildren: any = Children.toArray(children);

  return (
    <div className={ !divider ? 'govuk-radios__item' : 'govuk-radios__divider' }>
      { !divider && (
        <>
          <input
            className={`govuk-radios__input ${classes || ''}`}
            id={idPrefix ? `${idPrefix}-${id}`: id}
            name={name}
            key={key}
            type="radio"
            value={value}
            defaultChecked={data === value}
            { ...attributes }
          />
          { Children.map(arrayChildren, (child:any, index) => {
            if (isValidElement(child) && child.type === Label) {
              return (
                <>
                  {
                    cloneElement(child as React.ReactElement<any>, {
                      classes: 'govuk-radios__label',
                      htmlFor: idPrefix ? `${idPrefix}-${id}`: id
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
