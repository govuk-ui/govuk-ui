import React, {Children, cloneElement, isValidElement} from "react";
import InputProps from "./Input.types";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../../layout/FormGroup";
import SummaryListItem from "../SummaryListItem";
import SummaryListRow from "../SummaryListRow";
import Typography from "../../typography/Typography";
import Hint from "../Hint";

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
  attributes,
  children,
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

  return (
    <>
      <FormGroup error={errorMessage}>
        { Children.map(arrayChildren, (child:any, index) => {
          if (isValidElement(child) && (child.type === Typography)) {
            return (
              <>
                <label className="govuk-label" htmlFor={id}>
                  {
                    cloneElement(child as React.ReactElement<any>, {})
                  }
                </label>
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
        <input
          className={`govuk-input ${classes || ''} ${errorMessage ? ' govuk-input--error' : ''}`}
          id={id}
          name={name}
          type={type}
          defaultValue={value}
          aria-describedby={describedByValue || ''}
          autoComplete={autocomplete}
          inputMode={inputmode}
        />
      </FormGroup>
    </>
  );
};

export default Input;
