"use client";

import { Tag, Timer, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCampaign } from "@/hooks/useCampaign";
import { CAMPAIGN_PRICE, REGULAR_PRICE } from "@/lib/campaign";
import { COURSE_INFO } from "@/lib/constants";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Block({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[34px]">
      <span className="font-mono font-bold text-white text-xl leading-none">
        {value}
      </span>
      <span className="text-text-secondary text-[9px] leading-none mt-0.5">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return <span className="text-accent-gold font-bold text-xl self-start mt-0.5">:</span>;
}

interface Props {
  variant: "banner" | "hero" | "cta" | "floating" | "checkout";
  className?: string;
}

export default function CampaignTimer({ variant, className }: Props) {
  const { timeLeft, isActive, mounted } = useCampaign();

  // Once mounted and expired — hide completely
  if (mounted && !isActive) return null;

  const d = timeLeft;
  const hh = d ? pad(d.hours) : "--";
  const mm = d ? pad(d.minutes) : "--";
  const ss = d ? pad(d.seconds) : "--";
  const compact = d
    ? (d.days > 0
        ? `${d.days}দিন ${pad(d.hours)}:${pad(d.minutes)}:${pad(d.seconds)}`
        : `${pad(d.hours)}:${pad(d.minutes)}:${pad(d.seconds)}`)
    : "--:--:--";

  // ── Banner (static strip at top of page, scrolls away) ───────────────
  if (variant === "banner") {
    return (
      <div
        className={cn(
          "w-full bg-[#0c2e2b] border-b border-[#1a5c57] text-center px-4 py-1",
          className
        )}
      >
        <p className="text-sm text-text-primary/90 flex items-center justify-center gap-2 flex-wrap leading-none">
          <Tag className="w-3.5 h-3.5 text-accent-gold shrink-0" />
          <span className="text-accent-gold font-semibold">Grand Opening Discount</span>
          <span className="text-text-secondary hidden sm:inline">—</span>
          <span className="text-text-secondary text-xs">অফার শেষ হচ্ছে:</span>
          <span className="font-mono font-bold text-white tracking-widest">{compact}</span>
          <span className="bg-accent-gold text-white text-xs px-2 py-0.5 rounded-full font-bold">
            ৳{CAMPAIGN_PRICE}
          </span>
        </p>
      </div>
    );
  }

  // ── Floating bar (mobile bottom bar compact) ─────────────────────────
  if (variant === "floating") {
    return (
      <div className={cn("flex items-center gap-1 mt-1", className)}>
        <Clock className="w-3 h-3 text-accent-gold shrink-0" />
        <span className="font-mono font-bold text-accent-gold text-xs tracking-wider leading-none">
          {compact}
        </span>
      </div>
    );
  }

  // ── Hero / CTA (block with individual digit boxes) ───────────────────
  if (variant === "hero" || variant === "cta") {
    const discountPct = Math.round(((COURSE_INFO.originalPrice - CAMPAIGN_PRICE) / COURSE_INFO.originalPrice) * 100);

    return (
      <div
        className={cn(
          "rounded-xl border px-4 py-4",
          variant === "hero"
            ? "bg-[#0a2e2c] border-[#1a5c57]"
            : "bg-black/20 border-accent-gold/25",
          className
        )}
      >
        {/* Pricing row */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 flex-wrap">
          <span className="text-text-secondary line-through text-sm">৳{COURSE_INFO.originalPrice}</span>
          <span className="text-white font-bold text-2xl leading-none">৳{CAMPAIGN_PRICE}</span>
          <span className="bg-accent-gold text-text-on-accent text-xs font-bold px-2 py-0.5 rounded-full">
            {discountPct}% ছাড়
          </span>
        </div>
        {/* Timer row */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="text-accent-gold text-sm font-semibold whitespace-nowrap flex items-center gap-1.5">
            <Timer className="w-4 h-4 shrink-0" />
            অফার শেষ হচ্ছে:
          </span>
          <div className="flex items-start gap-1">
            {d && d.days > 0 && (
              <>
                <Block value={String(d.days)} label="দিন" />
                <Colon />
              </>
            )}
            <Block value={hh} label="ঘণ্টা" />
            <Colon />
            <Block value={mm} label="মিনিট" />
            <Colon />
            <Block value={ss} label="সেকেন্ড" />
          </div>
        </div>
      </div>
    );
  }

  // ── Checkout (compact badge in OrderSummary) ─────────────────────────
  if (variant === "checkout") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/30 rounded-lg px-3 py-2",
          className
        )}
      >
        <Clock className="w-3.5 h-3.5 text-accent-gold shrink-0" />
        <span className="text-text-secondary text-xs">Grand Opening Discount শেষ হচ্ছে:</span>
        <span className="font-mono font-bold text-accent-gold text-xs tracking-wider">
          {compact}
        </span>
      </div>
    );
  }

  return null;
}
