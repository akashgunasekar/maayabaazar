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
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { cn } from "@/lib/utils";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  badge: string;
  category: string;
  titleLine1: string;
  titleLine2: string;
  gradientLine2?: boolean;
  description: string;
  primaryBtn: {
    label: string;
    href: string;
  };
  secondaryBtn: {
    label: string;
    href: string;
  };
  capability: string;
  icon: React.ComponentType<{ className?: string }>;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "cinema-production",
    image: "/images/hero-cinematic.jpg",
    alt: "Maayaa Bazaar Hub Cinematic Film Production Soundstage",
    badge: "WHERE CINEMA MEETS CREATIVITY",
    category: "Cinema & Feature Films",
    titleLine1: "Cinematic Vision,",
    titleLine2: "Monumental Storytelling",
    gradientLine2: true,
    description:
      "End-to-end film production, script incubation, acoustic soundstages, robotic lighting, and global theatrical distribution.",
    primaryBtn: {
      label: "Explore Cinema Services",
      href: "/services",
    },
    secondaryBtn: {
      label: "Let's Create",
      href: "/contact",
    },
    capability: "Theatrical Films & OTT Series",
    icon: Film,
  },
  {
    id: "live-concerts",
    image: "/images/live-concerts.jpg",
    alt: "Stadium Live Concert Arena with Spatial Lighting and Audio Rigging",
    badge: "WHERE EVENTS BECOME EXPERIENCES",
    category: "Music Spectacles",
    titleLine1: "Monumental Stadium",
    titleLine2: "Concerts & Music Festivals",
    gradientLine2: true,
    description:
      "High-tonnage touring trusses, calibrated spatial 360° acoustics, celebrated vocalists, and 25,000+ spectator arena engineering.",
    primaryBtn: {
      label: "Explore Live Concerts",
      href: "/events",
    },
    secondaryBtn: {
      label: "Inquire Event Staging",
      href: "/contact?vertical=concerts",
    },
    capability: "25,000+ Arena Capacity",
    icon: Music,
  },
  {
    id: "film-audio-launches",
    image: "/images/summit-awards-gala.jpg",
    alt: "Theatrical Audio Launch and Celebrity Entertainment Gala",
    badge: "STAR-STUDDED MEDIA SPECTACLES",
    category: "Entertainment Galas",
    titleLine1: "Theatrical Audio Launches",
    titleLine2: "& Red-Carpet Honors",
    gradientLine2: true,
    description:
      "Star-studded movie promotional galas, televised award ceremonies, synchronized trailer reveals, and nationwide media launches.",
    primaryBtn: {
      label: "View Film Events",
      href: "/events#film-events",
    },
    secondaryBtn: {
      label: "Contact Media Desk",
      href: "/contact?vertical=events",
    },
    capability: "Broadcast Telecast Uplinks",
    icon: Sparkles,
  },
  {
    id: "arena-spectacles",
    image: "/images/arena-spectacle.jpg",
    alt: "Colosseum Arena Spectacle with Environmental Lighting",
    badge: "HIGH-CAPACITY IMMERSIVE PRODUCTIONS",
    category: "Public Celebrations",
    titleLine1: "Colosseum-Scale Spectacles",
    titleLine2: "& Cultural Heritage Festivals",
    gradientLine2: true,
    description:
      "Mass public gathering audio dispersion, multi-stage platforms, environmental pyrotechnics, and turnkey crowd safety protocols.",
    primaryBtn: {
      label: "Explore 5 Verticals",
      href: "/events#categories",
    },
    secondaryBtn: {
      label: "Host an Event",
      href: "/contact",
    },
    capability: "High-Throughput Crowd Safety",
    icon: Users,
  },
  {
    id: "corporate-conclaves",
    image: "/images/events-expo.jpg",
    alt: "Corporate Conclaves and Product Launch Exhibition Hall",
    badge: "EXECUTIVE CONVENTIONS & CONCLAVES",
    category: "Corporate Conclaves",
    titleLine1: "Executive Summits",
    titleLine2: "& Flagship Product Launches",
    gradientLine2: true,
    description:
      "Automated kinetic LED stage unveilings, multi-session audio-visual synchronization, and turnkey brand immersion pavilions.",
    primaryBtn: {
      label: "Corporate Services",
      href: "/services",
    },
    secondaryBtn: {
      label: "Initiate Event Brief",
      href: "/contact?vertical=corporate",
    },
    capability: "Kinetic LED Stagecraft",
    icon: Building2,
  },
];

