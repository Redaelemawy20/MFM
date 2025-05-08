'use client';
import { useTranslations } from 'next-intl';
import MainTitle from '@/sections/MainTitle';
import Services from '@/sections/Services';
import StaticContent from '@/sections/StaticContent';
import Statistics from '@/sections/Statistics';
import SubPages from '@/sections/SubPages';
import About from '@/sections/About';
import AnimatedCard from '@/sections/AnimatedCard';
import Features from '@/sections/Features';
import HighlightedSection from '@/sections/HighlightedSection';
import { useState, useEffect } from 'react';
import { IconType } from '@/components/common/Icons';

// Import a subset of sections that don't require complex data structures
// Note: Footer, Nav, Hero, News, and StaffMember are excluded because they require
// more complex data that would cause type errors

export default function SectionsPage() {
  const t = useTranslations('Sections');
  const [selectedSection, setSelectedSection] = useState('mainTitle');
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Main Title Section Mock Data
  const mainTitleData = {
    mainTitle: t('availableSections'),
    caption: t('sections.description'),
  };

  // Define sections with their documentation info
  const sections = [
    {
      id: 'mainTitle',
      title: t('sectionTypes.mainTitle'),
      description:
        'A simple title component with a main title and optional caption.',
      props: '{ mainTitle: string, caption?: string }',
      example: true,
    },
    {
      id: 'services',
      title: t('sectionTypes.services'),
      description:
        'Displays service offerings with icons, titles, and descriptions.',
      props:
        '{ title: string, caption: string, cardsData: Array<{title: string, description: string, icon: IconType}> }',
      example: true,
    },
    {
      id: 'staticContent',
      title: t('sectionTypes.staticContent'),
      description: 'Displays static content with title and text.',
      props: '{ mainTitle: string, subTitle: string, lines: string[] }',
      example: true,
    },
    {
      id: 'statistics',
      title: t('sectionTypes.statistics'),
      description: 'Shows numerical statistics with icons and descriptions.',
      props:
        '{ title: string, items: Array<{icon: IconType, num: string, subtitle: string, description: string}> }',
      example: true,
    },
    {
      id: 'subPages',
      title: t('sectionTypes.subPages'),
      description: 'Navigation for sub-pages within the site.',
      props:
        '{ items: Array<{mainTitle: string, subTitle: string, lines: string[]}> }',
      example: true,
    },
    {
      id: 'about',
      title: t('sectionTypes.about'),
      description: 'About section with text and image.',
      props:
        '{ mainTitle: string, caption: string, subTitle: string, subCaption: string, list: string[], endCaption: string, viewImg: ServerImage }',
      example: true,
    },
    {
      id: 'animatedCard',
      title: t('sectionTypes.animatedCard'),
      description: 'Cards with animation effects for featuring content.',
      props:
        '{ title: string, description: string, image: string, items: Array<{title: string, description: string, icon: IconType, path: string}> }',
      example: true,
    },
    {
      id: 'features',
      title: t('sectionTypes.features'),
      description: 'Highlights key features of products or services.',
      props:
        '{ title: string, featuresItems: Array<{title: string, description: string}>, mainImg: ServerImage }',
      example: true,
    },
    {
      id: 'highlightedSection',
      title: t('sectionTypes.highlightedSection'),
      description:
        'Section with special styling to highlight important content.',
      props:
        '{ title: string, description: string, content: string, btnText: string, path: string, background: ServerImage }',
      example: true,
    },
    {
      id: 'staff',
      title: t('sectionTypes.staff'),
      description: 'Shows team members with their information and photos.',
      props: '{ data: Array<{data: StaffData, slug: string}> }',
    },
    {
      id: 'footer',
      title: t('sectionTypes.footer'),
      description: 'Page footer with contact information and links.',
      props:
        '{ title: string, paragraph: string, companyName: string, address: string, phone: string, email: string, location: {lat: number, lng: number}, column1Title: string, column2Title: string, column1Links: Array<{text: string, url: string}>, column2Links: Array<{text: string, url: string}>, socialLinks: Array<{platform: string, url: string}> }',
    },
    {
      id: 'hero',
      title: t('sectionTypes.hero'),
      description: 'Hero banner or slider for the main page header.',
      props:
        '{ items: Array<{title: string, description: string, backgroundImage: ServerImage, readMoreLink: string}> }',
    },
    {
      id: 'nav',
      title: t('sectionTypes.nav'),
      description: 'Navigation component for the site.',
      props:
        '{ data: {links: Array<{text: string, url: string}>}, logo: string }',
    },
    {
      id: 'news',
      title: t('sectionTypes.news'),
      description: 'Displays news articles with images and excerpts.',
      props: '{ data: Array<{details: NewsItem, slug: string}> }',
    },
  ];

  // Services mock data
  const servicesData = {
    title: 'Our Services',
    caption: 'What we can do for you',
    cardsData: [
      {
        title: 'Web Development',
        description: 'Custom websites for businesses',
        icon: 'FaLaptop' as IconType,
      },
      {
        title: 'Mobile Apps',
        description: 'iOS and Android applications',
        icon: 'FaPhone' as IconType,
      },
      {
        title: 'Design',
        description: 'Beautiful and functional interfaces',
        icon: 'FaGlobe' as IconType,
      },
    ],
  };

  // Static Content Section Mock Data
  const staticContentData = {
    mainTitle: 'About Us',
    subTitle: 'Our Company',
    lines: [
      'We are a company dedicated to excellence',
      'Founded in 2010',
      'Serving clients worldwide',
    ],
  };

  // Statistics Section Mock Data
  const statisticsData = {
    title: 'Our Numbers',
    items: [
      {
        icon: 'FaStar' as IconType,
        num: '100+',
        subtitle: 'Projects',
        description: 'Completed successfully',
      },
      {
        icon: 'FaUser' as IconType,
        num: '50+',
        subtitle: 'Clients',
        description: 'Happy customers',
      },
      {
        icon: 'FaCalendarAlt' as IconType,
        num: '10+',
        subtitle: 'Years',
        description: 'In business',
      },
    ],
  };

  // SubPages Section Mock Data
  const subPagesData = {
    items: [
      {
        mainTitle: 'About Us',
        subTitle: 'Learn about our company',
        lines: ['History', 'Mission', 'Values'],
      },
      {
        mainTitle: 'Services',
        subTitle: 'What we offer',
        lines: ['Web Development', 'Mobile Apps', 'Consulting'],
      },
      {
        mainTitle: 'Contact',
        subTitle: 'Get in touch',
        lines: ['Email', 'Phone', 'Office Location'],
      },
    ],
  };

  // About Section Mock Data
  const aboutData = {
    mainTitle: 'About Us',
    caption: 'Who we are',
    subTitle: 'Our Mission',
    subCaption: 'Delivering outstanding solutions',
    list: ['Quality service', 'Customer satisfaction', 'Innovative solutions'],
    endCaption: 'We strive to exceed expectations',
    viewImg: { _s: '/placeholder-image.jpg' },
  };

  // Animated Card Section Mock Data
  const animatedCardData = {
    title: 'Featured Service',
    description: 'Our most popular offering',
    image: '/placeholder-image.jpg',
    items: [
      {
        title: 'Feature 1',
        description: 'Description 1',
        icon: 'FaStar' as IconType,
        path: '/feature1',
      },
      {
        title: 'Feature 2',
        description: 'Description 2',
        icon: 'FaCheck' as IconType,
        path: '/feature2',
      },
    ],
  };

  // Features Section Mock Data
  const featuresData = {
    title: 'Our Features',
    featuresItems: [
      { title: 'Responsive Design', description: 'Works on all devices' },
      { title: 'Fast Performance', description: 'Optimized for speed' },
      { title: 'SEO Friendly', description: 'Better search rankings' },
    ],
    mainImg: { _s: '/placeholder-image.jpg' },
  };

  // Highlighted Section Mock Data
  const highlightedSectionData = {
    title: 'Special Offer',
    description: 'Limited time offer',
    content: 'Get 20% discount on all services this month',
    btnText: 'Learn More',
    path: '/contact',
    background: { _s: '/placeholder-background.jpg' },
  };

  // Get the currently selected section
  const selectedSectionInfo = sections.find((s) => s.id === selectedSection);

  // Render example section based on selection
  const renderSectionExample = () => {
    switch (selectedSection) {
      case 'mainTitle':
        return (
          <MainTitle
            data={{
              mainTitle: 'Example Title',
              caption: 'This is how captions appear below the main title',
            }}
          />
        );
      case 'services':
        return <Services data={servicesData} />;
      case 'staticContent':
        return <StaticContent data={staticContentData} />;
      case 'statistics':
        return <Statistics data={statisticsData} />;
      case 'subPages':
        return <SubPages data={subPagesData} />;
      case 'about':
        return <About data={aboutData} />;
      case 'animatedCard':
        return <AnimatedCard data={animatedCardData} />;
      case 'features':
        return <Features data={featuresData} />;
      case 'highlightedSection':
        return <HighlightedSection data={highlightedSectionData} />;
      default:
        return (
          <div className="flex items-center justify-center p-8 bg-gray-100 rounded">
            <p className="text-gray-500">
              {selectedSection === 'staff' ||
              selectedSection === 'footer' ||
              selectedSection === 'hero' ||
              selectedSection === 'nav' ||
              selectedSection === 'news'
                ? 'This section requires complex data structures and is not implemented in the preview.'
                : 'Select a section to preview'}
            </p>
          </div>
        );
    }
  };

  // Render mobile dropdown selector or desktop list
  const renderSectionSelector = () => {
    if (isMobile) {
      return (
        <div className="mb-6">
          <label
            htmlFor="section-select"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {t('sections.title')}
          </label>
          <div className="relative">
            <select
              id="section-select"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white border"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title} {section.example ? '✓' : ''}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {selectedSectionInfo?.example
              ? 'Live preview available'
              : 'Documentation only'}
          </p>
        </div>
      );
    }

    return (
      <>
        <h2 className="text-xl font-bold mb-4">{t('sections.title')}</h2>
        <p className="text-gray-600 mb-4 text-sm">
          Click on a section name to view its documentation and preview
        </p>

        <ul className="space-y-1">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`p-2 rounded cursor-pointer hover:bg-blue-50 ${
                selectedSection === section.id ? 'bg-blue-100 font-medium' : ''
              }`}
              onClick={() => setSelectedSection(section.id)}
            >
              {section.title} {section.example && '✓'}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <MainTitle data={mainTitleData} />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section List */}
        <div className="md:col-span-1 border rounded-lg shadow-md p-4 bg-white">
          {renderSectionSelector()}
        </div>

        {/* Preview Area */}
        <div className="md:col-span-2">
          <div className="bg-gray-50 border rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">
              {selectedSectionInfo?.title || 'Section Info'}
            </h2>

            {/* Section Documentation */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700">
                {selectedSectionInfo?.description}
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">
                Required Props
              </h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {selectedSectionInfo?.props}
              </pre>
            </div>

            {/* Example Section */}
            <div className="border p-6 rounded-lg bg-white shadow-md mt-6">
              <h3 className="text-lg font-semibold mb-4">
                {selectedSectionInfo?.example
                  ? 'Live Example'
                  : 'Preview Not Available'}
              </h3>
              <div className="border-t border-gray-200 pt-4">
                {renderSectionExample()}
              </div>
            </div>

            {/* <div className="mt-8 p-4 bg-blue-50 rounded-md">
              <p className="text-blue-700 text-sm">
                Note: To implement these sections with real data, refer to the
                interface definitions in the
                <code className="px-1 mx-1 bg-blue-100 rounded">
                  src/ts/interfaces
                </code>{' '}
                directory and structure your data accordingly.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
