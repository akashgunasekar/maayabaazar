import type { Metadata } from "next";
import { Cinzel, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { defaultMetadata, generateOrganizationSchema } from "@/lib/seo";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${manrope.variable} ${inter.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#020817] text-[#FFF8E8] font-[var(--font-inter)] selection:bg-[#C99A32] selection:text-[#020817] antialiased"
      >
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
