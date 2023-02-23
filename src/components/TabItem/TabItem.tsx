import React from "react";
import TabItemProps from "./TabItem.types";

export const TabItem = ({
  children,
  classes,
  id,
  label,
  title,
  href,
  selected,
  attributes
}: TabItemProps) => {
  return (
    <li className={`govuk-tabs__list-item ${selected && 'govuk-tabs__list-item--selected'}`}>
      <a className="govuk-tabs__tab" href={href}>
        { children }
      </a>
    </li>
  )
}