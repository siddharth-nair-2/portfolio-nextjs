import Navbar from "@/components/smaller-components/Navbar";
import { inter } from "./fonts";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieBanner from "@/components/smaller-components/CookieBanner";
import ReactGA from "react-ga4";

export const metadata = {
  title: "Siddharth Nair",
  description: "Siddharth Nair – Portfolio. Software Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string);

  ReactGA.send({
    hitType: "homepage",
    page: "/home",
    title: "User opened portfolio",
  });

  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-03VT9DV8WH" />
      <body className={inter.className}>
        <main className=" w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
          <Navbar />
          {children}
          <CookieBanner />
        </main>
      </body>
    </html>
  );
}
