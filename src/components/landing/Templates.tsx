'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface TemplatesProps {
  locale: string;
}

export default function Templates({ locale }: TemplatesProps) {
  const t = useTranslations('Landing');

  return (
    <section id="templates" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('templates.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('templates.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((template) => (
            <div
              key={template}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {t(`templates.${template}.title`)}
              </h3>
              <p className="text-gray-600 mb-6">
                {t(`templates.${template}.description`)}
              </p>
              <Link
                href={`/${locale}/builder`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('templates.useTemplate')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
