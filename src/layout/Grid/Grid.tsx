import React from "react";
import GridProps from "../Grid/Grid.types";

export const Grid = ({
  children,
  variant,
  classes,
  ...attributes
}: GridProps) => {
  let c = 'govuk-grid-row';
  if (variant !== 'row') {
    switch (variant) {
      case 'full':
        c = 'govuk-grid-column-full';
        break;
      case 'half':
        c = 'govuk-grid-column-one-half';
        break;
      case 'two-thirds':
        c = 'govuk-grid-column-two-thirds';
        break;
      case 'one-third':
        c = 'govuk-grid-column-one-third';
        break;
      case 'one-quarter':
        c = 'govuk-grid-column-one-quarter';
        break;
      case 'three-quarters':
        c = 'govuk-grid-column-one-quarter';
        break;
    }
  }
  return (
    <div className={`${c} ${classes || ''}`} { ...attributes }>
      { children }
    </div>
  );
};

export default Grid;
