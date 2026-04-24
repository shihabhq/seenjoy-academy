"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { COURSE_INFO } from "@/lib/constants";
import { useCampaign } from "@/hooks/useCampaign";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function MobileFloatingBar() {
  const { price, isActive, timeLeft, mounted } = useCampaign();
  const discountLabel = isActive ? "Grand Opening" : "Early Bird";

  const d = timeLeft;
  const compact = d
    ? d.days > 0
      ? `${d.days}d ${pad(d.hours)}:${pad(d.minutes)}:${pad(d.seconds)}`
      : `${pad(d.hours)}:${pad(d.minutes)}:${pad(d.seconds)}`
    : "--:--:--";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-t border-border-default safe-area-inset-bottom">
      {/* Timer urgency strip */}
      {(!mounted || isActive) && (
        <div
          className="flex items-center justify-center gap-2 px-4 py-2 border-b border-accent-gold/20"
          style={{ background: "rgba(32,178,170,0.08)" }}
        >
          <Clock className="w-3.5 h-3.5 text-accent-gold shrink-0" />
          <span className="text-text-secondary text-xs font-medium">
            অফার শেষ হচ্ছে:
          </span>
          <span className="font-mono font-black text-accent-gold text-lg tracking-widest leading-none">
            {compact}
          </span>
        </div>
      )}

      {/* Price + CTA row */}
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex flex-col min-w-0">
          <span className="text-text-secondary text-xs line-through leading-none">
            ৳{COURSE_INFO.originalPrice}
          </span>
          <span className="text-white font-bold text-2xl leading-none mt-0.5">
            ৳{price}
          </span>
          <span className="text-accent-gold text-[10px] font-medium leading-none mt-0.5">
            {discountLabel} Discount
          </span>
        </div>

        <Link
          href="/checkout"
          className="shrink-0 bg-accent-gold text-bg-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-accent-gold-hover transition-colors active:scale-95"
        >
          JOIN NOW
        </Link>
      </div>
    </div>
  );
}
