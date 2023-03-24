import React, {Children, cloneElement, isValidElement} from "react";
import TextareaProps from "./Textarea.types";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../../layout/FormGroup";
import Hint from "../Hint";
import Label from "../Label";

export const Textarea = ({
  name,
  id,
  rows,
  autocomplete,
  spellcheck,
  classes,
  errorMessage,
  attributes,
  children,
  describedBy,
  value,
}: TextareaProps) => {
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
        <textarea
          className={`govuk-textarea ${classes}`}
          id={id}
          name={name}
          rows={rows}
          autoComplete={autocomplete}
          spellCheck={spellcheck}
          aria-describedby={describedByValue || ''}
          defaultValue={value}
          {...attributes}
        />
      </FormGroup>
    </>
  );
};

export default Textarea;
