'use client';

import { useTranslations } from 'next-intl';

interface FeaturesProps {
  locale: string;
}

export default function Features({ locale }: FeaturesProps) {
  const t = useTranslations('Landing');

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((feature) => (
            <div
              key={feature}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-blue-600">
                  {t(`features.${feature}.icon`)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {t(`features.${feature}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`features.${feature}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
