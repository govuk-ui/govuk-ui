import React, {Children, cloneElement, isValidElement} from "react";
import FileUploadProps from "./FileUpload.types";
import FormGroup from "../../layout/FormGroup";
import Label from "../Label";
import ErrorMessage from "../ErrorMessage";
import Hint from "../Hint";

export const FileUpload = ({
  name,
  id,
  value,
  describedBy,
  errorMessage,
  children,
  classes,
  formGroupClasses,
  ...attributes
}: FileUploadProps) => {
  let describedByValue = '';
  let errorMessageComponent;

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
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
      { errorMessageComponent }
      <input
        className={`govuk-file-upload${classes ? ` ${classes}` : ''}${errorMessage ? ' govuk-file-upload--error' : ''}`}
        id={id}
        name={name}
        type="file"
        value={value}
        aria-describedby={describedByValue}
        { ...attributes }
      />
    </FormGroup>
  );
};

export default FileUpload;
