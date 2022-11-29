
    import React from 'react';
    import FileUploadProps from './FileUpload.types';
    
    export const FileUpload = ({
      id,
      name,
      label,
      hint,
      errorMessage,
      value,
      formGroup,
      attributes,
      classes,
      describedBy,
    }: FileUploadProps) => {
      return (
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>


  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file" />
</div>
  );
    }
    
    export default FileUpload;