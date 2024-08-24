"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const otherLocale = locale === "en" ? "ar" : "en";
  const pathname = usePathname();
  let path = pathname;
  if (pathname.startsWith("/" + locale)) {
    path = pathname.replace(locale, otherLocale);
  } else {
    path = otherLocale + pathname;
  }
  return (
    <Link href={path} prefetch={false}>
      {t("switch")}
    </Link>
  );
};

export default LanguageSwitcher;
