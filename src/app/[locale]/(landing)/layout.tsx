import Navbar from '@/components/landing/nav';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container pt-20 mx-auto ">{children}</div>
    </>
  );
}
