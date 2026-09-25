import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Film,
  Music,
  Sparkles,
  Building2,
  Trophy,
  TrendingUp,
  Users,
  Globe,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Send,
  Boxes,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllServices, getServiceBySlug } from "@/data/services";

import { SITE_URL, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Maayaa Bazaar Hub",
    };
  }

  const canonicalUrl = `${SITE_URL}/services/${service.slug}`;
  const imageUrl = service.image?.src
    ? service.image.src.startsWith("http")
      ? service.image.src
      : `${SITE_URL}${service.image.src}`
    : `${SITE_URL}/images/hero-cinematic.jpg`;

  return {
    title: `${service.title} | Maayaa Bazaar Hub`,
    description: service.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | Maayaa Bazaar Hub`,
      description: service.shortDescription,
      url: canonicalUrl,
      siteName: "Maayaa Bazaar Hub",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: service.image?.alt || service.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Maayaa Bazaar Hub`,
      description: service.shortDescription,
      images: [imageUrl],
    },
  };
}

const iconMap: Record<string, React.ReactNode> = {
  Film: <Film className="w-5 h-5 text-[#D4A72C]" />,
  Music: <Music className="w-5 h-5 text-[#D4A72C]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#D4A72C]" />,
  Building2: <Building2 className="w-5 h-5 text-[#D4A72C]" />,
  Trophy: <Trophy className="w-5 h-5 text-[#D4A72C]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#D4A72C]" />,
  Users: <Users className="w-5 h-5 text-[#D4A72C]" />,
  Globe: <Globe className="w-5 h-5 text-[#D4A72C]" />,
  Layers: <Layers className="w-5 h-5 text-[#D4A72C]" />,
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = await getAllServices();
  // Contextually pick 3 related services (excluding current)
  const relatedServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const serviceSchema = generateServiceSchema({
    title: service.title,
    slug: service.slug,
    description: service.shortDescription,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      {/* Service & Breadcrumb Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. HERO */}
      <PageHero
        eyebrow={`PRODUCTION VERTICAL • ${service.tagline.toUpperCase()}`}
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#B9B0BE]">
            <Link href="/" className="hover:text-[#FAF8F2] transition-colors">
              Home
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <Link href="/services" className="hover:text-[#FAF8F2] transition-colors">
              Services
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <span className="text-[#D4A72C]">{service.title}</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={`/contact?service=${service.slug}`}
              variant="primary"
              size="md"
              icon={<Send className="w-4 h-4" />}
            >
              Inquire About This Service
            </Button>
            <Button href="/services" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
              All Services
            </Button>
          </div>
        }
      />

      {/* 2. INTRODUCTION & VISUAL SHOWCASE */}
      <Section background="deepPurple" spacing="lg" borderBottom id="introduction">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden bg-[#08050D] border border-[#FAF8F2]/10 shadow-[0_20px_50px_rgba(8,5,13,0.9)] group">
                {service.image && (
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-transparent to-transparent opacity-60" />

                {service.image?.caption && (
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#08050D]/80 backdrop-blur-md border border-[#FAF8F2]/10 text-xs text-[#FAF8F2]/90 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4A72C] shrink-0" />
                    <span>{service.image.caption}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Introduction Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#08050D] border border-[#D4A72C]/30 flex items-center justify-center">
                  {iconMap[service.iconName] || <Film className="w-5 h-5 text-[#D4A72C]" />}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A72C] block">
                    Discipline Overview
                  </span>
                  <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[#FAF8F2]">
                    Operational Scope &amp; Rigor
                  </h2>
                </div>
              </div>

              {service.fullDescription.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#B9B0BE] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="p-4 rounded-2xl bg-[#08050D] border border-[#FAF8F2]/[0.08] flex items-center gap-3 text-xs text-[#FAF8F2]/80">
                <ShieldCheck className="w-4 h-4 text-[#D4A72C] shrink-0" />
                <span>
                  Delivered under strict client confidentiality, transparent milestones, and international safety compliance.
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 3. SERVICE CAPABILITIES */}
      <Section background="midnight" spacing="lg" borderBottom id="capabilities">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Technical Specifications"
            title="Service Capabilities"
            description="Granular technical proficiencies, certified infrastructure, and specialized workflows dedicated to this vertical."
            size="xl"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-2xl bg-[#16091F]/50 border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 transition-all flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#08050D] border border-[#D4A72C]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A72C]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#FAF8F2]/40 uppercase tracking-wider block">
                    Capability 0{cIdx + 1}
                  </span>
                  <p className="text-sm font-semibold text-[#FAF8F2] group-hover:text-[#F4D76A] transition-colors leading-relaxed">
                    {cap}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* 4. RELEVANT CATEGORIES & DELIVERABLES */}
      {service.deliverables && (
        <Section background="deepPurple" spacing="lg" borderBottom id="deliverables">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Outputs & Formats"
              title="Deliverables & Formats"
              description="Primary outputs, production scopes, and event execution tiers under this vertical."
              size="lg"
              className="mb-10"
            />

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.deliverables.map((deliv, dIdx) => (
                <div
                  key={dIdx}
                  className="p-5 rounded-2xl bg-[#08050D] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/30 transition-all flex flex-col justify-between"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#16091F] border border-[#D4A72C]/20 flex items-center justify-center text-[#D4A72C] mb-3">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4A72C] uppercase tracking-wider block mb-1">
                      Tier 0{dIdx + 1}
                    </span>
                    <h4 className="font-[var(--font-heading)] text-sm font-bold text-[#FAF8F2]">
                      {deliv}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>
      )}

      {/* 5. CTA SECTION */}
      <Section background="midnight" spacing="lg" borderBottom id="inquire">
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-r from-[#16091F] via-[#08050D] to-[#16091F] border border-[#D4A72C]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_24px_64px_rgba(8,5,13,0.95)]">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4A72C] block">
                Production Engagement
              </span>
              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[#FAF8F2]">
                Plan a {service.title} Project with Our Team
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
                Connect directly with our creative directors and line producers. We evaluate project briefs, technical riders, and schedules with strict turnaround times.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                href={`/contact?service=${service.slug}`}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Inquire For This Service
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 6. RELATED SERVICES */}
      <Section background="deepPurple" spacing="lg" id="related-services">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Complementary Verticals"
              title="Related Services"
              description="Explore complementary creative and production pillars often combined for integrated delivery."
              size="lg"
            />

            <Button href="/services" variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              View All 9 Pillars
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.slug}`}
                className="rounded-2xl bg-[#08050D] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_16px_36px_rgba(8,5,13,0.9)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#16091F]">
                  {rel.image && (
                    <Image
                      src={rel.image.src}
                      alt={rel.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#08050D]/80 backdrop-blur-md border border-[#D4A72C]/30 flex items-center justify-center">
                    {iconMap[rel.iconName] || <Film className="w-4 h-4 text-[#D4A72C]" />}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4A72C] uppercase tracking-wider block mb-1">
                      {rel.tagline}
                    </span>
                    <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FAF8F2] group-hover:text-[#F4D76A] transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#B9B0BE] leading-relaxed line-clamp-2 mt-1">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#FAF8F2]/[0.06] flex items-center justify-between text-xs font-semibold text-[#D4A72C]">
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
