'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, Link } from '@/navigation';
import { useState, useRef, useEffect } from 'react';
import UserMenu from './UserMenu';
import { useUser } from '@/contexts/UserContext';

export default function Navbar() {
  const t = useTranslations('Landing');
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated } = useUser();

  const navLinks = [
    { href: `/`, label: t('nav.home') },
    { href: `/templates`, label: t('nav.templates') },
    { href: `/sections`, label: t('nav.sections') },
    { href: `/playground`, label: t('nav.playground') },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇪🇬' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset mobile language menu when main menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileLangMenuOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/`} className="flex items-center group">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-indigo-800 transition-all duration-300">
              WebBuilder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'text-gray-800 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Language Switcher */}
            <div className="relative hidden md:block" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-all duration-300"
              >
                <span className="text-xl">{currentLanguage?.flag}</span>
                <span className="font-medium">{currentLanguage?.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLangMenuOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-10">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={pathname}
                      locale={lang.code as 'en' | 'ar'}
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                        lang.code === currentLocale
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-800'
                      }`}
                    >
                      <>
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="hidden md:block">
              <UserMenu />
            </div>

            {/* Only show Get Started if not authenticated */}
            {!isAuthenticated && (
              <Link
                href={`/builder`}
                className="hidden md:block bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-800 hover:to-indigo-800 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              >
                {t('nav.get_started')}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 space-y-2 bg-white border-t">
            {/* Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-800 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile User Menu */}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <UserMenu />
            </div>

            {/* Mobile Language Switcher */}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <button
                onClick={() => setIsMobileLangMenuOpen(!isMobileLangMenuOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-lg font-medium"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{currentLanguage?.flag}</span>
                  <span>{currentLanguage?.name}</span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isMobileLangMenuOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMobileLangMenuOpen && (
                <div className="mt-1 space-y-1 pl-4">
                  {languages
                    .filter((lang) => lang.code !== currentLocale)
                    .map((lang) => (
                      <Link
                        key={lang.code}
                        href={pathname}
                        locale={lang.code as 'en' | 'ar'}
                        className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            {!isAuthenticated && (
              <div className="pt-2">
                <Link
                  href={`/builder`}
                  className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-700 text-white hover:from-blue-800 hover:to-indigo-800 transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.get_started')}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
