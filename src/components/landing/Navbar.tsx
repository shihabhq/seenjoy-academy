"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { NAV } from "@/lib/constants";
import CampaignTimer from "@/components/ui/CampaignTimer";
import { useCampaign } from "@/hooks/useCampaign";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isActive } = useCampaign();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Campaign alert banner — always visible when campaign is active */}
      {isActive && <CampaignTimer variant="banner" />}

      {/* Main nav bar */}
      <div
        className={cn(
          "transition-all duration-300 border-b",
          scrolled
            ? "bg-bg-primary/95 backdrop-blur-md border-border-default shadow-lg"
            : "bg-bg-primary/80 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/assets/main-logo.png"
              alt={NAV.logo}
              width={180}
              height={52}
              className="h-13 w-auto object-contain"
              priority
            />
          </Link>
          <Link href="/checkout">
            <Button size="sm">{NAV.ctaText}</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
