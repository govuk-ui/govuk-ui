import React, {Children, cloneElement, isValidElement} from "react";
import { Typography } from "../..";
import TypographyProps from "../../typography/Typography/Typography.types";
import PanelProps from "./Panel.types";

export const Panel = ({
  id,
  name,
  classes,
  children,
  ...attributes
}: PanelProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  const arrayChildren: any = Children.toArray(children);
  const headerVariants = ['xl', 'l', 'm', 's'];

  return (
    <div className={`govuk-panel govuk-panel--confirmation${classes ? ` ${classes}` : ''}`} {...attributes}>
      { Children.map(arrayChildren, (child:any, _index) => {
        if (isValidElement(child) && (child.type === Typography)) {
          return (
              <>
                {
                  cloneElement(child as React.ReactElement<TypographyProps>, {
                    classes: headerVariants.includes(child?.props?.variant) ? `govuk-panel__title ${child?.props?.classes}` : `govuk-panel__body ${child?.props?.classes}`
                  })
                }
              </>
          );
        }
      })}
    </div>
  );
};

export default Panel;
