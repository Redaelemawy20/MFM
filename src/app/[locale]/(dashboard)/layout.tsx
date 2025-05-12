'use client';

import { useUser } from '@/contexts/UserContext';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading } = useUser();

  useEffect(() => {
    // If not loading and not authenticated, redirect to login
    if (!loading && !isAuthenticated) {
      redirect('/login');
    }
  }, [isAuthenticated, loading]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading loading-spinner text-indigo-600 w-12 h-12"></div>
      </div>
    );
  }

  // If authenticated, render the dashboard
  return <div className="dashboard-layout">{children}</div>;
}
