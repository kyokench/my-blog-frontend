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
  title: 'My Blog | サイト名',
  description: 'このブログは Next.js と Sanity で構築されています。',
  openGraph: {
    title: 'My Blog | サイト名',
    description: 'このブログは Next.js と Sanity で構築されています。',
    url: 'https://example.com',
    siteName: 'My Blog',
    images: [
      {
        url: 'https://luzzblog.com/ogp.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Blog | サイト名',
    description: 'このブログは Next.js と Sanity で構築されています。',
    images: ['https://example.com/ogp.png'],
  },
};

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex flex-col md:flex-row flex-grow container mx-auto p-4 gap-8">
          <main className="flex-grow md:w-3/4">
            {children}
          </main>
          <Sidebar className="md:w-1/4" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
