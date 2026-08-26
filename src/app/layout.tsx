// This file serves as the root layout for pages outside [locale]
// Most pages should be in [locale] directory for i18n support

import type { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "F13fLSJPsCYbAcZoj3x3dm7O4aHFnPpERcEihhrUqoQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
