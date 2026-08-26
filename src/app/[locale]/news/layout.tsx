import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? {
        title: "News | Matsui Lab, Institute of Science Tokyo",
        description: "Latest news from the Kanno-Suzuki-Matsui Lab: publications, conferences, beamtime experiments, and lab events.",
      }
    : {
        title: "ニュース | 松井研(東京科学大学の電池研究室)",
        description: "菅野・鈴木・松井研究室の最新ニュース。論文掲載、学会発表、SPring-8・J-PARCでの実験、研究室イベントなど。",
      };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
