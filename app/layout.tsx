"use client";
import { Rubik, Urbanist } from "next/font/google";
import Header from "./components/header";
import { Providers } from "./providers";
import Footer from "./components/footer";
import BackToTop from "./components/button/BackToTop";
import "./../public/assets/css/style.css";
import MobileNavigation from "./components/header/MobileNavigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import { userVar } from "@/apollo/store";
import { useReactiveVar } from "@apollo/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState("kr");
  const user = useReactiveVar(userVar);
  const path = usePathname();
  const isAdminRoute = path?.startsWith("/admin");

  useEffect(() => {
    const storedLang = localStorage.getItem("locale") || "kr";
    setLang(storedLang);

    import("bootstrap").then(() => {
      console.log("Bootstrap loaded on the client-side");
    });
  }, []);

  return (
    <html lang="kr">
      <body>
        <Providers>
          {!isAdminRoute && <Header />}
          {!isAdminRoute && <MobileNavigation />}
          <div id="wrapper">
            <div id="page" className="clearfix">
              {children}
            </div>
          </div>
          {!isAdminRoute && user?.memberNick && <Chat />}
          {!isAdminRoute && <Footer />}
          {!isAdminRoute && <BackToTop />}
        </Providers>
      </body>
    </html>
  );
}
