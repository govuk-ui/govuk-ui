import React from 'react';

interface ButtonProps {
  href?: string,
  to?: string,
  isStartButton?: boolean,
  disabled?: boolean,
  className?: string,
  preventDoubleClick?: boolean,
  name?: string,
  type?: string,
  children: any,
}

export const Button = ({
  href,
  name,
  type,
  disabled,
  isStartButton,
  preventDoubleClick,
  className,
  children
}: ButtonProps) => {
  let buttonAttributes: any = {
    name,
    type,
    href,
    'data-module': 'govuk-button',
  };

  const classProps = `govuk-button ${className || ''}${
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
