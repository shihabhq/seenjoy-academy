"use client";

import Link from "next/link";
import CampaignTimer from "@/components/ui/CampaignTimer";
import { COURSE_INFO } from "@/lib/constants";
import { useCampaign } from "@/hooks/useCampaign";

export default function MobileFloatingBar() {
  const { price, isActive } = useCampaign();
  const discountLabel = isActive ? "Grand Opening" : "Early Bird";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-t border-border-default px-4 py-3 flex items-center justify-between gap-3 safe-area-inset-bottom">
      {/* Price info */}
      <div className="flex flex-col min-w-0">
        <span className="text-text-secondary text-xs line-through leading-none">
          ৳{COURSE_INFO.originalPrice}
        </span>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-white font-bold text-2xl leading-none">
            ৳{price}
          </span>
        </div>
        <span className="text-accent-gold text-[10px] font-medium leading-none mt-0.5">
          {discountLabel} Discount
        </span>
        <CampaignTimer variant="floating" className="mt-1" />
      </div>

      {/* CTA */}
      <Link
        href="/checkout"
        className="shrink-0 bg-accent-gold text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-accent-gold-hover transition-colors active:scale-95"
      >
        JOIN NOW
      </Link>
    </div>
  );
}
