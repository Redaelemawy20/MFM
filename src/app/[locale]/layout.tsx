import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/assets/imgs/logo.png" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>{children}</NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
