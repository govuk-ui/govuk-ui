import React, {Children, cloneElement, isValidElement} from "react";
import SelectProps from "./Select.types";
import FormGroup from "../../layout/FormGroup";
import ErrorMessage from "../ErrorMessage";
import Hint from "../Hint";
import Label from "../Label";
import SelectItem from "../SelectItem";

export const Select = ({
  id,
  name,
  value,
  describedBy,
  errorMessage,
  children,
  classes,
  formGroupClasses,
  ...attributes
}: SelectProps) => {
  let describedByValue = describedBy || '';
  let errorMessageComponent;

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  const arrayChildren = Children.toArray(children);

  { Children.map(arrayChildren, (child:any, _index) => {
    if (isValidElement(child) && (child.type === Hint)) {
      describedByValue += ` ${id}-hint`;
    }
  })}

  return (
    <FormGroup error={errorMessage} classes={formGroupClasses}>
      { Children.map(arrayChildren, (child:any, _index) => {
        if (isValidElement(child) && ((child.type === Label) || (child.type === Hint))) {
          return (
              <>
                {
                  cloneElement(child as React.ReactElement<any>, {})
                }
              </>
          );
        }
      })}
      {errorMessageComponent}
      <select className={`govuk-select ${classes || ''}`} id={id} name={name} aria-describedby={describedByValue} {...attributes}>
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === SelectItem)) {
            return (
              <>
                {
                  cloneElement(child as React.ReactElement<any>, {
                    data: value
                  })
                }
              </>
            );
          }
        })}
      </select>
    </FormGroup>
  );
};

export default Select;
