'use client';

import { useUser } from '@/contexts/UserContext';
import { useTranslations } from 'next-intl';
import StatCard from '@/components/builder/StatCard';
import WebsiteCard from '@/components/builder/WebsiteCard';
import TopWebsite from '@/components/builder/TopWebsite';

const websites: Website[] = [
  {
    id: 1,
    name: 'Modern E-Commerce',
    description:
      'A fully-featured e-commerce platform with user accounts, product browsing, cart functionality, and secure checkout.',
    url: 'www.modern-ecommerce.com',
    createdAt: new Date(2023, 3, 15),
    updatedAt: new Date(2023, 11, 5),
    status: 'Active',
    type: 'E-commerce',
    category: 'Retail',
    numberOfPages: 42,
    numberOfVisitors: 24890,
    numberOfVisitorsPerDay: 830,
    numberOfVisitorsPerMonth: 24900,
    icon: '🛒',
  },
  {
    id: 2,
    name: 'Portfolio Studio',
    description:
      'Professional portfolio website for a design studio showcasing their work and services with a modern, minimal aesthetic.',
    url: 'www.portfoliostudio.design',
    createdAt: new Date(2023, 1, 8),
    updatedAt: new Date(2023, 10, 22),
    status: 'Active',
    type: 'Portfolio',
    category: 'Design',
    numberOfPages: 12,
    numberOfVisitors: 5200,
    numberOfVisitorsPerDay: 173,
    numberOfVisitorsPerMonth: 5190,
    icon: '🎨',
  },
  {
    id: 3,
    name: 'Health & Wellness Hub',
    description:
      'A health and wellness platform offering articles, videos, and interactive tools to help users achieve their health goals.',
    url: 'www.wellnesshub.health',
    createdAt: new Date(2023, 5, 20),
    updatedAt: new Date(2023, 11, 18),
    status: 'Active',
    type: 'Blog',
    category: 'Health',
    numberOfPages: 87,
    numberOfVisitors: 32150,
    numberOfVisitorsPerDay: 1072,
    numberOfVisitorsPerMonth: 32160,
    icon: '🧘',
  },
  {
    id: 4,
    name: 'Tech News Portal',
    description:
      'Daily technology news, reviews, and insights covering the latest advancements in software, hardware, and digital trends.',
    url: 'www.technewsportal.io',
    createdAt: new Date(2023, 2, 12),
    updatedAt: new Date(2023, 11, 15),
    status: 'Active',
    type: 'News',
    category: 'Technology',
    numberOfPages: 215,
    numberOfVisitors: 45600,
    numberOfVisitorsPerDay: 1520,
    numberOfVisitorsPerMonth: 45600,
    icon: '📱',
  },
  {
    id: 5,
    name: 'Food Recipe Vault',
    description:
      'A collection of gourmet recipes, cooking tips, and meal planning tools for food enthusiasts and home chefs.',
    url: 'www.foodrecipevault.com',
    createdAt: new Date(2023, 7, 3),
    updatedAt: new Date(2023, 11, 8),
    status: 'Active',
    type: 'Content',
    category: 'Food',
    numberOfPages: 156,
    numberOfVisitors: 19800,
    numberOfVisitorsPerDay: 660,
    numberOfVisitorsPerMonth: 19800,
    icon: '🍲',
  },
  {
    id: 6,
    name: 'Travel Explorer',
    description:
      'Travel guides, destination reviews, and booking tools for travelers looking to explore new places around the world.',
    url: 'www.travelexplorer.world',
    createdAt: new Date(2023, 4, 25),
    updatedAt: new Date(2023, 11, 12),
    status: 'Active',
    type: 'Travel',
    category: 'Lifestyle',
    numberOfPages: 124,
    numberOfVisitors: 28350,
    numberOfVisitorsPerDay: 945,
    numberOfVisitorsPerMonth: 28350,
    icon: '✈️',
  },
  {
    id: 7,
    name: 'Financial Insights',
    description:
      'Financial news, investment strategies, and planning tools to help users make informed decisions about their money.',
    url: 'www.financialinsights.pro',
    createdAt: new Date(2023, 6, 14),
    updatedAt: new Date(2023, 10, 30),
    status: 'Maintenance',
    type: 'Financial',
    category: 'Business',
    numberOfPages: 68,
    numberOfVisitors: 15600,
    numberOfVisitorsPerDay: 520,
    numberOfVisitorsPerMonth: 15600,
    icon: '💰',
  },
  {
    id: 8,
    name: 'Education Academy',
    description:
      'Online learning platform offering courses in various subjects with interactive lessons, quizzes, and progress tracking.',
    url: 'www.educationacademy.edu',
    createdAt: new Date(2023, 8, 1),
    updatedAt: new Date(2023, 11, 20),
    status: 'Active',
    type: 'Education',
    category: 'Learning',
    numberOfPages: 183,
    numberOfVisitors: 31250,
    numberOfVisitorsPerDay: 1042,
    numberOfVisitorsPerMonth: 31260,
    icon: '🎓',
  },
  {
    id: 9,
    name: 'Pet Care Central',
    description:
      'Resources and advice for pet owners, including health information, training tips, product reviews, and community forums.',
    url: 'www.petcarecentral.com',
    createdAt: new Date(2023, 9, 5),
    updatedAt: new Date(2023, 11, 25),
    status: 'Active',
    type: 'Community',
    category: 'Pets',
    numberOfPages: 97,
    numberOfVisitors: 18400,
    numberOfVisitorsPerDay: 613,
    numberOfVisitorsPerMonth: 18390,
    icon: '🐾',
  },
  {
    id: 10,
    name: 'Fitness Tracker',
    description:
      'Fitness tracking application allowing users to set goals, log workouts, monitor progress, and connect with fitness communities.',
    url: 'www.fitnesstracker.fit',
    createdAt: new Date(2023, 0, 10),
    updatedAt: new Date(2023, 11, 1),
    status: 'Active',
    type: 'Application',
    category: 'Fitness',
    numberOfPages: 45,
    numberOfVisitors: 22750,
    numberOfVisitorsPerDay: 758,
    numberOfVisitorsPerMonth: 22740,
    icon: '💪',
  },
];

export default function DashboardPage() {
  const { user } = useUser();
  const t = useTranslations('dashboard');

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
        <p className="text-gray-600">{t('dashboardDescription')}</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Visitors"
          value={totalVisitors.toLocaleString()}
          icon="👥"
          color="border-blue-500"
        />
        <StatCard
          title="Active Websites"
          value={activeWebsites}
          icon="🌐"
          color="border-green-500"
        />
        <StatCard
          title="Total Pages"
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
          title="Most Viewed Website"
          badge="Most Viewed"
          badgeColor="blue"
        />

        {/* Most pages website card */}
        <TopWebsite
          website={mostPagesWebsite}
          title="Most Pages Website"
          badge="Most Pages"
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
