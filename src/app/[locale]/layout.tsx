import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const metadata = {
    ja: {
      title: "松井直喜 | 東京科学大学 菅野鈴木研 | 全固体電池・固体イオニクス研究",
      description: "東京科学大学 菅野鈴木研 松井直喜助教。全固体電池、リチウムイオン電池、フッ化物イオン伝導体、フッ化物電池、ヒドリドイオン伝導体の研究。固体イオニクス、材料インフォマティクス、機械学習を活用した次世代電池材料開発。",
      keywords: "松井直喜, 菅野鈴木研, 東京科学大学, 全固体電池, リチウム電池, リチウムイオン電池, フッ化物イオン伝導体, フッ化物イオン導電体, フッ化物イオン, フッ化物電池, ヒドリド, ヒドリドイオン伝導体, 固体イオニクス, 電池材料, 次世代電池, 材料科学, ISCT, Institute of Science Tokyo",
      locale: "ja_JP"
    },
    en: {
      title: "Naoki Matsui | Institute of Science Tokyo | Solid-State Battery & Solid Ionics Research",
      description: "Dr. Naoki Matsui, Assistant Professor at Kanno-Suzuki Lab, Institute of Science Tokyo. Research on all-solid-state batteries, lithium-ion batteries, fluoride-ion conductors, fluoride batteries, and hydride-ion conductors.",
      keywords: "Naoki Matsui, Kanno-Suzuki Lab, Institute of Science Tokyo, solid-state battery, lithium battery, lithium-ion battery, fluoride ion conductor, fluoride battery, hydride, hydride ion conductor, solid ionics, battery materials, next-generation battery, materials science, ISCT",
      locale: "en_US"
    }
  };

  const currentLocale = locale as keyof typeof metadata;
  const meta = metadata[currentLocale] || metadata.ja;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Naoki Matsui" }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: "https://matsui-naoki.github.io",
      siteName: locale === 'ja' ? "松井直喜 | 東京科学大学" : "Naoki Matsui | Institute of Science Tokyo",
      locale: meta.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
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
    alternates: {
      languages: {
        'ja': '/',
        'en': '/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
