import React from "react";
import TabItemProps from "./TabItem.types";

export const TabItem = ({
  children,
  label,
  id,
  classes,
  href,
  selected,
  attributes
}: TabItemProps) => {
  return (
    <li className={`govuk-tabs__list-item ${selected && 'govuk-tabs__list-item--selected'}`} id={id} { ...attributes}>
      <a className="govuk-tabs__tab" href={href}>
        { label }
      </a>
    </li>
  )
}

export default TabItem;