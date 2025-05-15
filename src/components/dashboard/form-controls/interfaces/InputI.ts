import { HandleChange } from '../../../../ts/common/HandleChange';

type BaseInput = {
  name: string;
  label?: string;
  onChange?: HandleChange;
  onValidate?: HandleChange;
  error?: boolean | string;
  rest?: object;
  value?: any;
  className?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};
export interface TranslatableInput<T> {
  translatable: true;
  value: TranslatableValue<T>;
}
export interface NormalInput<T> {
  translatable?: false | null | undefined;
  value: T;
}
export default interface InputI<T = any, Tr extends boolean = false>
  extends BaseInput {
  translatable?: boolean;
  value: Tr extends true ? TranslatableValue<T> : T;
}

export interface TranslatableValue<T> {
  ar: T;
  en: T;
}
