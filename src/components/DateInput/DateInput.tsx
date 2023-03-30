import React, {Children, cloneElement, isValidElement} from "react";
import DateInputProps from "./DateInput.types";
import FormGroup from "../../layout/FormGroup";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Label from "../Label";
import Fieldset from "../../layout/Fieldset";
import Legend from "../../layout/Legend";
import Hint from "../Hint";
import Typography from "../../typography/Typography";

export const DateInput = ({
  id,
  name,
  classes,
  dayLabel,
  monthLabel,
  yearLabel,
  autocompleteDay,
  autocompleteMonth,
  autocompleteYear,
  errorMessage,
  children,
  value,
  ...attributes
}: DateInputProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  let errorMessageComponent;
  let describedByValue = '';

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>;
  }

  const arrayChildren: any = Children.toArray(children);

  { Children.map(arrayChildren, (child:any, _index) => {
    if (isValidElement(child) && (child.type === Hint)) {
      describedByValue += ` ${id}-hint`;
    }
  })}

  return (
    <FormGroup error={errorMessage}>
      <Fieldset role="group" describedBy={describedByValue}>
        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && ((child.type === Legend) || (child.type === Hint))) {
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
        <div className={`govuk-date-input ${classes || ''}`} id={id} {...attributes}>
          <div className="govuk-date-input__item">
            <Input
              classes="govuk-input govuk-date-input__input govuk-input--width-2"
              id={`${id}-day`}
              name={`${name}-day`}
              type="text"
              inputmode="numeric"
              autocomplete={autocompleteDay || ''}
              value={value ? value[`${id}-day`] : null}
            >
              <Label>
                {dayLabel || 'Day'}
              </Label>
            </Input>
          </div>

          <div className="govuk-date-input__item">
            <Input
              classes="govuk-input govuk-date-input__input govuk-input--width-2"
              id={`${id}-month`}
              name={`${name}-month`}
              type="text"
              inputmode="numeric"
              autocomplete={autocompleteMonth || ''}
              value={value ? value[`${id}-month`] : null}
            >
              <Label>
                {monthLabel || 'Month'}
              </Label>
            </Input>
          </div>

          <div className="govuk-date-input__item">
            <Input
              classes="govuk-input govuk-date-input__input govuk-input--width-4"
              id={`${id}-year`}
              name={`${name}-year`}
              type="text"
              inputmode="numeric"
              autocomplete={autocompleteYear || ''}
              value={value ? value[`${id}-year`] : null}
            >
              <Label>
                {yearLabel || 'Year'}
              </Label>
            </Input>
          </div>
        </div>
      </Fieldset>
    </FormGroup>
  );
};

export default DateInput;
