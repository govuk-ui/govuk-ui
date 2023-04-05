export default interface RadiosProps {
  /** String to prefix ID for each radio item if no ID is specified on each item. If idPrefix is not passed, fallback to using the name attribute instead. */
  idPrefix?: string,
  /** Name attribute for each radio item. */
  name?: string,
  children?: any,
  /** Classes to add to the radio container. */
  classes?: string,
  /** The value for the radio which should be checked when the page loads. Use this as an alternative to setting the checked option on each individual item. */
  value?: any,
  /** Options for the error message component. The error message component will not display if you use a falsy value for errorMessage, for example false or null. */
  errorMessage?: any,
  /** HTML attributes (for example data attributes) to add to the radio input tag. */
  attributes?: any,
}
