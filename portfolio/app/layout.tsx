import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
                {children}
            </body>
        </html>
    );
}
