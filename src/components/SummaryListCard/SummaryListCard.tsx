import React, { Children, cloneElement, isValidElement } from 'react'
import SummaryListCardProps from './SummaryListCard.types'
import { SummaryListActions } from '../index'

export const SummaryListCard = ({
  id,
  title,
  classes,
  children,
  ...attributes
}: SummaryListCardProps) => {
  const arrayChildren: any = Children.toArray(children)

  return (
    <div className="govuk-summary-card">
      <div className="govuk-summary-card__title-wrapper">
        <h2 className="govuk-summary-card__title">{title}</h2>
      </div>
      {Children.map(arrayChildren, (child: any, index) => {
        if (isValidElement(child) && child.type === SummaryListActions) {
          return <>{cloneElement(child as React.ReactElement<any>, {})}</>
        }
      })}
    </div>
  )
}

export default SummaryListCard
