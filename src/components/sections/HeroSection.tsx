"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Music,
  Film,
  Building2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  badge: string;
  category: string;
  capability: string;
  icon: React.ComponentType<{ className?: string }>;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "cinema-production",
    image: "/images/hero-cinematic.jpg",
    alt: "Maayaa Bazaar Hub Cinematic Film Production Soundstage",
    badge: "WHERE STORIES COME ALIVE • MAAYAA BAZAAR HUB",
    category: "Maayaa Bazaar Hub",
    capability: "Film Studios & Entertainment",
    icon: Film,
  },
  {
    id: "music-of-the-millennium",
    image: "/images/music-of-the-millennium.jpg",
    alt: "Music of the Millennium — A Reinvention Tour First Look Announcement at ITC Grand Chola Chennai",
    badge: "UPCOMING EVENT • 9TH SEPT 2026 • CHENNAI",
    category: "Music of the Millennium",
    capability: "ITC Grand Chola • 9th Sept 2026",
    icon: Music,
  },
  {
    id: "live-concerts",
    image: "/images/live-concerts.jpg",
    alt: "Stadium Live Concert Arena with Spatial Lighting and Audio Rigging",
    badge: "MUSIC SPECTACLES & CONCERTS",
    category: "Mega Music Festivals",
    capability: "25,000+ Arena Acoustics",
    icon: Music,
  },
  {
    id: "film-audio-launches",
    image: "/images/summit-awards-gala.jpg",
    alt: "Theatrical Audio Launch and Celebrity Entertainment Gala",
    badge: "STAR-STUDDED MEDIA SPECTACLES",
    category: "Red-Carpet Galas",
    capability: "Broadcast Telecast Uplinks",
    icon: Sparkles,
  },
  {
    id: "arena-spectacles",
    image: "/images/arena-spectacle.jpg",
    alt: "Colosseum Arena Spectacle with Environmental Lighting",
    badge: "HIGH-CAPACITY IMMERSIVE PRODUCTIONS",
    category: "Cultural Festivals",
    capability: "Turnkey Crowd Safety",
    icon: Users,
  },
  {
    id: "corporate-conclaves",
    image: "/images/events-expo.jpg",
    alt: "Corporate Conclaves and Product Launch Exhibition Hall",
    badge: "EXECUTIVE CONVENTIONS & SUMMITS",
    category: "Corporate Conclaves",
    capability: "Kinetic LED Stagecraft",
    icon: Building2,
  },
];

