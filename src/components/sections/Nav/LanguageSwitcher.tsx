'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const t = useTranslations('Landing');
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const pathname = usePathname();
  let path = pathname;
  if (pathname.startsWith('/' + locale)) {
    path = pathname.replace(locale, otherLocale);
  } else {
    path = otherLocale + pathname;
  }
  return (
    <Link href={path} prefetch={false}>
      {t('nav.switchLanguage')}
    </Link>
  );
};

export default LanguageSwitcher;
