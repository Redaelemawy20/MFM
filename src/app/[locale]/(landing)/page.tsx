import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Templates from '@/components/landing/Templates';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';

interface PageProps {
  params: {
    locale: string;
  };
}

export default function LandingPage({ params: { locale } }: PageProps) {
  return (
    <>
      <main className="min-h-screen ">
        <Hero />
        <Features />
        <Templates />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}
