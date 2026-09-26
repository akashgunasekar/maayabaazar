import React from "react";
import Link from "next/link";
import { Handshake, ShieldCheck, Film, Tv, Radio, MapPin, Globe, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { partnerCategoriesList, partnersData } from "@/data/partners";

export const PartnersSection: React.FC = () => {
  const hasPartners = partnersData.length > 0;

  return (
    <Section background="deepPurple" spacing="lg" borderTop borderBottom id="partners">
      <FadeIn direction="up">
        <SectionHeading
          eyebrow="Industry Alliances & Ecosystem"
          title="Strategic Partnerships"
          description="Collaborating with accredited cinema technicians, global audio innovators, broadcasting networks, and premier venues."
          size="xl"
          align="center"
          className="mb-14"
        />

        {/* If no partner logos exist, show professional alliance categories state */}
        {!hasPartners && (
          <div className="space-y-10">
            {/* 5 Alliance Framework Verticals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerCategoriesList.map((cat, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 60} duration={550}>
                  <div
                    className="p-6 sm:p-7 rounded-2xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 transition-all duration-300 flex flex-col justify-between group hover-lift glow-gold-hover h-full"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32] group-hover:scale-110 transition-transform duration-300">
                        {cat.category === "Production" && <Film className="w-5 h-5" />}
                        {cat.category === "Technology" && <Radio className="w-5 h-5" />}
                        {cat.category === "Media" && <Tv className="w-5 h-5" />}
                        {cat.category === "Venue" && <MapPin className="w-5 h-5" />}
                        {cat.category === "International" && <Globe className="w-5 h-5" />}
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C99A32] block">
                        {cat.category} Alliances
                      </span>

                      <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                        {cat.title}
                      </h4>

                      <p className="text-xs text-[#C9C4B8] leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#FFF8E8]/[0.05] flex items-center gap-2 text-[11px] font-mono text-[#FFF8E8]/60">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C99A32]" />
                      <span>Accredited Operational Standard</span>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* Partnership Invitation Card */}
              <FadeIn direction="up" delay={partnerCategoriesList.length * 60} duration={550}>
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#06152F] to-[#020817] border border-[#C99A32]/40 flex flex-col justify-between hover-lift glow-gold-hover h-full">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#020817] border border-[#C99A32]/40 flex items-center justify-center text-[#C99A32]">
                      <Handshake className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F2D477] block">
                      Join The Ecosystem
                    </span>

                    <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8]">
                      Become an Alliance Partner
                    </h4>

                    <p className="text-xs text-[#C9C4B8] leading-relaxed">
                      We collaborate with certified camera houses, staging vendors, lighting contractors, and distribution networks.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#FFF8E8]/[0.05]">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A32] hover:text-[#F2D477] transition-colors group"
                    >
                      <span>Register Partnership Interest</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Official Announcement Note */}
            <div className="p-4 rounded-xl bg-[#020817]/40 border border-[#FFF8E8]/[0.05] text-center max-w-2xl mx-auto">
              <p className="text-[11px] font-mono text-[#FFF8E8]/50">
                Official partner logos and joint venture co-credits are published alongside formalized film slates and licensed event schedules.
              </p>
            </div>
          </div>
        )}
      </FadeIn>
    </Section>
  );
};
