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

  useEffect(() => {
    // Dynamically import bootstrap only on the client side
    import("bootstrap").then(() => {
      console.log("Bootstrap loaded on the client-side");
    });
  }, []);

  return (
    <html lang="en">
      <body className={`body ${rubik.className} ${urbanist.className}`}>
        <Providers>
          <div id="wrapper">
            <div id="page" className="clearfix">
              <Header />
              {/* mobile sidebar navigation */}
              <MobileNavigation />
              {children}
              {/* if the route path is /home-8 then the footer will not show */}
              {path !== "/home-8" && <Footer />}
            </div>
          </div>
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
