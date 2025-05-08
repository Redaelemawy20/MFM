import { NextUIProvider } from '@nextui-org/react';
import AosProvider from '@/components/common/AosProvider';

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <AosProvider>{children}</AosProvider>
    </NextUIProvider>
  );
}
