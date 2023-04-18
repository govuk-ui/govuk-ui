import React from "react";
import TabItemProps from "./TabItem.types";

export const TabItem = ({
  label,
  id,
  selected,
}: TabItemProps) => {
  return (
    <li className={`govuk-tabs__list-item${selected ? ' govuk-tabs__list-item--selected' : ''}`}>
      <a className="govuk-tabs__tab" href={id}>
        { label }
      </a>
    </li>
  )
}

export default TabItem;
