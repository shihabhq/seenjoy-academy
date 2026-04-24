"use client";

import { Timer, Clock, Flame, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCampaign } from "@/hooks/useCampaign";
import { CAMPAIGN_PRICE, REGULAR_PRICE } from "@/lib/campaign";
import { COURSE_INFO } from "@/lib/constants";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// Small block used in banner
function BannerUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black/30 backdrop-blur-sm rounded-md px-2 py-1 min-w-[36px] text-center">
        <span className="font-mono font-black text-white text-base leading-none">{value}</span>
      </div>
      <span className="text-orange-200 text-[9px] leading-none mt-0.5 uppercase tracking-wide">{label}</span>
    </div>
  );
}

// Large block used in hero/cta
function BigBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="bg-bg-primary border-2 border-accent-gold/60 rounded-xl w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] flex items-center justify-center"
        style={{ animation: "digit-pop 1s ease-in-out infinite" }}
      >
        <span className="font-mono font-black text-white text-2xl sm:text-[26px] leading-none">{value}</span>
      </div>
      <span className="text-text-secondary text-[10px] leading-none uppercase tracking-wider">{label}</span>
    </div>
  );
}

function BigColon() {
  return (
    <span className="text-accent-gold font-black text-2xl self-center mb-5 leading-none">:</span>
  );
}

interface Props {
  variant: "banner" | "hero" | "cta" | "floating" | "checkout";
  className?: string;
}

