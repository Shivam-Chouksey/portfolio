import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import MobileBottomNav from "@/components/Layout/MobileBottomNav";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable} `}>
      <body className="h-full flex flex-col min-h-screen hero-pattern transition-colors duration-300 pb-[4.75rem] md:pb-0 antialiased">
        <MenuProvider>
          <ThemeProvider>
            <Navbar />
            <MobileMenu />
            <MobileBottomNav />
            <main className="px-6 md:px-12 pt-30 max-w-7xl mx-auto">
              {children}
            </main>
            <Footer />
            <BackToTopButton />
          </ThemeProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
