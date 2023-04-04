export default interface ButtonProps {
  element?: 'input' | 'button' | 'a',
  name?: string,
  value?: string,
  href?: string,
  type?: 'button' | 'submit' | 'reset',
  isStartButton?: boolean,
  disabled?: boolean,
  preventDoubleClick?: boolean,
  classes?: string,
  children: any,
  attributes?: any,
}
