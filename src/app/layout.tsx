// This file serves as the root layout for pages outside [locale]
// Most pages should be in [locale] directory for i18n support

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
