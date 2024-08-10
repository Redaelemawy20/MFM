import HandleChange from "../../../../ts/common/HandleChange";
export default interface CheckBoxI {
  name: string;
  label: string;
  onChange: HandleChange;
  onValidate?: HandleChange;
  value: boolean;
  error?: boolean | string;
  rest?: object;
}
