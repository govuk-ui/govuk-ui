export default interface CharacterCountProps {
  name?: string,
  id?: string,
  maxlength?: number,
  label?: any,
  textareaDescriptionText?: string,
  hint?: any,
  value?: string,
  errorMessage?: any,
  rows?: number,
  maxwords?: number,
  threshold?: number,
  charactersUnderLimitText?: any,
  charactersAtLimitText?: string,
  charactersOverLimitText?: any,
  wordsUnderLimitText?: any,
  wordsAtLimitText?: string,
  wordsOverLimitText?: any,
  classes?: string,
  attributes?: any,
  formGroup?: any,
  countMessage?: any,
  spellcheck?: boolean,
}