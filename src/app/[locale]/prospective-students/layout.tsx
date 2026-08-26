import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? {
        title: "For Prospective Students | Matsui Lab, Institute of Science Tokyo",
        description: "We are recruiting graduate students. Battery research lab with automated experiments, AI-driven materials development, and strong support for early international publications.",
      }
    : {
        title: "研究室希望の学生へ | 大学院生募集 | 松井研(東京科学大学の電池研究室)",
        description: "大学院生募集中。全固体電池・リチウムイオン電池・フッ化物電池を研究する東京科学大学の電池研究室。自動実験×AI、勉強会による学習サポート、M1からの国際学会・論文投稿など圧倒的な成長環境を用意しています。",
      };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
