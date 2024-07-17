import InputI from "./InputI";
export default interface SelectInputI<T extends NonNullable<any>>
  extends InputI {
  options: T[];
  valueProp?: keyof T;
  optionValue?: keyof T;
  allowNone?: boolean;
}
