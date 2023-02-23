import React, {Children, cloneElement, isValidElement} from "react";
import { TabItem } from "../TabItem/TabItem";
import TabsProps from "./Tabs.types";

export const Tabs = ({ children, classes, id, title, attributes }: TabsProps) => {

  const arrayChildren: any = Children.toArray(children);

  return (
    <>
      <div className={`govuk-tabs ${classes || ''}`} data-module="govuk-tabs" { ...attributes }>

        { title && (
          <h2 className="govuk-tabs__title">{title}</h2>
        )}
        
        <ul className="govuk-tabs__list">
          { Children.map(arrayChildren, (child:any, _index) => {
            if (isValidElement(child) && (child.type === TabItem)) {
              return (
                  <>
                    {
                      cloneElement(child as React.ReactElement<any>, {})
                    }
                  </>
              );
            }
          })}
        </ul>

        { Children.map(arrayChildren, (child:any, _index) => {
          if (isValidElement(child) && (child.type === TabItem)) {
            return (
              <div className="govuk-tabs__panel" id={child?.props.href}>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Tabs;
