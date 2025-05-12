'use client';

import { useUser } from '@/contexts/UserContext';
import { Link, useRouter } from '@/navigation';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
export default function UserMenu() {
  const { user, isAuthenticated, logout, loading } = useUser();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('auth');
  const handleLogout = () => {
    logout();
    router.push('/login');
  };
  const links = [
    { label: t('profile'), href: '/profile' },
    { label: t('dashboard'), href: '/dashboard' },
  ];
  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (loading) {
    return <div className="text-sm opacity-70 loading loading-spinner"></div>;
  }

  if (!isAuthenticated) {
    return (
      <button
        onClick={() => router.push('/login')}
        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >
        {t('signIn')}
      </button>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-all duration-300"
      >
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
          {user?.name?.charAt(0).toUpperCase() || 'U'}
        </div>
        <span className="font-medium hidden sm:block">{user?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isMenuOpen ? 'rotate-180' : ''
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

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="font-medium text-gray-900">{user?.name}</p>
            <p className="text-sm text-gray-500 truncate">{user?.email}</p>
          </div>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="w-full">
                <span className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 mt-2 py-2 text-sm text-red-600 hover:bg-red-50 border-t border-gray-100"
          >
            {t('signOut')}
          </button>
        </div>
      )}
    </div>
  );
}
