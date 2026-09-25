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
    <footer className="bg-[#08050D] border-t border-[#FAF8F2]/[0.08] relative overflow-hidden">
      {/* Subtle Purple Atmosphere in Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(75,10,120,0.18),transparent_70%)] pointer-events-none" />

      {/* 1. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#FAF8F2]/[0.08]">
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/images/maayaa-logo.png"
                  alt="Maayaa Bazaar Hub Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-heading)] font-black text-base sm:text-lg tracking-[0.12em] text-[#FAF8F2]">
                  MAAYAA BAZAAR
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4A72C] uppercase -mt-1 font-semibold">
                  HUB
                </span>
              </div>
            </Link>

            {/* Category Subtitle */}
            <p className="text-xs sm:text-sm text-[#D4A72C] font-mono tracking-wider font-semibold">
              Cinema &bull; Music &bull; Events &bull; Entertainment &bull; Experiences
            </p>

            {/* Brand Core Quote */}
            <blockquote className="text-sm text-[#FAF8F2] font-medium italic border-l-2 border-[#D4A72C] pl-3 py-0.5">
              &ldquo;Creating Stories. Producing Experiences. Connecting Audiences.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed max-w-sm pt-1">
              A creative media and entertainment company bringing together cinema production, live concerts, corporate activations, and international projects.
            </p>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B9B0BE] block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Maayaa Bazaar Hub on Instagram"
                  className="w-9 h-9 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 hover:border-[#D4A72C]/50 flex items-center justify-center text-[#B9B0BE] hover:text-[#D4A72C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Maayaa Bazaar Hub on Facebook"
                  className="w-9 h-9 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 hover:border-[#D4A72C]/50 flex items-center justify-center text-[#B9B0BE] hover:text-[#D4A72C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Maayaa Bazaar Hub on YouTube"
                  className="w-9 h-9 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 hover:border-[#D4A72C]/50 flex items-center justify-center text-[#B9B0BE] hover:text-[#D4A72C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Maayaa Bazaar Hub on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 hover:border-[#D4A72C]/50 flex items-center justify-center text-[#B9B0BE] hover:text-[#D4A72C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Links Column: Navigation (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4A72C] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#B9B0BE]">
              <li>
                <Link href="/about" className="hover:text-[#FAF8F2] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FAF8F2] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#FAF8F2] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#FAF8F2] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FAF8F2] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#FAF8F2] transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FAF8F2] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action Column (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4A72C] block">
              Start a Conversation
            </span>
            <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
              Planning a cinema feature, high-impact music festival, or international brand spectacle? Let&apos;s collaborate.
            </p>
            <div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full text-center"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Let&apos;s Create
              </Button>
            </div>
            <div className="pt-2 text-xs text-[#B9B0BE] space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A72C]" />
                <a href="mailto:filmmakerram@gmail.com" className="hover:text-[#FAF8F2] transition-colors">
                  filmmakerram@gmail.com
                </a>
              </div>
              <div className="text-[11px] text-[#FAF8F2]/60">
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>
        </div>

        {/* 2. Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#807687]">
          <div>
            &copy; {new Date().getFullYear()} Maayaa Bazaar Hub. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#B9B0BE]">
            <span>Where Cinema Meets Creativity</span>
            <span className="w-1 h-1 rounded-full bg-[#D4A72C]" />
            <span>Events Become Experiences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
