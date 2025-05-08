'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations('Landing');

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8"></div>
      <div className="container mx-auto px-6 py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl mb-8 text-blue-100">{t('hero.subtitle')}</p>
          <div className="flex gap-4">
            <Link
              href={`/${locale}/builder`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              {t('hero.cta')}
            </Link>
            <Link
              href="#features"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              {t('hero.learn_more')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
