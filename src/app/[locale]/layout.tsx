import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import AosProvider from "@/components/common/AosProvider";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            <AosProvider>{children}</AosProvider>
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
