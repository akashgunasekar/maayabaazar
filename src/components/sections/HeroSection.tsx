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
    badge: "CINEMA & THEATRICAL PRODUCTIONS",
    category: "Feature Films & OTT",
    capability: "Theatrical Films & Soundstages",
    icon: Film,
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
      className="relative min-h-[92vh] w-full flex flex-col justify-between pt-28 pb-10 sm:pt-32 sm:pb-12 overflow-hidden bg-[#020817] select-none"
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(201,154,50,0.12)_0%,transparent_60%)]" />
            </div>
          );
        })}
      </div>

      {/* Subtle Architectural Gold Framing Lines (Top & Corners) */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[85%] max-w-7xl h-px bg-gradient-to-r from-transparent via-[#C99A32]/30 to-transparent pointer-events-none z-10" />

      {/* Main Hero Content */}
      <Container className="relative z-20 flex-1 flex flex-col justify-center my-auto py-6 sm:py-10">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {/* Eyebrow / Current Slide Vertical Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-[#06152F]/90 backdrop-blur-md border border-[#C99A32]/30 shadow-[0_0_20px_rgba(201,154,50,0.18)] transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C99A32] shadow-[0_0_8px_rgba(201,154,50,0.8)] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.24em] text-[#C99A32]">
              {activeSlide.badge}
            </span>
          </div>

          {/* Exact Brand Headline: Where Cinema Meets Creativity & Events Become Experiences */}
          <h1 className="font-[var(--font-cinzel)] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#FFF8E8] tracking-tight leading-[1.12] transition-all duration-500">
            <span className="block">Where Cinema Meets Creativity</span>
            <span className="block mt-1 bg-gradient-to-r from-[#F2D477] via-[#C99A32] to-[#F7E7B0] bg-clip-text text-transparent">
              &amp; Events Become Experiences
            </span>
          </h1>

          {/* Exact Brand Supporting Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-[#C9C4B8] leading-relaxed max-w-2xl font-normal transition-all duration-500">
            Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music &amp; Entertainment, Digital Media, Brand Promotions, and International Projects.
          </p>

          {/* CTAs: Exact Primary "Explore Our Services" & Secondary "Let's Create" */}
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
