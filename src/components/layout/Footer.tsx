import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Accessible, zero-dependency SVG Social Icons
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020817] border-t border-[#C99A32]/20 relative overflow-hidden">
      {/* Subtle Royal Blue Atmosphere in Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(11,33,69,0.5),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[radial-gradient(ellipse_at_bottom,rgba(201,154,50,0.12),transparent_70%)] pointer-events-none" />

      {/* 1. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C99A32]/15">
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden shrink-0 border border-[#C99A32]/30 shadow-[0_0_10px_rgba(201,154,50,0.2)]">
                <Image
                  src="/images/maayaa-logo.png"
                  alt="Maayaa Bazaar Hub Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-cinzel)] font-bold text-base sm:text-lg tracking-[0.14em] text-[#FFF8E8]">
                  MAAYAA BAZAAR
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#C99A32] uppercase -mt-1 font-semibold">
                  HUB
                </span>
              </div>
            </Link>

            {/* Category Subtitle */}
            <p className="text-xs sm:text-sm text-[#C99A32] font-mono tracking-wider font-semibold">
              Cinema &bull; Music &bull; Events &bull; Entertainment &bull; Experiences
            </p>

            {/* Brand Core Quote */}
            <blockquote className="text-sm text-[#FFF8E8] font-medium italic border-l-2 border-[#C99A32] pl-3 py-0.5">
              &ldquo;Where Cinema Meets Creativity &amp; Events Become Experiences&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed max-w-sm pt-1">
              A creative media and entertainment company focused on Film Production, Event Management, Music &amp; Entertainment, Digital Media, Brand Promotions, and International Projects.
            </p>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C9C4B8] block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Maayaa Bazaar Hub on Instagram"
                  className="w-9 h-9 rounded-lg bg-[#06152F] border border-[#C99A32]/25 hover:border-[#F2D477] hover:bg-[#0B2145] flex items-center justify-center text-[#C9C4B8] hover:text-[#F2D477] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A32]"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Maayaa Bazaar Hub on Facebook"
                  className="w-9 h-9 rounded-lg bg-[#06152F] border border-[#C99A32]/25 hover:border-[#F2D477] hover:bg-[#0B2145] flex items-center justify-center text-[#C9C4B8] hover:text-[#F2D477] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A32]"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Maayaa Bazaar Hub on YouTube"
                  className="w-9 h-9 rounded-lg bg-[#06152F] border border-[#C99A32]/25 hover:border-[#F2D477] hover:bg-[#0B2145] flex items-center justify-center text-[#C9C4B8] hover:text-[#F2D477] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A32]"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Maayaa Bazaar Hub on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#06152F] border border-[#C99A32]/25 hover:border-[#F2D477] hover:bg-[#0B2145] flex items-center justify-center text-[#C9C4B8] hover:text-[#F2D477] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A32]"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column (Col 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C99A32] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Events", href: "/events" },
                { label: "Projects", href: "/projects" },
                { label: "Gallery", href: "/gallery" },
                { label: "Media & Press", href: "/media" },
                { label: "Partners", href: "/partners" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#C9C4B8] hover:text-[#FFF8E8] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Verticals Column (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C99A32] font-semibold block">
              Verticals
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Cinema Production", href: "/services/cinema-production" },
                { label: "Music & Entertainment", href: "/services/music-entertainment-events" },
                { label: "Film Entertainment", href: "/services/film-entertainment-events" },
                { label: "Arena Spectacles", href: "/services/mass-public-events-arena-spectacles" },
                { label: "Corporate Conclaves", href: "/services/corporate-events-brand-activations" },
                { label: "Celebrity Management", href: "/services/artist-celebrity-management" },
                { label: "Creative Media", href: "/services/creative-media-digital-productions" },
                { label: "International Projects", href: "/services/international-projects-cross-border-initiatives" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[#C9C4B8] hover:text-[#FFF8E8] transition-colors inline-block py-0.5"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Inquiry Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C99A32] font-semibold block">
              Direct Contact
            </span>
            <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
              For project consultations, film slate inquiries, and arena production riders:
            </p>

            <div className="p-4 rounded-xl bg-[#06152F]/90 border border-[#C99A32]/25 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#FFF8E8]">
                <Mail className="w-4 h-4 text-[#C99A32] shrink-0" />
                <a
                  href="mailto:contact@maayabaazarhub.com"
                  className="hover:text-[#F2D477] transition-colors truncate font-mono"
                >
                  contact@maayabaazarhub.com
                </a>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="w-full text-center"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Let&apos;s Create
              </Button>
            </div>
          </div>
        </div>

        {/* 2. Bottom Copyright & Legal Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#C9C4B8]">
          <p>
            &copy; {new Date().getFullYear()} Maayaa Bazaar Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#FFF8E8] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#C99A32]/40">&bull;</span>
            <Link href="/contact" className="hover:text-[#FFF8E8] transition-colors">
              Terms of Engagement
            </Link>
            <span className="text-[#C99A32]/40">&bull;</span>
            <Link href="/contact" className="hover:text-[#FFF8E8] transition-colors">
              Production Office
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
