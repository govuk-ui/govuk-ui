import React from "react";
import HintProps from "./Hint.types";

export const Hint = ({ text, html, id, classes, attributes }: HintProps) => {
  return (
    <>
      <div className="govuk-hint">
        It&#39;s on your National Insurance card, benefit letter, payslip or P60. For example, &#39;QQ 12 34 56 C&#39;.
      </div>
    </>
  );
};

export default Hint;
