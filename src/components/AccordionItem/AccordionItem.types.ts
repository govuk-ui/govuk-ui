export default interface AccordionItem {
  children?: any,
  classes?: string,
  heading: any,
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span',
  index?: number,
  summary?: any,
  id?: string,
  expanded?: boolean,
  attributes?: any,
}