const AUTO_SLIDE_INTERVAL = 5500; // 5.5 seconds

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

    const tickInterval = 50; // update progress every 50ms
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
      className="relative h-[90vh] min-h-[640px] max-h-[960px] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 overflow-hidden bg-[#08050D] select-none"
    >
      {/* Background Images with Crossfade and Subtle Ken Burns Scale Effect */}
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
              {/* Layered cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-[#08050D]/75 to-[#08050D]/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08050D] via-[#08050D]/60 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(75,10,120,0.35)_0%,rgba(22,9,31,0.5)_40%,transparent_80%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(212,167,44,0.08)_0%,transparent_60%)]" />
            </div>
          );
        })}
      </div>

      {/* Main Slide Content - Anchored within 90vh */}
      <Container className="relative z-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {/* Eyebrow / Category Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#16091F]/90 backdrop-blur-md border border-[#D4A72C]/30 shadow-[0_0_20px_rgba(212,167,44,0.15)] transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C] animate-pulse" />
            <Eyebrow variant="gold" className="text-[10px] sm:text-xs tracking-[0.22em]">
              {activeSlide.badge}
            </Eyebrow>
          </div>

          {/* Heading with 2-line title and gold gradient accent */}
          <h1 className="font-[var(--font-heading)] font-black text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F2] tracking-tight leading-[1.12] transition-all duration-500">
            <span>{activeSlide.titleLine1}</span>{" "}
            <span className="bg-gradient-to-r from-[#D4A72C] via-[#F4D76A] to-[#FAF8F2] bg-clip-text text-transparent">
              {activeSlide.titleLine2}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-base lg:text-lg text-[#B9B0BE] leading-relaxed max-w-2xl font-normal transition-all duration-500 line-clamp-3 sm:line-clamp-none">
            {activeSlide.description}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              href={activeSlide.primaryBtn.href}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {activeSlide.primaryBtn.label}
            </Button>

            <Button
              href={activeSlide.secondaryBtn.href}
              variant="secondary"
              size="md"
            >
              {activeSlide.secondaryBtn.label}
            </Button>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08050D]/80 backdrop-blur-md border border-[#FAF8F2]/10 text-xs font-mono text-[#D4A72C]">
              {React.createElement(activeSlide.icon, { className: "w-3.5 h-3.5" })}
              <span>{activeSlide.capability}</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Footer Navigation Bar within 90vh container */}
      <Container className="relative z-20 pt-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#FAF8F2]/10 pt-3 sm:pt-4">
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
                        ? "w-10 sm:w-16 bg-[#FAF8F2]/20"
                        : "w-4 sm:w-6 bg-[#FAF8F2]/20 group-hover:bg-[#FAF8F2]/40"
                    )}
                  >
                    {isCurrent && (
                      <div
                        className="absolute top-0 left-0 bottom-0 bg-[#D4A72C] rounded-full transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows & Slide Counter */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#FAF8F2]/70">
            <span className="tracking-widest">
              <span className="text-[#D4A72C] font-bold">0{currentIndex + 1}</span> / 0{HERO_SLIDES.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded-lg bg-[#16091F]/90 hover:bg-[#230F30] border border-[#FAF8F2]/10 hover:border-[#D4A72C]/40 flex items-center justify-center text-[#FAF8F2] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4A72C]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-8 h-8 rounded-lg bg-[#16091F]/90 hover:bg-[#230F30] border border-[#FAF8F2]/10 hover:border-[#D4A72C]/40 flex items-center justify-center text-[#FAF8F2] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4A72C]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
