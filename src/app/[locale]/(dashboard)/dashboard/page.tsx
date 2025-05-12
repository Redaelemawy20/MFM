'use client';

import { useUser } from '@/contexts/UserContext';
import { useTranslations } from 'next-intl';
import StatCard from '@/components/builder/StatCard';
import WebsiteCard from '@/components/builder/WebsiteCard';
import TopWebsite from '@/components/builder/TopWebsite';
import { websites } from '@/components/builder/TempData';

export default function DashboardPage() {
  const { user } = useUser();
  const t = useTranslations('dashboard');
  const tCommon = useTranslations('common');
  // Calculate analytics
  const totalVisitors = websites.reduce(
    (sum, site) => sum + site.numberOfVisitors,
    0
  );
  const totalPages = websites.reduce(
    (sum, site) => sum + site.numberOfPages,
    0
  );
  const activeWebsites = websites.filter(
    (site) => site.status === 'Active'
  ).length;

  // Find the most viewed website
  const mostViewedWebsite = [...websites].sort(
    (a, b) => b.numberOfVisitorsPerMonth - a.numberOfVisitorsPerMonth
  )[0];

  // Find the website with most pages
  const mostPagesWebsite = [...websites].sort(
    (a, b) => Number(b.numberOfPages) - Number(a.numberOfPages)
  )[0];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {t('welcome')}, {user?.name}!
        </h1>
        <p className="text-gray-600">{t('description')}</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title={t('visitors')}
          value={totalVisitors.toLocaleString()}
          icon="👥"
          color="border-blue-500"
        />
        <StatCard
          title={t('activeWebsites')}
          value={activeWebsites}
          icon="🌐"
          color="border-green-500"
        />
        <StatCard
          title={tCommon('pages')}
          value={totalPages}
          icon="📄"
          color="border-purple-500"
        />
      </div>

      {/* Top Performing Websites Section */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {t('topPerforming')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <TopWebsite
          website={mostViewedWebsite}
          title={t('mostViewedWebsite')}
          badge={t('mostViewed')}
          badgeColor="blue"
        />

        {/* Most pages website card */}
        <TopWebsite
          website={mostPagesWebsite}
          title={t('mostPagesWebsite')}
          badge={t('mostPages')}
          badgeColor="purple"
        />
      </div>

      {/* Highlighted Websites */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {t('websiteHighlights')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Most viewed website */}
        <WebsiteCard website={mostViewedWebsite} highlight="border-blue-500" />

        {/* Most pages website */}
        <WebsiteCard website={mostPagesWebsite} highlight="border-purple-500" />

        {/* Latest updated website */}
        <WebsiteCard
          website={
            [...websites].sort(
              (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
            )[0]
          }
          highlight="border-green-500"
        />
      </div>
    </div>
  );
}
