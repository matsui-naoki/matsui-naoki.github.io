import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? {
        title: "Research | All-Solid-State, Lithium-Ion & Fluoride Batteries | Matsui Lab",
        description: "Research on lithium-ion conductors, fluoride-ion conductors, hydride-ion conductors, and machine learning for next-generation battery materials at Institute of Science Tokyo.",
      }
    : {
        title: "研究内容 | 全固体電池・リチウムイオン電池・フッ化物電池 | 松井研(東京科学大学)",
        description: "リチウムイオン伝導体、フッ化物イオン伝導体、ヒドリドイオン伝導体、機械学習・ハイスループット合成による次世代電池材料の研究内容。全固体リチウムイオン電池・フッ化物イオン電池(フッ化物電池)の実現に向けた材料開発を行う研究室です。",
      };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
