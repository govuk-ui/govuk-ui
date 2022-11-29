export default interface ButtonProps {
  href?: string,
  to?: string,
  isStartButton?: boolean,
  disabled?: boolean,
  classes?: string,
  preventDoubleClick?: boolean,
  name?: string,
  type?: 'input' | 'button',
  children?: any,
}