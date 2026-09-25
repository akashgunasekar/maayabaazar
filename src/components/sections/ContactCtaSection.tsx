import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Sparkles, MessageSquare } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldDivider } from "@/components/ui/Divider";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";

export const ContactCtaSection: React.FC = () => {
  return (
    <Section background="midnight" spacing="xl" borderTop className="relative overflow-hidden" id="contact-cta">
      {/* Cinematic Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(75,10,120,0.45)_0%,rgba(212,167,44,0.08)_50%,transparent_80%)] blur-2xl" />
      </div>

      <FadeIn direction="up">
        <div className="relative z-10 max-w-5xl mx-auto rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-[#16091F]/90 via-[#08050D] to-[#16091F]/80 border border-[#D4A72C]/40 shadow-[0_24px_64px_rgba(8,5,13,0.95)]">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08050D] border border-[#D4A72C]/30 shadow-[0_0_16px_rgba(212,167,44,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A72C]" />
              <Eyebrow variant="gold" className="text-[10px] sm:text-xs tracking-[0.2em]">
                START A CONVERSATION
              </Eyebrow>
            </div>

            {/* Heading */}
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-6xl font-black text-[#FAF8F2] tracking-tight leading-[1.1]">
              Let&apos;s Create Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F2] via-[#F4D76A] to-[#D4A72C]">
                Extraordinary.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#B9B0BE] leading-relaxed max-w-2xl mx-auto">
              Whether you are planning a theatrical feature film, stadium concert tour, high-stakes corporate conclave, or cross-border entertainment activation, our creative and production teams are ready to bring your vision to reality.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Let&apos;s Create
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
              >
                Explore All Services
              </Button>
            </div>
          </div>

          {/* Animated Gold Divider Line */}
          <div className="mt-12">
            <GoldDivider />
          </div>

          {/* Quick Contact Liaison Cards */}
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="p-4 rounded-xl bg-[#08050D]/60 border border-[#FAF8F2]/[0.05] hover:border-[#D4A72C]/30 flex items-center gap-4 transition-all duration-300 hover-lift glow-purple-hover">
              <div className="w-10 h-10 rounded-lg bg-[#16091F] border border-[#D4A72C]/30 flex items-center justify-center text-[#D4A72C] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B9B0BE]">
                  General &amp; Press
                </span>
                <p className="text-xs font-semibold text-[#FAF8F2]">
                  filmmakerram@gmail.com
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#08050D]/60 border border-[#FAF8F2]/[0.05] hover:border-[#D4A72C]/30 flex items-center gap-4 transition-all duration-300 hover-lift glow-purple-hover">
              <div className="w-10 h-10 rounded-lg bg-[#16091F] border border-[#D4A72C]/30 flex items-center justify-center text-[#D4A72C] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B9B0BE]">
                  Production Desk
                </span>
                <p className="text-xs font-semibold text-[#FAF8F2]">
                  Executive Line
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#08050D]/60 border border-[#FAF8F2]/[0.05] hover:border-[#D4A72C]/30 flex items-center gap-4 transition-all duration-300 hover-lift glow-purple-hover">
              <div className="w-10 h-10 rounded-lg bg-[#16091F] border border-[#D4A72C]/30 flex items-center justify-center text-[#D4A72C] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B9B0BE]">
                  Creative Studios
                </span>
                <p className="text-xs font-semibold text-[#FAF8F2]">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};
