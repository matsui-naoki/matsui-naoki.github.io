import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'en'
    ? {
        title: "Access & Contact | Matsui Lab, Suzukakedai Campus",
        description: "Directions to Building G1, Suzukakedai Campus, Institute of Science Tokyo, and contact information for the Matsui Lab.",
      }
    : {
        title: "アクセス・連絡先 | 松井研(東京科学大学すずかけ台キャンパス)",
        description: "東京科学大学すずかけ台キャンパス G1棟への交通アクセス、研究室見学のご案内、連絡先。",
      };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
