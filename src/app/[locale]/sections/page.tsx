'use client';
import { useTranslations } from 'next-intl';
import Nav from '@/sections/Nav';
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
import * as PreviewData from '@/components/data/preview';
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

  // Get the currently selected section
  const selectedSectionInfo = PreviewData.sections.find(
    (s) => s.id === selectedSection
  );

  // Render example section based on selection
  const renderSectionExample = () => {
    switch (selectedSection) {
      case 'nav':
        return <Nav {...PreviewData.NavData} />;
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
        return <Services data={PreviewData.servicesData} />;
      case 'staticContent':
        return <StaticContent data={PreviewData.staticContentData} />;
      case 'statistics':
        return <Statistics data={PreviewData.statisticsData} />;
      case 'subPages':
        return <SubPages data={PreviewData.subPagesData} />;
      case 'about':
        return <About data={PreviewData.aboutData} />;
      case 'animatedCard':
        return <AnimatedCard data={PreviewData.animatedCardData} />;
      case 'features':
        return <Features data={PreviewData.featuresData} />;
      case 'highlightedSection':
        return <HighlightedSection data={PreviewData.highlightedSectionData} />;
      default:
        return (
          <div className="flex items-center justify-center p-8 bg-gray-100 rounded">
            <p className="text-gray-500">
              {selectedSection === 'staff' ||
              selectedSection === 'footer' ||
              selectedSection === 'hero' ||
              selectedSection === 'news'
                ? t('previewNotImplemented', {
                    defaultValue:
                      'This section requires complex data structures and is not implemented in the preview.',
                  })
                : t('selectSectionPrompt', {
                    defaultValue: 'Select a section to preview',
                  })}
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
            {t(selectedSectionInfo?.titleKey)}
          </label>
          <div className="relative">
            <select
              id="section-select"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white border"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              {PreviewData.sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {t(section.titleKey)} {section.example ? '✓' : ''}
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
              ? t('livePreviewAvailable', {
                  defaultValue: 'Live preview available',
                })
              : t('documentationOnly', { defaultValue: 'Documentation only' })}
          </p>
        </div>
      );
    }

    return (
      <>
        <h2 className="text-xl font-bold mb-4">{t('sections.title')}</h2>
        <p className="text-gray-600 mb-4 text-sm">
          {t('clickToView', {
            defaultValue:
              'Click on a section name to view its documentation and preview',
          })}
        </p>

        <ul className="space-y-1">
          {PreviewData.sections.map((section) => (
            <li
              key={section.id}
              className={`p-2 rounded cursor-pointer hover:bg-blue-50 ${
                selectedSection === section.id ? 'bg-blue-100 font-medium' : ''
              }`}
              onClick={() => setSelectedSection(section.id)}
            >
              {t(section.titleKey)} {section.example && '✓'}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="container mx-auto px-4  pb-8">
      {/* Custom Header instead of MainTitle - Added top padding and margin to avoid nav overlap */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white mb-10 mt-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">{t('availableSections')}</h1>
        </div>
        <p className="text-white text-opacity-90 ml-14">
          {t(selectedSectionInfo?.descriptionKey)}
        </p>
        <div className="mt-6 ml-14 flex flex-wrap gap-2">
          {PreviewData.sections
            .filter((s) => s.example)
            .map((section) => (
              <span
                key={section.id}
                className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm"
              >
                {t(section.titleKey)}
              </span>
            ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section List */}
        <div className="md:col-span-1 border rounded-lg shadow-md p-4 bg-white">
          {renderSectionSelector()}
        </div>

        {/* Preview Area */}
        <div className="md:col-span-2">
          <div className="bg-gray-50 border rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">
              {t(selectedSectionInfo?.titleKey || 'sectionInfo', {
                defaultValue: 'Section Info',
              })}
            </h2>

            {/* Section Documentation */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {t('description', { defaultValue: 'Description' })}
              </h3>
              <p className="text-gray-700">
                {t(selectedSectionInfo?.descriptionKey)}
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">
                {t('requiredProps', { defaultValue: 'Required Props' })}
              </h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {selectedSectionInfo?.props}
              </pre>
            </div>

            {/* Example Section */}
            <div className="border p-6 rounded-lg bg-white shadow-md mt-6">
              <h3 className="text-lg font-semibold mb-4">
                {selectedSectionInfo?.example
                  ? t('liveExample', { defaultValue: 'Live Example' })
                  : t('previewNotAvailable', {
                      defaultValue: 'Preview Not Available',
                    })}
              </h3>
              {/* tailwind position relative min height 40vh*/}
              <div className="relative border-t border-gray-200 pt-4 min-h-[40vh]">
                {renderSectionExample()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
