import React, {Children, cloneElement, isValidElement} from "react";
import RadiosProps from "./Radios.types";
import FormGroup from "../../layout/FormGroup";
import ErrorMessage from "../ErrorMessage";
import Fieldset from "../../layout/Fieldset";
import Hint from "../Hint";
import Legend from "../../layout/Legend";
import RadioItem from "../RadioItem";

export const Radios = ({
  idPrefix,
  name,
  children,
  classes,
  value,
  errorMessage,
  ...attributes
}: RadiosProps) => {

  if (!idPrefix && name) {
    idPrefix = name;
  } else if (!name && idPrefix) {
    name = idPrefix;
  }

  let describedByValue = '';
  let errorMessageComponent;

  if (errorMessage) {
    const errorId = idPrefix ? `${idPrefix}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  const arrayChildren: any = Children.toArray(children);
  const radioItemsArray: any = arrayChildren.filter((child: any) => child.type === RadioItem);

  { Children.map(arrayChildren, (child:any, _index) => {
    if (isValidElement(child) && (child.type === Hint)) {
      describedByValue += ` ${idPrefix}-hint`;
    }
  })}

  return (
    <FormGroup error={errorMessage}>
      <Fieldset describedBy={describedByValue}>
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === Legend)) {
            return (
                <>
                  {
                    cloneElement(child as React.ReactElement<any>, {})
                  }
                </>
            );
          }
        })}
        { errorMessageComponent }
        <div className={`govuk-radios ${classes || ''}`} id={idPrefix} data-module="govuk-radios" { ...attributes }>
          { Children.map(radioItemsArray, (child: any, index) => {
            if (isValidElement(child) && (child.type === RadioItem)) {
              const radioItemId = child?.props?.id ? child?.props?.id : idPrefix;
              return (
                <>
                  {
                    cloneElement(child as React.ReactElement<any>, {
                      id: index > 0 ? `${radioItemId}-${index}` : radioItemId,
                      data: value,
                      name: name
                    })
                  }
                </>
              );
            }
          })}
        </div>
      </Fieldset>
    </FormGroup>
  );
};

export default Radios;
