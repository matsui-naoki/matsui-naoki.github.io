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
  title: "松井直喜 | 東京科学大学 菅野鈴木研 | 全固体電池・固体イオニクス研究",
  description: "東京科学大学 菅野鈴木研 松井直喜助教。全固体電池、リチウムイオン電池、フッ化物イオン伝導体、フッ化物電池、ヒドリドイオン伝導体の研究。固体イオニクス、材料インフォマティクス、機械学習を活用した次世代電池材料開発。",
  keywords: "松井直喜, 菅野鈴木研, 東京科学大学, 全固体電池, リチウム電池, リチウムイオン電池, フッ化物イオン伝導体, フッ化物イオン導電体, フッ化物イオン, フッ化物電池, ヒドリド, ヒドリドイオン伝導体, 固体イオニクス, 電池材料, 次世代電池, 材料科学, ISCT, Institute of Science Tokyo",
  authors: [{ name: "Naoki Matsui" }],
  openGraph: {
    title: "松井直喜 | 東京科学大学 菅野鈴木研",
    description: "全固体電池・固体イオニクス研究の最前線。次世代電池材料の開発を通じて持続可能な社会の実現を目指します。",
    url: "https://matsui-naoki.github.io",
    siteName: "松井直喜 | 東京科学大学",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "松井直喜 | 東京科学大学",
    description: "全固体電池・固体イオニクス研究",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
