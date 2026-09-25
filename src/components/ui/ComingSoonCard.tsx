import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComingSoonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  category: string;
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
}

export const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  category,
  title = "Portfolio Showcase Forthcoming",
  description = "Official project briefings, production credits, and media documentation are being curated for this showcase.",
  actionText = "Inquire About This Service",
  actionHref = "/contact",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl p-8 sm:p-10 bg-[#16091F]/80 border border-dashed border-[#D4A72C]/30 relative overflow-hidden flex flex-col justify-between group",
        className
      )}
      {...props}
    >
      {/* Subtle radial ambient highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(75,10,120,0.2),transparent_70%)] pointer-events-none" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4A72C] px-2.5 py-1 rounded bg-[#08050D] border border-[#D4A72C]/30">
            {category}
          </span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F2]/5 border border-[#FAF8F2]/10 text-[10px] text-[#B9B0BE]">
            <Clock className="w-3 h-3 text-[#D4A72C]" />
            <span>Coming Soon</span>
          </div>
        </div>

        <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#FAF8F2] tracking-tight mb-3">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-[#FAF8F2]/[0.08] flex items-center justify-between">
        <span className="text-[11px] text-[#807687]">
          Maayaa Bazaar Hub
        </span>

        <Link
          href={actionHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A72C] hover:text-[#F4D76A] transition-colors group-hover:translate-x-0.5"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
