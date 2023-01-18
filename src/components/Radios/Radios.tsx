import React, { Children, cloneElement } from "react";
import RadiosProps from "./Radios.types";
import FormGroup from "../../layout/FormGroup";
import ErrorMessage from "../ErrorMessage";

export const Radios = ({
  id,
  name,
  children,
  classes,
  value,
  errorMessage,
  ...attributes
}: RadiosProps) => {

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
    <FormGroup error={errorMessage}>
      { errorMessageComponent }
      <div className={`govuk-radios ${classes || ''}`} data-module="govuk-radios" id={id} { ...attributes }>
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
