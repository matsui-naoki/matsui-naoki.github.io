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
      title: "松井直喜 | 東京科学大学の電池研究室(菅野・鈴木・松井研) | 全固体電池・固体イオニクス",
      description: "東京科学大学の電池研究室・菅野・鈴木・松井研(松井直喜准教授)。全固体電池、リチウムイオン電池、フッ化物電池、次世代電池材料の研究室。固体イオニクス、材料インフォマティクス、機械学習を活用した電池研究。大学院生募集中。",
      keywords: "松井直喜, 電池研究室, 電池 研究室, 全固体電池 研究室, 次世代電池, 蓄電池, 二次電池, 大学院 電池, 松井研, 菅野・鈴木・松井研, 菅野鈴木松井研, 菅野鈴木研, 菅野研, 鈴木研, 東京科学大学, 全固体電池, リチウム電池, リチウムイオン電池, 全固体リチウムイオン電池, リチウムイオン伝導体, リチウムイオン導電体, フッ化物イオン伝導体, フッ化物イオン導電体, フッ化物イオン, フッ化物電池, フッ化物イオン電池, 全固体フッ化物電池, ヒドリド, ヒドリドイオン伝導体, ヒドリドイオン導電体, 水素化物イオン伝導体, 固体イオニクス, 電池材料, 次世代電池, 材料科学, ISCT, Institute of Science Tokyo",
      locale: "ja_JP"
    },
    en: {
      title: "Naoki Matsui | Battery Research Lab at Institute of Science Tokyo | Solid-State Batteries & Solid Ionics",
      description: "Dr. Naoki Matsui, Associate Professor at Institute of Science Tokyo (Dept. of Chemical Science and Engineering). Research on all-solid-state batteries, lithium-ion batteries, fluoride-ion conductors, fluoride batteries, and hydride-ion conductors.",
      keywords: "Naoki Matsui, battery research lab, battery laboratory, solid-state battery lab, Matsui Lab, Kanno-Suzuki-Matsui Lab, Kanno-Suzuki Lab, Kanno Lab, Suzuki Lab, Institute of Science Tokyo, solid-state battery, lithium battery, lithium-ion battery, fluoride ion conductor, fluoride-ion battery, fluoride battery, all-solid-state fluoride battery, lithium-ion conductor, hydride, hydride ion conductor, solid ionics, battery materials, next-generation battery, materials science, ISCT",
      locale: "en_US"
    }
  };

  const currentLocale = locale as keyof typeof metadata;
  const meta = metadata[currentLocale] || metadata.ja;

  return {
    metadataBase: new URL("https://matsui-naoki.github.io"),
    verification: {
      google: "F13fLSJPsCYbAcZoj3x3dm7O4aHFnPpERcEihhrUqoQ",
    },
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
      images: [
        {
          url: "/solid-state-battery.jpg",
          width: 1200,
          height: 630,
          alt: locale === 'ja' ? "全固体電池研究 - 松井研" : "All-solid-state battery research - Matsui Lab",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/solid-state-battery.jpg"],
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
      canonical: locale === 'en' ? '/en' : '/ja',
      languages: {
        'ja': '/ja',
        'en': '/en',
        'x-default': '/ja',
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
