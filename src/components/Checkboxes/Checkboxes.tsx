import React, {Children, cloneElement, isValidElement} from "react";
import CheckboxesProps from "./Checkboxes.types";
import FormGroup from "../../layout/FormGroup";
import ErrorMessage from "../ErrorMessage";
import Legend from "../../layout/Legend";
import Fieldset from "../../layout/Fieldset";
import CheckboxItem from "../CheckboxItem";
import Hint from "../Hint";

export const Checkboxes = ({
  idPrefix,
  name,
  children,
  classes,
  errorMessage,
  value,
  ...attributes
}: CheckboxesProps) => {

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
  const checkboxItemsArray: any = arrayChildren.filter((child: any) => child.type === CheckboxItem);

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
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === Hint)) {
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
        <div className={`govuk-checkboxes ${classes || ''}`} data-module="govuk-checkboxes" { ...attributes }>
          { Children.map(checkboxItemsArray, (child: any, index) => {
            if (isValidElement(child) && (child.type === CheckboxItem)) {
              const checkboxItemId = child?.props?.id ? child?.props?.id : idPrefix;
              return (
                <>
                  {
                    cloneElement(child as React.ReactElement<any>, {
                      id: index > 0 ? `${checkboxItemId}-${index}` : checkboxItemId,
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

export default Checkboxes;
