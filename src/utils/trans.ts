export function getValueIn(value: any, locale: "en" | "ar") {
  value = value ? value : {};
  return value[locale];
}
