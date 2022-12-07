import React, {HTMLAttributes} from "react";

export default interface RadioItemProps {
  id?: string,
  name?: string,
  key?: string,
  divider?: boolean,
  value?: string,
  children?: any,
  classes?: string,
  attributes?: any,
}
