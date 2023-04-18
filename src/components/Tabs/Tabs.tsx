import React, {Children, cloneElement, isValidElement} from "react";
import TabItem from "../TabItem";
import TabsProps from "./Tabs.types";
import TabItemProps from "../TabItem/TabItem.types";

export const Tabs = ({
  children,
  classes,
  id,
  idPrefix = "tab-item",
  title,
  ...attributes
}: TabsProps) => {

  const arrayChildren: any = Children.toArray(children);

  return (
    <div className={`govuk-tabs ${classes || ''}`} id={id} data-module="govuk-tabs" { ...attributes }>

      <h2 className="govuk-tabs__title">{title || "Contents"}</h2>

      <ul className="govuk-tabs__list">
        { Children.map(arrayChildren, (child:any, index) => {
          if (isValidElement(child) && (child.type === TabItem)) {
            child = child as TabItemProps
            return (
              <>
                {
                  cloneElement(child as React.ReactElement<any>, {
                    id: child?.props?.id ? `#${child.props.id}` : `#${idPrefix}-${index + 1}`,
                    selected: index === 0
                  })
                }
              </>
            );
          }
        })}
      </ul>

      { Children.map(arrayChildren, (child:any, index) => {
        if (isValidElement(child) && (child.type === TabItem)) {
          child = child as TabItemProps
          return (
            <div className={`govuk-tabs__panel${index > 0 ? ' govuk-tabs__panel--hidden' : ''}`} id={child.props.id ? child.props.id : `${idPrefix}-${index + 1}`}>
              { child?.props?.children }
            </div>
          );
        }
      })}
    </div>
  );
};

export default Tabs;
