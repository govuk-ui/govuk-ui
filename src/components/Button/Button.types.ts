export default interface ButtonProps {
  href?: string,
  to?: string,
  isStartButton?: boolean,
  disabled?: boolean,
  className?: string,
  preventDoubleClick?: boolean,
  name?: string,
  type?: 'input' | 'button',
  children: any,
}