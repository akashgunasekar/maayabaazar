import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
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
        "rounded-xl p-8 sm:p-10 bg-[#06152F]/80 backdrop-blur-md border border-dashed border-[#C99A32]/35 relative overflow-hidden flex flex-col justify-between group hover:border-[#C99A32]/60 transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Subtle royal blue ambient highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(11,33,69,0.35),transparent_70%)] pointer-events-none" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C99A32] px-2.5 py-1 rounded bg-[#020817] border border-[#C99A32]/30">
            {category}
          </span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#020817]/60 border border-[#C99A32]/20 text-[10px] text-[#C9C4B8]">
            <Clock className="w-3 h-3 text-[#C99A32]" />
            <span>Coming Soon</span>
          </div>
        </div>

        <h3 className="font-[var(--font-cinzel)] font-bold text-xl text-[#FFF8E8] tracking-tight mb-3">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-[#C99A32]/15 flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#C9C4B8]/60">
          Maayaa Bazaar Hub
        </span>

        <Link
          href={actionHref}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#C99A32] group-hover:text-[#F2D477] transition-colors"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
