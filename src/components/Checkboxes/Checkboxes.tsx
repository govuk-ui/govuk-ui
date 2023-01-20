import React, { Children, cloneElement } from "react";
import CheckboxesProps from "./Checkboxes.types";
import FormGroup from "../../layout/FormGroup";
import ErrorMessage from "../ErrorMessage";

export const Radios = ({
  id,
  name,
  children,
  classes,
  errorMessage,
  value,
  ...attributes
}: CheckboxesProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  let errorMessageComponent;

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  const arrayChildren: any = Children.toArray(children);

  return (
    <FormGroup>
      { errorMessageComponent }
      <div className={`govuk-checkboxes ${classes || ''}`} data-module="govuk-checkboxes" id={id} { ...attributes }>
        { Children.map(arrayChildren, (child) => {
          return (
            <>
              {
                cloneElement(child, {
                  name: name,
                  data: value,
                })
              }
            </>
          );
        })}
      </div>
    </FormGroup>
  );
};

export default Radios;
