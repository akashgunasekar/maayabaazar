import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  CheckCircle2,
  Sliders,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllServices } from "@/data/services";

import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Production Verticals & Services | Maayaa Bazaar Hub",
  description:
    "Explore the 9 creative media and entertainment verticals of Maayaa Bazaar Hub: Cinema Production, Live Music, Film Events, Corporate Conclaves, Awards, Digital Promotion, Talent Management, Global Projects, and Technical Staging.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Production Verticals & Services | Maayaa Bazaar Hub",
    description:
      "Explore the 9 creative media and entertainment verticals of Maayaa Bazaar Hub: Cinema Production, Live Music, Film Events, Corporate Conclaves, Awards, Digital Promotion, Talent Management, Global Projects, and Technical Staging.",
    url: `${SITE_URL}/services`,
    siteName: "Maayaa Bazaar Hub",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-cinematic.jpg`,
        width: 1200,
        height: 630,
        alt: "Maayaa Bazaar Hub Services",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Verticals & Services | Maayaa Bazaar Hub",
    description:
      "Explore the 9 creative media and entertainment verticals of Maayaa Bazaar Hub: Cinema Production, Live Music, Film Events, Corporate Conclaves, Awards, Digital Promotion, Talent Management, Global Projects, and Technical Staging.",
    images: [`${SITE_URL}/images/hero-cinematic.jpg`],
  },
};

export const dynamic = "force-static";

const iconMap: Record<string, React.ReactNode> = {
  Film: <Film className="w-5 h-5 text-[#C99A32]" />,
  Music: <Music className="w-5 h-5 text-[#C99A32]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#C99A32]" />,
  Building2: <Building2 className="w-5 h-5 text-[#C99A32]" />,
  Trophy: <Trophy className="w-5 h-5 text-[#C99A32]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#C99A32]" />,
  Users: <Users className="w-5 h-5 text-[#C99A32]" />,
  Globe: <Globe className="w-5 h-5 text-[#C99A32]" />,
  Layers: <Layers className="w-5 h-5 text-[#C99A32]" />,
};

export default async function ServicesPage() {
  const services = await getAllServices();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="CREATIVE CAPABILITIES & VERTICALS"
        title="Our Production & Entertainment Services"
        description="Maayaa Bazaar Hub operates nine integrated service pillars across cinema production, high-capacity live concerts, corporate activations, digital brand media, and cross-border projects."
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#C9C4B8]">
            <Link href="/" className="hover:text-[#FFF8E8] transition-colors">
              Home
            </Link>
            <span className="text-[#FFF8E8]/30">/</span>
            <span className="text-[#C99A32]">Services</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Initiate Project Inquiry
            </Button>
            <Button href="/projects" variant="secondary" size="md">
              View Production Slate
            </Button>
          </div>
        }
      />

      {/* 2. Services Grid - Data-Driven */}
      <Section background="deepPurple" spacing="lg" borderBottom id="all-services">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Nine Core Disciplines"
            title="Explore Our Comprehensive Capabilities"
            description="Every vertical is backed by specialized equipment, seasoned production directors, and disciplined logistical governance."
            size="xl"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <FadeIn key={service.id} direction="up" delay={(idx % 6) * 75} duration={600}>
                <div
                  className="rounded-3xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 overflow-hidden flex flex-col justify-between group transition-all duration-400 hover-lift glow-gold-hover h-full"
                >
                  {/* Visual Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06152F]">
                    {service.image && (
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) will-change-transform group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80" />

                    {/* Icon & Pillar Number */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-[#020817]/90 backdrop-blur-md border border-[#C99A32]/30 flex items-center justify-center">
                        {iconMap[service.iconName] || <Film className="w-4 h-4 text-[#C99A32]" />}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-[#FFF8E8]/80 bg-[#020817]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#FFF8E8]/10">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="gold" size="sm">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-[#F2D477] uppercase tracking-wider block">
                        {service.tagline}
                      </span>

                      <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </div>

                  {/* Deliverables Tags */}
                  {service.deliverables && (
                    <div className="pt-3 border-t border-[#FFF8E8]/[0.06] space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFF8E8]/50 block">
                        Deliverables &amp; Formats
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.deliverables.slice(0, 3).map((deliv, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-2 py-0.5 rounded-md bg-[#06152F] text-[10px] font-mono text-[#C99A32] border border-[#C99A32]/20"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#FFF8E8]/[0.06]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#C99A32] group-hover:text-[#F2D477] transition-colors"
                    >
                      <span>Explore Technical Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          </div>
        </FadeIn>
      </Section>

      {/* 3. Assurance & Operational Standards Banner */}
      <Section background="midnight" spacing="lg" borderBottom>
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#06152F] via-[#020817] to-[#06152F] border border-[#C99A32]/30 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C99A32] block">
                Turnkey Single-Window Delivery
              </span>
              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FFF8E8]">
                End-to-End Governance from Concept to Standing Ovation
              </h3>
              <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
                Whether you need turnkey camera packages for a feature film, 360° spatial acoustics for a stadium concert, or red carpet protocol for a televised awards gala, we eliminate vendor fragmentation and ensure unified accountability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Button href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Request Technical Proposal
              </Button>
              <Button href="/about" variant="secondary" size="md">
                Our Creative Methodology
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
