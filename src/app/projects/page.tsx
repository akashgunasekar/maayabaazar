import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { ProjectsClientView } from "@/components/projects/ProjectsClientView";

import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Production Slate & Projects | Maayaa Bazaar Hub",
  description:
    "Explore active theatrical cinema slates, concert tours, and entertainment productions produced and managed by Maayaa Bazaar Hub.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Production Slate & Projects | Maayaa Bazaar Hub",
    description:
      "Explore active theatrical cinema slates, concert tours, and entertainment productions produced and managed by Maayaa Bazaar Hub.",
    url: `${SITE_URL}/projects`,
    siteName: "Maayaa Bazaar Hub",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-cinematic.jpg`,
        width: 1200,
        height: 630,
        alt: "Production Slate & Projects — Maayaa Bazaar Hub",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Slate & Projects | Maayaa Bazaar Hub",
    description:
      "Explore active theatrical cinema slates, concert tours, and entertainment productions produced and managed by Maayaa Bazaar Hub.",
    images: [`${SITE_URL}/images/hero-cinematic.jpg`],
  },
};

export const dynamic = "force-static";

export default function ProjectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]);

  return (
    <>
      {/* Breadcrumb Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="PRODUCTION SLATE & PORTFOLIO"
        title="Our Production Projects"
        description="A curated overview of active feature film productions, completed stadium concert tours, and major entertainment initiatives managed by Maayaa Bazaar Hub."
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#B9B0BE]">
            <Link href="/" className="hover:text-[#FAF8F2] transition-colors">
              Home
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <span className="text-[#D4A72C]">Projects</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Inquire For Co-Productions
            </Button>
            <Button href="/services" variant="secondary" size="md">
              Our Capabilities
            </Button>
          </div>
        }
      />

      {/* 2. Interactive Client Filter & Coming Soon State */}
      <Suspense
        fallback={
          <div className="min-h-[50vh] bg-[#16091F] flex items-center justify-center">
            <span className="font-mono text-xs text-[#D4A72C]">Loading Portfolio Archive...</span>
          </div>
        }
      >
        <ProjectsClientView />
      </Suspense>
    </>
  );
}
