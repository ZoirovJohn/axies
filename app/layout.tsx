"use client";
import { Rubik, Urbanist } from "next/font/google";
import Header from "./components/header";
import { Providers } from "./providers";
import Footer from "./components/footer";
import BackToTop from "./components/button/BackToTop";
import "./../public/assets/css/style.css";
import MobileNavigation from "./components/header/MobileNavigation";
import { usePathname } from "next/navigation"; // ✅ CORRECT HOOK
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import { userVar } from "@/apollo/store";
import { useReactiveVar } from "@apollo/client";

// Fonts
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--rubik-font",
});

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
  const path = usePathname(); // ✅ FIXED
  const [lang, setLang] = useState("kr");
  const user = useReactiveVar(userVar);

  useEffect(() => {
    const storedLang = localStorage.getItem("locale") || "kr";
    setLang(storedLang);

    import("bootstrap").then(() => {
      console.log("Bootstrap loaded on the client-side");
    });
  }, []);

  return (
    <html lang={lang}>
      <body className={`body ${rubik.className} ${urbanist.className}`}>
        <Providers>
          <div id="wrapper">
            <div id="page" className="clearfix">
              <Header />
              <MobileNavigation />
              {children}
              {user?.memberNick && <Chat />} {/* ✅ SAFE */}
              {path !== "/home-8" && <Footer />} {/* ✅ SAFE */}
            </div>
          </div>
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
