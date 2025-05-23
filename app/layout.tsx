"use client";
import { Rubik, Urbanist } from "next/font/google";
import Header from "./components/header";
import { Providers } from "./providers";
import Footer from "./components/footer";
import BackToTop from "./components/button/BackToTop";
import "./../public/assets/css/style.css";
import MobileNavigation from "./components/header/MobileNavigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// rubik font
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--rubik-font",
});

// urbanist font
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--urbanist-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Ensure Korean is used as the default language
    if (i18n.language !== "kr") {
      i18n.changeLanguage("kr");
    }

    // Load Bootstrap on client side
    import("bootstrap").then(() => {
      console.log("Bootstrap loaded on the client-side");
    });
  }, [i18n]);

  return (
    <html lang={i18n.language || "kr"}>
      <body className={`body ${rubik.className} ${urbanist.className}`}>
        <Providers>
          <div id="wrapper">
            <div id="page" className="clearfix">
              <Header />
              <MobileNavigation />
              {children}
              {path !== "/home-8" && <Footer />}
            </div>
          </div>
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
