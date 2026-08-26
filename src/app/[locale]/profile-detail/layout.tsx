import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? {
        title: "Profile | Dr. Naoki Matsui, Institute of Science Tokyo",
        description: "Career, awards, and academic activities of Dr. Naoki Matsui, Associate Professor at Institute of Science Tokyo.",
      }
    : {
        title: "プロフィール | 松井直喜 准教授(東京科学大学)",
        description: "松井直喜准教授の経歴・受賞歴・学会活動。東京科学大学 物質理工学院 応用化学系 化学システム分野、菅野・鈴木・松井研究室。",
      };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
