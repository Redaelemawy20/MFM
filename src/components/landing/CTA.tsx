'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function CTA() {
  const t = useTranslations('Landing');

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">{t('cta.title')}</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-blue-100">
          {t('cta.subtitle')}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href={`/builder`}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            {t('cta.button')}
          </Link>
          <Link
            href="#features"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
          >
            {t('cta.secondary_button')}
          </Link>
        </div>
      </div>
    </section>
  );
}