const AUTO_SLIDE_INTERVAL = 6000; // 6 seconds

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-slide timer and progress counter
  useEffect(() => {
    if (isPaused) return;

    const tickInterval = 50;
    const step = (tickInterval / AUTO_SLIDE_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, tickInterval);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero Featured Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[95vh] w-full flex flex-col justify-between pt-28 pb-10 sm:pt-32 sm:pb-12 overflow-hidden bg-[#020817] select-none"
    >
      {/* Background Images with Cinematic Fade & Ken Burns Scaling */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={cn(
                  "object-cover object-center transition-transform duration-[7000ms] ease-out will-change-transform",
                  isActive ? "scale-105" : "scale-100"
                )}
              />
              {/* Layered cinematic navy and gold overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-[#020817]/55" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/75 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,47,92,0.5)_0%,rgba(11,33,69,0.35)_40%,transparent_75%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,154,50,0.18)_0%,transparent_70%)]" />
            </div>
          );
        })}
      </div>

      {/* Subtle Architectural Gold Framing Lines (Top & Corners) */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[85%] max-w-7xl h-px bg-gradient-to-r from-transparent via-[#C99A32]/30 to-transparent pointer-events-none z-10" />

      {/* Main Hero Content */}
      <Container className="relative z-20 flex-1 flex flex-col justify-center my-auto py-6 sm:py-10">
        {currentIndex === 0 ? (
          /* ======================================================== */
          /* SLIDE 1: CENTERED LOGO (ENLARGED) & BUTTONS ONLY        */
          /* ======================================================== */
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-8 sm:space-y-10 transition-all duration-700 my-auto">
            {/* Visually Hidden SEO Heading */}
            <h1 className="sr-only">
              Maayaa Bazaar Hub — Where Stories Come Alive
            </h1>

            {/* 1. LOGO ENLARGED & CENTERED WITH MAJESTIC GOLDEN AURA */}
            <div className="relative group">
              {/* Outer Golden Halo Ambient Glow */}
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-[#C99A32]/40 via-[#F2D477]/55 to-[#C99A32]/40 rounded-3xl blur-3xl opacity-85 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl sm:rounded-[2rem] overflow-hidden border-2 sm:border-[3px] border-[#C99A32]/75 shadow-[0_0_60px_rgba(201,154,50,0.5)] bg-[#020817]/95 backdrop-blur-md p-2 sm:p-3 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/maayaa-logo.png"
                  alt="Maayaa Bazaar Hub — Where Stories Come Alive"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 400px"
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 2. ONLY BUTTONS (CENTERED DIRECTLY UNDERNEATH) */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-[0_0_25px_rgba(201,154,50,0.35)]"
              >
                Explore Our Services
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold"
              >
                Let&apos;s Create
              </Button>
            </div>
          </div>
        ) : currentIndex === 1 ? (
          /* ======================================================== */
          /* SLIDE 2: MUSIC OF THE MILLENNIUM SHOWCASE                */
          /* ======================================================== */
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl space-y-5 sm:space-y-6 animate-fadeIn">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-[#06152F]/90 backdrop-blur-md border border-[#C99A32]/30 shadow-[0_0_20px_rgba(201,154,50,0.18)] transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A32] shadow-[0_0_8px_rgba(201,154,50,0.8)] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.24em] text-[#C99A32]">
                {activeSlide.badge}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-[var(--font-manrope)] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-[#FFF8E8] tracking-tight leading-[1.08] sm:leading-[1.05]">
                <span className="block">Music of the</span>
                <span className="block bg-gradient-to-r from-[#F2D477] via-[#C99A32] to-[#FFF8E8] bg-clip-text text-transparent">
                  Millennium
                </span>
                <span className="block text-xl sm:text-3xl lg:text-4xl font-[var(--font-cinzel)] font-bold text-[#FFF8E8]/90 mt-2">
                  A Reinvention Tour — First Look &amp; Announcement
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#C9C4B8] leading-relaxed max-w-3xl font-normal">
                Cine Musicians Union, Maa Aai Production &amp; Maayaa Bazaar Hub present a timeless musical journey taking center stage on Wednesday, 9th September 2026 at the Grand Ballroom, ITC Grand Chola, Chennai.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button
                  href="/events/music-of-the-millennium"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Event Details
                </Button>
                <Button
                  href="/contact?event=music-of-the-millennium"
                  variant="secondary"
                  size="md"
                >
                  RSVP / Inquire Passes
                </Button>
                <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#06152F]/90 backdrop-blur-md border border-[#C99A32]/25 text-xs font-mono text-[#F2D477] shadow-[0_2px_12px_rgba(2,8,23,0.5)]">
                  <Music className="w-3.5 h-3.5 text-[#C99A32]" />
                  <span>ITC Grand Chola • 9th Sept 2026</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ======================================================== */
          /* SLIDES 3-6: OTHER SPECTACLES                             */
          /* ======================================================== */
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl space-y-5 sm:space-y-6 animate-fadeIn">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-[#06152F]/90 backdrop-blur-md border border-[#C99A32]/30 shadow-[0_0_20px_rgba(201,154,50,0.18)] transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A32] shadow-[0_0_8px_rgba(201,154,50,0.8)] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.24em] text-[#C99A32]">
                {activeSlide.badge}
              </span>
            </div>

            <h1 className="font-[var(--font-manrope)] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-[#FFF8E8] tracking-tight leading-[1.08] sm:leading-[1.05]">
              <span className="block">Where Cinema Meets</span>
              <span className="block">Creativity</span>
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#F2D477] via-[#C99A32] to-[#F7E7B0] bg-clip-text text-transparent lg:whitespace-nowrap">
                &amp; Events Become Experiences
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#C9C4B8] leading-relaxed max-w-3xl font-normal">
              Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music &amp; Entertainment, Digital Media, Brand Promotions, and International Projects.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href="/services"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Our Services
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="md"
              >
                Let&apos;s Create
              </Button>
              <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#06152F]/90 backdrop-blur-md border border-[#C99A32]/25 text-xs font-mono text-[#F2D477] shadow-[0_2px_12px_rgba(2,8,23,0.5)]">
                {React.createElement(activeSlide.icon, { className: "w-3.5 h-3.5 text-[#C99A32]" })}
                <span>{activeSlide.capability}</span>
              </div>
            </div>
          </div>
        )}
      </Container>

      {/* Footer Navigation Bar within Hero */}
      <Container className="relative z-20 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#C99A32]/20 pt-4">
          {/* Slide Indicator Dots with Progress Animation */}
          <div className="flex items-center gap-2 sm:gap-3">
            {HERO_SLIDES.map((slide, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className="group relative flex items-center py-2 focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                  aria-current={isCurrent ? "true" : undefined}
                >
                  <div
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 relative overflow-hidden",
                      isCurrent
                        ? "w-10 sm:w-16 bg-[#FFF8E8]/20"
                        : "w-4 sm:w-6 bg-[#FFF8E8]/15 group-hover:bg-[#FFF8E8]/35"
                    )}
                  >
                    {isCurrent && (
                      <div
                        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#C99A32] to-[#F2D477] rounded-full transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows & Slide Counter */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#C9C4B8]">
            <span className="tracking-widest">
              <span className="text-[#F2D477] font-bold">0{currentIndex + 1}</span> / 0{HERO_SLIDES.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded-md bg-[#06152F] hover:bg-[#0B2145] border border-[#C99A32]/30 hover:border-[#F2D477] flex items-center justify-center text-[#FFF8E8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C99A32]"
              >
                <ChevronLeft className="w-4 h-4 text-[#C9C4B8] hover:text-[#FFF8E8]" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-8 h-8 rounded-md bg-[#06152F] hover:bg-[#0B2145] border border-[#C99A32]/30 hover:border-[#F2D477] flex items-center justify-center text-[#FFF8E8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C99A32]"
              >
                <ChevronRight className="w-4 h-4 text-[#C9C4B8] hover:text-[#FFF8E8]" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
