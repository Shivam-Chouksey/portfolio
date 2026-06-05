import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BackToTopButton from "@/components/Layout/BackToTopButton";
import MobileMenu from "@/components/Layout/MobileMenu";
import MenuProvider from "@/providers/MenuProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Chouksey",
  description: "Portfolio App",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <MenuProvider>
        <ThemeProvider>
          <Navbar />
          <MobileMenu />
          <main className="px-6 md:px-12 pt-30 max-w-7xl mx-auto">
            {children}
          </main>
          <Footer />
          <BackToTopButton />
        </ThemeProvider>
      </MenuProvider>
    </>
  );
}
