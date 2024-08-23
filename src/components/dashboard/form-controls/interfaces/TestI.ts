import HandleChange from "@/ts/common/HandleChange";

export type TestI = TranslatableInput | NormalInput;
type Base = {
  name: string;
  label: string;
  // onChange: HandleChange
  parent?: any;
  rows: number;
};
interface TranslatableInput extends Base {
  translatable: true;
  value: {
    ar: any;
    en: any;
  };
}
interface NormalInput extends Base {
  translatable?: false | null | undefined;
  value: any;
}
