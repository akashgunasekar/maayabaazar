import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Sparkles,
  Film,
  Building2,
  Users,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Zap,
  Mic,
  Ticket,
  MapPin,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { UpcomingEventsSlider } from "@/components/sections/UpcomingEventsSlider";
import { getAllEventCategories, getAllEvents } from "@/data/events";

import { SITE_URL, generateBreadcrumbSchema, generateEventSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Events & Live Experiences | Maayaa Bazaar Hub",
  description:
    "Explore live concerts, entertainment galas, film audio launches, corporate conclaves, and cultural festivals produced by Maayaa Bazaar Hub.",
  alternates: {
    canonical: `${SITE_URL}/events`,
  },
  openGraph: {
    title: "Events & Live Experiences | Maayaa Bazaar Hub",
    description:
      "Explore live concerts, entertainment galas, film audio launches, corporate conclaves, and cultural festivals produced by Maayaa Bazaar Hub.",
    url: `${SITE_URL}/events`,
    siteName: "Maayaa Bazaar Hub",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/live-concerts.jpg`,
        width: 1200,
        height: 630,
        alt: "Events and Concerts at Maayaa Bazaar Hub",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Live Experiences | Maayaa Bazaar Hub",
    description:
      "Explore live concerts, entertainment galas, film audio launches, corporate conclaves, and cultural festivals produced by Maayaa Bazaar Hub.",
    images: [`${SITE_URL}/images/live-concerts.jpg`],
  },
};

export const dynamic = "force-static";

const iconMap: Record<string, React.ReactNode> = {
  Music: <Music className="w-5 h-5 text-[#C99A32]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#C99A32]" />,
  Film: <Film className="w-5 h-5 text-[#C99A32]" />,
  Building2: <Building2 className="w-5 h-5 text-[#C99A32]" />,
  Users: <Users className="w-5 h-5 text-[#C99A32]" />,
};

export default async function EventsPage() {
  const [categories, events] = await Promise.all([
    getAllEventCategories(),
    getAllEvents(),
  ]);

  const musicCategory = categories.find((c) => c.categoryKey === "music-events") || categories[0];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
  ]);

  const eventListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Upcoming Events at Maayaa Bazaar Hub",
    itemListElement: events.map((evt, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: generateEventSchema({
        title: evt.title,
        slug: evt.slug,
        description: evt.shortDescription,
        date: evt.isoDate || evt.date,
        location: evt.location,
        image: evt.image.src,
        status: evt.status === "Upcoming" ? "EventScheduled" : "EventPostponed",
      }),
    })),
  };

  return (
    <>
      {/* Breadcrumb & Events Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventListSchema) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        eyebrow="WHERE EVENTS BECOME EXPERIENCES"
        title="Events at Maayaa Bazaar Hub"
        description="Engineering unforgettable live experiences across five core disciplines: monumental stadium concerts, star-studded film promotional galas, televised award ceremonies, executive corporate summits, and grand cultural celebrations."
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#C9C4B8]">
            <Link href="/" className="hover:text-[#FFF8E8] transition-colors">
              Home
            </Link>
            <span className="text-[#FFF8E8]/30">/</span>
            <span className="text-[#C99A32]">Events</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#upcoming-events" variant="primary" size="md" icon={<Calendar className="w-4 h-4" />}>
              Upcoming Schedule
            </Button>
            <Button href="#categories" variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore 5 Disciplines
            </Button>
            <Button href="/contact?vertical=events" variant="outline" size="md">
              Inquire Event Staging
            </Button>
          </div>
        }
      />

      {/* 2. UPCOMING & SCHEDULED LIVE EXPERIENCES */}
      <Section background="deepPurple" spacing="lg" borderBottom id="upcoming-events" className="scroll-mt-24">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Live Calendar & Scheduled Productions"
              title="Upcoming Live Experiences"
              description="Official schedule of upcoming concerts, theatrical film audio launches, and industry galas produced and managed by Maayaa Bazaar Hub."
              size="xl"
            />
            <div className="shrink-0">
              <Button
                href="/contact?vertical=events"
                variant="secondary"
                size="md"
                icon={<Ticket className="w-4 h-4" />}
              >
                Inquire Event Access
              </Button>
            </div>
          </div>

          {/* PREMIER HEADLINER SPOTLIGHT: MUSIC OF THE MILLENIUM */}
          <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#06152F] via-[#020817] to-[#06152F] border-2 border-[#C99A32]/50 p-6 sm:p-10 lg:p-12 shadow-[0_24px_64px_rgba(2,8,23,0.95)] relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(201,154,50,0.18),transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(11,33,69,0.5),transparent_70%)] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Event Poster Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[480px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#020817] border-2 border-[#C99A32]/60 shadow-[0_0_35px_rgba(201,154,50,0.25),0_20px_50px_rgba(2,8,23,0.95)] group">
                  <Image
                    src="/images/reinvention-tour-stage.jpg"
                    alt="Music of the Millennium — Reinvention Tour Stage Announcement at ITC Grand Chola"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 480px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-30" />
                </div>
              </div>

              {/* Event Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#C99A32] text-[#020817] text-[10px] font-mono font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(201,154,50,0.4)]">
                      Flagship Event
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#0B2145] text-[#F2D477] text-[10px] font-mono border border-[#C99A32]/30">
                      Cine Musicians Union • Maa Aai Production • Maayaa Bazaar Hub
                    </span>
                  </div>

                  <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFF8E8] tracking-tight leading-tight">
                    Music of the Millennium
                  </h2>
                  <p className="text-base sm:text-lg font-mono text-[#C99A32] font-semibold mt-1">
                    A Reinvention Tour — First Look &amp; Announcement Date
                  </p>
                </div>

                <blockquote className="p-4 sm:p-5 rounded-2xl bg-[#020817]/85 border-l-2 border-[#C99A32] text-[#FFF8E8] font-medium italic text-sm sm:text-base leading-relaxed">
                  &ldquo;A Timeless Journey Through Music&rdquo;
                </blockquote>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#C9C4B8]">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#020817]/70 border border-[#FFF8E8]/[0.08]">
                    <Calendar className="w-4 h-4 text-[#C99A32] shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#C99A32] block">Date &amp; Time</span>
                      <span className="font-semibold text-[#FFF8E8]">28th September 2026 (Mon) • 7 PM</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#020817]/70 border border-[#FFF8E8]/[0.08]">
                    <MapPin className="w-4 h-4 text-[#C99A32] shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#C99A32] block">Venue Location</span>
                      <span className="font-semibold text-[#FFF8E8]">ITC Grand Chola, Guindy, Chennai</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
                  Cine Musicians Union, Maa Aai Production, and Maayaa Bazaar Hub proudly present &ldquo;Music of the Millennium — A Reinvention Tour&rdquo;. Commencing with an exclusive First Look and Announcement Date Gala at ITC Grand Chola, celebrating the immortal legacy of Indian film music.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    href="/events/music-of-the-millennium"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Full Event Dossier
                  </Button>
                  <Button
                    href="/contact?event=music-of-the-millennium"
                    variant="secondary"
                    size="md"
                    icon={<Ticket className="w-4 h-4" />}
                  >
                    Inquire VIP Access
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {events.map((evt, idx) => (
              <FadeIn key={evt.id} direction="up" delay={idx * 100} duration={600}>
                <div className="rounded-3xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 overflow-hidden flex flex-col group transition-all duration-400 hover:shadow-[0_16px_40px_rgba(11,33,69,0.3)] h-full hover-lift">
                  {/* Event Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06152F]">
                    <Image
                      src={evt.image.src}
                      alt={evt.image.alt || evt.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) will-change-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant={evt.status === "Upcoming" ? "gold" : "purple"} size="sm" showDot>
                        {evt.status}
                      </Badge>
                    </div>

                    {evt.capacity && (
                      <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11px] font-mono text-[#F2D477] bg-[#020817]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C99A32]/20">
                        <Users className="w-3 h-3 text-[#C99A32]" />
                        <span>{evt.capacity}</span>
                      </div>
                    )}
                  </div>

                  {/* Event Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Meta: Date & Location */}
                      <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#C9C4B8]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#C99A32]" />
                          {evt.date}
                        </span>
                        <span className="text-[#FFF8E8]/20">•</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#C99A32]" />
                          {evt.location}
                        </span>
                      </div>

                      <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors line-clamp-2 leading-snug">
                        {evt.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed line-clamp-2">
                        {evt.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#FFF8E8]/[0.06] flex items-center justify-between">
                      <Link
                        href={`/events/${evt.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A32] hover:text-[#F2D477] transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href={`/contact?event=${evt.slug}`}
                        className="text-[11px] font-mono text-[#C9C4B8] hover:text-[#FFF8E8] transition-colors flex items-center gap-1"
                      >
                        <Ticket className="w-3.5 h-3.5 text-[#C99A32]" />
                        <span>Inquire Access</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* 3. FLAGSHIP VISUAL PROMINENCE: LIVE CONCERTS & MUSIC SPECTACLES */}
      <Section background="midnight" spacing="lg" borderBottom id="live-concerts-flagship" className="scroll-mt-24">
        <FadeIn direction="up">
          <div className="rounded-3xl bg-[#020817] border border-[#C99A32]/40 overflow-hidden relative shadow-[0_24px_64px_rgba(2,8,23,0.95)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Grand Live Concert Arena Visual */}
              <div className="lg:col-span-7 relative group">
                <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#06152F] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 hover-lift glow-gold-hover">
                  <Image
                    src="/images/live-concerts.jpg"
                    alt="Maayaa Bazaar Hub Live Concert Arena with Spatial Lighting and Audio Rigging"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) will-change-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/40 to-transparent opacity-80" />

                  {/* Flagship Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#C99A32] text-[#020817] text-[10px] font-mono font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(201,154,50,0.4)]">
                      Flagship Production
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#020817]/80 backdrop-blur-md text-[#FFF8E8] text-[10px] font-mono border border-[#FFF8E8]/10">
                      Stadium &amp; Colosseum Tier
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#020817]/85 backdrop-blur-md border border-[#C99A32]/20 text-xs text-[#FFF8E8]/90 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#C99A32]" />
                      <span>Spatial 360° Acoustic Architecture &amp; Touring Rigging</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#C99A32]">
                      25,000+ Capacity
                    </span>
                  </div>
                </div>
              </div>

              {/* Concert Content & Capabilities */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32]">
                      <Mic className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C99A32] font-semibold">
                      Flagship Showcase
                    </span>
                  </div>

                  <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[#FFF8E8] tracking-tight leading-snug">
                    Live Concerts &amp; Stadium Music Spectacles
                  </h2>

                  <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed mt-2">
                    Concerts are an integral cornerstone of Maayaa Bazaar Hub&apos;s creative offering. We design, produce, and manage monumentally engineered musical events that unite celebrated vocalists and bands with thousands of passionate fans.
                  </p>
                </div>

                {/* Subcategories Pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFF8E8]/60 block">
                    Concert Formats &amp; Specializations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {musicCategory.subcategories.map((sub) => (
                      <span
                        key={sub.id}
                        className="px-2.5 py-1 rounded-md bg-[#06152F] text-[11px] font-mono text-[#C99A32] border border-[#C99A32]/20"
                      >
                        {sub.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Staging Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#FFF8E8]/[0.08]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFF8E8]/60 block">
                    Turnkey Engineering Specs
                  </span>
                  <div className="space-y-1.5">
                    {musicCategory.capabilities?.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#FFF8E8]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A32] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Button
                    href="/contact?vertical=live-concerts"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire For Concert Staging
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 4. FIVE PRIMARY EVENT CATEGORIES */}
      <Section background="deepPurple" spacing="lg" borderBottom id="categories" className="scroll-mt-24">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Five Primary Verticals"
            title="Comprehensive Event Disciplines"
            description="Explore our specialized event frameworks spanning music spectacles, star-studded film releases, executive corporate conventions, and heritage cultural celebrations."
            size="xl"
            className="mb-8"
          />

          {/* Category Jump Anchor Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-14">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                className="p-3.5 rounded-xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 hover:bg-[#06152F] transition-all duration-300 group flex items-center gap-3 glow-gold-hover"
              >
                <div className="w-8 h-8 rounded-lg bg-[#06152F] border border-[#C99A32]/20 flex items-center justify-center text-[#C99A32] shrink-0 group-hover:scale-105 transition-transform">
                  {iconMap[cat.iconName] || <Sparkles className="w-4 h-4 text-[#C99A32]" />}
                </div>
                <div className="min-w-0">
                  <div className="font-[var(--font-heading)] text-xs font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors truncate">
                    {cat.title}
                  </div>
                  <div className="text-[10px] font-mono text-[#C9C4B8]">
                    {cat.subcategories.length} Formats
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                id={cat.slug}
                className="p-8 sm:p-12 rounded-3xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 transition-all duration-300 relative overflow-hidden scroll-mt-28 shadow-[0_16px_40px_rgba(2,8,23,0.8)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Category Image */}
                  <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#06152F] border border-[#FFF8E8]/10 shadow-[0_16px_40px_rgba(2,8,23,0.8)] group">
                      {cat.image && (
                        <Image
                          src={cat.image.src}
                          alt={cat.image.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-70" />

                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#020817]/90 backdrop-blur-md border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32]">
                          {iconMap[cat.iconName] || <Sparkles className="w-4 h-4 text-[#C99A32]" />}
                        </div>
                        <Badge variant="purple" size="sm">
                          Vertical 0{idx + 1}
                        </Badge>
                      </div>

                      {cat.image?.caption && (
                        <div className="absolute bottom-3 left-4 right-4 p-2.5 rounded-lg bg-[#020817]/80 backdrop-blur-md border border-[#FFF8E8]/10 text-[11px] text-[#FFF8E8]/80">
                          {cat.image.caption}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category Details & Subcategories */}
                  <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#C99A32] font-semibold block mb-1">
                        Vertical Discipline
                      </span>
                      <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FFF8E8] tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed mt-2">
                        {cat.description}
                      </p>
                    </div>

                    {/* Subcategories Grid */}
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFF8E8]/60 block">
                        Included Formats &amp; Event Types ({cat.subcategories.length})
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cat.subcategories.map((sub) => (
                          <div
                            key={sub.id}
                            className="p-3.5 rounded-xl bg-[#06152F]/50 border border-[#FFF8E8]/[0.06] hover:border-[#C99A32]/30 transition-colors"
                          >
                            <h4 className="font-[var(--font-heading)] text-xs font-bold text-[#FFF8E8] mb-1">
                              {sub.name}
                            </h4>
                            <p className="text-[11px] text-[#C9C4B8] leading-snug">
                              {sub.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Capabilities Checklist */}
                    {cat.capabilities && (
                      <div className="pt-3 border-t border-[#FFF8E8]/[0.08] space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFF8E8]/60 block">
                          Production Standards &amp; Riders
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cat.capabilities.map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-xs text-[#FFF8E8]/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A32] shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#FFF8E8]/[0.08] flex items-center justify-between">
                      <Button
                        href={`/contact?category=${cat.slug}`}
                        variant="primary"
                        size="sm"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Inquire For {cat.title}
                      </Button>

                      <span className="text-[11px] font-mono text-[#FFF8E8]/50">
                        {cat.subcategories.length} Specialized Event Formats
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* 5. TRANSPARENT BOOKING & SCHEDULING NOTICE */}
      <Section background="midnight" spacing="lg" borderBottom>
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#06152F] via-[#020817] to-[#06152F] border border-[#C99A32]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(2,8,23,0.9)]">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#020817] border border-[#C99A32]/30 text-xs font-mono text-[#C99A32]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C99A32]" />
                <span>Transparent Ticketing &amp; Press Schedules</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FFF8E8]">
                Event Scheduling &amp; Ticketing Framework
              </h3>
              <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
                Official public dates, concert tour lineups, and theatrical audio launch passes are released through authorized partner channels and official media statements. Maayaa Bazaar Hub guarantees 100% verified event coordination without unverified claims.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Host an Event With Us
              </Button>
              <Button href="/media" variant="secondary" size="md">
                Official Press Statements
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 6. UPCOMING EVENTS CAROUSEL (AUTO-SLIDE BEFORE FOOTER) */}
      <UpcomingEventsSlider />

      {/* 7. CLOSING CTA */}
      <Section background="deepPurple" spacing="lg" className="relative overflow-hidden">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#06152F] to-[#020817] border border-[#C99A32]/40 text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C99A32] block">
              Event Management &amp; Production
            </span>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-5xl font-black text-[#FFF8E8] tracking-tight">
              Let&apos;s Engineer Your Next Monumental Event
            </h2>

            <p className="text-sm sm:text-base text-[#C9C4B8] max-w-xl mx-auto leading-relaxed">
              From stadium acoustic arrays and heavy truss structures to VIP guest liaison and multi-camera live telecasts, our event production team is ready.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact?vertical=events" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Initiate Event Brief
              </Button>
              <Button href="/services/event-production" variant="secondary" size="lg">
                View Staging Specs
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
