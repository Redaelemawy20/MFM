'use client';

import { useTranslations } from 'next-intl';

interface TestimonialsProps {
  locale: string;
}

export default function Testimonials({ locale }: TestimonialsProps) {
  const t = useTranslations('Landing');

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((testimonial) => (
            <div
              key={testimonial}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  {/* Avatar would go here */}
                </div>
                <div>
                  <h4 className="font-semibold">
                    {t(`testimonials.${testimonial}.name`)}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t(`testimonials.${testimonial}.role`)}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                {t(`testimonials.${testimonial}.content`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
