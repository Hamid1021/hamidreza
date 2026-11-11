
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ThreeBackgroundLoader from "@/components/ThreeBackground/ThreeBackgroundLoader";

import { Providers } from "./providers";

import "../styles/index.css";

export const metadata: Metadata = {
  title: "حمیدرضا رضایی",
  description:
    "حمیدرضا رضایی، برنامه‌نویس و توسعه‌دهنده وب با تخصص در Python، Django، ASP.NET و Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="relative overflow-x-hidden bg-[#FCFCFC] dark:bg-black dark:text-blue-100">
        <ThreeBackgroundLoader />

        <Providers>
          <Header />

          <main>{children}</main>

          <Footer />

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
