import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Ticket,
  Sparkles,
  Clock,
  Music,
  Building,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllEvents, getEventBySlug } from "@/data/events";

import { SITE_URL, generateEventSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | Maayaa Bazaar Hub",
    };
  }

  const canonicalUrl = `${SITE_URL}/events/${event.slug}`;
  const imageUrl = event.image.src.startsWith("http")
    ? event.image.src
    : `${SITE_URL}${event.image.src}`;

  return {
    title: `${event.title} | Maayaa Bazaar Hub`,
    description: event.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${event.title} | Maayaa Bazaar Hub`,
      description: event.shortDescription,
      url: canonicalUrl,
      siteName: "Maayaa Bazaar Hub",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: event.image.alt || event.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Maayaa Bazaar Hub`,
      description: event.shortDescription,
      images: [imageUrl],
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const allEvents = await getAllEvents();
  const otherEvents = allEvents.filter((e) => e.slug !== event.slug);

  const eventSchema = generateEventSchema({
    title: event.title,
    slug: event.slug,
    description: event.shortDescription,
    date: event.date,
    location: event.location,
    image: event.image.src,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: event.title, path: `/events/${event.slug}` },
  ]);

  return (
    <>
      {/* Event & Breadcrumb Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        badge={
          <div className="flex items-center gap-2">
            <Badge variant={event.status === "Upcoming" ? "gold" : "purple"} size="sm">
              {event.status}
            </Badge>
            {event.capacity && (
              <span className="text-[11px] font-mono text-[#F2D477] bg-[#06152F] px-2.5 py-0.5 rounded-full border border-[#C99A32]/30">
                {event.capacity}
              </span>
            )}
          </div>
        }
        title={event.title}
        description={event.shortDescription}
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#C9C4B8]">
            <Link href="/" className="hover:text-[#FFF8E8] transition-colors">
              Home
            </Link>
            <span className="text-[#FFF8E8]/30">/</span>
            <Link href="/events" className="hover:text-[#FFF8E8] transition-colors">
              Events
            </Link>
            <span className="text-[#FFF8E8]/30">/</span>
            <span className="text-[#C99A32]">{event.title}</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={`/contact?event=${event.slug}`}
              variant="primary"
              size="md"
              icon={<Ticket className="w-4 h-4" />}
            >
              Inquire Event Access
            </Button>
            <Button href="/events" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
              Back to All Events
            </Button>
          </div>
        }
      />

      {/* 2. Visual & Logistics Dossier */}
      <Section background="deepPurple" spacing="lg" borderBottom>
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Event Image */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-[#020817] border border-[#FFF8E8]/10 shadow-[0_20px_50px_rgba(2,8,23,0.9)] group">
                <Image
                  src={event.image.src}
                  alt={event.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-60" />

                {event.image.caption && (
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#020817]/80 backdrop-blur-md border border-[#FFF8E8]/10 text-xs text-[#FFF8E8]/90 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C99A32] shrink-0" />
                    <span>{event.image.caption}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Event Meta Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#020817] border border-[#FFF8E8]/[0.08] space-y-4">
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#FFF8E8] border-b border-[#FFF8E8]/[0.08] pb-3">
                  Event Brief &amp; Logistics
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#C9C4B8] flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C99A32]" />
                      Date
                    </span>
                    <span className="font-semibold text-[#FFF8E8]">{event.date}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#C9C4B8] flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C99A32]" />
                      Venue Location
                    </span>
                    <span className="font-semibold text-[#FFF8E8]">{event.location}</span>
                  </div>

                  {event.capacity && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#C9C4B8] flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#C99A32]" />
                        Audience Capacity
                      </span>
                      <span className="font-semibold text-[#FFF8E8]">{event.capacity}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-[#C9C4B8] flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C99A32]" />
                      Production Tier
                    </span>
                    <span className="font-semibold text-[#C99A32]">Turnkey Staging</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href={`/contact?event=${event.slug}`}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire Event Management
                  </Button>
                </div>
              </div>

              {event.fullDescription && (
                <div className="space-y-3">
                  <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8]">
                    Production Narrative
                  </h4>
                  {event.fullDescription.map((p, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 2.5. OFFICIAL EVENT AGENDA & RUN OF SHOW */}
      {event.schedule && event.schedule.length > 0 && (
        <Section background="midnight" spacing="lg" borderBottom id="event-schedule">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C99A32] font-semibold">
                  Program Schedule
                </span>
                <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[#FFF8E8] tracking-tight">
                  Official Run of Show &amp; Agenda
                </h3>
                <p className="text-xs sm:text-sm text-[#C9C4B8] max-w-xl mx-auto">
                  Curated timing and sequence for the evening&apos;s proceedings, announcements, and musical celebrations.
                </p>
              </div>

              <div className="rounded-3xl bg-[#020817] border border-[#C99A32]/35 p-6 sm:p-10 shadow-[0_20px_50px_rgba(2,8,23,0.9)] divide-y divide-[#FFF8E8]/[0.08]">
                {event.schedule.map((slot, sIdx) => (
                  <div
                    key={sIdx}
                    className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32] text-xs font-mono font-bold shrink-0">
                        0{sIdx + 1}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                        {slot.activity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 pl-11 sm:pl-0">
                      <Clock className="w-3.5 h-3.5 text-[#C99A32]" />
                      <span className="px-3 py-1 rounded-md bg-[#0B2145] text-[#F2D477] border border-[#C99A32]/30 text-xs font-mono font-semibold">
                        {slot.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Section>
      )}

      {/* 3. Related Events */}
      {otherEvents.length > 0 && (
        <Section background="midnight" spacing="lg" borderTop>
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="More Highlights"
              title="Other Events"
              description="Explore additional live music spectacles and entertainment galas."
              size="lg"
              className="mb-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherEvents.map((evt) => (
                <Link
                  key={evt.id}
                  href={`/events/${evt.slug}`}
                  className="rounded-2xl bg-[#06152F]/40 border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 p-5 flex flex-col justify-between group transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#C9C4B8]">
                      <span>{evt.date}</span>
                      <span className="text-[#C99A32]">{evt.location}</span>
                    </div>
                    <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-[#C9C4B8] line-clamp-2">
                      {evt.shortDescription}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#FFF8E8]/[0.06] flex items-center justify-between text-xs font-semibold text-[#C99A32]">
                    <span>View Event Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </Section>
      )}
    </>
  );
}
