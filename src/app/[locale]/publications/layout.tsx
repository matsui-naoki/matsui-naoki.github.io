import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? {
        title: "Publications | Matsui Lab, Institute of Science Tokyo",
        description: "Publication list of Dr. Naoki Matsui: solid-state batteries, lithium-ion and fluoride-ion conductors in Science, JACS, Chem. Mater., and more.",
      }
    : {
        title: "研究業績・論文リスト | 松井研(東京科学大学の電池研究室)",
        description: "松井直喜准教授の論文リスト。Science、JACS、Chem. Mater.等に掲載された全固体電池・リチウムイオン電池・フッ化物電池・イオン伝導体の研究成果。",
      };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
