import { HandleChange } from "../../../../ts/common/HandleChange";

type BaseInput = {
  name: string;
  label: string;
  onChange?: HandleChange;
  onValidate?: HandleChange;
  error?: boolean | string;
  rest?: object;
};
export interface TranslatableInput<T> {
  translatable: true;
  value: TranslatableValue<T>;
}
export interface NormalInput<T> {
  translatable?: false | null | undefined;
  value: T;
}
type InputI<T> = BaseInput & (TranslatableInput<T> | NormalInput<T>);
export default InputI;

export interface TranslatableValue<T> {
  ar: T;
  en: T;
}
