import { Lang } from "./Translatable";

export type HandleChange = (
  target:
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
    | { name: string; value: any }
) => void;

export type HandleTranslatableChange = (
  target:
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
    | { name: string; value: any },
  l?: Lang
) => void;
export type HandleChangeUpdated = (
  translatable: boolean,
  oldValue: any,
  target: { name: string; value: any },
  onChange?: HandleChange
) => void;

export type HandleFileUpload = (filename: string, file: File) => void;
export type HandleFileRemove = (filename: string) => void;
