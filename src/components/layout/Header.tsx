"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        suppressHydrationWarning
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#08050D]/95 border-b border-[#D4A72C]/20 py-3 shadow-[0_4px_24px_rgba(8,5,13,0.8)]"
            : "bg-transparent py-4 sm:py-5 border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo using supplied Maayaa Bazaar Hub logo asset */}
          <Link
            href="/"
            className="flex items-center gap-3 group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] rounded-lg"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/maayaa-logo.png"
                alt="Maayaa Bazaar Hub Logo"
                fill
                sizes="40px"
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-[var(--font-heading)] font-black text-sm sm:text-base tracking-[0.12em] text-[#FAF8F2] group-hover:text-white transition-colors">
                MAAYAA BAZAAR
              </span>
              <span className="text-[9px] font-mono tracking-[0.22em] text-[#D4A72C] uppercase -mt-1 font-semibold">
                HUB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Minimal, premium navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#16091F]/70 border border-[#FAF8F2]/[0.08]"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 rounded-full select-none",
                    isActive
                      ? "text-[#FAF8F2] font-semibold bg-[#4B0A78]/30 shadow-[0_0_12px_rgba(75,10,120,0.35)]"
                      : "text-[#B9B0BE] hover:text-[#FAF8F2] hover:bg-[#FAF8F2]/[0.04]"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4A72C]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA: "Let's Create" */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Let&apos;s Create
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/contact"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#D4A72C] text-[#08050D] shadow-sm active:scale-95 transition-transform"
            >
              Let&apos;s Create
            </Link>

            <button
              suppressHydrationWarning
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 flex items-center justify-center text-[#FAF8F2] focus:outline-none focus:ring-2 focus:ring-[#D4A72C]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4A72C]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Elegant Full-Screen Mobile Drawer */}
      <div
        id="mobile-navigation-menu"
        role="dialog"
        aria-modal={mobileMenuOpen ? "true" : undefined}
        aria-hidden={!mobileMenuOpen}
        aria-label="Mobile Navigation Menu"
        suppressHydrationWarning
        className={cn(
          "fixed inset-0 z-40 bg-[#08050D]/98 transition-all duration-300 md:hidden flex flex-col justify-between pt-24 pb-8 px-6",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#FAF8F2]/10">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4A72C]">
              Navigation
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B9B0BE]">
              Maayaa Bazaar Hub
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link, idx) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${idx * 45}ms` : "0ms",
                    transform: mobileMenuOpen ? "translate3d(0, 0, 0)" : "translate3d(0, 10px, 0)",
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                  className={cn(
                    "flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-bold tracking-tight transition-all duration-300",
                    isActive
                      ? "bg-[#16091F] text-[#D4A72C] border border-[#D4A72C]/30 shadow-[0_0_15px_rgba(75,10,120,0.25)]"
                      : "text-[#FAF8F2] hover:bg-[#16091F]/50"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isActive ? "text-[#D4A72C] translate-x-1" : "text-[#B9B0BE]"
                    )}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer with Brand Tagline & CTA */}
        <div className="pt-6 border-t border-[#FAF8F2]/10 space-y-4">
          <p className="text-xs text-[#B9B0BE] leading-relaxed">
            &ldquo;Where Cinema Meets Creativity &amp; Events Become Experiences&rdquo;
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full text-center"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s Create
          </Button>
        </div>
      </div>
    </>
  );
};
