import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '@/components/landing/nav';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { UserProvider } from '@/contexts/UserContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Website Builder',
  description: 'Create beautiful websites with our modern website builder',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ReactQueryProvider>
          <UserProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Navbar />
              <div className="container pt-20 mx-auto ">{children}</div>
            </NextIntlClientProvider>
          </UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
