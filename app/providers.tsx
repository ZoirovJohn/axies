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
import { useApollo } from "../apollo/client"; // 🔁 Adjust path as needed

// Initialize i18n if not already done
if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "kr",
      defaultNS: "common",
      lng: "kr",
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
    setMounted(true);

    // Locale setup (your existing code)
    const savedLocale = localStorage.getItem("locale");
    if (!savedLocale) localStorage.setItem("locale", "kr");
    const langToUse = savedLocale || "kr";
    if (i18n.language !== langToUse) i18n.changeLanguage(langToUse);

    // // --- NEW: Fetch user data on client ---
    // async function fetchUser() {
    //   try {
    //     // Replace with your actual fetch or Apollo query for current user
    //     const response = await fetch("/api/currentUser"); // or use Apollo client.query(...)
    //     console.log("Response:", response);

    //     if (response.ok) {
    //       const userData = await response.json();
    //       userVar(userData); // update Apollo reactive var
    //     } else {
    //       userVar(undefined); // no user
    //     }
    //   } catch (error) {
    //     console.error("Failed to fetch user data", error);
    //     userVar(undefined);
    //   }
    // }
    // fetchUser();
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
