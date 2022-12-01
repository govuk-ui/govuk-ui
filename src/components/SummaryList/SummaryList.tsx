
      import React from 'react';
      import SummaryListProps from './SummaryList.types';
      
      export const SummaryList = ({
    
 rows,
 classes,
 attributes,
 }: SummaryListProps) => {
      return (
<><dl className="govuk-summary-list">
  
    
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">
          Name
        </dt>
        <dd className="govuk-summary-list__value">
          Firstname Lastname
        </dd>
        
      </div>
    
  
    
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd className="govuk-summary-list__value">
          13/08/1980
        </dd>
        
      </div>
    
  
    
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">
          Contact information
        </dt>
        <dd className="govuk-summary-list__value">
          <p className="govuk-body">
          email@email.com
        </p>
        <p className="govuk-body">
          Address line 1<br>
          Address line 2<br>
          Address line 3<br>
          Address line 4<br>
          Address line 5
        </p>
        </dd>
        
      </div>
    
  
</dl></>

        );
      }
      
      export default SummaryList;
    