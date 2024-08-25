import { useLocale } from "next-intl";

export function c<T = any>(value: T, translatable = true): T {
  const locale = useLocale() as keyof T;
  if (translatable) {
    const translated = value ? value[locale] : value;
    return translated as T;
  }
  return value;
}
