"use client";

import Link from "next/link";
import { COURSE_INFO } from "@/lib/constants";

export default function MobileFloatingBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-t border-border-default px-4 py-3 flex items-center justify-between gap-3 safe-area-inset-bottom">
      {/* Price info */}
      <div className="flex flex-col">
        <span className="text-text-secondary text-center text-xs line-through leading-none">
          ৳{COURSE_INFO.originalPrice}
        </span>
        <div className="flex flex-col items-center sm:items-baseline mt-0.5">
          <span className="text-white font-bold text-2xl leading-none">
            ৳{COURSE_INFO.price}
          </span>
          <span className="text-accent-gold text-xs font-medium">
            Early Bird Discount
          </span>
        </div>
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