export default function CampaignTimer({ variant, className }: Props) {
  const { timeLeft, isActive, mounted } = useCampaign();

  if (mounted && !isActive) return null;

  const d = timeLeft;
  const hh = d ? pad(d.hours) : "--";
  const mm = d ? pad(d.minutes) : "--";
  const ss = d ? pad(d.seconds) : "--";
  const compact = d
    ? d.days > 0
      ? `${d.days}d ${pad(d.hours)}:${pad(d.minutes)}:${pad(d.seconds)}`
      : `${pad(d.hours)}:${pad(d.minutes)}:${pad(d.seconds)}`
    : "--:--:--";

  // ── Banner — bold orange alert strip ─────────────────────────────────
  if (variant === "banner") {
    return (
      <div
        className={cn(
          "w-full relative overflow-hidden",
          className
        )}
        style={{
          background: "linear-gradient(135deg, #c2410c 0%, #ea580c 30%, #f97316 50%, #ea580c 70%, #c2410c 100%)",
          animation: "banner-alert-pulse 2.5s ease-in-out infinite",
        }}
      >
        {/* Shimmer sweep */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
            animation: "shimmer-sweep 3s ease-in-out infinite",
          }}
        />

        <div className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3">
          {/* Label */}
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-yellow-300 shrink-0" />
            <span className="text-white font-black text-sm uppercase tracking-widest whitespace-nowrap">
              Grand Opening Discount
            </span>
          </div>

          <span className="hidden sm:block text-orange-300/60 text-lg font-thin">|</span>

          {/* Countdown boxes */}
          <div className="flex items-end gap-1.5">
            <span className="text-orange-200 text-xs font-medium whitespace-nowrap self-center mb-4">
              শেষ হচ্ছে:
            </span>
            {d && d.days > 0 && (
              <>
                <BannerUnit value={String(d.days)} label="দিন" />
                <span className="text-orange-300 font-black text-base self-center mb-4">:</span>
              </>
            )}
            <BannerUnit value={hh} label="ঘণ্টা" />
            <span className="text-orange-300 font-black text-base self-center mb-4">:</span>
            <BannerUnit value={mm} label="মিনিট" />
            <span className="text-orange-300 font-black text-base self-center mb-4">:</span>
            <BannerUnit value={ss} label="সেকেন্ড" />
          </div>

          <span className="hidden sm:block text-orange-300/60 text-lg font-thin">|</span>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-orange-200/70 text-sm line-through">
              ৳{COURSE_INFO.originalPrice}
            </span>
            <span className="bg-white text-orange-600 font-black text-sm px-3 py-0.5 rounded-full whitespace-nowrap shadow-lg">
              ৳{CAMPAIGN_PRICE}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ── Floating (compact timer for mobile floating bar center slot) ──────
  if (variant === "floating") {
    return (
      <div className={cn("flex flex-col items-start", className)}>
        <div className="flex items-center gap-0.5 mb-0.5">
          <Clock className="w-3 h-3 text-accent-gold shrink-0 mr-1" />
          {d && d.days > 0 && (
            <>
              <span className="font-mono font-black text-white text-base leading-none bg-bg-primary/60 rounded px-1 py-0.5">
                {String(d.days)}d
              </span>
              <span className="text-accent-gold font-black text-base mx-0.5">:</span>
            </>
          )}
          <span className="font-mono font-black text-white text-base leading-none bg-bg-primary/60 rounded px-1 py-0.5">{hh}</span>
          <span className="text-accent-gold font-black text-base mx-0.5">:</span>
          <span className="font-mono font-black text-white text-base leading-none bg-bg-primary/60 rounded px-1 py-0.5">{mm}</span>
          <span className="text-accent-gold font-black text-base mx-0.5">:</span>
          <span
            className="font-mono font-black text-white text-base leading-none bg-bg-primary/60 rounded px-1 py-0.5"
            style={{ animation: "digit-pop 1s ease-in-out infinite" }}
          >
            {ss}
          </span>
        </div>
        <span className="text-accent-gold text-[9px] font-bold uppercase tracking-widest">
          অফার শেষ হচ্ছে!
        </span>
      </div>
    );
  }

  // ── Hero / CTA — large glowing block with digit boxes ────────────────
  if (variant === "hero" || variant === "cta") {
    const discountPct = Math.round(
      ((COURSE_INFO.originalPrice - CAMPAIGN_PRICE) / COURSE_INFO.originalPrice) * 100
    );

    return (
      <div
        className={cn("rounded-2xl overflow-hidden border-2 border-accent-gold/70", className)}
        style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
      >
        {/* Header strip */}
        <div className="bg-accent-gold px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-bg-primary shrink-0" />
            <span className="text-bg-primary font-black text-sm uppercase tracking-wide">
              সীমিত সময়ের অফার!
            </span>
          </div>
          <span className="bg-bg-primary text-accent-gold font-black text-xs px-2.5 py-1 rounded-full whitespace-nowrap">
            {discountPct}% ছাড়
          </span>
        </div>

        {/* Body */}
        <div
          className={cn(
            "px-4 py-4",
            variant === "hero" ? "bg-bg-secondary" : "bg-black/30"
          )}
        >
          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
            <span className="text-text-secondary line-through text-sm">
              ৳{COURSE_INFO.originalPrice}
            </span>
            <span className="text-white font-black text-3xl leading-none">
              ৳{CAMPAIGN_PRICE}
            </span>
          </div>

          {/* Timer label */}
          <div className="flex items-center gap-2 mb-3">
            <Timer className="w-4 h-4 text-accent-gold shrink-0" />
            <span className="text-accent-gold text-sm font-bold uppercase tracking-wider">
              অফার শেষ হচ্ছে:
            </span>
          </div>

          {/* Digit blocks */}
          <div className="flex items-start gap-2 flex-wrap justify-center">
            {d && d.days > 0 && (
              <>
                <BigBlock value={String(d.days)} label="দিন" />
                <BigColon />
              </>
            )}
            <BigBlock value={hh} label="ঘণ্টা" />
            <BigColon />
            <BigBlock value={mm} label="মিনিট" />
            <BigColon />
            <BigBlock value={ss} label="সেকেন্ড" />
          </div>
        </div>
      </div>
    );
  }

  // ── Checkout — urgent alert bar ───────────────────────────────────────
  if (variant === "checkout") {
    return (
      <div
        className={cn(
          "w-full rounded-xl overflow-hidden border-2 border-orange-500/60",
          className
        )}
        style={{
          background: "linear-gradient(135deg, rgba(194,65,12,0.15) 0%, rgba(249,115,22,0.1) 100%)",
        }}
      >
        {/* Top strip */}
        <div
          className="flex items-center gap-2 px-3 py-1.5"
          style={{ background: "linear-gradient(90deg, #c2410c, #ea580c)" }}
        >
          <Zap className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
          <span className="text-white font-black text-xs uppercase tracking-widest">
            Grand Opening Discount — সীমিত সময়!
          </span>
        </div>

        {/* Timer row */}
        <div className="flex items-center justify-between px-3 py-3 flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="text-text-secondary text-xs">অফার শেষ হচ্ছে:</span>
          </div>
          <div className="flex items-center gap-1">
            {d && d.days > 0 && (
              <>
                <span className="font-mono font-black text-white bg-bg-primary rounded px-2 py-1 text-sm">{String(d.days)}d</span>
                <span className="text-orange-400 font-black mx-0.5">:</span>
              </>
            )}
            <span className="font-mono font-black text-white bg-bg-primary rounded px-2 py-1 text-sm">{hh}</span>
            <span className="text-orange-400 font-black mx-0.5">:</span>
            <span className="font-mono font-black text-white bg-bg-primary rounded px-2 py-1 text-sm">{mm}</span>
            <span className="text-orange-400 font-black mx-0.5">:</span>
            <span
              className="font-mono font-black text-orange-300 bg-bg-primary rounded px-2 py-1 text-sm"
              style={{ animation: "digit-pop 1s ease-in-out infinite" }}
            >
              {ss}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
