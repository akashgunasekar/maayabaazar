import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  Mail,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllNewsArticles, getNewsArticleBySlug } from "@/data/media";
import { SITE_URL, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface MediaDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getAllNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: MediaDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Maayaa Bazaar Hub",
    };
  }

  const canonicalUrl = `${SITE_URL}/media/${article.slug}`;
  const imageUrl = article.image?.src
    ? article.image.src.startsWith("http")
      ? article.image.src
      : `${SITE_URL}${article.image.src}`
    : `${SITE_URL}/images/hero-cinematic.jpg`;

  return {
    title: `${article.title} | Maayaa Bazaar Hub`,
    description: article.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | Maayaa Bazaar Hub`,
      description: article.summary,
      url: canonicalUrl,
      siteName: "Maayaa Bazaar Hub",
      type: "article",
      publishedTime: article.isoDate,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Maayaa Bazaar Hub`,
      description: article.summary,
      images: [imageUrl],
    },
  };
}

export default async function MediaDetailPage({ params }: MediaDetailPageProps) {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getAllNewsArticles();
  const otherArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const articleSchema = generateArticleSchema({
    title: article.title,
    slug: article.slug,
    summary: article.summary,
    publishDate: article.publishDate,
    isoDate: article.isoDate,
    image: article.image?.src,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Media", path: "/media" },
    { name: article.title, path: `/media/${article.slug}` },
  ]);

  return (
    <>
      {/* Article & Breadcrumb Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        badge={
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#16091F] text-xs font-mono text-[#D4A72C] border border-[#D4A72C]/30">
              {article.categoryLabel}
            </span>
            <span className="text-xs font-mono text-[#B9B0BE] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4A72C]" />
              <time dateTime={article.isoDate}>{article.publishDate}</time>
            </span>
          </div>
        }
        title={article.title}
        description={article.summary}
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#B9B0BE]">
            <Link href="/" className="hover:text-[#FAF8F2] transition-colors">
              Home
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <Link href="/media" className="hover:text-[#FAF8F2] transition-colors">
              Media
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <span className="text-[#D4A72C] line-clamp-1">{article.title}</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/media" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
              Back to All Releases
            </Button>
            <a
              href="mailto:filmmakerram@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16091F] border border-[#FAF8F2]/10 text-xs font-mono text-[#FAF8F2] hover:border-[#D4A72C]/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>Contact Press Desk</span>
            </a>
          </div>
        }
      />

      {/* 2. Article Body & Visual Asset */}
      <Section background="deepPurple" spacing="lg" borderBottom>
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Visual Image */}
            {article.image && (
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#08050D] border border-[#FAF8F2]/10 shadow-[0_20px_50px_rgba(8,5,13,0.9)]">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-transparent to-transparent opacity-60" />

                {article.image.caption && (
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#08050D]/85 backdrop-blur-md border border-[#FAF8F2]/10 text-xs text-[#FAF8F2]/90 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4A72C] shrink-0" />
                    <span>{article.image.caption}</span>
                  </div>
                )}
              </div>
            )}

            {/* Article Content Paragraphs */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#08050D] border border-[#FAF8F2]/[0.08] space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4A72C] block">
                Official Statement Text
              </span>

              {article.content.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#B9B0BE] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Attribution Signature */}
              <div className="pt-6 border-t border-[#FAF8F2]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#FAF8F2]/60">
                <div>
                  <span className="block text-[#FAF8F2] font-bold">Maayaa Bazaar Hub</span>
                  <span>Corporate Communications &amp; Press Bureau</span>
                </div>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 3. Related Releases */}
      {otherArticles.length > 0 && (
        <Section background="midnight" spacing="lg">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto space-y-8">
              <SectionHeading
                eyebrow="More Releases"
                title="Related Press Statements"
                size="lg"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/media/${rel.slug}`}
                    className="p-6 rounded-2xl bg-[#16091F]/40 border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 space-y-3 group transition-all"
                  >
                    <div className="flex items-center justify-between text-xs text-[#B9B0BE]">
                      <span className="text-[#D4A72C] font-mono">{rel.categoryLabel}</span>
                      <time dateTime={rel.isoDate}>{rel.publishDate}</time>
                    </div>

                    <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FAF8F2] group-hover:text-[#F4D76A] transition-colors leading-snug">
                      {rel.title}
                    </h4>

                    <p className="text-xs text-[#B9B0BE] line-clamp-2">
                      {rel.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </Section>
      )}
    </>
  );
}
