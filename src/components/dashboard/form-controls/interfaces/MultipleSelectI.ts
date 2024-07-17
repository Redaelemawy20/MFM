import { ReactNode } from "react";
// export default interface SelectGroupI {
//   label: string;
//   error: boolean | string;
//   items: { id: number; name: string; description: string; checked: boolean }[];
//   onToggle: (id: number) => void;

import HandleChange from "../../../../ts/common/HandleChange";

// }
export default interface SelectGroupI<T, I extends Selectable> {
  label?: string;
  name: keyof T;
  error?: boolean | string;
  imageProp?: keyof I;
  valueProp?: keyof I;
  values: I[];
  tableHead?: ReactNode[];
  onToggle: HandleChange;
  afterToggle?: (id: number, checked: boolean) => void;
  renderValue: (item: I) => ReactNode[] | ReactNode;
  onValidate?: HandleChange;
}
export interface Selectable {
  id?: number;
  checked?: boolean;
  // nameValue?: string;
}
