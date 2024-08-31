import { useLocale } from "next-intl";

export function useContent() {
  const locale = useLocale();
  const translate = <T = any>(value: T): T => {
    const translated = value ? value[locale as keyof T] : value;
    return translated as T;
  };
  return translate;
}
