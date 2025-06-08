"use client";
import { ThemeProvider } from "next-themes";
import { MetaMaskProvider } from "metamask-react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import { getJwtToken, updateUserInfo } from "./(auth)";

// ✅ Init i18n on first load
if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "kr",
      lng: "kr", // Always use default first
      defaultNS: "common",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "cookie", "navigator"],
        lookupLocalStorage: "locale",
        caches: ["localStorage"],
      },
      react: { useSuspense: false },
    });
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const client = useApollo(null);

  useEffect(() => {
    // ✅ Fix: Always read and apply the stored locale from localStorage
    const savedLocale =
      typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    const langToUse = savedLocale || "kr";

    if (i18n.language !== langToUse) {
      i18n.changeLanguage(langToUse);
    }

    if (!savedLocale) {
      localStorage.setItem("locale", "kr");
    }

    // Auth token
    const token = getJwtToken();
    if (token) {
      updateUserInfo(token);
    }

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          themes={["is_light", "is_dark"]}
        >
          <MetaMaskProvider>{children}</MetaMaskProvider>
        </ThemeProvider>
      </I18nextProvider>
    </ApolloProvider>
  );
}
