import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JBBA - Conseil & Contentieux | Droit des Affaires | Droit Penal",
  description:
    "Cabinet d'avocats a taille humaine fonde par deux entrepreneurs-avocats. Conseil et contentieux pour les entrepreneurs, societes et particuliers - en France et a l'international.",
  keywords: [
    "avocat",
    "cabinet",
    "Paris",
    "droit des affaires",
    "droit penal",
    "contentieux",
    "conseil juridique",
  ],
  authors: [{ name: "JBBA" }],
  openGraph: {
    title: "JBBA - Cabinet d'Avocats Paris",
    description:
      "Droit des Affaires & Droit Penal - Conseil et contentieux pour entrepreneurs et societes",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C2340",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmSans.variable} bg-background`}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
