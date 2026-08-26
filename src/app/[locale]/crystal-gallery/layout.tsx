import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? {
        title: "Crystal Structure Gallery | Matsui Lab",
        description: "Interactive 3D gallery of crystal structures of lithium-ion, fluoride-ion, and hydride-ion conductors.",
      }
    : {
        title: "結晶構造ギャラリー | イオン伝導体の3D構造 | 松井研",
        description: "リチウムイオン伝導体・フッ化物イオン伝導体・ヒドリドイオン伝導体の結晶構造を3Dで閲覧できるギャラリー。",
      };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
