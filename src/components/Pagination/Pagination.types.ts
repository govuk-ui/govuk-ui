export default interface PaginationProps {
  children?: any,
  previous?: {
    href?: string,
    text?: string,
    labelText?: string
  },
  next?: {
    href?: string,
    text?: string,
    labelText?: string
  },
  currentPageNumber: number,
  landmarkLabel?: string,
  classes?: string,
}
