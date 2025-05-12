import { useTranslations } from 'next-intl';

export default function TopWebsite({
  website,
  title,
  badge,
  badgeColor,
}: {
  website: Website;
  title: string;
  badge: string;
  badgeColor: string;
}) {
  const t = useTranslations();
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-purple-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div
          className={`px-3 py-1 bg-${badgeColor}-100 text-${badgeColor}-800 rounded-full text-sm font-medium`}
        >
          {badge}
        </div>
      </div>

      <div className="flex items-start">
        <div className="w-12 h-12 rounded-md bg-purple-100 flex items-center justify-center text-purple-500 mr-4">
          <span className="text-2xl">{website.icon}</span>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 text-lg">{website.name}</h4>
          <p className="text-gray-500 mb-2">{website.url}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded-md">
              <span className="block text-gray-500">
                {t('dashboard.monthlyVisitors')}
              </span>
              <span className="block font-semibold text-gray-800">
                {website.numberOfVisitorsPerMonth.toLocaleString()}
              </span>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <span className="block text-gray-500">
                {t('common.category')}
              </span>
              <span className="block font-semibold text-gray-800">
                {website.category}
              </span>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <span className="block text-gray-500">{t('common.pages')}</span>
              <span className="block font-semibold text-gray-800">
                {website.numberOfPages}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
