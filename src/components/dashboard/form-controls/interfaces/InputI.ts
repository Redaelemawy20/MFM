import HandleChange from "../../../../ts/common/HandleChange";
export default interface InputI {
  name: string;
  label: string;
  onChange: HandleChange;
  onValidate?: HandleChange;
  value: string | undefined | number;
  error?: boolean | string;
  rest?: object;
}
