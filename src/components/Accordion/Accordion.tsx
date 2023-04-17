import React, {Children, cloneElement, isValidElement} from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import AccordionProps from "./Accordion.types";

export const Accordion = ({
  id,
  name,
  children,
  classes,
  headingLevel,
  ...attributes
}: AccordionProps) => {

  if (!id && name) {
    id = name;
  } else if (!name && id) {
    name = id;
  }

  const arrayChildren: any = Children.toArray(children);

  return (
    <div className={`govuk-accordion${classes ? ` ${classes}` : ''}`} data-module="govuk-accordion" id={id} {...attributes}>
      { Children.map(arrayChildren, (child:any, index) => {
        if (isValidElement(child) && (child.type === AccordionItem)) {
          return (
            <>
              {
                cloneElement(child as React.ReactElement<any>, {
                  id,
                  index,
                  headingLevel,
                })
              }
            </>
          );
        }
      })}
    </div>
  );
};

export default Accordion;
