"use client";
import { ThemeProvider } from "next-themes";
import { MetaMaskProvider } from "metamask-react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { useEffect, useState } from "react";

// Initialize i18n if not already done
if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "kr",
      defaultNS: "common",
      lng: "kr", // Set Korean as default
      interpolation: {
        escapeValue: false, // React already escapes
      },
      detection: {
        order: ["localStorage", "cookie", "navigator"],
        lookupLocalStorage: "locale",
        caches: ["localStorage"],
      },
      react: {
        useSuspense: false,
      },
    });
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // After component mounts, handle i18n initialization
    setMounted(true);

    // Check localStorage, if empty initialize with Korean
    const savedLocale = localStorage.getItem("locale");
    if (!savedLocale) {
      localStorage.setItem("locale", "kr");
    }

    // Set language to Korean or user preference
    const langToUse = savedLocale || "kr";
    if (i18n.language !== langToUse) {
      i18n.changeLanguage(langToUse);
    }
  }, []);

  // Avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        themes={["is_light", "is_dark"]}
      >
        <MetaMaskProvider>{children}</MetaMaskProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
