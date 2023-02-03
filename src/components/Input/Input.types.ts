import { HTMLAttributes } from "react";

export default interface InputProps {
  label?: any,
  id?: string,
  name?: string,
  hint?: any,
  errorMessage?: any,
  classes?: string,
  formGroup?: any,
  autocomplete?: string,
  type?: string,
  pattern?: string,
  spellcheck?: boolean,
  prefix?: any,
  suffix?: any,
  value?: string,
  describedBy?: string,
  attributes?: any,
  inputmode?: any,
  children?: any,
}
