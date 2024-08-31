"use client;";
import { createContext, useContext } from "react";
import { IntlProvider } from "next-intl";
import { Lang } from "@/ts/common/Translatable";

const LocaleContext = createContext({});

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Lang;
  messages: any;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
