import { locales } from "@/config";

export const getAllValuesof = (value: any) => {
  value = value ? value : {};
  return locales.map((locale) => {
    return {
      locale,
      value: value[locale],
    };
  });
};
