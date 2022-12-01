import React from "react";
import FieldsetProps from "./Fieldset.types";

export const Fieldset = ({ legend, html, describedBy, classes, role, attributes }: FieldsetProps) => {
  return (
    <>
      <fieldset className="govuk-fieldset">
        <legend className="govuk-fieldset__legend">What is your address?</legend>
      </fieldset>
    </>
  );
};

export default Fieldset;
