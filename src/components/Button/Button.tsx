import React from 'react';
import ButtonProps from './Button.types';

export const Button = ({
  element,
  name,
  type,
  value,
  disabled,
  href,
  classes,
  preventDoubleClick,
  isStartButton,
  children,
  ...attributes
}: ButtonProps) => {
  // If href is set, set the element to an anchor tag
  if (href) {
    element = 'a';
  }

  const commonAttributes: any = {
    className: `govuk-button ${classes || ''}${disabled ? ' govuk-button--disabled' : ''}${isStartButton ? ' govuk-button--start' : ''}`,
    'data-module': 'govuk-button',
    ...attributes,
  }

  const buttonAttributes: any = {
    name,
    disabled,
    ariaDisabled: disabled,
    dataPreventDoubleClick: preventDoubleClick,
  };

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

  if (element === 'a') {
    return (
      <a href={href ? href : '#'} role="button" draggable={false} { ...commonAttributes }>
        {children}
        {iconHtml}
      </a>
    );
  }

  // TODO: need to add support for value attribute on input element
  if (element === 'input') {
    return (
      <input type={type ? type : 'submit'} { ...buttonAttributes } { ...commonAttributes } />
    );
  }

  // Default to a button element
  return (
    <button value={value} type={type} {...buttonAttributes} {...commonAttributes} >
      {children}
      {iconHtml}
    </button>
  );
};

export default Button;
