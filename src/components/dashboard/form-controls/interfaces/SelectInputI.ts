import InputI from './InputI';
export default interface SelectInputProps<T> extends Omit<InputI<T>, 'value'> {
  value?: T[keyof T];
  options: T[];
  valueProp?: keyof T;
  optionValue?: keyof T;
  className?: string;
  placeholder?: string;
  required?: boolean;
}
