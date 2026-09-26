import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, Music, Sparkles, Globe, ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const AboutSection: React.FC = () => {
  return (
    <Section background="deepPurple" spacing="lg" borderTop borderBottom>
      <FadeIn direction="up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Brand Statement */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="About Maayaa Bazaar Hub"
              title="Creating Entertainment. Building Experiences."
              size="lg"
            />

            <blockquote className="p-4 sm:p-5 rounded-2xl bg-[#020817]/60 border-l-2 border-[#C99A32] text-[#FFF8E8] font-[var(--font-heading)] text-lg sm:text-xl font-bold tracking-tight">
              &ldquo;We Don&apos;t Just Create Events. We Create Experiences.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#C9C4B8] leading-relaxed">
              Maayaa Bazaar Hub is a creative media and entertainment company bringing together creativity, technology, talent and professional execution to create films, events and entertainment experiences that connect with audiences.
            </p>

            <p className="text-sm sm:text-base text-[#C9C4B8] leading-relaxed">
              From theatrical cinema production and high-octane stadium concerts to prestigious corporate conclaves and cross-border collaborations, we approach every endeavor with artistic discipline, technical rigor, and audience-first vision.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Button href="/about" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Discover Our Full Story
              </Button>
              <Button href="/services" variant="outline" size="md">
                Our Services
              </Button>
            </div>

            {/* Founder Leadership Signature Spotlight */}
            <div className="pt-5 border-t border-[#FFF8E8]/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C99A32] shadow-[0_0_15px_rgba(201,154,50,0.35)] shrink-0 bg-[#06152F]">
                  <Image
                    src="/images/founder.jpg"
                    alt="M. J. Ramanan — Founder & Managing Director"
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-[#FFF8E8]">M. J. Ramanan</p>
                    <span className="inline-flex items-center text-[10px] text-[#C99A32] font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 inline mr-0.5" /> Verified
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#C99A32] uppercase tracking-wider font-semibold">
                    Founder &amp; Managing Director
                  </p>
                </div>
              </div>
              <Link
                href="/about#leadership"
                className="text-xs font-mono text-[#C99A32] hover:text-[#FFF8E8] transition-colors inline-flex items-center gap-1"
              >
                Meet Leadership &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Key Creative Capabilities Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32] mb-4">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8] mb-1.5">
                Cinema Production
              </h3>
              <p className="text-xs text-[#C9C4B8] leading-relaxed">
                Feature films, OTT originals, and commercial narratives driven by disciplined production.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32] mb-4">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8] mb-1.5">
                Music &amp; Spectacles
              </h3>
              <p className="text-xs text-[#C9C4B8] leading-relaxed">
                Monumental live concerts, symphonies, and mega festivals with precision spatial acoustics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8] mb-1.5">
                Film Launches &amp; Galas
              </h3>
              <p className="text-xs text-[#C9C4B8] leading-relaxed">
                Audio launches, pre-release celebrations, and red carpet award ceremonies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32] mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8] mb-1.5">
                Global Projects
              </h3>
              <p className="text-xs text-[#C9C4B8] leading-relaxed">
                Cross-border filming coordination, international concert tours, and cultural summits.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};
