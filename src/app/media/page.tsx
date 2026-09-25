import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllNewsArticles, newsCategoriesList } from "@/data/media";

import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Media & Press Announcements | Maayaa Bazaar Hub",
  description:
    "Official press statements, cinema announcements, and event updates directly from Maayaa Bazaar Hub.",
  alternates: {
    canonical: `${SITE_URL}/media`,
  },
  openGraph: {
    title: "Media & Press Announcements | Maayaa Bazaar Hub",
    description:
      "Official press statements, cinema announcements, and event updates directly from Maayaa Bazaar Hub.",
    url: `${SITE_URL}/media`,
    siteName: "Maayaa Bazaar Hub",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-cinematic.jpg`,
        width: 1200,
        height: 630,
        alt: "Media & Press Announcements — Maayaa Bazaar Hub",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Press Announcements | Maayaa Bazaar Hub",
    description:
      "Official press statements, cinema announcements, and event updates directly from Maayaa Bazaar Hub.",
    images: [`${SITE_URL}/images/hero-cinematic.jpg`],
  },
};

export const dynamic = "force-static";

export default async function MediaPage() {
  const articles = await getAllNewsArticles();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Media", path: "/media" },
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
        eyebrow="PRESS & COMMUNICATIONS"
        title="Media, News &amp; Announcements"
        description="Stay updated with official press statements, theatrical cinema slate announcements, and staging technical milestones directly from Maayaa Bazaar Hub."
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#B9B0BE]">
            <Link href="/" className="hover:text-[#FAF8F2] transition-colors">
              Home
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <span className="text-[#D4A72C]">Media</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#articles" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Read Latest Releases
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Press Accreditation
            </Button>
          </div>
        }
      />

      {/* 2. Media Categories & Articles */}
      <Section background="deepPurple" spacing="lg" borderBottom id="articles">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Press Archive"
            title="Official Statements &amp; Releases"
            description="All corporate publications adhere to factual operational milestones and official partner co-credits."
            size="xl"
            className="mb-14"
          />

          {/* 4 Categories Overview Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {newsCategoriesList.map((cat) => {
              const count = articles.filter((a) => a.categoryKey === cat.key).length;
              return (
                <div
                  key={cat.key}
                  className="p-4 rounded-2xl bg-[#08050D] border border-[#FAF8F2]/[0.08] flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4A72C] block">
                      Vertical
                    </span>
                    <h4 className="font-[var(--font-heading)] text-sm font-bold text-[#FAF8F2]">
                      {cat.label}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#FAF8F2]/60 bg-[#16091F] px-2 py-0.5 rounded-full border border-[#FAF8F2]/10">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="rounded-3xl bg-[#08050D] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,5,13,0.95)]"
              >
                {/* Article Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#16091F]">
                  <Image
                    src={article.image?.src || "/images/film-production.jpg"}
                    alt={article.image?.alt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#08050D]/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#D4A72C] border border-[#D4A72C]/30">
                      {article.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-[#FAF8F2]/80 bg-[#08050D]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#FAF8F2]/10">
                    <Calendar className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <time dateTime={article.isoDate}>{article.publishDate}</time>
                  </div>
                </div>

                {/* Content Dossier */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-[#FAF8F2] group-hover:text-[#F4D76A] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FAF8F2]/[0.06] flex items-center justify-between">
                    <Link
                      href={`/media/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A72C] hover:text-[#F4D76A] transition-colors"
                    >
                      <span>Read Full Statement</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-mono text-[#FAF8F2]/50">
                      Official Press Release
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* 3. Press Liaison Information */}
      <Section background="midnight" spacing="lg" borderBottom>
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#16091F] via-[#08050D] to-[#16091F] border border-[#D4A72C]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(8,5,13,0.9)]">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08050D] border border-[#D4A72C]/30 text-xs font-mono text-[#D4A72C]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4A72C]" />
                <span>Media Accreditation Desk</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FAF8F2]">
                Press Inquiries &amp; Editorial Access
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
                Journalists, film critics, broadcast outlets, and digital publications seeking official press kits, high-resolution visual assets, or interview schedules can contact our communications desk.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="mailto:filmmakerram@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A72C] text-[#08050D] font-bold text-xs font-mono transition-all hover:bg-[#F4D76A] shadow-[0_0_20px_rgba(212,167,44,0.3)]"
              >
                <Mail className="w-4 h-4" />
                <span>filmmakerram@gmail.com</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
