"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Ticket,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

interface UpcomingSlide {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  presenters?: string;
  tagline?: string;
  date: string;
  time?: string;
  location: string;
  badge: string;
  image: string;
  alt: string;
  isPortrait?: boolean;
  description: string;
}

const UPCOMING_SLIDES: UpcomingSlide[] = [
  {
    id: "music-of-the-millennium",
    slug: "music-of-the-millennium",
    title: "Music of the Millennium",
    subtitle: "A Reinvention Tour — First Look & Announcement Gala",
    presenters: "Cine Musicians Union • Maa Aai Production • Maayaa Bazaar Hub",
    tagline: "A Timeless Journey Through Music",
    date: "Wednesday, 9th September 2026",
    time: "7:00 PM Onwards",
    location: "ITC Grand Chola, Guindy, Chennai",
    badge: "FLAGSHIP UPCOMING EVENT",
    image: "/images/music-of-the-millennium.jpg",
    alt: "Music of the Millennium — A Reinvention Tour Announcement Poster",
    isPortrait: true,
    description:
      "Epochal musical reinvention tour celebrating the timeless heritage of Indian cinema music with live orchestra, playback vocalists, and 360-degree spatial soundscapes.",
  },
  {
    id: "symphonic-crescendo",
    slug: "symphonic-crescendo-concert",
    title: "Symphonic Crescendo: Live in Concert",
    subtitle: "Acoustic Grandeur & 60-Piece Symphonic Ensemble",
    presenters: "Maayaa Bazaar Hub Concert Series",
    tagline: "Where Classical Harmony Meets Arena Rigging",
    date: "Saturday, November 28, 2026",
    time: "6:30 PM Onwards",
    location: "Open Air Colosseum Arena",
    badge: "MEGA CONCERT",
    image: "/images/live-concerts.jpg",
    alt: "Symphonic Crescendo Live Concert Stage",
    description:
      "A monumental live stadium evening uniting acclaimed playback vocalists and a 60-piece symphonic orchestra performing timeless cinematic classics.",
  },
  {
    id: "theatrical-audio-launch",
    slug: "pan-india-film-audio-launch",
    title: "Pan-India Theatrical Movie Audio Launch",
    subtitle: "Star-Studded Cast, Soundtrack & Trailer Unveiling",
    presenters: "Maayaa Bazaar Hub Film Productions",
    tagline: "The Pulse of Indian Cinema",
    date: "Saturday, December 12, 2026",
    time: "7:00 PM Onwards",
    location: "Grand Convention Complex",
    badge: "THEATRICAL GALA",
    image: "/images/summit-awards-gala.jpg",
    alt: "Film Audio Launch Grand Stage",
    description:
      "Celebrated film cast, director, and music composer present the official soundtrack and theatrical trailer to worldwide media, industry delegates, and fans.",
  },
  {
    id: "cinema-excellence-awards",
    slug: "annual-cinema-excellence-awards",
    title: "Cinema Excellence Honors & Awards Gala",
    subtitle: "Annual Red Carpet Celebration of Craft & Artistry",
    presenters: "Maayaa Bazaar Hub & Industry Guilds",
    tagline: "Honoring Cinematic Brilliance",
    date: "Saturday, January 16, 2027",
    time: "6:00 PM Onwards",
    location: "Auditorium Plenary Hall",
    badge: "ANNUAL AWARDS GALA",
    image: "/images/events-expo.jpg",
    alt: "Cinema Excellence Awards Setup",
    description:
      "Red carpet arrival followed by an opulent awards ceremony honoring technical, musical, and directorial achievements across the film landscape.",
  },
];

const AUTO_SLIDE_DURATION = 5000;

