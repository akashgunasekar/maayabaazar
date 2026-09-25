import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Film,
  Tv,
  Radio,
  Music,
  Users,
  Sparkles,
  Briefcase,
  Building2,
  Layers,
  Globe,
  Newspaper,
  ArrowRight,
  ShieldCheck,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industry Partners & Alliances | Maayaa Bazaar Hub",
  description:
    "Explore Maayaa Bazaar Hub's strategic alliance frameworks across 11 verified entertainment, media, corporate, and production sectors.",
  alternates: {
    canonical: `${SITE_URL}/partners`,
  },
  openGraph: {
    title: "Industry Partners & Alliances | Maayaa Bazaar Hub",
    description:
      "Explore Maayaa Bazaar Hub's strategic alliance frameworks across 11 verified entertainment, media, corporate, and production sectors.",
    url: `${SITE_URL}/partners`,
    siteName: "Maayaa Bazaar Hub",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-cinematic.jpg`,
        width: 1200,
        height: 630,
        alt: "Industry Partners & Alliances — Maayaa Bazaar Hub",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Partners & Alliances | Maayaa Bazaar Hub",
    description:
      "Explore Maayaa Bazaar Hub's strategic alliance frameworks across 11 verified entertainment, media, corporate, and production sectors.",
    images: [`${SITE_URL}/images/hero-cinematic.jpg`],
  },
};

export const dynamic = "force-static";


interface PartnerSector {
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  icon: React.ReactNode;
}

const partnerSectors: PartnerSector[] = [
  {
    title: "Film Production Houses",
    tagline: "Theatrical Co-Productions & Line Management",
    description:
      "Collaborating on feature films, co-productions, line production services, soundstage infrastructure, and distribution syndication.",
    scope: [
      "Bilateral feature film co-productions",
      "Line production budgeting & local permitting",
      "Acoustic soundstages & camera package leasing",
    ],
    icon: <Film className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "OTT Platforms",
    tagline: "Original Streaming Series & Digital Premieres",
    description:
      "Partnering with leading digital streaming networks for original episodic series, direct-to-digital films, and exclusive entertainment specials.",
    scope: [
      "Original series development & delivery",
      "Direct-to-digital film licensing",
      "Multi-language dubbing & regional delivery",
    ],
    icon: <Tv className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "Television Networks",
    tagline: "Broadcast Telecasts & Entertainment Specials",
    description:
      "Providing broadcast-grade multi-camera production, reality show finales, and award ceremony telecast rights to national networks.",
    scope: [
      "Televised award show live feeds & telecast rights",
      "Reality show finale staging & live voting rigs",
      "Satellite transmission & live switching crews",
    ],
    icon: <Radio className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "Music Companies",
    tagline: "Soundtrack Releases & Live Concert Tours",
    description:
      "Partnering with record labels and music publishing houses for audio launches, original soundtracks, and artist concert touring.",
    scope: [
      "Theatrical audio release stage galas",
      "Master publishing coordination & licensing",
      "Multi-city artist concert tour logistics",
    ],
    icon: <Music className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "Artists",
    tagline: "Playback Vocalists, Musicians & Composers",
    description:
      "Working directly with celebrated singers, instrumentalists, and symphony conductors for live concerts and cinematic scores.",
    scope: [
      "Live concert touring representation & technical riders",
      "Symphony & orchestral performance curation",
      "VIP green room suites & travel compound security",
    ],
    icon: <Users className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "Celebrities",
    tagline: "Film Personalities & Chief Guests",
    description:
      "Facilitating celebrity appearances, movie promotional tours, ribbon-cuttings, and red carpet protocols with discrete security.",
    scope: [
      "Movie pre-release & audio launch stage appearances",
      "Celebrity brand endorsement contract negotiations",
      "Discreet VIP security & private transit coordination",
    ],
    icon: <Sparkles className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "Brands",
    tagline: "Co-Branding & Cultural Storytelling",
    description:
      "Connecting commercial brands with entertainment IP through cinematic commercials, digital campaigns, and on-ground activations.",
    scope: [
      "Cinematic brand commercial films",
      "Concert title sponsorships & experiential zones",
      "Product placement in theatrical releases",
    ],
    icon: <Briefcase className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "Corporate Organisations",
    tagline: "Conferences, Annual Days & Conclaves",
    description:
      "Delivering turnkey event staging, keynote presentation technology, and executive gala choreography for enterprise clients.",
    scope: [
      "Flagship product launch staging & reveal mechanics",
      "Corporate annual day celebrations & entertainment",
      "Multi-track convention audio-visual logistics",
    ],
    icon: <Building2 className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "Event Partners",
    tagline: "Staging, Acoustic Sound, Truss & Lighting",
    description:
      "Alliances with certified aluminum truss manufacturers, spatial audio providers, robotic lighting contractors, and power engineers.",
    scope: [
      "Heavy structural aluminum truss engineering",
      "Spatial acoustic line array calibration",
      "Outdoor ultra-bright LED video wall networks",
    ],
    icon: <Layers className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "International Production Partners",
    tagline: "Cross-Border Cinema & Overseas Tours",
    description:
      "Collaborating with overseas film commissions, international arena promoters, and bilateral cultural delegations.",
    scope: [
      "Overseas film shooting permits & multinational crews",
      "Global concert tours for diaspora audiences",
      "Bilateral entertainment summits & cultural exchanges",
    ],
    icon: <Globe className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    title: "Media Organisations",
    tagline: "Press Syndicates & Entertainment Journalism",
    description:
      "Accrediting national journalists, entertainment news networks, and digital portals for film press meets and launch conclaves.",
    scope: [
      "National media accreditation & press conferences",
      "High-speed press kit & video trailer distribution",
      "Red-carpet media arches & photo-call walls",
    ],
    icon: <Newspaper className="w-5 h-5 text-[#D4A72C]" />,
  },
];

export default function PartnersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Partners", path: "/partners" },
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
        eyebrow="STRATEGIC ALLIANCES & ECOSYSTEM"
        title="Partners & Industry Alliances"
        description="Maayaa Bazaar Hub operates through robust institutional relationships across eleven key entertainment sectors, ensuring turnkey accountability, technical mastery, and creative excellence."
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#B9B0BE]">
            <Link href="/" className="hover:text-[#FAF8F2] transition-colors">
              Home
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <span className="text-[#D4A72C]">Partners</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Register Alliance Interest
            </Button>
            <Button href="/services" variant="secondary" size="md">
              View Production Verticals
            </Button>
          </div>
        }
      />

      {/* 2. 11 Partner Sectors Grid */}
      <Section background="deepPurple" spacing="lg" borderBottom id="sectors">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Eleven Strategic Sectors"
            title="Our Partnership Alliances"
            description="We collaborate with verified entities across film, broadcast, streaming, corporate, and live staging to execute ambitious projects."
            size="xl"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerSectors.map((sector, idx) => (
              <div
                key={sector.title}
                className="p-8 rounded-3xl bg-[#08050D] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 transition-all flex flex-col justify-between group shadow-[0_16px_36px_rgba(8,5,13,0.8)]"
              >
                <div>
                  {/* Icon & Sector Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#16091F] border border-[#D4A72C]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {sector.icon}
                    </div>
                    <span className="text-[10px] font-mono text-[#FAF8F2]/40 uppercase tracking-widest">
                      Sector 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-[#D4A72C] uppercase tracking-wider block mb-1">
                    {sector.tagline}
                  </span>

                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#FAF8F2] mb-3 group-hover:text-[#F4D76A] transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed mb-6">
                    {sector.description}
                  </p>
                </div>

                {/* Scope Checklist */}
                <div className="pt-4 border-t border-[#FAF8F2]/[0.06] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF8F2]/50 block mb-1">
                    Collaboration Areas
                  </span>
                  {sector.scope.map((item, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[#FAF8F2]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A72C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* 3. Official Factual Notice (Zero Fake Logos) */}
      <Section background="midnight" spacing="lg" borderBottom>
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#16091F] via-[#08050D] to-[#16091F] border border-[#D4A72C]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(8,5,13,0.9)]">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08050D] border border-[#D4A72C]/30 text-xs font-mono text-[#D4A72C]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4A72C]" />
                <span>Verified Strategic Governance</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FAF8F2]">
                Alliance Integrity &amp; Co-Credits
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
                Specific client brand identities, partner logos, and joint venture credits are formally published alongside authorized film releases and licensed concert tours under strict non-disclosure compliance.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Button href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Register Partnership Interest
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
