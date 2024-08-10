import React from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import HandleChange from "../../../../ts/common/HandleChange";
import InputI from "./InputI";
import TextAreaI from "./TextAreaI";
import MultiPointInterface from "./MultiPointInputI";
import ImageUploadPerview from "../ImageUploadPerview";
import ImageUploadPerviewI from "./ImageUploadPerviewI";
import CheckBoxI from "./CheckBoxI";

export default interface MuiAccordionDetails<T, K extends keyof T> {
  childs: (item: T) => Partial<{
    [key in keyof T]: ChildFunction;
  }>;
  name: string;
  titleProp: K;
  value: T[];
  onValidate?: HandleChange;
  error?: string | null;
  onChange: HandleChange;
  onDelete?: (i: number) => void;
}
export interface HasTitleAndValue {
  title: string;
  value: any;
}
export type ChildFunction = (
  props: (
    | InputI
    | TextAreaI
    | MultiPointInterface
    | ImageUploadPerviewI
    | MuiAccordionDetails<any, any>
    | CheckBoxI
  ) & {
    index: number;
  }
) => React.ReactElement<
  typeof Input | typeof TextArea | typeof ImageUploadPerview
>;