export const UpcomingEventsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % UPCOMING_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + UPCOMING_SLIDES.length) % UPCOMING_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, AUTO_SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const active = UPCOMING_SLIDES[currentIndex];

  return (
    <Section
      background="midnight"
      spacing="lg"
      borderTop
      id="upcoming-events-carousel"
      className="relative overflow-hidden"
    >
      {/* Ambient Radial Illumination */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(11,33,69,0.35),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-[radial-gradient(ellipse_at_center,rgba(201,154,50,0.12),transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
            <SectionHeading
              eyebrow="UPCOMING PRODUCTIONS & LIVE CALENDAR"
              title="Upcoming Live Events"
              description="Preview scheduled concerts, first look announcements, and theatrical galas produced with turnkey excellence."
              size="lg"
            />

            {/* Slider Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#C99A32] font-semibold">
                0{currentIndex + 1} / 0{UPCOMING_SLIDES.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous upcoming event"
                  className="w-10 h-10 rounded-full bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#FFF8E8] hover:text-[#C99A32] hover:border-[#C99A32] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next upcoming event"
                  className="w-10 h-10 rounded-full bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#FFF8E8] hover:text-[#C99A32] hover:border-[#C99A32] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Auto-Sliding Card */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="rounded-3xl bg-gradient-to-br from-[#06152F] via-[#020817] to-[#06152F] border-2 border-[#C99A32]/40 shadow-[0_24px_64px_rgba(2,8,23,0.95)] p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Event Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  className={cn(
                    "relative w-full max-w-[340px] rounded-2xl overflow-hidden bg-[#020817] border border-[#C99A32]/40 shadow-[0_0_30px_rgba(201,154,50,0.2)] group",
                    active.isPortrait ? "aspect-[10/16]" : "aspect-[16/10]"
                  )}
                >
                  <Image
                    src={active.image}
                    alt={active.alt}
                    fill
                    priority
                    sizes="(max-width: 640px) 300px, 340px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-40" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-[#C99A32] text-[#020817] text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                      {active.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  {active.presenters && (
                    <span className="inline-block px-3 py-1 rounded-md bg-[#0B2145] text-[#F2D477] text-[11px] font-mono border border-[#C99A32]/30 mb-3">
                      {active.presenters}
                    </span>
                  )}

                  <h3 className="font-[var(--font-heading)] text-2xl sm:text-4xl lg:text-5xl font-black text-[#FFF8E8] tracking-tight leading-tight">
                    {active.title}
                  </h3>

                  {active.subtitle && (
                    <p className="text-sm sm:text-base font-mono text-[#C99A32] font-semibold mt-1">
                      {active.subtitle}
                    </p>
                  )}
                </div>

                {active.tagline && (
                  <blockquote className="p-3.5 sm:p-4 rounded-xl bg-[#020817]/85 border-l-2 border-[#C99A32] text-[#FFF8E8] font-medium italic text-xs sm:text-sm">
                    &ldquo;{active.tagline}&rdquo;
                  </blockquote>
                )}

                {/* Logistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#020817]/70 border border-[#FFF8E8]/[0.08]">
                    <Calendar className="w-4 h-4 text-[#C99A32] shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#C99A32] block">Date</span>
                      <span className="font-semibold text-[#FFF8E8]">
                        {active.date} {active.time && `• ${active.time}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#020817]/70 border border-[#FFF8E8]/[0.08]">
                    <MapPin className="w-4 h-4 text-[#C99A32] shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#C99A32] block">Venue</span>
                      <span className="font-semibold text-[#FFF8E8]">{active.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
                  {active.description}
                </p>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    href={`/events/${active.slug}`}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    View Event Details
                  </Button>

                  <Button
                    href={`/contact?event=${active.slug}`}
                    variant="secondary"
                    size="md"
                    icon={<Ticket className="w-4 h-4" />}
                  >
                    Inquire Access
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Progress Indicator Dots */}
            <div className="mt-8 pt-6 border-t border-[#FFF8E8]/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                {UPCOMING_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === currentIndex
                        ? "w-8 bg-[#C99A32] shadow-[0_0_8px_rgba(201,154,50,0.6)]"
                        : "w-2 bg-[#FFF8E8]/20 hover:bg-[#FFF8E8]/40"
                    )}
                  />
                ))}
              </div>

              <Link
                href="/events"
                className="text-xs font-mono text-[#C99A32] hover:text-[#FFF8E8] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Full Events Calendar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};
