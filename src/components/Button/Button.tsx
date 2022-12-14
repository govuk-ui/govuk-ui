import React from 'react';
import ButtonProps from './Button.types';

export const Button = ({
  href,
  name,
  type,
  disabled,
  isStartButton,
  preventDoubleClick,
  classes,
  children
}: ButtonProps) => {
  let buttonAttributes: any = {
    name,
    type,
    href,
    'data-module': 'govuk-button',
  };

  const classProps = `govuk-button ${classes || ''}${
      disabled ? ' govuk-button--disabled' : ''
  } ${isStartButton ? 'govuk-button--start' : ''}`;

  let iconHtml;
  if (isStartButton) {
    iconHtml = (
      <svg
        className="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
      </svg>
    );
  }

  if (preventDoubleClick) {
    buttonAttributes['data-prevent-double-click'] = preventDoubleClick;
  }

  if (disabled) {
    buttonAttributes = {
      ...buttonAttributes,
      'aria-disabled': true,
      disabled: 'disabled',
    };
  }

  return (
    <button {...buttonAttributes} className={classProps}>
      {children}
      {iconHtml}
    </button>
  );
};

export default Button;
