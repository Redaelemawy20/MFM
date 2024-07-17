import { Lang } from "./Translatable";

type HandleChange = (
  target:
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
    | { name: string; value: any }
) => void;
export default HandleChange;

export type HandleTranslatableChange = (
  target:
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
    | { name: string; value: any },
  l?: Lang
) => void;
