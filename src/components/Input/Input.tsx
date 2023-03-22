import React, {Children, cloneElement, isValidElement} from "react";
import InputProps from "./Input.types";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../../layout/FormGroup";
import Hint from "../Hint";
import Label from "../Label";

export const Input = ({
  id,
  name,
  errorMessage,
  classes,
  type,
  value,
  describedBy,
  autocomplete,
  inputmode,
  prefix,
  suffix,
  children,
  ...attributes
}: InputProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  let describedByValue = describedBy || '';
  let errorMessageComponent;

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  const arrayChildren: any = Children.toArray(children);

  const PrefixSuffixWrapper = ({children}: any) => {
    if (prefix || suffix) {
      return (
        <>
          <div className="govuk-input__wrapper">
            { prefix && (
              <div className="govuk-input__prefix">
                {prefix}
              </div>
            )}
            {children}
            { suffix && (
              <div className="govuk-input__suffix">
                {suffix}
              </div>
            )}
          </div>
        </>
      )
    }
    else return children;
  };


  return (
    <>
      <FormGroup error={errorMessage}>
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === Label)) {
            return (
              <>
                {
                  cloneElement(child as React.ReactElement<any>, {
                    htmlFor: id
                  })
                }
              </>
            );
          }
          if (isValidElement(child) && (child.type === Hint)) {
            describedByValue += ` ${id}-hint`;
            return (
              <>
                {
                  cloneElement(child as React.ReactElement<any>, { id: `${id}-hint` })
                }
              </>
            );
          }
        })}
        {errorMessageComponent}
        <PrefixSuffixWrapper>
          <input
            className={`govuk-input ${classes || ''} ${errorMessage ? ' govuk-input--error' : ''}`}
            id={id}
            name={name}
            type={type}
            defaultValue={value}
            aria-describedby={describedByValue || ''}
            autoComplete={autocomplete}
            inputMode={inputmode}
            {...attributes}
          />
        </PrefixSuffixWrapper>
      </FormGroup>
    </>
  );
};

export default Input;
